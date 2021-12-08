import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <i class="fas color1 fa-home pr1"></i>Home
      </Link>
      <Link to="/trending">
        {" "}
        <i class="fas fa-bolt color1 pr1"></i>Trending
      </Link>
    </nav>
  );
};

export default Navbar;
