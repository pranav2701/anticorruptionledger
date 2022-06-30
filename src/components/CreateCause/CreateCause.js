import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import ABI from "../../../build/contracts/AntiCorruption.json";
let ANTI_ADDRESS = ABI.networks[5777].address;
let ANTI_ABI = ABI.abi;

function CreateCause() {
  let url = "http://localhost:4000/causes";
  const [causesList, setCausesList] = useState([]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const anti = new ethers.Contract(ANTI_ADDRESS, ANTI_ABI, signer);

  async function createCauseOnSubmit(e) {
    e.preventDefault();

    console.log(e.target.cause_name.value);
    let newCause = {
      causeName: e.target.cause_name.value,
      targetAmount: e.target.cause_target_amount.value,
      description: e.target.cause_description.value,
      receiverAddress: e.target.cause_receiver_address.value,
      route: e.target.cause_name.value.replace(/\s+/g, "-").toLowerCase(),
    };

    try {
      await anti
        .setCauseName(
          newCause.causeName,
          newCause.description,
          newCause.targetAmount,
          newCause.receiverAddress
        )
        .then(
          axios.post(url, newCause).then((result) => {
            setCausesList(causesList.concat(result.data));
            console.log("Added", result.data + " to the array");
          })
        );
    } catch (err) {
      console.log(err);
    }

    e.target.cause_name.value = "";
    e.target.cause_target_amount.value = "";
    e.target.cause_description.value = "";
    e.target.cause_receiver_address.value = "";
  }

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
    <div className="createCause">
      <form onSubmit={createCauseOnSubmit}>
        <label htmlFor="cause_name">Enter the cause name</label>
        <input type="text" id="cause_name" />
        <br />
        <br />
        <label htmlFor="cause_target_amount">
          Enter the Target amount for the cause
        </label>
        <input type="text" id="cause_target_amount" />
        <br />
        <br />
        <label htmlFor="cause_description">
          Enter the Description for the cause
        </label>
        <br />
        <br />
        <textarea
          name="cause_description"
          id="cause_description"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <br />
        <label htmlFor="cause_receiver_address">
          Enter the Receiver Address of the cause
        </label>
        <input type="text" id="cause_receiver_address" />
        <br />
        <br />
        <input type="submit" />
      </form>

      <h1>Causes</h1>
      {causesList.map((causeItem) => {
        return <h1 key={causeItem.id}>{causeItem.causeName}</h1>;
      })}
    </div>
  );
}

export default CreateCause;
