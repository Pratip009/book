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

        borderRadius: "10px",
        maxWidth: "100%",
        flexGrow: 1,
        boxShadow: "none",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ButtonBase sx={{ width: "100%", height: "auto" }}>
            <Img
              src={require("../../Image/discussion.png")}
              alt="discussion"
              className="team_img"
              width={250}
              height={250}
            />
          </ButtonBase>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  color: "white",
                  fontSize: "var(--font-h2)",
                  fontWeight: "700",
                  fontFamily: "Nunito",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Team Message
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Nunito",
                    fontWeight: "300",
                    fontSize: "var(--font-span)",
                    color: "white",
                    textAlign: "justify",
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
                  fontFamily: "Nunito",
                  color: "white",
                  fontWeight: "500",
                  fontSize: "var(--font-span)",
                  textAlign: { xs: "center", sm: "left" },
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
