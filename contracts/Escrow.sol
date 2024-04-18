// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Escrow {
    address public broker;
    address public beneficiary;
    address public depositor;
    bool public isApproved;

    constructor(address _broker, address _beneficiary) payable {
        broker = _broker;
        beneficiary = _beneficiary;
        depositor = msg.sender;
    }

    event Approved(uint);

    function approve() external {
        require(msg.sender == broker);
        uint balance = address(this).balance;
        (bool sent, ) = payable(beneficiary).call{value: balance}("");
        require(sent, "Failed to send Ether");
        emit Approved(balance);
        isApproved = true;
    }
}
