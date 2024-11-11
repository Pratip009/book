import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./Training.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
import Banner from "../Banner";
import mainImg from "../../Image/Product/trainingImg.png";
import pattern from "../../Image/Product/Frame 20.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <container-fluid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <container-fluid>
            <Banner
              title="Get the Help You Need"
              mainImage={mainImg}
              iconLeft={bookImg}
              backgroundPattern={pattern}
              iconRight={star}
            />
          </container-fluid>
        </Grid>
        <Grid item xs={12}>
          <Container style={{ marginTop: "2rem" }}>
            <div>
              <p
                style={{
                  fontWeight: "600",
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "center",

                  fontSize: "var(--font-span)",
                }}
              >
                Soft skills’ Behavioural Shift training is essential because we
                do not have it in our academic curricula.
                <br />
                However it can be developed through continuous training.
              </p>

              <p
                style={{
                  fontSize: "var(--font-span)",
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
              <h1
                style={{
                  fontSize: "var(--font-h2)",
                  marginTop: "2rem",
                  fontWeight: 700,
                }}
              >
                <span className="highlight">List of Programs</span>{" "}
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
                  fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
                    }}
                  >
                    Dealing Difficult Situations
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
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
                  <StarIcon
                    style={{ color: "orange" }}
                    sx={{ fontSize: "var(--font-p)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "var(--font-span)",
                    }}
                  >
                    Think Your Way to Success
                  </span>
                </div>
              </Grid>
            </Grid>

            <Container style={{ padding: 0, margin: 0 }}>
              <div style={{ marginTop: "2rem" }}>
                <img src={require("../../Image/train2.png")} alt="" />
              </div>
            </Container>

            <div className="circle_text">
              <h1
                style={{
                  fontSize: "var(--font-h2)",
                  marginTop: "2rem",
                  fontWeight: 700,
                }}
              >
                <span className="highlight">Our Strength</span>{" "}
              </h1>
            </div>
            <div>
              <TabList />
            </div>

            <div className="circle_text">
              <h1
                style={{
                  fontSize: "var(--font-h2)",
                  marginTop: "2rem",
                  fontWeight: 700,
                }}
              >
                <span className="highlight">Way we deliver our session</span>{" "}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <img src={require("../../Image/sssa1233.png")} alt="" />
            </div>
          </Container>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </container-fluid>
  );
};

export default Training;
