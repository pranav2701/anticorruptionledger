import React from "react";
import InnerRender from "./InnerRender";
import "./Table.css";
import { useState } from "react";

function Table() {
  const [content, setContent] = useState("overview");

  let handleClick = (e) => {
    setContent(e.target.id);
  };
  return (
    <div>
      <h1>Transaction table</h1>

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
          <div
            id="ngo-transactions"
            className="table-tabs"
            onClick={handleClick}
          >
            NGO Transactions
          </div>
          <div id="donate" className="table-tabs" onClick={handleClick}>
            Donate
          </div>
        </div>

        <br />
        <br />
        <div className="table-content">
          <InnerRender value={content} />
        </div>
      </div>
    </div>
  );
}

export default Table;
