import React from "react";
import "./NGOList.css";

function NGOList({ name, id }) {
  return (
    <div className="ngoDiv">
      <h2 id={id}>{name}</h2>
    </div>
  );
}

export default NGOList;
