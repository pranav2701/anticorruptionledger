import React from "react";
import Donate from "./Donate";
import NGOTransactions from "./NGOTransactions";
import Overview from "./Overview";
import ViewTransactions from "./ViewTransactions";

function InnerRender({ value }) {
  if (value === "overview") return <Overview />;
  else if (value === "view-transactions") return <ViewTransactions />;
  else if (value === "ngo-transactions") return <NGOTransactions />;
  else if (value === "donate") return <Donate />;
}

export default InnerRender;
