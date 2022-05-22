import React from "react";
import Kerala from "../OrgChart/Kerala";
import NGOList from "../OrgChart/NGOList";
import "./FirstPage.css";
import { useState } from "react";
import Bangalore from "../OrgChart/Bangalore";
import Assam from "../OrgChart/Assam";

function FirstPage() {
  const [sourceOrigin, setSourceOrigin] = useState("home");
  const [clicked, setClicked] = useState(false);
  let clickHandler = (event) => {
    setClicked(true);
    setSourceOrigin(event.target.id);
  };

  if (!clicked) {
    return (
      <div className="fp-div">
        <NGOList
          name="Kerala Floods"
          id="kerala"
          onClick={() => clickHandler}
        />
        <NGOList
          name="Bangalore Floods"
          id="bangalore"
          onClick={() => clickHandler}
        />
        <NGOList name="Assam Floods" id="assam" onClick={() => clickHandler} />
      </div>
    );
  } else {
    if (sourceOrigin === "assam") return <Assam />;
    else if (sourceOrigin === "bangalore") return <Bangalore />;
    else if (sourceOrigin === "kerala") return <Kerala />;
    else return <FirstPage />;
  }
}
export default FirstPage;
