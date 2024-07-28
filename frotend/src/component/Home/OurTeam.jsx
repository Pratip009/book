import React, { useEffect, useState } from "react";
import { getTeam } from "../../GlobalApi"; // Adjust the path as necessary
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTeam.css";

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Fetch team members data from Strapi
    const fetchTeamMembers = async () => {
      try {
        const response = await getTeam();
        setTeamMembers(response.data.data);
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
                <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
