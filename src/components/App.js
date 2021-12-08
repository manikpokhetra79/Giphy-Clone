import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../stylesheets/main.css";
const App = () => {
  
  return (
    <div>
      <Navbar />
      {/* <input type="text" onChange={handleChange} placeholder="Search Gifs" /> */}
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default App;
