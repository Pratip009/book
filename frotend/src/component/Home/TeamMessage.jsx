import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AOS from "aos";
import "aos/dist/aos.css";
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
      sx={{
        p: 2,
        marginBottom: "5rem",
        background: "transparent",
        borderRadius: "10px",

        maxWidth: "100%",
        flexGrow: 1,
        boxShadow: "none",
        border: "4px solid #ffffff",

        // backgroundColor: (theme) =>
        //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sm container data-aos="fade-right">
          <ButtonBase xs={{ width: 128, height: 128 }}>
            <Img src={require("../../Image/discussion.png")} alt="complex" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} md={8} sm container>
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
            className="message_section"
          >
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                data-aos="fade-left"
              >
                <h1
                  className="Team_text"
                  style={{ color: "white", fontSize: 35 }}
                >
                  Team Message
                </h1>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <p
                  className="team_message"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "300",
                    color: "white",
                    textAlign: "justify",
                    fontSize: 16,
                  }}
                  data-aos="fade-left"
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
                </p>{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "white",
                  fontSize: 16,
                }}
                variant="body2"
                className="bottom_team_text"
                data-aos="fade-left"
              >
                Team Learning Needs- we deliver transformation
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
