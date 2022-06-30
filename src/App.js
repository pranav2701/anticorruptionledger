import React, { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Kerala from "./components/OrgChart/Kerala";
import Bangalore from "./components/OrgChart/Bangalore";
import Assam from "./components/OrgChart/Assam";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";
import { ethers } from "ethers";
import CreateCause from "./components/CreateCause/CreateCause";
import ABI from "../build/contracts/AntiCorruption.json";
import axios from "axios";
import IndividualCauses from "./components/IndividualCauses/IndividualCauses";

function App() {
  const [data, setdata] = useState({
    address: null,
    Balance: null,
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
    <div>
      <Navbar />
      <h1>Address:{data.address}</h1>
      <h1>Balance:{data.Balance}</h1>
      <button onClick={btnhandler}>Connect</button>

      <Routes>
        <Route
          exact
          path="/"
          element={<FirstPage causesListProp={causesList} />}
        ></Route>
        <Route exact path="/kerala" element={<Kerala />}></Route>
        <Route exact path="/bangalore" element={<Bangalore />}></Route>
        <Route exact path="/assam" element={<Assam />}></Route>
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
