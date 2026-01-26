// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {EIP712} from "openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";

/// @title SuperBridge
/// @notice Tracks bridge requests for a single token and allows refunds on reverts.
contract SuperBridge is EIP712 {
    enum Status {
        Pending,
        Initialized,
        Concluded,
        Reverted
    }

    struct Request {
        address user;
        address destinationUser;
        uint256 amount;
        uint256 destinationChain;
        uint256 sourceChain;
        Status status;
        bool claimed;
    }

    IERC20 public immutable token;
    address public operator;
    mapping(uint256 => Request) public requests;
    mapping(uint256 => mapping(uint256 => bool)) public executedByChain;
    uint256 public nextId;

    bytes32 private constant FINISH_TYPEHASH =
        keccak256(
            "BridgeRequest(uint256 id,uint256 sourceChain,address user,address destinationUser,uint256 amount,uint256 destinationChain,address token,address bridge,uint256 deadline)"
        );

    event BridgeRequested(
        uint256 indexed id,
        address indexed user,
        address indexed destinationUser,
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

    constructor(address tokenAddress, address operatorAddress) EIP712("SuperBridge", "1") {
        require(tokenAddress != address(0), "TOKEN_ZERO");
        require(operatorAddress != address(0), "OPERATOR_ZERO");
        token = IERC20(tokenAddress);
        operator = operatorAddress;
    }

    function requestBridge(
        uint256 amount,
        uint256 destinationChain,
        address destinationUser
    ) external returns (uint256 id) {
        require(amount > 0, "AMOUNT_ZERO");
        require(destinationChain != 0, "CHAIN_ZERO");
        require(destinationUser != address(0), "DEST_USER_ZERO");

        id = ++nextId;

        requests[id] = Request({
            user: msg.sender,
            destinationUser: destinationUser,
            amount: amount,
            destinationChain: destinationChain,
            sourceChain: block.chainid,
            status: Status.Pending,
            claimed: false
        });

        require(token.transferFrom(msg.sender, address(this), amount), "TRANSFER_FAILED");

        emit BridgeRequested(id, msg.sender, destinationUser, amount, destinationChain);
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

    function finishRquest(
        uint256 id,
        uint256 sourceChain,
        address user,
        address destinationUser,
        uint256 amount,
        uint256 destinationChain,
        uint256 deadline,
        bytes calldata signature
    ) external {
        require(destinationChain == block.chainid, "DEST_CHAIN");
        require(block.timestamp <= deadline, "SIG_EXPIRED");
        require(!executedByChain[sourceChain][id], "ALREADY_EXECUTED");

        bytes32 structHash = keccak256(
            abi.encode(
                FINISH_TYPEHASH,
                id,
                sourceChain,
                user,
                destinationUser,
                amount,
                destinationChain,
                address(token),
                address(this),
                deadline
            )
        );
        bytes32 digest = _hashTypedDataV4(structHash);
        address signer = ECDSA.recover(digest, signature);
        require(signer == operator, "BAD_SIG");

        executedByChain[sourceChain][id] = true;
        IBridgeToken(address(token)).mint(destinationUser, amount);
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
    function mint(address to, uint256 amount) external;
}
