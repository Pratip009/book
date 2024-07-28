import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TeamMessage.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function TeamMessage() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Paper
      className="teamback"
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
        <Grid item xs={12} md={4}>
          <ButtonBase sx={{ width: "100%", height: "auto" }}>
            <Img src={require("../../Image/discussion.png")} alt="discussion" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction="column"
            spacing={2}
            className="message_section"
          >
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h4" // Adjusted to be more responsive
                component="div"
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: { xs: "center", sm: "left" }, // Responsive text alignment
                }}
              >
                Team Message
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p
                  className="team_message"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "300",
                    color: "white",
                    textAlign: "justify",
                    fontSize: { xs: "14px", sm: "15px" }, // Responsive font size
                  }}
                >
                  We share an enthusiasm for the kind of great learning made
                  possible by skilful and committed training. Specializing in
                  school start up and development projects, we work as a team to
                  provide a full range of personalized advice and training to
                  our clients. Our team is fluent in the languages of strategy,
                  business performance, leadership, and interpersonal dynamics.
                  We have worked extensively with large and small organizations
                  and schools, both as leaders and as senior-level consultants
                  brought in to rethink strategy, redesign structure, amplify
                  execution, and catalyze change. Our job is to mobilize our
                  clients’ internal capacities to create change that is lasting
                  and meaningful. With all the best wishes!
                </p>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "white",
                  fontWeight: "500",
                  fontSize: { xs: "12px", sm: "15px" }, // Responsive font size
                  textAlign: { xs: "center", sm: "left" }, // Responsive text alignment
                }}
                variant="body2"
                className="bottom_team_text"
              >
                Team Learning Needs - We facilitate transformation
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
