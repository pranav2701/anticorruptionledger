import React from "react";
import "./CauseComponent.css";

function CauseComponent({
  id,
  causeName,
  targetAmount,
  description,
  receiverAddress,
}) {
  let bgStyle = {
    backgroundImage: "",
  };

  function applyColor(id) {
    if (id % 2) {
      bgStyle.backgroundImage = "linear-gradient(to right, #f9ceee, #b1bce6)";
    } else {
      bgStyle.backgroundImage = "linear-gradient(to right, #f9ceee,#F9F9F9)";
    }
  }

  applyColor(id);

  return (
    <div id={id} className="causeComponentElement" style={bgStyle}>
      <h2>{causeName}</h2>
    </div>
  );
}

export default CauseComponent;
