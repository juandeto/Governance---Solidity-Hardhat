//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FafToken is ERC20 {

    constructor() ERC20("Faf Token", "FAF") {
        _mint(msg.sender, 24000000 * (10 ** 16));
    }

}