import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";
import "./OurTeam.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          "https://render-learningneeds.onrender.com/api/teams?populate=*"
        );
        const data = await response.json();
        setTeamMembers(data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center"></MDBRow>
      <MDBRow className="d-flex justify-content-center align-items-center">
        {teamMembers.map((member) => (
          <MDBCol
            md="3"
            className="d-flex flex-column align-items-center"
            key={member.id}
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                src={member.attributes.image.data.attributes.url}
                alt={member.attributes.Name}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">{member.attributes.Name}</h5>
            <h6 className="mb-2">{member.attributes.designation}</h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-2"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
            <div className="social-media mt-3 mb-4">
              <FaLinkedin
                className="social-icon"
                style={{ color: "#1DA1F2" }}
              />
              <FaSquareInstagram
                className="social-icon"
                style={{ color: "#E1306C" }}
              />
              <FaFacebookSquare
                className="social-icon"
                style={{ color: "#1877F2" }}
              />
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
