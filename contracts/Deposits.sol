// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Deposits {
    
    struct user {
        uint256 deposit;
    }

    mapping(address => user) public Users;

    constructor() {}

    function getUserDeposit(address _user_address) public view returns (uint256) {
        return Users[_user_address].deposit;
    }
    
    function addDeposit(address _user_address, uint _deposit) public {
        Users[_user_address].deposit = _deposit;
    }

    function getDeposit(address _user_address, uint _deposit) public {
        Users[_user_address].deposit -= _deposit;
    }
}
