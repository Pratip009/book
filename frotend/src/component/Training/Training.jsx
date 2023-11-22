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
            <p style={{fontWeight:"600",fontStyle:"italic"}} data-aos="fade-down">
              "Soft skills’ Behavioural Shift training is essential because we
              do not have it in our academic curricula. However it can be
              developed through continuous training."
            </p>
            <p data-aos="slide-right">
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
              <p>
                There are many different programs offered by Learning Needs that
                will enhance your career in a positive way
              </p>
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{marginTop:"1rem"}}
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Effective Communication</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Success with Change</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Anger Management</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Assertiveness in Action</span>
                </div>
              </Grid>
              </Grid>
              {/* 2nd row */}
              <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{marginTop:"1rem"}}
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Peak Performance</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Complaint Handling</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Dealing with Difficult Situations</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Listening Skills</span>
                </div>
              </Grid>
              </Grid>
              {/* 3rd row */}
              <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{marginTop:"1rem"}}
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Leadership Innovation</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Questioning Skills</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Presentation Skills</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Team Building</span>
                </div>
              </Grid>
              </Grid>
              {/* th row */}
              <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{marginTop:"1rem"}}
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Multipurpose Theme</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Public Speaking</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Time Management</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Effective Meetings</span>
                </div>
              </Grid>
              </Grid>
              {/* 5th row */}
              <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{marginTop:"1rem"}}
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Power of Influence</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Customer Service Excellence</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Multipurpose Theme</span>
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
                  <StarIcon style={{color:"orange"}}/>
                  <span>Think Your Way to Success</span>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}  data-aos="fade-up">
          <div style={{ marginTop: "7rem" }}>
            <img
              src={require("../../Image/Challenges2.jpg")}
              alt=""
            />
          </div>
        </Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"2rem"
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
              <img src={require("../../Image/inb3.jpg")} alt="" />
            </div>
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
          </div>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </div>
  );
};

export default Training;
