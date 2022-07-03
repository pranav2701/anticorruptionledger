import React from "react";
import "./Overview.css"

function Overview({ description }) {
  return (
    <div className="overview">
      <p>{description}</p>
    </div>
  );
}

export default Overview;
