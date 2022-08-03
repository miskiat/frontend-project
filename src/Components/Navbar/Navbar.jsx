import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <span className="thelook">THELOOKBYMIS.B</span>
      </Link>
      <Link to="/home">
        <span>HOME</span>
      </Link>
      <Link to="/shop">
        <span>SHOP</span>
      </Link>
      <Link to="/services">
        <span>SERVICES</span>
      </Link>
      <Link to="/about">
        <span>ABOUT</span>
      </Link>
    </nav>
  );
};

export default Navbar;
