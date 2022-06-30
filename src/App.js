import React, { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";
import { ethers } from "ethers";
import CreateCause from "./components/CreateCause/CreateCause";
import ABI from "../build/contracts/AntiCorruption.json";
import axios from "axios";
import IndividualCauses from "./components/IndividualCauses/IndividualCauses";
import "./App.css";

function App() {
  const [data, setdata] = useState({
    address: null,
    Balance: null,
    connectionStatus: "Wallet not connected",
  });
  let ANTI_ADDRESS = ABI.networks[5777].address;
  let ANTI_ABI = ABI.abi;

  console.log(ANTI_ADDRESS, ANTI_ABI);

  const [causesList, setCausesList] = useState([]);
  let url = "http://localhost:4000/causes";

  const getAllCauses = () => {
    axios
      .get(url)
      .then((result) => {
        setCausesList(result.data);
      })
      .then(console.log(causesList));
  };

  useEffect(
    getAllCauses,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
          connectionStatus: "Wallet connected",
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
    <div className="AppComponent">
      <Navbar />

      <div className="contract-wrapper">
        <p>Wallet Address:{data.address}</p>
        <p>Balance:{data.Balance}</p>
        <p>Wallet status:{data.connectionStatus}</p>
        <button onClick={btnhandler}>Connect Wallet</button>
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={<FirstPage causesListProp={causesList} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/create-cause" element={<CreateCause />} />
        {causesList.map((cause) => {
          return (
            <Route
              key={cause.id}
              exact
              path={cause.route}
              element={
                <IndividualCauses
                  id={cause.id}
                  causeName={cause.causeName}
                  targetAmount={cause.targetAmount}
                  description={cause.description}
                  receiverAddress={cause.receiverAddress}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
