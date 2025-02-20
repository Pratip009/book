import React from "react";
import student from "../../Image/home/student.png";
import graph from "../../Image/home/graph.png";
const Challenges = () => {
  return (
    <div className="container-fluid py-4 mt-4">
      <div className="row d-flex align-items-stretch">
        {/* Challenges Section */}
        <div className="col-md-6 mb-3 d-flex">
          <div
            className="p-4 border rounded position-relative flex-grow-1"
            style={{ backgroundColor: "#B6E3DF" }}
          >
            <h5
              className="mb-3"
              style={{
                fontFamily: "Nunito",
                fontSize: "33px",
                lineHeight: "39.6px",
                fontWeight: 700,
                color: "#1F1F1F",
              }}
            >
              Challenges
            </h5>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                width: "90%",
              }}
            >
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Motivated employees need more than just an education or hard
                skills.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Business people need the competitive edge that a refined
                leadership aptitude provides.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Our courses are meticulously designed to improve performance in
                terms of personal mission.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Recognizing one’s own strengths and weaknesses can be difficult.
                Many people struggle to see how their behaviors impact others.
              </li>
            </ul>
            <div
              className="position-absolute"
              style={{
                top: "10px",
                right: "10px",
                width: "90px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "50%",
              }}
            >
              <img
                src={graph} // Replace this with the actual image path
                alt="Chart"
                style={{
                  width: "70%", // Adjust size as needed
                  height: "70%", // Adjust size as needed
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="col-md-6 mb-3 d-flex">
          <div
            className="p-4 border rounded position-relative flex-grow-1"
            style={{ backgroundColor: "#C3DDFF" }}
          >
            <h5
              className="mb-3"
              style={{
                fontFamily: "Nunito",
                fontSize: "33px",
                lineHeight: "39.6px",
                fontWeight: 700,
                color: "#1F1F1F",
              }}
            >
              Solutions
            </h5>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                width: "90%",
              }}
            >
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Soft skills / complementary skills are awareness of their
                presence or lack of their presence in one’s behavioural pattern.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Understanding or awareness of soft skills makes any individual
                ‘indispensible’ part of the organization.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Corporations spend time and money in developing their work force
                to suit the organizations need.
              </li>
              <li
                className="mb-2"
                style={{
                  fontFamily: "Nunito",
                  color: "#000000",
                  fontSize: "16px",
                }}
              >
                Individuals need to invest in developing soft skills to excel
                pragmatically in all areas of their choice.
              </li>
            </ul>
            <div
              className="position-absolute"
              style={{
                top: "10px",
                right: "10px",
                width: "90px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "50%",
              }}
            >
              <img
                src={student} // Replace this with the actual image path
                alt="Chart"
                style={{
                  width: "70%", // Adjust size as needed
                  height: "70%", // Adjust size as needed
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
