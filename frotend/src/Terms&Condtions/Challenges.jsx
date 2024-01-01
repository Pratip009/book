import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import "./Challenges.css";

export default function Challenges() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LegendToggleIcon fontSize="large" style={{ color: "#FF4E00" }} />{" "}
            &nbsp;
            <h4 className="challeges_header">Challenges</h4>
          </div>
          <div className="challenge_text">
            <p>1. employees need more than just an education or hard skills.</p>
            <p>
              2. Business people need the competitive edge that a refined
              leadership aptitude provides.
            </p>
            <p>
              3. Our courses are meticulously designed to improve the
              performance in terms of personal mission.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmojiObjectsIcon fontSize="large" style={{ color: "#FF4E00" }} />{" "}
            &nbsp;
            <h4 className="challeges_header">Solutions</h4>
          </div>
          <div className="challenge_text">
            <p>
              1. Soft skills / complementary skills are awareness of their
              presence or lack of their presence in one’s behavioural pattern.
            </p>
            <p>
              2. Understanding or awareness of soft skills makes any individual
              ‘indispensible’ part of the organization.
            </p>
            <p>
              3. Corporations spend time and money in developing their work
              force to suit the organizations need.
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
