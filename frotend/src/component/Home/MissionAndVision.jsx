import React, { useState, useEffect } from "react";
import "./MissionAndVision.css";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import underline from "../../Image/home/underline.png";

const MissionAndVision = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          "https://learningneeds-strapi-11ta.onrender.com/api/noticeboards"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNotices(data.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="goals-container">
      <div className="teamstar-image"></div>
      <div className="throne-image"></div>
      <div className="hair-image"></div>
      <h2 className="goals-container-title">
        Goals And <span>Objective</span>
        <img src={underline} alt="underline" className="underline-image3" />
      </h2>

      <div className="row justify-content-center">
        {/* Vision Section */}
        <div className="col-12 col-md-5 goal-card vision-card">
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="goal-icon vision-icon"></div>
            </div>
            <div className="col-9">
              <h3 className="goal-title">Vision</h3>
              <p className="goal-text">
                Performance improvement in terms of a personal mission.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="col-12 col-md-5 goal-card mission-card">
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="goal-icon mission-icon"></div>
            </div>
            <div className="col-9">
              <h3 className="goal-title">Mission</h3>
              <p className="goal-text">
                For the success of our clients and their individual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Updates Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 update-card">
            <div className="update-header p-3">
              <h5 className="m-0">Updates</h5>
            </div>
            <div
              className="update-content p-4"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {notices.map((notice) => (
                <React.Fragment key={notice.id}>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <StarIcon fontSize="small" sx={{ color: "#FF4E00" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={notice.attributes.notices}
                      primaryTypographyProps={{
                        style: {
                          fontFamily: "Nunito",
                          color: "black",
                        },
                      }}
                      sx={{ marginLeft: 0 }}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
