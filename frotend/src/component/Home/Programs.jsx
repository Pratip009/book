import React from "react";
import "./Programs.css"; // Create this CSS file for styling
import rocket from "../../Image/programs/rocket.png";
import sun from "../../Image/programs/sun.png";
import tree from "../../Image/programs/tree.png";
import school from "../../Image/programs/school.png";
import training from "../../Image/programs/training.png";
import sports from "../../Image/programs/sports.png";
import development from "../../Image/programs/development.png";
import underlineImage from "../../Image/home/underline.png";

const Programs = () => {
  return (
    <div className="programs-container">
      <h2>Explore Our Programs</h2>
      <img src={underlineImage} alt="Underline" className="underline-image" />
      <div className="Newcontainer">
        <div className="row programs-grid">
          <div className="col-12 col-sm-6 mb-4">
            <div className="program-card school-management">
              <div className="card-content">
                <div className="text-content">
                  <h3>School Management Services</h3>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      From vision to reality:
                    </span>{" "}
                    Expert school management guides you through every step of
                    establishing a thriving educational institution.
                  </p>
                  <button>Enroll now →</button>
                </div>
                <div className="icon12">
                  <img src={school} alt="School Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4">
            <div className="program-card training-program">
              <div className="card-content">
                <div className="text-content">
                  <h3>Training Program</h3>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      Bridging the gap:{" "}
                    </span>
                    Our inclusive training empowers teachers, engages students,
                    and equips parents to foster a collaborative learning
                    environment.
                  </p>
                  <button>Enroll now →</button>
                </div>
                <div className="icon2">
                  <img src={training} alt="Training Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4">
            <div className="program-card sports-training">
              <div className="card-content">
                <div className="text-content">
                  <h3>Sports Training</h3>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      From the classroom to the playing field
                    </span>
                    , our comprehensive training nurtures athletic talent and
                    fosters a love for physical fitness
                  </p>
                  <button>Enroll now →</button>
                </div>
                <div className="icon3">
                  <img src={sports} alt="Sports Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4">
            <div className="program-card development-program">
              <div className="card-content">
                <div className="text-content">
                  <h3>Services</h3>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      From essential supplies to expert services
                    </span>
                    , we support schools in creating an inspiring and effective
                    learning environment.
                  </p>
                  <button>Enroll now →</button>
                </div>
                <div className="icon4">
                  <img src={development} alt="Development Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={tree} alt="Tree" className="tree-icon" />
      <img src={rocket} alt="Rocket" className="rocket-icon" />
      <img src={sun} alt="Sun" className="sun-icon" />
    </div>
  );
};

export default Programs;
