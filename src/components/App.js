import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../stylesheets/main.css";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default App;
