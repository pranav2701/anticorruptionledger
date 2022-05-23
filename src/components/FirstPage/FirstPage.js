import React from "react";
import NGOList from "../OrgChart/NGOList";
import "./FirstPage.css";
// import { useState } from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  // const [sourceOrigin, setSourceOrigin] = useState("");

  // const navigate = useNavigate();
  // let clickHandler = (event) => {
  //   setSourceOrigin(event.target.id);
  //   navigate(`./${sourceOrigin}`, { replace: true });
  // };
  return (
    <div className="fp-div">
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
