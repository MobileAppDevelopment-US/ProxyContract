// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract ContractOne {

    uint public Factor;
    uint public Deposit;

    constructor(uint _factor) {
        Factor = _factor;
    }

    function calculateDeposit(uint _deposit) public view returns(uint) {
        return _deposit * Factor;
    }
}