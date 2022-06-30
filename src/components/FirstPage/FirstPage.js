import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CauseComponent from "../CauseComponent/CauseComponent";

function FirstPage({ causesListProp }) {
  const [causesList, setCausesList] = useState(causesListProp);
  let url = "http://localhost:4000/causes";

  const getAllCauses = () => {
    axios.get(url).then((result) => {
      setCausesList(result.data);
      console.log(causesList);
    });
  };

  useEffect(
    getAllCauses,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="fp-div">
      <h1 className="causes-heading">Causes</h1>

      {causesList.map((cause) => {
        return (
          <Link to={cause.route} key={cause.id}>
            <CauseComponent
              key={cause.id}
              id={cause.id}
              causeName={cause.causeName}
              targetAmount={cause.targetAmount}
              description={cause.description}
              receiverAddress={cause.receiverAddress}
            />
          </Link>
        );
      })}
    </div>
  );
}
export default FirstPage;
