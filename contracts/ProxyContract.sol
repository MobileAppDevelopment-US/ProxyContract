// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import './iContract.sol';
import './Deposits.sol';

contract ProxyContract {

    address public contractAddress;
    address public depositAddress;

    constructor() {

    }

    function setContractDepositAddress(address _contract_address, address _deposit_address) public {
        contractAddress = _contract_address;
        depositAddress = _deposit_address;
    }

    function setDeposit(uint _deposit) public {
        uint _calculate_deposit = iContract(contractAddress).calculateDeposit(_deposit);
        Deposits(depositAddress).addDeposit(msg.sender, _calculate_deposit);
    }

    function getDeposit(uint _deposit) public {
        Deposits(depositAddress).getDeposit(msg.sender, _deposit);
    }
}
