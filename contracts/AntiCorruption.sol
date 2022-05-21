// SPDX-License-Identifier:MIT 

pragma solidity ^0.6.0;
// import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract AntiCorruption
{

    // Mapping to define address and the amount donated by the donors 

    address payable public owner;

    constructor() public
    {
        owner = msg.sender;
    }



    mapping(address=>uint256) public donorsAndAmount;

    uint targetAmount= 3 finney;


    function donate() public payable
    {
        require((balanceOf()+msg.value)<=targetAmount,"Amount exceeding the final target amount.Please adjust your donation accordingly");
        require(msg.value>0,"You need to spend more eth");
        donorsAndAmount[msg.sender]+=msg.value;
        
    }

    function balanceOf() public view returns(uint)
    {
        return address(this).balance/1000000000000000;

    }

    function transferAmount() payable public
    {
        require(balanceOf()==targetAmount,"Target amount not yet achieved");
        owner.transfer(targetAmount);
    }


}
