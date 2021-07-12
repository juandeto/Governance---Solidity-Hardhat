// SPDX-License-Identifier: UNLISCENSED
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FafafaToken is ERC20 {

    constructor() ERC20("Fafafa Token", "FAF") {
        _mint(msg.sender, 24000000 * (10 ** 16));
    }

    
}