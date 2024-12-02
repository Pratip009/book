import React, { Suspense } from "react";
import "./TeamMessage1.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
// Use dynamic imports for images to enable lazy loading
const starIcon = require("../../Image/home/teamstar.png");
const rocketIcon = require("../../Image/home/teamrocket.png");
const planetIcon = require("../../Image/home/teamglobe.png");
const bookIcon = require("../../Image/home/teambook.png");
const chatBubblesIcon = require("../../Image/home/teammain.png");

const TeamMessage1 = () => {
  return (
    <motion.div
      className="team-message-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="row align-items-center">
        <div className="col-md-8">
          {/* Lazy Loaded Icons */}
          <Suspense fallback={<div>Loading...</div>}>
            <img
              src={starIcon}
              alt="Star Icon"
              className="icon star-icon"
              loading="lazy"
            />
            <img
              src={rocketIcon}
              alt="Rocket Icon"
              className="icon rocket-icon"
              loading="lazy"
            />
            <img
              src={bookIcon}
              alt="Book Icon"
              className="icon book-icon"
              loading="lazy"
            />
            <img
              src={planetIcon}
              alt="Planet Icon"
              className="icon planet-icon"
              loading="lazy"
            />
          </Suspense>

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
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMessage1;
