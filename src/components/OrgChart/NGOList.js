import React from "react";
import "./NGOList.css";

function NGOList({ name }) {
  return (
    <div class="ngoDiv">
      <h2>{name}</h2>
    </div>
  );
}

export default NGOList;
