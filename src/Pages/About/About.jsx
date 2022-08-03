import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <h1 className="aboutus">About Us</h1>
      <div className="img-abouts">
        <div className="meet">
          <h2 className="introduction">MEET OUR FOUNDER</h2>
          <p className="summary">
            Miskiat Badmus is the founder and CEO of THELOOKBYMIS.B. She started
            her fashion brand in 2021 and has created unique designs that will
            blow your mind.
            <p>
              Fashion is an ART that can not be grasped by everyone.We are very
              dedicated in making unique and creative products to people.{" "}
            </p>
          </p>
        </div>

        <img src="/mko.jpg" className="about-miskiat" />
      </div>
    </div>
  );
}

export default About;
