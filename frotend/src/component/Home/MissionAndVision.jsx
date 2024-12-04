import React, { useState, useEffect } from "react";
import "./MissionAndVision.css";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import underline from "../../Image/home/underline.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
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
    <motion.section
      className="goals-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Section for Goals and Objectives */}
      <header className="goals-header">
        <h2
          className="goals-container-title"
          style={{
            position: "relative",
            zIndex: "2",
          }}
        >
          Goals And Objective
        </h2>
        <img src={underline} alt="underline" className="underline-image3" />
      </header>

      <div className="row justify-content-center">
        {/* Vision Section */}
        <section
          className="col-12 col-md-5 goal-card vision-card"
          aria-labelledby="vision"
        >
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="goal-icon vision-icon" aria-hidden="true"></div>
            </div>
            <div className="col-9">
              <h3 id="vision" className="goal-title">
                Vision
              </h3>
              <p className="goal-text">
                Performance improvement in terms of a personal mission.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          className="col-12 col-md-5 goal-card mission-card"
          aria-labelledby="mission"
        >
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="goal-icon mission-icon" aria-hidden="true"></div>
            </div>
            <div className="col-9">
              <h3 id="mission" className="goal-title">
                Mission
              </h3>
              <p className="goal-text">
                For the success of our clients and their individual.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section for Updates */}
      <section
        className="container mt-4 mb-3"
        style={{
          padding: 0,
        }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 update-card">
            <header className="update-header p-3">
              <h5 className="m-0">Updates</h5>
            </header>
            <div
              className="update-content p-1"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <ul style={{
                padding:0
              }}>
                {notices.map((notice) => (
                  <li key={notice.id}>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <StarIcon fontSize="small" sx={{ color: "#FF4E00" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={notice.attributes.notices}
                        primaryTypographyProps={{
                          style: {
                            fontSize: "18px",
                            fontFamily: "Nunito",
                            color: "black",
                          },
                        }}
                        sx={{ marginLeft: 0 }}
                      />
                    </ListItem>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default MissionAndVision;
