import React from "react";
import "./NGOList.css";

function NGOList({ name, onClick, id }) {
  return (
    <div className="ngoDiv" onClick={onClick(name)}>
      <h2 id={id}>{name}</h2>
    </div>
  );
}

export default NGOList;
