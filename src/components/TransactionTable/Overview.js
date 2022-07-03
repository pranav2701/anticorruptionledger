import React from "react";
import "./Overview.css"

function Overview({ description,causeName }) {
  return (
    <div className="overview">
      <h2>Overview of {causeName}</h2>
      <p className="overviewdesc">{description}</p>
    </div>
  );
}

export default Overview;
