import React, { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";
import CreateCause from "./components/CreateCause/CreateCause";
import axios from "axios";
import IndividualCauses from "./components/IndividualCauses/IndividualCauses";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";

function App() {
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

  return (
    <div className="AppComponent">
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={<FirstPage causesListProp={causesList} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/create-cause" element={<CreateCause />} />
        <Route path="/my-wallet" element={<ConnectWallet />} />
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
