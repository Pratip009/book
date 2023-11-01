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
            src={require("../../Image/Cricket-wepon/aboutus1.jpg")}
            alt="App"
            style={{ height: "auto" }}
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
            <h3
              className="app_heading"
              style={{ fontFamily: "'Saira Condensed', sans-serif" }}
            >
              ABOUT OUR FUTURE TARGET
            </h3>
            <div className="educate_desc_div">
              <span className="educate_desc">
                Our future target is to provide training, information,
                resources, support and guidance for a variety of groups
                including: school owners, businessman, young people who are at
                or have recently left school, adults looking to expand their
                skills, educators, employers, and parents.
              </span>
            </div>

            <Card style={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: "#02a1e5" }}>
                    <PsychologyIcon fontSize="large" />
                  </Avatar>
                }
                title={
                  <span
                    style={{
                      fontSize: 16,
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Saira Condensed', sans-serif",
                    }}
                  >
                    WHAT DO WE HAVE TO DO
                  </span>
                }
                subheader="Performance improvement in terms of a personal mission."
                action={<IconButton>{/* <ThumbUpIcon/> */}</IconButton>}
              />
              {/* <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nisi, reiciendis sapiente. Ratione nobis aliquid magni 
                        consequuntur mollitia iure nesciunt nam perspiciatis nulla 
                        molestias sint ipsam sed, nihil doloribus dolore facere
                        architecto 
                        minima!
                    </Typography>
                </CardContent> */}
            </Card>
            <Card style={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: "#f58c00" }}>
                    <MarkUnreadChatAltIcon fontSize="large" />
                  </Avatar>
                }
                title={
                  <span
                    style={{
                      fontSize: 16,
                      color: "#1B1A1A",
                      fontWeight: "600",
                      fontFamily: "'Saira Condensed', sans-serif",
                    }}
                  >
                    AND DO WE DO THIS
                  </span>
                }
                subheader="For the success of our clients and their individual.
                "
                // action={<IconButton>{<MarkUnreadChatAltIcon />}</IconButton>}
              />
              {/* <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nisi, reiciendis sapiente. Ratione nobis aliquid magni 
                        consequuntur mollitia iure nesciunt nam perspiciatis nulla 
                        molestias sint ipsam sed, nihil doloribus dolore facere
                        architecto 
                        minima!
                    </Typography>
                </CardContent> */}
            </Card>
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
