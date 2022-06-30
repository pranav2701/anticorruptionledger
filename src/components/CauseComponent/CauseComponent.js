import React from "react";

function CauseComponent({
  id,
  causeName,
  targetAmount,
  description,
  receiverAddress,
}) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: "yellow",
        border: "2px solid black",
        cursor: "pointer",
      }}
    >
      <h1>{causeName}</h1>
    </div>
  );
}

export default CauseComponent;
