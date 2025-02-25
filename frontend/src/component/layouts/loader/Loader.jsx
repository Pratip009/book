import React from "react";
import CricketBallGif from "../../../Image/Loader-svg/1481.gif";
import "./Loader.css";

const CricketBallLoader = () => (
  <div className="cricket-ball-loader">
    <img src={CricketBallGif} alt="Loading..." />
  </div>
);

export default CricketBallLoader;
