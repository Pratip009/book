import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./OurTeam.css";

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch("/api/v1/team");
      const data = await response.json();
      setTeamMembers(data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  useEffect(() => {
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
            key={member._id}
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">{member.name}</h5>
            <h6 className="mb-2">{member.role}</h6>
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
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" style={{ color: "#0e76a8" }} />
              </a>
              <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" style={{ color: "#E1306C" }} />
              </a>
              <a href={member.facebookUrl} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="social-icon" style={{ color: "#1877F2" }} />
              </a>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}