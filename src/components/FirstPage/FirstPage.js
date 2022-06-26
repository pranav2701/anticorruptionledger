import React from "react";
import NGOList from "../OrgChart/NGOList";
import "./FirstPage.css";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="fp-div">
      <h1>Causes</h1>
      <Link to="/kerala">
        <NGOList name="Kerala Floods" id="kerala" />
      </Link>

      <Link to="/bangalore">
        <NGOList name="Bangalore Floods" id="bangalore" />
      </Link>

      <Link to="/assam">
        <NGOList name="Assam Floods" id="assam" />
      </Link>
    </div>
  );
}
export default FirstPage;
