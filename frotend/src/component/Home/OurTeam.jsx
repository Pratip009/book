import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import "./OurTeam.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  const data = [
    {
      id: 1,
      name: "Rahul Singh",
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720681049/newq_c1efb3bdfe.jpg",
      position: "Founder/C.E.O",
      linkedinUrl: "",
      facebookUrl: "",
      instagramUrl: "",
    },
    {
      id: 2,
      name: "Ritu G Chopra",
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720679301/image_c958885324.png",
      position: "Chief Training Advisor",
      linkedinUrl: "",
      facebookUrl: "",
      instagramUrl: "",
    },
    {
      id: 3,
      name: "Dr. Anwesha Sengupta",
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720679167/Cropped_Image_4_b6e9f833ec.png",
      position: "Sr. Advisor",
      linkedinUrl: "",
      facebookUrl: "",
      instagramUrl: "",
    },
    {
      id: 4,
      name: "Dr. Arunangshu Ghosh",
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720593544/large_Cropped_Image_1_magicstudio_g4hqtn2jhxa_35530d24b6.png",
      position: "Sr. Advisor",
      linkedinUrl: "",
      facebookUrl: "",
      instagramUrl: "",
    },
  ];

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center"></MDBRow>
      <MDBRow className="d-flex justify-content-center align-items-center">
        {data.map((member) => (
          <MDBCol
            md="3"
            className="d-flex flex-column align-items-center"
            key={member.id}
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                src={member.image} // Adjusted to use the 'image' URL from your response structure
                alt={member.name} // Adjusted to use 'name' from your response structure
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">{member.name}</h5> {/* Adjusted for 'name' */}
            <h6 className="mb-2">{member.position}</h6>
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
