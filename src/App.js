import React from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Kerala from "./components/OrgChart/Kerala";
import Bangalore from "./components/OrgChart/Bangalore";
import Assam from "./components/OrgChart/Assam";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FirstPage />}></Route>
        <Route exact path="/kerala" element={<Kerala />}></Route>
        <Route exact path="/bangalore" element={<Bangalore />}></Route>
        <Route exact path="/assam" element={<Assam />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
