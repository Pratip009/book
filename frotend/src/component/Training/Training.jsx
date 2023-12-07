import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
            <p
              style={{
                fontWeight: "600",
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
                display: "inline-block",
              }}
              data-aos="fade-down"
            >
              "Soft skills’ Behavioural Shift training is essential because we
              do not have it in our academic curricula. However it can be
              developed through continuous training."
            </p>
            <p
              data-aos="slide-right"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
                display: "inline-block",
              }}
            >
              Our skill based training programs are designed to encourage
              ‘awareness’ in one’s behavioural patterns. Learning Needs
              international quality Training & Development Programs are designed
              to help today’s aspiring professionals to succeed in an ever
              increasing competitive and diverse business environment.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-aos="fade-down"
            >
              <p className="non_important">
                List of <span class="circle-sketch-highlight"> programs </span>
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
              <p
                style={{
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
              <Grid item xs={3}>
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
                    }}
                  >
                    Effective Communication
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Success with Change
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Anger Management
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
                    }}
                  >
                    Peak Performance
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Complaint Handling
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Dealing with Difficult Situations
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
                    }}
                  >
                    Leadership Innovation
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Questioning Skills
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Presentation Skills
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
                    }}
                  >
                    Multipurpose Theme
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Public Speaking
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Time Management
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
                    }}
                  >
                    Power of Influence
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    Customer Service Excellence
                  </span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span style={{
                
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
                display: "inline-block",
              }}>Multipurpose Theme</span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <StarIcon style={{ color: "orange" }} />
                  <span style={{
                
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
                display: "inline-block",
              }}>Think Your Way to Success</span>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <div style={{ marginTop: "7rem" }}>
                <img src={require("../../Image/Challenges1neww.png")} alt="" />
              </div>
            </Grid>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="non_important" data-aos="slide-right">
                Our <span class="circle-sketch-highlight"> Strengths </span>{" "}
              </p>
            </div>

            <div>
              <TabList />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              data-aos="slide-right"
            >
              <p className="non_important">
                Way we <span class="circle-sketch-highlight"> deliver </span>{" "}
                our session
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-aos="slide-left"
            >
              <img src={require("../../Image/inb3new.png")} alt="" />
            </div>
            
          </div>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </div>
  );
};

export default Training;
