import React from "react";
import "./Home.scss";
import Aboutt from "../../Components/Aboutt/Aboutt.jsx";
import Misb from "../../Components/Misb/Misb.jsx";
import Serve from "../../Components/Serve/Serve.jsx";
import Shopping from "../../Components/Shopping/Shopping.jsx";
const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        <Misb />
        <Aboutt />
        <Shopping />
        <Serve />
      </div>
    </div>
  );
};

export default Home;
