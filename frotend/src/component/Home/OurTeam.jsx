import React, { useEffect, useState } from "react";
import { CiInstagram } from "react-icons/ci";

import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

import "./OurTeam.css";

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://heroku-learningneeds-strapi.onrender.com/api/teams?populate=*");
        const data = await response.json();
        setTeamMembers(data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div id="model1">
      <div className="members">
        {teamMembers.map((member) => (
          <div className="member" key={member.id}>
            <img
              src={member.attributes.image.data.attributes.url}
              alt={member.attributes.Name}
              className="member-image"
            />
            <div className="description">
              <h1>{member.attributes.Name}</h1>
              <h2>{member.attributes.designation}</h2>
              <div className="social-media">
                <CiInstagram />
                <CiLinkedin />
                <CiFacebook />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
