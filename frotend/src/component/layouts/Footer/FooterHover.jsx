import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function FooterHover() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Paper
      className="footerback"
      sx={{
        p: 2,
        marginTop: "4.25rem",

        borderRadius: "10px",

        maxWidth: "100%",
        flexGrow: 1,
        boxShadow: "none",

        // backgroundColor: (theme) =>
        //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          style={{
            padding: "20px 40px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "'Roboto', sans-serif",
              color: "#FFFFFF",
            }}
          >
            Let’s Change, Learn, Grow, and Transform!
          </h1>
          <p
            style={{
              fontSize: "17px",
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
              color: "#FFFFFF",
              marginTop:"-10px"
            }}
          >
            Learning Needs offers a variety of boutique services, tailored to
            each clients need. Our specialized expertise allows the Individual,
            Institution, Schools and Organizations to achieve their objectives{" "}
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              border: "1px solid white",
              color: "#fff",
              background: "linear-gradient(45deg, #003E90, #003E90A2)",
              position: "relative",
              overflow: "hidden",
              transition: "0.3s",
              outline: "none",
              cursor: "pointer",
              marginTop: "10px",
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
