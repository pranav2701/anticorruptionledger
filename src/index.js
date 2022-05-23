import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Transactions from "./components/SecondPg/Transactions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Transactions/>
  </React.StrictMode>
);
