import React from "react";
import "aos/dist/aos.css";
import "./Training.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "200px", // Adjust height for small screens
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px", // Adjust height for extra small screens
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
}));
const Training = () => {
  const classes = useStyles();
  return (
    <div
      style={{ width: "100%", backgroundColor: "white", overflowX: "hidden" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <div className={classes.imageContainer}>
            <img
              src={require("../../Image/trA011.png")}
              alt="About"
              className={classes.image}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <div>
              <p
                style={{
                  fontWeight: "600",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "center",

                  fontSize: "17px",
                }}
              >
                Soft skills’ Behavioural Shift training is essential because we
                do not have it in our academic curricula.
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "center",
                  fontSize: "17px",
                }}
              >
                However it can be developed through continuous training.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "400",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                }}
              >
                Our skill based training programs are designed to encourage
                ‘awareness’ in one’s behavioural patterns. Learning Needs
                international quality Training & Development Programs are
                designed to help today’s aspiring professionals to succeed in an
                ever increasing competitive and diverse business environment.
              </p>
            </div>

            <div className="circle_text">
              <h1>
                List of <span className="highlight">Programs</span>{" "}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                }}
              >
                There are many different programs offered by Learning Needs that
                will enhance your career in a positive way
              </p>
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "1rem" }}
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Effective Communication
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Success with Change
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Anger Management
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Assertiveness in Action
                  </span>
                </div>
              </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "1rem" }}
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Peak Performance
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Complaint Handling
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Dealing with Difficult Situations
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    {" "}
                    Listening Skills
                  </span>
                </div>
              </Grid>
            </Grid>
            {/* 3rd row */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "1rem" }}
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Leadership Innovation
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Questioning Skills
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Presentation Skills
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      fontSize: "17px",
                      display: "inline-block",
                    }}
                  >
                    Team Building
                  </span>
                </div>
              </Grid>
            </Grid>
            {/* th row */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "1rem" }}
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Multipurpose Theme
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Public Speaking
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Time Management
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Effective Meetings
                  </span>
                </div>
              </Grid>
            </Grid>
            {/* 5th row */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "1rem" }}
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Power of Influence
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Customer Service Excellence
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Multipurpose Theme
                  </span>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} sx={{ fontSize: 24 }} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                    }}
                  >
                    Think Your Way to Success
                  </span>
                </div>
              </Grid>
            </Grid>

            <Container style={{ padding: 0, margin: 0 }}>
              <div style={{ marginTop: "2rem" }}>
                <img src={require("../../Image/train1.png")} alt="" />
              </div>
            </Container>

            <div className="circle_text">
              <h1>
                Our <span className="highlight">Strength</span>{" "}
              </h1>
            </div>
            <div>
              <TabList />
            </div>

            <div className="circle_text">
              <h1>
                Way we <span className="highlight">deliver</span>our session{" "}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={require("../../Image/sssa1233.png")} alt="" />
            </div>
          </Container>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </div>
  );
};

export default Training;
