// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DemoUSDC is ERC20 {
    address public immutable owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "ONLY_OWNER");
        _;
    }

    constructor(address initialRecipient) ERC20("Pack Alpha Demo USDC", "paUSDC") {
        owner = msg.sender;
        if (initialRecipient != address(0)) {
            _mint(initialRecipient, 1_000_000 * 10 ** decimals());
        }
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
