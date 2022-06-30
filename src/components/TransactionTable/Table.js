import React from "react";
import "./Table.css";
import { useState } from "react";
import Overview from "./Overview";
import ViewTransactions from "./ViewTransactions";
import Donate from "./Donate";
import Transfer from "./Transfer";

function Table({ id, causeName, targetAmount, description, receiverAddress }) {
  const [content, setContent] = useState("overview");

  let handleClick = (e) => {
    setContent(e.target.id);
  };

  if (content === "overview") {
    return (
      <div className="transaction-table">
        <div className="outer-table">
          <div className="heading-table">
            <div id="overview" className="table-tabs" onClick={handleClick}>
              Overview
            </div>
            <div
              id="view-transactions"
              className="table-tabs"
              onClick={handleClick}
            >
              View Transactions
            </div>
            <div id="donate" className="table-tabs" onClick={handleClick}>
              Donate
            </div>
            <div id="transfer" className="table-tabs" onClick={handleClick}>
              Transfer amount to NGO
            </div>
          </div>
          <br />
          <br />
          <Overview
            id={id}
            causeName={causeName}
            targetAmount={targetAmount}
            description={description}
            receiverAddress={receiverAddress}
          />
        </div>
      </div>
    );
  } else if (content === "view-transactions") {
    return (
      <div className="transaction-table">
        <div className="outer-table">
          <div className="heading-table">
            <div id="overview" className="table-tabs" onClick={handleClick}>
              Overview
            </div>
            <div
              id="view-transactions"
              className="table-tabs"
              onClick={handleClick}
            >
              View Transactions
            </div>
            <div id="donate" className="table-tabs" onClick={handleClick}>
              Donate
            </div>
            <div id="transfer" className="table-tabs" onClick={handleClick}>
              Transfer amount to NGO
            </div>
          </div>

          <br />
          <br />
          <ViewTransactions
            id={id}
            causeName={causeName}
            targetAmount={targetAmount}
            description={description}
            receiverAddress={receiverAddress}
          />
        </div>
      </div>
    );
  } else if (content === "donate") {
    return (
      <div className="transaction-table">
        <div className="outer-table">
          <div className="heading-table">
            <div id="overview" className="table-tabs" onClick={handleClick}>
              Overview
            </div>
            <div
              id="view-transactions"
              className="table-tabs"
              onClick={handleClick}
            >
              View Transactions
            </div>
            <div id="donate" className="table-tabs" onClick={handleClick}>
              Donate
            </div>
            <div id="transfer" className="table-tabs" onClick={handleClick}>
              Transfer amount to NGO
            </div>
          </div>
          <br />
          <br />
          <Donate
            id={id}
            causeName={causeName}
            targetAmount={targetAmount}
            description={description}
            receiverAddress={receiverAddress}
          />
        </div>
      </div>
    );
  } else if (content === "transfer") {
    return (
      <div className="transaction-table">
        <div className="outer-table">
          <div className="heading-table">
            <div id="overview" className="table-tabs" onClick={handleClick}>
              Overview
            </div>
            <div
              id="view-transactions"
              className="table-tabs"
              onClick={handleClick}
            >
              View Transactions
            </div>
            <div id="donate" className="table-tabs" onClick={handleClick}>
              Donate
            </div>
            <div id="transfer" className="table-tabs" onClick={handleClick}>
              Transfer amount to NGO
            </div>
          </div>
          <br />
          <br />
          <Transfer
            id={id}
            causeName={causeName}
            targetAmount={targetAmount}
            description={description}
            receiverAddress={receiverAddress}
          />
        </div>
      </div>
    );
  }
}

export default Table;
