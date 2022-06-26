// SPDX-License-Identifier:MIT 

pragma solidity ^0.6.0;

contract AntiCorruption
{
    string public name = "AntiCorruption";
    
    mapping(address=>uint256) public donorsAndAmount;

    uint targetAmount= 3 ether;

     address payable finalReceiver = 0x9fD12256d77D4fE2637A6f7100d9DD9d1bCce817;

     function balanceOf() public view returns(uint)
     {
         return address(this).balance;
     }

     function finalAmount() public view returns(uint)
     {
         return targetAmount;
     }

     function donate() public payable
     {
        require(msg.value>0,"You need to spend more eth");
        donorsAndAmount[msg.sender]+=msg.value;
     }


     function transferAmount() public payable
     {
         require(balanceOf()>=targetAmount,"Final amount not yet achieved.");
         finalReceiver.transfer(targetAmount);

     }




    
}
