import React from "react";
import Table from "../TransactionTable/Table";

function IndividualCauses({
  id,
  causeName,
  targetAmount,
  description,
  receiverAddress,
}) {
  return (
    <div id={id}>
      <h1>{causeName} Ledger</h1>
      <Table
        id={id}
        causeName={causeName}
        targetAmount={targetAmount}
        description={description}
        receiverAddress={receiverAddress}
      />
    </div>
  );
}

export default IndividualCauses;
