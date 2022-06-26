import React from "react";
// import Web3 from 'web3';

// const ABI = "";
// const ADDRESS = "";

// async function connectwallet() {
//   try{
//     if (window.ethereum) {
//       var web3 = new Web3(window.ethereum); //.send
//       await window.ethereum.send('eth_requestAccounts');
//       var accounts = await web3.eth.getAccounts();
//       account = accounts[0];
//       document.getElementById('wallet-address').textContent = account;
      
//       contract = new web3.eth.Contract(ABI, ADDRESS);
//     }
//   }
//   catch(e){
//     console.log(e)
//   }
// }

function Donate() {
  return (
    <div>
      <button type="button" id="Connect" >Connect Wallet</button>
      <h6 id="wallet-address">Wallet Address</h6>
    </div>
    );
}

export default Donate;
