import React from "react";
import "./CauseComponent.css";

function CauseComponent({
  id,
  causeName,
  targetAmount,
  description,
  receiverAddress,
}) {
  return (
    <div id={id} className="causeComponentElement">
      <h2>{causeName}</h2>
    </div>
  );
}

export default CauseComponent;
