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
                  <p>Lorem Ipsum dolor sit uierdf fnsjfna</p>
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
                  <p>Lorem Ipsum dolor sit uierdf fnsjfna</p>
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
                  <p>Lorem Ipsum dolor sit uierdf fnsjfna</p>
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
                  <h3>Development Program</h3>
                  <p>Lorem Ipsum dolor sit uierdf fnsjfna</p>
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
