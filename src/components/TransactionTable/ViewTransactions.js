import React, { useState } from "react";
import ABI from "../../../build/contracts/AntiCorruption.json";
import { ethers } from "ethers";
import "./ViewTransactions.css";

let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

function ViewTransactions({
  id,
  causeName,
  targetAmount,
  description,
  receiverAddress,
}) {
  const [donorAddressArray, setDonorAddressArray] = useState([]);
  const [donorAmountArray, setDonorAmountArray] = useState([]);

  const getDonorList = async () => {
    let donorAddressList = await anti.donorsAddress(id);
    let donorAmountList = await anti.donorsList(id);

    setDonorAddressArray(donorAddressList);
    setDonorAmountArray(donorAmountList);
  };

  getDonorList();
  return (
    <div>
      <h1 className="viewHeading">View Transactions of {causeName}</h1>
      <table>
        <thead>
          <tr>
            <td>Donor Wallet Address </td>
            <td>Amount donated</td>
          </tr>
        </thead>

        <tbody>
          {donorAddressArray.map((donor, index) => {
            return (
              <tr key={`donor` + index}>
                <td key={`address` + index}>{donorAddressArray[index]}</td>
                <td key={`amount` + index}>
                  {ethers.utils.formatEther(donorAmountArray[index])} ETH
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTransactions;
