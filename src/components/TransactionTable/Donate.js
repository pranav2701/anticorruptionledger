import React from "react";
import ABI from "../../../build/contracts/AntiCorruption.json";
import { ethers } from "ethers";

let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

function Donate({ id, causeName, targetAmount, description, receiverAddress }) {
  let handleSubmit = async (e) => {
    e.preventDefault();
    let donatedAmount = e.target.donationAmount.value;
    console.log(e.target.donationAmount.value);

    await anti.causeArray[id - 1].donate(id, {});
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
