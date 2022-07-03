import React, { useState } from "react";
import ABI from "../../../build/contracts/AntiCorruption.json";
import { ethers } from "ethers";
import "./Donate.css";

let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

console.log(anti);

function Donate({ id, causeName, targetAmount, description, receiverAddress }) {
  var balAmount;
  const [balAmountInEth, setBalAmountInEth] = useState("");

  const getBalance = async () => {
    balAmount = await anti.balanceOfCause(id);
    let tempAmount = ethers.utils.formatEther(balAmount);
    setBalAmountInEth(tempAmount);
    return tempAmount;
  };

  getBalance().then((amount) => {
    setBalAmountInEth(amount);
  });

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
          setBalAmountInEth(ethers.utils.formatEther(balAmount));
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (balAmountInEth < targetAmount) {
    return (
      <><div className="DonateHeader">
        <h1>Donate to {causeName}</h1>
        <h2>Target amount: {ethers.utils.formatEther(targetAmount)} ETH </h2>
        <h2>Total donation amount achieved: {balAmountInEth} ETH</h2>
      </div>
      <div>
          <form onSubmit={handleSubmit} id="DonatePay">
            <label htmlFor="receiverAddressInput">Receiver Address </label>
            <input
              type="text"
              id="receiverAddressInput"
              value={receiverAddress}
              className="amountto"
              readOnly />
            <br />
            <label htmlFor="donationAmount">Enter the amount in Wei </label>
            <input type="text" id="donationAmount" className="amount" />
            <br />
            <button type="submit" className="pay">Pay</button>
          </form>
        
        </div></>
    );
  } else {
    return (
      <div className="donateComplete">
        <h2>
          {causeName} has successfully reached it's target amount.Thanks for the
          support
        </h2>
        <br />
        <br />
        <h3>Target amount : {ethers.utils.formatEther(targetAmount)} ETH </h3>
        <br />
        <h3>Total donation amount achieved : {balAmountInEth} ETH</h3>
      </div>
    );
  }
}

export default Donate;
