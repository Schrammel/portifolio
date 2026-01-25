// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title BridgeToken
/// @notice ERC20 with EIP-2612 permit and a single minter role.
contract BridgeToken is ERC20, ERC20Permit, ERC20Burnable {
    address public immutable minter;
    uint8 private immutable tokenDecimals;

    modifier onlyMinter() {
        require(msg.sender == minter, "ONLY_MINTER");
        _;
    }

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 decimals_,
        address minterAddress
    ) ERC20(tokenName, tokenSymbol) ERC20Permit(tokenName) {
        require(minterAddress != address(0), "MINTER_ZERO");
        minter = minterAddress;
        tokenDecimals = decimals_;
    }

    function decimals() public view override returns (uint8) {
        return tokenDecimals;
    }

    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }
}
