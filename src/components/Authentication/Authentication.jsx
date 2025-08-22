import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "./index.css";
import { UserProvider } from "../../context/userContext";

const Authentication = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default Authentication;
