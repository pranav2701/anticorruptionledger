import React from "react";
import ABI from "../../../build/contracts/AntiCorruption.json";
import { ethers } from "ethers";

let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

console.log(anti);

function Donate({ id, causeName, targetAmount, description, receiverAddress }) {
  let handleSubmit = async (e) => {
    e.preventDefault();
    let donatedAmount = e.target.donationAmount.value;
    try {
      if (!window.ethereum) {
        alert("Metamask not installed.Kindly install it to maje transactions");
      } else {
        const tx = await signer.sendTransaction({
          to: ANTI_ADDRESS,
          value: donatedAmount,
        });
      }
    } catch (err) {
      console.log(err);
    }
    await anti.donate(donatedAmount);
  };
  return (
    <div>
      <h1>Donate to {causeName}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="donationAmount">Enter the amount in Wei </label>
        <input type="text" id="donationAmount" />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Donate;
