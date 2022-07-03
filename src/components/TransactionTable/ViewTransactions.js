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
    let donorAddressList = await anti.causeArray[id - 1].donorAddressList;
    let donorAmountList = await anti.causeArray[id - 1].donorAmountList;

    setDonorAddressArray(donorAddressList);
    setDonorAmountArray(donorAmountList);
  };

  getDonorList();
  return (
    <div>
      View Transactions of {causeName}
      <table>
        <thead>
          <tr>
            <td>Donor Wallet Address </td>
            <td>Amount donated</td>
          </tr>
        </thead>

        <tbody>
          {donorAddressArray.map((address) => {
            return (
              <tr>
                <td>{{ address }}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTransactions;
