import React, { useState } from "react";
import "./NGOList.css";
import { Link } from "react-router-dom";

function NGOList({ name, id }) {
  const [clicked, setClicked] = useState(true);
  let clickHandler = () => {
    setClicked(false);
  };

  if (clicked === true) {
    return (
      <Link exact to="/kerala">
        <div className="ngoDiv" onClick={() => clickHandler}>
          <h2>{name}</h2>
        </div>
      </Link>
    );
  }
}

export default NGOList;
