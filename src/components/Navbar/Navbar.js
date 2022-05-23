import React from "react";
import { Link,Routes,Route, BrowserRouter } from "react-router-dom";
import NGOList from "../OrgChart/NGOList";
import About from "./About";
import "./Navbar.css";


const Navbar = () => {
    return (
    <BrowserRouter>
        <nav className="main-nav">
            <div className="logo">
                <Link to="/" className="logo">ACL</Link>
            </div>
            <div className="menu-link">
                <ul>
                    {/* <a href="/about">About Us</a>  */}
                    <Link to="/about" className="about">About Us</Link>  
                </ul>
            </div>
        </nav>
        <Routes>
            <Route path = "/" element = {<NGOList/>} />
            <Route path = "/about" element = {<About/>} />
        </Routes>
    </BrowserRouter>


    )
}
export default Navbar;