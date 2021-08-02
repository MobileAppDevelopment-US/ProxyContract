// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

interface iContract {
    function calculateDeposit(uint _deposit) view external returns(uint);
}
