import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
// import TermsImage from "../Image/about/terms.jpeg";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import PlayApp from "../component/Home/PlayApp.jsx";
// import FeaturedSlider from "./FeatureSlider";
import "aos/dist/aos.css";
import "./Aboutus.css";
import AOS from "aos";
import OurTeam from "../component/Home/OurTeam";
import Faq from "./Faq";
import TestimonialSlider from "../component/Home/TestimonialSlider.jsx";

const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    // background:`url(${"../Image/Cricket-wepon/hero1.jpg"})`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container_12: {
    // padding: "2rem",
    textAlign: "center",
    maxWidth: "80%",
    overflow: "hidden",
  },
  image_about: {
    width: "80%",
    height: "80%",

    marginBottom: "2rem",
    borderRadius: "10px",
  },
  title_about: {
    color: "#414141",
    fontSize: "36px",
    textAlign: "start",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    fontFamily: "Roboto",
    maxWidth: "800px",
    lineHeight: "1.5",
    // margin: "1.5rem 0",
    color: "#292929",
    fontSize: "19px",
    fontWeight: "400 !important",
    textAlign: "justify",
    // padding: "0.8rem 0",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  introText_about2: {
    lineHeight: "1.5",
    fontFamily: "'Montserrat', sans-serif",

    marginTop: "-20px",
    color: "#292929",
    fontSize: "0.9rem",
    fontWeight: "300 !important",
    textAlign: "justify",
    padding: "0.8rem 0",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#003E90 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#003E90 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <div style={{ marginTop: "-15px" }} data-aos="slide-down">
          <img src={require("../Image/learninabout.jpg")} alt="" />
        </div>
        <MetaData title={"About Us"} />
        {/* <Container
          className="about_ln"
          style={{ marginTop: "2rem" }}
        >
         
        
        </Container> */}
        <div
          className="about_ln"
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ maxWidth: "85%" }}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={6} data-aos="slide-right">
                <img
                  src={require("../Image/about/abb.png")}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>
              <Grid item xs={12} sm={6} data-aos="slide-left">
                {/* <h1
        style={{
          textAlign: "Start",
          marginTop: "3rem",
          fontFamily: "'Courgette', cursive",
        }}
      >
        About Learning Needs
      </h1> */}
                <div className="circle_text">
                  <h1
                    style={{
                      textAlign: "start",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  >
                    About <span className="highlight">Learning Needs</span>
                  </h1>
                </div>
                <p
                  variant="body1"
                  className=""
                  style={{
                    fontSize: "15px",
                    marginTop: "14px",
                    fontWeight: "400",
                    textAlign: "justify",
                    display: "inline-block",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Learning Needs is a training & management consulting company
                  based in Kolkata in the lap of nature beside river Ganges,
                  India. Learning Needs offers a variety of boutique services,
                  tailored to each clients need. Our specialized expertise
                  allows the Individual, Institution, Schools and Organizations
                  to achieve their objectives; we are very much committed to the
                  success of our clients and their individual
                </p>

                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#FF4E00",
                    display: "flex",
                  }}
                  variant="contained"
                >
                  Read More..
                </Button>
                {/* <Typography variant="body1" className={classes.introText_about}>
        Learning Needs was founded by Lokesh Samant, a talented cricket
        player who has represented the Under 16 and Under 19 teams.
        Lokesh started this business to support his expenses and
        received an overwhelming response. He has sold cricket equipment
        to more than 20,000 customers till date. Now, he aims to expand
        his business to an international level by launching his own
        website and introducing new and genuine cricket products at
        competitive prices.
      </Typography> */}
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          className="product_back"
          style={{ backgroundColor: "#FFFFFF", width: "100%" }}
        >
          <Container className={classes.container_12}>
            {/* Learning needs traits */}

            {/* <Traits /> */}

            <div className="circle_text" data-aos="slide-down">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                <span className="highlight">Learning Needs Traits</span>
              </h1>
              {/* <p className="non_important" style={{ textAlign: "Start" }}>
                {" "}
                <span class="circle-sketch-highlight">
                  Learning Needs Traits
                </span>
              </p> */}
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "2rem" }}
            >
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/increase.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    L-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    LEADERSHIP
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/bear.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    E-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    EFFECTIVENESS
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/best.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    A-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    ATTITUDE
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/family.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    R-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    RELATION
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/nego.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    N-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    NEGOTIATION
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-down">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/creative-brain.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    I-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    INNOVATION
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "2rem" }}
            >
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/you-can.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    N-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    NURTURE
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/tar.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    G-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    GOAL
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/inventory.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    N-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    NEEDFUL
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/warning.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    E-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    ESSENTIAL
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/dream.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    E-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    EXPECTATIONAL
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} md={2} data-aos="fade-up">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/developer.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    D-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    DEVELOPMENT
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <Grid item xs={4} md={5} data-aos="fade-left">
                <img
                  src={require("../Image/LUN.png")}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>

              <Grid item xs={4} md={2} data-aos="fade-left">
                <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                  {/* <Groups3Icon fontSize="large" /> */}
                  <img
                    src={require("../Image/24-hours-support.png")}
                    alt=""
                    style={{ height: "100px" }}
                  />

                  <Typography
                    style={{
                      color: "#FF4E00",
                      fontSize: "36px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    S-
                  </Typography>

                  <Typography
                    style={{
                      color: "#61677A",
                      fontSize: "15px",
                      fontFamily: "'Roboto', sans-serif",

                      fontWeight: "600",
                    }}
                  >
                    SERVICES
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={4} md={5} data-aos="fade-left">
                <img
                  src={require("../Image/LEAR.png")}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.container_12} style={{ width: "90%" }}>
          <div className="circle_text" data-aos="slide-left">
            <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              <span className="highlight">Our Team</span>
            </h1>
          </div>
          <span
            className="sub_headings"
            data-aos="slide-down"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px" }}
          >
            Learning Needs dedicated leadership team is focused on delivering
            quality service and leadership development
          </span>
          <span
            className="sub_headings"
            data-aos="slide-down"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px" }}
          >
            programs that exceed our clients’ expectations and help them achieve
            their goals.
          </span>
          <div className="ourteam_back">
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                spacing={4}
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={6} data-aos="slide-right">
                  <h2
                    style={{
                      textAlign: "Start",
                      marginTop: "0",
                      marginBottom: "10px",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "#FF4E00",
                    }}
                  >
                    With us , you can build yourself to achieve your goals
                  </h2>
                  <p variant="body1" className={classes.introText_about2}>
                    Learning Needs is committed to help its clients reach their
                    goals. By providing an innovative environment, which makes a
                    difference. Our strong sense of identification with client
                    projects means that we are constantly striving to provide
                    solutions, even for issues they aren’t yet aware of. To this
                    end, we adopt a progressive approach to technology and
                    marketing techniques. This sense of identification also
                    means we value and promote seamless interaction with
                    clients’ own teams, and ensure the best value is obtained
                    from their budget. Our long experience at the top of the
                    education and training business means we have expertise
                    which reaches across a number of sectors and schools. But we
                    know that things change, and we are constantly striving to
                    adapt and improve.
                  </p>

                  <Button
                    style={{
                      color: "#fff",
                      backgroundColor: "#FF4E00",
                      display: "flex",
                      marginTop: "-10px",
                    }}
                    variant="contained"
                  >
                    Read More..
                  </Button>
                  {/* <Typography variant="body1" className={classes.introText_about}>
                Learning Needs was founded by Lokesh Samant, a talented cricket
                player who has represented the Under 16 and Under 19 teams.
                Lokesh started this business to support his expenses and
                received an overwhelming response. He has sold cricket equipment
                to more than 20,000 customers till date. Now, he aims to expand
                his business to an international level by launching his own
                website and introducing new and genuine cricket products at
                competitive prices.
              </Typography> */}
                </Grid>

                <Grid item xs={12} sm={6} data-aos="slide-left">
                  <img
                    src={require("../Image/join-our-team.png")}
                    alt="Learning needs"
                    className={classes.image_about}
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="Our_Team">
            <OurTeam />
          </div>

          <Container
            className={classes.container_12}
            style={{ marginTop: "3rem" }}
          >
            {/* testimonials */}
            <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              <span className="highlight">Pride of Learning Needs</span>
            </h1>
            {/* <h2 className="clients_headings" >
              Clients sharing their experience
            </h2> */}
            <div className="circle_text" data-aos="fade-up">
              {/* <p className="non_important" style={{ textAlign: "Start" }}>
                Clients sharing their{" "}
                <span class="circle-sketch-highlight">experience</span>
              </p> */}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                Clients sharing their
                <span className="highlight"> experience</span>
              </h1>
            </div>
            <div>
              <TestimonialSlider />
            </div>

            <div style={{ marginTop: "6rem" }} className="play">
              <PlayApp />
            </div>
          </Container>
          <Container className="faq" style={{ marginTop: "3rem" }}>
            <div className="circle_text" data-aos="fade-down">
              {/* <p className="non_important" style={{ textAlign: "Start" }}>
                Frequently Asked{" "}
                <span class="circle-sketch-highlight">Questions</span>
              </p> */}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                Frequently Asked
                <span className="highlight"> Questions</span>
              </h1>
            </div>

            <Faq />
          </Container>
          <Container className="founder" style={{ marginTop: "3rem" }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6}>
                {/* <h1
                style={{
                  textAlign: "Start",
                  marginTop: "3rem",
                  fontFamily: "'Courgette', cursive",
                }}
              >
                About Learning Needs
              </h1> */}
                <div className="circle_text" data-aos="fade-down">
                  <h1
                    style={{
                      textAlign: "start",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  >
                    <span className="highlight"> Founder's Message</span>
                  </h1>
                </div>
                <p
                  variant="body1"
                  className={classes.introText_about}
                  style={{ fontSize: "15px" }}
                  data-aos="slide-right"
                >
                  Consulting means different things to different people. For us,
                  it is about being a trusted advisor that helps clients chart
                  and walk the path to sustained success. We are not a solution
                  looking for a problem—we see every projects and situation as
                  unique. Our custom-tailored consulting engagements are based
                  on deep listening and decades of experience across industries
                  and issues. The solutions we craft are practical, realistic,
                  and highly effective. We pride ourselves on having a seasoned
                  and multidisciplinary team that can thoughtfully guide,
                  support, and motivate leaders, teachers and organizations to
                  achieve levels of performance they never have before.
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontWeight: "500",
                    margin: "0",
                    padding: "0",
                  }}
                  data-aos="slide-right"
                >
                  With all the best wishes!
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontWeight: "600",
                    margin: "0",
                    padding: "0",
                    color: "orange",
                  }}
                  data-aos="slide-right"
                >
                  Rahul Singh
                </p>

                {/* <Typography variant="body1" className={classes.introText_about}>
                Learning Needs was founded by Lokesh Samant, a talented cricket
                player who has represented the Under 16 and Under 19 teams.
                Lokesh started this business to support his expenses and
                received an overwhelming response. He has sold cricket equipment
                to more than 20,000 customers till date. Now, he aims to expand
                his business to an international level by launching his own
                website and introducing new and genuine cricket products at
                competitive prices.
              </Typography> */}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                data-aos="slide-left"
                className="founder"
              >
                <img
                  src={require("../Image/founder.jpg")}
                  style={{ width: 400, height: 400 }}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>
            </Grid>
          </Container>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
