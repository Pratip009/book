import React from "react";
import './MissionAndVision.css'
const MissionAndVision = () => {
  return (
    <div className="container">
      <h1 className="title">Our Goals and Objectives</h1>
      <div className="sections">
        <div className="section vision">
          <img
            src="path-to-your-vision-icon.png"
            alt="Vision Icon"
            className="icon"
          />
          <h2>Vision</h2>
          <p>
            To provide the best quality service and products to our customer and
            clients.
          </p>
        </div>
        <div className="section mission">
          <img
            src="path-to-your-mission-icon.png"
            alt="Mission Icon"
            className="icon"
          />
          <h2>Mission</h2>
          <p>
            To provide the best quality service and products to our customer and
            clients.
          </p>
        </div>
      </div>
      <div className="section updates">
        <h2>Updates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVision;
