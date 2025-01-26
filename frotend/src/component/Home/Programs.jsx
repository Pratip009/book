import React from "react";
import "./Programs.css"; // Create this CSS file for styling
import rocket from "../../Image/programs/rocket.png";
import sun from "../../Image/programs/sun.png";
import tree from "../../Image/programs/tree.png";
import school from "../../Image/programs/school.png";
import training from "../../Image/programs/training.png";
import sports from "../../Image/programs/sports.png";
import development from "../../Image/programs/development.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
const Programs = () => {
  return (
    <motion.section
      className="programs-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      <header>
        <HeaderWithUnderline
          sentence="Explore Our Programs"
          highlightedWord="Programs"
        />
      </header>

      <div className="Newcontainer">
        <div className="row programs-grid">
          {/* School Management Service Program Card */}
          <article className="col-12 col-sm-6 mb-4">
            <div className="program-card school-management">
              <div className="card-content">
                <div className="text-content">
                  <h3>School Management Services</h3>
                  <p style={{ width: "90%", textAlign: "justify" , textJustify:'inter-word' }}>
                    From vision to reality, expert school management guides you
                    through every step of establishing a thriving educational
                    institution.
                  </p>
                  <Link
                    to="/school"
                    aria-label="Enroll in School Management Services"
                  >
                    <button>Enroll now →</button>
                  </Link>
                </div>
                <div className="icon12">
                  <img src={school} alt="School Management Icon" />
                </div>
              </div>
            </div>
          </article>

          {/* Training Program Card */}
          <article className="col-12 col-sm-6 mb-4">
            <div className="program-card training-program">
              <div className="card-content">
                <div className="text-content">
                  <h3>Training Program</h3>
                  <p style={{ width: "90%", textAlign: "justify", textJustify:'inter-word' }}>
                    Bridging the gap. Our inclusive training empowers teachers,
                    engages students, and equips parents to foster a
                    collaborative learning environment.
                  </p>
                  <Link to="/training" aria-label="Enroll in Training Program">
                    <button>Enroll now →</button>
                  </Link>
                </div>
                <div className="icon2">
                  <img src={training} alt="Training Icon" />
                </div>
              </div>
            </div>
          </article>

          {/* Sports Training Program Card */}
          <article className="col-12 col-sm-6 mb-4">
            <div className="program-card sports-training">
              <div className="card-content">
                <div className="text-content">
                  <h3>Sports Training</h3>
                  <p style={{ width: "90%", textAlign: "justify", textJustify:'inter-word' }}>
                    From the classroom to the playing field, our comprehensive
                    training nurtures athletic talent and fosters a love for
                    physical fitness.
                  </p>
                  <button>Enroll now →</button>
                </div>
                <div className="icon3">
                  <img src={sports} alt="Sports Training Icon" />
                </div>
              </div>
            </div>
          </article>

          {/* Services Program Card */}
          <article className="col-12 col-sm-6 mb-4">
            <div className="program-card development-program">
              <div className="card-content">
                <div className="text-content">
                  <h3>Services</h3>
                  <p style={{ width: "90%", textAlign: "justify", textJustify:'inter-word' }}>
                    From essential supplies to expert services, we support
                    schools in creating an inspiring effective learning
                    environment.
                  </p>
                  <Link to="/service" aria-label="Enroll in Services">
                    <button>Enroll now →</button>
                  </Link>
                </div>
                <div className="icon4">
                  <img src={development} alt="Development Services Icon" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="decorative-icons">
        <img src={tree} alt="Tree Icon" className="tree-icon" />
        <img src={rocket} alt="Rocket Icon" className="rocket-icon" />
        <img src={sun} alt="Sun Icon" className="sun-icon" />
      </div>
    </motion.section>
  );
};

export default Programs;
