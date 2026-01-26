// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title MockBridgeToken
/// @notice Test-only ERC20 with open mint and burn.
contract MockBridgeToken is ERC20, ERC20Burnable {
    constructor() ERC20("MockBridgeToken", "MBT") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
