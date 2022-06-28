import React, { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Kerala from "./components/OrgChart/Kerala";
import Bangalore from "./components/OrgChart/Bangalore";
import Assam from "./components/OrgChart/Assam";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";
import { ethers } from "ethers";
import { ANTI_ADDRESS, ANTI_ABI } from "./config";
import CreateCause from "./components/CreateCause/CreateCause";

function App() {
  const [data, setdata] = useState({
    address: null,
    Balance: null,
  });
  const [finalAmount, setFinalAmount] = useState(0);

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

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  async function getContract() {
    const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);
    console.log(anti);

    let target = await anti.finalAmount();
    console.log(ethers.utils.formatEther(target));
    setFinalAmount(ethers.utils.formatEther(target));
  }

  getContract();

  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      <h1>Address:{data.address}</h1>
      <h1>Balance:{data.Balance}</h1>
      <h1>Final Amount: {finalAmount}</h1>
      <button onClick={btnhandler}>Connect</button>

      <Routes>
        <Route exact path="/" element={<FirstPage />}></Route>
        <Route exact path="/kerala" element={<Kerala />}></Route>
        <Route exact path="/bangalore" element={<Bangalore />}></Route>
        <Route exact path="/assam" element={<Assam />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/create-cause" element={<CreateCause />} />
      </Routes>
    </div>
  );
}

export default App;
