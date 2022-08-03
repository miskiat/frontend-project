import React from "react";
import { Link } from "react-router-dom";

import "./Aboutt.scss";

const Aboutt = () => {
  return (
    <div className="secondpage">
      <div className="intro">
        <h2 className="aboutt">ABOUT US</h2>
        <p className="welcome">Welcome to THELOOKBYMIS.B</p>
        <Link to="/about">
          <button className="button">About Us</button>
        </Link>
      </div>

      <img className="mko" src="/mko.jpg" />
    </div>
  );
};

export default Aboutt;
