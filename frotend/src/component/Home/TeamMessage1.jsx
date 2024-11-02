import React from "react";
import "./TeamMessage1.css";
import starIcon from "../../Image/home/teamstar.png";
import rocketIcon from "../../Image/home/teamrocket.png";
import planetIcon from "../../Image/home/teamglobe.png";
import bookIcon from "../../Image/home/teambook.png";
import chatBubblesIcon from "../../Image/home/teammain.png"; // Ensure this path is correct

const TeamMessage1 = () => {
  return (
    <div className="team-message-container">
      <div className="row align-items-center">
        <div className="col-md-8">
          {/* Positioned Icons */}
          <img src={starIcon} alt="Star Icon" className="icon star-icon" />
          <img
            src={rocketIcon}
            alt="Rocket Icon"
            className="icon rocket-icon"
          />
          <img src={bookIcon} alt="Book Icon" className="icon book-icon" />
          <img
            src={planetIcon}
            alt="Planet Icon"
            className="icon planet-icon"
          />

          {/* Text Content */}
          <div className="content">
            <h1 className="title">Team Message</h1>
            <p className="description">
              We share an enthusiasm for the kind of great learning made
              possible by skillful and committed training. Specializing in
              school startup and development projects, we work as a team to
              provide a full range of personalized advice and training to our
              clients. Our team is fluent in the languages of strategy, business
              performance, leadership, and interpersonal dynamics. We have
              worked extensively with large and small organizations and schools,
              both as leaders and as senior-level consultants brought in to
              rethink strategy, redesign structure, amplify execution, and
              catalyze change. Our job is to mobilize our clients’ internal
              capacities to create change that is lasting and meaningful. With
              all the best wishes!
            </p>
            <p className="subtitle">
              Team Learning Needs - We facilitate transformation
            </p>
          </div>
        </div>

        {/* Chat Bubbles Icon */}
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={chatBubblesIcon} 
            alt="Chat Bubbles Icon"
            className="chat-bubbles-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMessage1;
