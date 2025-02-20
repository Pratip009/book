import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

export default function FooterHover() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Paper
      className="footerback"
      sx={{
        p: 2,
        pt: 4, // Adds more padding at the top by default
        marginTop: "4.25rem",
        borderRadius: "10px",
        maxWidth: "100%",
        flexGrow: 1,
        boxShadow: "none",
        // Use theme breakpoints for responsive padding
        padding: {
          xs: "16px", // Default padding
          sm: "32px", // Increased padding on sm and up
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={9} // Adjust grid sizing for responsiveness
          sx={{
            padding: "20px 40px",
            // Responsive font size for the title
            "& h1": {
              fontSize: {
                xs: "24px", // Smaller screens
                sm: "36px", // Larger screens
              },
            },
            // Responsive font size for the paragraph
            "& p": {
              fontSize: {
                xs: "14px", // Smaller screens
                sm: "17px", // Larger screens
              },
            },
          }}
        >
          <h1
            style={{
              fontWeight: "600",
              fontFamily: "Nunito",
              color: "#FFFFFF",
              fontSize: "35px",
            }}
          >
            Let’s Change, Learn, Grow, and Transform!
          </h1>
          <p
            style={{
              fontFamily: "Nunito",
              textAlign: "justify",
              display: "inline-block",
              color: "#FFFFFF",
              marginTop: "-10px",
            }}
          >
            Learning Needs offers a variety of boutique services, tailored to
            each client's need. Our specialized expertise allows the Individual,
            Institution, Schools, and Organizations to achieve their objectives.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3} // Adjust grid sizing for responsiveness
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              border: "1px solid white",
              color: "#fff",
              background: "linear-gradient(45deg, #003E90, #003E90A2)",
              transition: "0.3s",
              marginTop: "10px",
              // Adjust button padding and font size responsively
              padding: {
                xs: "8px 16px", // Smaller screens
                sm: "10px 20px", // Larger screens
              },
              fontSize: {
                xs: "0.75rem", // Smaller screens
                sm: "0.875rem", // Larger screens
              },
            }}
            variant="contained"
          >
            Get Started..
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
