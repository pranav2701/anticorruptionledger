// SPDX-License-Identifier:MIT 

pragma solidity ^0.6.0;

contract AntiCorruption
{

    struct Cause{

        string  cause_name ;
        string causeDescription;
        uint256 targetAmount;
        mapping(address=>uint256) donorsAndAmount;
        address payable finalReceiver;
        uint256 causeId;
        uint256 balanceAmount;

    }

    Cause[] public causeArray;
   

    function setCauseName(string memory causeNameInput ,string memory causeDescInput,uint256 targetInput,address payable finalTargetReceiver)public 
    {
      
       Cause memory cause ;
       cause.cause_name =causeNameInput;
       cause.causeDescription=causeDescInput;
       cause.targetAmount = targetInput;
       cause.finalReceiver = finalTargetReceiver;
       cause.balanceAmount=0;
       cause.causeId=causeArray.length+1;  

       causeArray.push(cause);
       
    }


     function balanceOfCause(uint id ) public view returns(uint256)
     {
         uint i=0;
         for(i=0;i<causeArray.length;i++)
         {
             if(causeArray[i].causeId==id)
             {
                 return causeArray[i].balanceAmount;
             }
         }
     }

     
     function targetAmountOfCause(uint id ) public view returns(uint256)
     {
         uint i=0;
         for(i=0;i<causeArray.length;i++)
         {
             if(causeArray[i].causeId==id)
             {
                 return causeArray[i].targetAmount;
             }
         }
     }

     function donate(uint id) public payable
     {
        require(msg.value>0,"You need to spend more eth");
        uint i=0;
        for(i=0;i<causeArray.length;i++)
         {
             if(causeArray[i].causeId==id)
             {
                 causeArray[i].balanceAmount+=msg.value;
                 causeArray[i].donorsAndAmount[msg.sender]+=msg.value;
             }
         }
       
     }


     function transferAmount(uint id) public payable
     {
        require(balanceOfCause(id)>=targetAmountOfCause(id),"Final amount not yet achieved.");
        require(msg.sender==causeArray[id-1].finalReceiver,"Only the receiver can initiate transfer.");
        uint i=0;
        for(i=0;i<causeArray.length;i++)
         {
             if(causeArray[i].causeId==id)
             {
                causeArray[i].finalReceiver.transfer(causeArray[i].balanceAmount);
                causeArray[i].balanceAmount=0;
             }
         }

     }




    
}
