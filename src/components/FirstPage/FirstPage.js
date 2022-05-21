import React from "react";
import NGOList from "../OrgChart/NGOList";

function FirstPage() {
  return (
    <div>
      <NGOList name="Kerala Floods" />
      <NGOList name="Bangalore Floods" />
      <NGOList name="Assam Floods" />
    </div>
  );
}

export default FirstPage;
