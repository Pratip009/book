import React from "react";
import { Container } from "react-bootstrap";
import "./Welcome.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
const Welcome = () => {
  return (
    <div className="welcome-full-bg">
      <Container className="welcome-card" style={{padding:0, marginTop:'2rem'}}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="welcome-title text-start">
            Welcome to Learning Needs
          </h2>
          <p className="welcome-text">
            Necessity is the Mother of Invention, and this proverb perfectly
            defines the inception of Learning Needs. We believe all companies
            have one thing in common - they survive and thrive by creating and
            maintaining satisfied customers through their people. The Learning
            Needs understands the importance of awakening, developing, and
            rewarding the greatness of a company's people through
            transformation. With our experience and expertise in leadership
            training, school consulting, teachers training, school start up, and
            Learning Needs customized product, we help organization to achieve
            their goals.
          </p>
          <div className="welcome_btn text-start mt-1">
            <button className="welcome-button">Join Us Today &rarr;</button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Welcome;
