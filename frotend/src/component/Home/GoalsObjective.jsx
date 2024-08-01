import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GoalsObjective.css";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import dartImage from "../../Image/dart.png";

export default function GoalsObjective() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Grid container spacing={2} style={{ width: "100%" }}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={dartImage}
            alt="App"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div className="goals-objective-content">
            <Card
              className="goals-objective-card"
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                marginBottom: "-18px",
                width: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: "#003E90" }}>
                    <PsychologyIcon fontSize="large" />
                  </Avatar>
                }
                title={
                  <span
                    className="goals-objective-title"
                    style={{
                      fontSize: "1rem",
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    VISION
                  </span>
                }
                subheader="To provide the best quality service and products to our customer and clients."
                action={<IconButton>{/* <ThumbUpIcon/> */}</IconButton>}
              />
            </Card>
            <Card
              className="goals-objective-card"
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                width: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: "#FF4E00" }}>
                    <MarkUnreadChatAltIcon fontSize="large" />
                  </Avatar>
                }
                title={
                  <span
                    className="goals-objective-title"
                    style={{
                      fontSize: "1rem",
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    MISSION
                  </span>
                }
                subheader="Conducting ourselves with honesty and responsibility."
              />
            </Card>
            <h3
              className="goals-objective-heading"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem" }}
            >
              Future Target Innovation
            </h3>
            <div className="goals-objective-desc-container">
              <span
                className="goals-objective-desc"
                style={{
                  fontSize: "1rem",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                }}
              >
                Challenging ourselves to create unique ideas and innovative
                solutions in a technology rich environment to develop the human
                potentials to achieve different opportunities in future to
                enhance the new learning process.
              </span>
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
