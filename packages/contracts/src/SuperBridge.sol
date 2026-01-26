// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

/// @title SuperBridge
/// @notice Tracks bridge requests for a single token and allows refunds on reverts.
contract SuperBridge {
    enum Status {
        Pending,
        Initialized,
        Concluded,
        Reverted
    }

    struct Request {
        address user;
        uint256 amount;
        uint256 destinationChain;
        Status status;
        bool claimed;
    }

    IERC20 public immutable token;
    address public operator;
    uint256 public nextRequestId;
    mapping(uint256 => Request) public requests;

    event BridgeRequested(
        uint256 indexed id,
        address indexed user,
        uint256 amount,
        uint256 destinationChain
    );
    event StatusUpdated(uint256 indexed id, Status status);
    event Refunded(uint256 indexed id, address indexed user, uint256 amount);
    event OperatorUpdated(
        address indexed oldOperator,
        address indexed newOperator
    );

    modifier onlyOperator() {
        require(msg.sender == operator, "ONLY_OPERATOR");
        _;
    }

    constructor(address tokenAddress, address operatorAddress) {
        require(tokenAddress != address(0), "TOKEN_ZERO");
        require(operatorAddress != address(0), "OPERATOR_ZERO");
        token = IERC20(tokenAddress);
        operator = operatorAddress;
    }

    function requestBridge(
        uint256 amount,
        uint256 destinationChain
    ) external returns (uint256 id) {
        require(amount > 0, "AMOUNT_ZERO");
        require(destinationChain != 0, "CHAIN_ZERO");

        id = nextRequestId++;
        requests[id] = Request({
            user: msg.sender,
            amount: amount,
            destinationChain: destinationChain,
            status: Status.Pending,
            claimed: false
        });

        bool success = token.transferFrom(msg.sender, address(this), amount);
        require(success, "TRANSFER_FAILED");

        emit BridgeRequested(id, msg.sender, amount, destinationChain);
    }

    // Backend node will update the status before start the transaction
    function conclude(uint256 id) external onlyOperator {
        Request storage request = requests[id];
        require(request.user != address(0), "REQUEST_NOT_FOUND");
        require(request.status == Status.Pending, "NOT_PENDING");

        request.status = Status.Concluded;
        IBridgeToken(address(token)).burn(request.amount);

        emit StatusUpdated(id, Status.Concluded);
    }

    function revertRequest(uint256 id) external onlyOperator {
        Request storage request = requests[id];
        require(request.user != address(0), "REQUEST_NOT_FOUND");
        require(request.status == Status.Pending, "NOT_PENDING");

        request.status = Status.Reverted;

        emit StatusUpdated(id, Status.Reverted);
    }

    function claimRefund(uint256 id) external {
        Request storage request = requests[id];
        require(request.user != address(0), "REQUEST_NOT_FOUND");
        require(request.status == Status.Reverted, "NOT_REVERTED");
        require(!request.claimed, "ALREADY_CLAIMED");
        require(request.user == msg.sender, "NOT_REQUESTER");

        request.claimed = true;

        bool success = token.transfer(msg.sender, request.amount);
        require(success, "TRANSFER_FAILED");

        emit Refunded(id, msg.sender, request.amount);
    }

    function updateOperator(address newOperator) external onlyOperator {
        require(newOperator != address(0), "OPERATOR_ZERO");
        address oldOperator = operator;
        operator = newOperator;
        emit OperatorUpdated(oldOperator, newOperator);
    }
}

interface IBridgeToken is IERC20 {
    function burn(uint256 amount) external;
}
