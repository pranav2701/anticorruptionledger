import React, { useState } from "react";
import { ethers } from "ethers";
import "./ConnectWallet.css";

function ConnectWallet() {
  const [data, setdata] = useState({
    address: null,
    Balance: null,
    connectionStatus: "Not connected",
  });
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
          connectionStatus: "Connected",
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };
  return (
    <div className="connect-wallet">
      <h1 className="walletTitle">My Wallet</h1>
      <div className="connect-wallet-child">
        <p>Wallet Address: {data.address}</p>
        <p>Balance: {data.Balance}</p>
        <p>Wallet status: {data.connectionStatus}</p>
        <button onClick={btnhandler}>Connect Wallet</button>
      </div>
    </div>
  );
}

export default ConnectWallet;
