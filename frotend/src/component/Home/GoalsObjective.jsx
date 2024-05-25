import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GoalsObjective.css";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
export default function GoalsObjective() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Grid container spacing={2} style={{ width: "100%" }}>
      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* <CardMedia
            component="img"
            sx={{ width: 500, height: 500 }}
            image={appp}
          /> */}
          <img
            src={require("../../Image/dart.png")}
            alt="App"
            style={{ width: "100%", height: "100%" }}
            // data-aos="fade-right"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="educate">
            <Card
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                marginBottom: "-18px",
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
                    style={{
                      fontSize: 15,
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    VISION
                  </span>
                }
                subheader="To provide the best quality service and products to our customer and clients."
                action={<IconButton>{/* <ThumbUpIcon/> */}</IconButton>}
              />
            </Card>
            <Card style={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: "#FF4E00" }}>
                    <MarkUnreadChatAltIcon fontSize="large" />
                  </Avatar>
                }
                title={
                  <span
                    style={{
                      fontSize: 15,
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    MISSION
                  </span>
                }
                subheader="Conducting ourselves with honesty and responsibility.
                "
              />
            </Card>
            <h3
              className="app_heading"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "36px" }}
            >
              Future Target Innovation{" "}
            </h3>
            <div className="educate_desc_div">
              <span
                className="educate_desc"
                style={{
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
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

// {/* <CardMedia
//           component="img"
//           sx={{ width: 500, height: 500 }}
//           image={appp}
//           alt="app"
//         /> */}
