import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Home/Welcome.css";
export default function Welcome() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Grid container spacing={2} style={{ width: "100%" }}>
      <Grid item xs={12} md={12} 
      // data-aos="fade-left"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="educate">
            <h3 className="app_heading" style={{fontSize:"36px"}}>Welcome to Learning Needs</h3>

            <p
              className="app_desc"
              style={{ fontSize: "15px", fontFamily: "'Roboto', sans-serif" }}
            >
              Necessity is the Mother of Invention, and this proverb perfectly
              defines the inception of Learning Needs. We believe all companies
              have one thing in common they survive and thrive by creating and
              maintaining satisfied customers through their people. The Learning
              Needs understands the importance of awakening, developing, and
              rewarding the greatness of a company's people through
              transformation. With our experience and expertise in leadership
              training, school consulting, teachers training, school start up,
              and Learning Needs customized product, we help organization to
              achieve their goals.
            </p>
            
            
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
