import React, { useState } from "react";
import ABI from "../../../build/contracts/AntiCorruption.json";
import { ethers } from "ethers";

let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

console.log(anti);

function Donate({ id, causeName, targetAmount, description, receiverAddress }) {
  // const getBalance = async () => {
  //   let balAmount = await anti.balanceOfCause(id);
  //   let balAmountInEth = ethers.utils.formatEther(balAmount);
  //   return balAmountInEth;
  // };

  // let initalBalance = getBalance();
  // console.log(initalBalance);
  const [balanceOfCause, setBalanceOfCause] = useState(0);
  let handleSubmit = async (e) => {
    e.preventDefault();
    let donatedAmount = e.target.donationAmount.value;
    console.log(donatedAmount);
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      let tx = await signer.sendTransaction({
        to: receiverAddress,
        value: ethers.utils.parseEther(ethers.utils.formatEther(donatedAmount)),
      });

      if (tx) {
        if (tx.value > 0) {
          await anti.donateAmount(id, tx.from, donatedAmount);
          let balAmount = await anti.balanceOfCause(id);
          setBalanceOfCause(ethers.utils.formatEther(balAmount));
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Donate to {causeName}</h1>
      <h2>Target amount : {ethers.utils.formatEther(targetAmount)} ETH </h2>
      <h2>Total donation amount achieved : {balanceOfCause} ETH</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="receiverAddressInput">Receiver Address </label>
        <input
          type="text"
          id="receiverAddressInput"
          value={receiverAddress}
          readOnly
        />
        <br />
        <label htmlFor="donationAmount">Enter the amount in Wei </label>
        <input type="text" id="donationAmount" />
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Donate;
