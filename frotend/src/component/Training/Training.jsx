import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Training.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
import StarIcon from "@mui/icons-material/Star";
const Training = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      style={{ width: "100%", backgroundColor: "white", overflowX: "hidden" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <div style={{ marginTop: "7rem" }}>
            <img
              src={require("../../Image/breadcrumbnew/training.jpg")}
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="container___">
            <div>
              <p
                style={{
                  fontWeight: "600",
                  fontFamily: "'Roboto', sans-serif",
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
                  fontFamily: "'Roboto', sans-serif",
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
                  fontFamily: "'Roboto', sans-serif",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-aos="fade-up"
            >
              {/* <p className="non_important">
                List of <span class="circle-sketch-highlight"> programs </span>
              </p> */}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                List of <span className="highlight">Programs</span>
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-aos="fade-up"
            >
              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "'Roboto', sans-serif",
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
              data-aos="fade-up"
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
              data-aos="fade-up"
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
              data-aos="fade-up"
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
              data-aos="fade-up"
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
              data-aos="fade-up"
            >
              <Grid item md={3} xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
                  <StarIcon style={{ color: "orange" }} />
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
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
            <Grid item xs={12} data-aos="fade-up">
              <div style={{ marginTop: "2rem" }}>
                <img src={require("../../Image/train1.png")} alt="" />
              </div>
            </Grid>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <p className="non_important" data-aos="slide-right">
                Our <span class="circle-sketch-highlight"> Strengths </span>{" "}
              </p> */}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                Our <span className="highlight">Strength</span>
              </h1>
            </div>

            <div>
              <TabList />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-2rem",
              }}
              data-aos="slide-right"
            >
              {/* <p className="non_important">
                Way we <span class="circle-sketch-highlight"> deliver </span>{" "}
                our session
              </p> */}

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                Way we <span className="highlight">deliver </span>our session
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-aos="slide-left"
            >
              <img src={require("../../Image/sssa.png")} alt="" />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </div>
  );
};

export default Training;
