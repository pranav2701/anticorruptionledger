import React from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Kerala from "./components/OrgChart/Kerala";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NGOList from "./components/OrgChart/NGOList";

function App() {
  return (
    <div>
      <Router>
        <FirstPage />
        <Routes>
          <Route exact path="/kerala" element={<Kerala />} />
          <Route exact path="/" element={<NGOList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
