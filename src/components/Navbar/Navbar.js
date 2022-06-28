import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/">ACL</Link>
      </div>
      <div className="menu-link">
        <span id="menu-content">
          <Link to="/about" className="about">
            About Us
          </Link>
        </span>
      </div>
      <div className="menu-link">
        <span id="menu-content">
          <Link to="/create-cause" className="create-cause">
            Create A Cause
          </Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
