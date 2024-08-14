import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import PlayApp from "../component/Home/PlayApp.jsx";
import "./Aboutus.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurTeam from "../component/Home/OurTeam";
import Faq from "./Faq";
import TestimonialSlider from "../component/Home/TestimonialSlider.jsx";
import increaseImg from "../Image/increase.png";
import bearImg from "../Image/bear.png";
import bestImg from "../Image/best.png";
import familyImg from "../Image/family.png";
import negoImg from "../Image/nego.png";
import creativeBrainImg from "../Image/creative-brain.png";
import youCanImg from "../Image/you-can.png";
import tarImg from "../Image/tar.png";
import inventoryImg from "../Image/inventory.png";
import warningImg from "../Image/warning.png";
import dreamImg from "../Image/dream.png";
import developerImg from "../Image/developer.png";
import supportImg from "../Image/24-hours-support.png";
import learning2Img from "../Image/learning2.png";
import need2Img from "../Image/need2.png";
import teamSpiritImg from "../Image/team-spirit.png";
const useStyles = makeStyles((theme) => ({
  image_about1: {
    width: "100%",
    height: "auto",
    marginTop: "-50px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      marginTop: "0",
    },
  },
  introText_about1: {
    fontSize: "16px",
    lineHeight: "1.6",
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      lineHeight: "1.5",
      padding: "0 1rem",
    },
  },
  founderMessage: {
    textAlign: "start",
    fontSize: "36px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: "28px",
      marginTop: "10px",
    },
  },
  wishes: {
    display: "flex",
    alignItems: "flex-start",
    fontWeight: "500",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      textAlign: "center",
    },
  },
  founderName: {
    display: "flex",
    alignItems: "flex-start",
    fontWeight: "600",
    margin: "0",
    padding: "0",
    color: "orange",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      textAlign: "center",
    },
  },
  container: {
    marginTop: "3rem",
  },
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container_12: {
    textAlign: "center",
    maxWidth: "80%",
    overflow: "hidden",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  title_about: {
    color: "#414141",
    fontSize: "36px",
    textAlign: "start",
    padding: "2rem 1rem 2rem",
    fontFamily: "'Outfit', sans-serif",
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
    fontFamily: "'Outfit', sans-serif",
    maxWidth: "800px",
    lineHeight: "1.5",
    color: "#292929",
    fontSize: "19px",
    fontWeight: "400 !important",
    textAlign: "justify",
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
  circleText: {
    textAlign: "center",
    fontSize: "36px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      marginTop: "10px",
    },
  },
  highlight: {
    color: "orange", // or any color you prefer
  },
  introText_about2: {
    lineHeight: "1.5",
    fontFamily: "'Outfit', sans-serif",
    marginTop: "-20px",
    color: "#292929",
    fontSize: "0.9rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 0",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // Space between buttons
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "10px", // Reduce space between buttons for smaller screens
    },
  },
  button1_about: {
    backgroundColor: "#003E90 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "80% !important",
      fontSize: "14px !important",
      marginLeft: "0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      fontSize: "12px !important",
    },
  },
  button2_about: {
    backgroundColor: "#003E90 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "80% !important", // Make buttons wider for better touch targets
      fontSize: "14px !important", // Adjust font size
      marginLeft: "0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Make buttons full width for mobile screens
      fontSize: "12px !important", // Further adjust font size
    },
  },

  traitCard: {
    borderRadius: "10px",
    boxShadow: 3,
    padding: theme.spacing(2),
  },
  traitImage: {
    height: "100px",
  },
  traitLetter: {
    color: "#FF4E00",
    fontSize: "24px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "600",
  },
  traitText: {
    color: "#61677A",
    fontSize: "12px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "600",
  },
}));

const About_UsPage = () => {
  const classes = useStyles();
  const traits = [
    { src: increaseImg, letter: "L-", text: "LEADERSHIP" },
    { src: bearImg, letter: "E-", text: "EFFECTIVENESS" },
    { src: bestImg, letter: "A-", text: "ATTITUDE" },
    { src: familyImg, letter: "R-", text: "RELATION" },
    { src: negoImg, letter: "N-", text: "NEGOTIATION" },
    { src: creativeBrainImg, letter: "I-", text: "INNOVATION" },
    { src: youCanImg, letter: "N-", text: "NURTURE" },
    { src: tarImg, letter: "G-", text: "GOAL" },
    { src: inventoryImg, letter: "N-", text: "NEEDFUL" },
    { src: warningImg, letter: "E-", text: "ESSENTIAL" },
    { src: dreamImg, letter: "E-", text: "EXPECTATIONAL" },
    { src: developerImg, letter: "D-", text: "DEVELOPMENT" },
  ];
  return (
    <>
      <container-fluid>
        <container-fluid>
          <img
            src={require("../Image/abnew11nw1.png")}
            alt="About"
            className="responsive-img"
          />
        </container-fluid>

        <MetaData title={"About Us"} />

        <container-fluid className="about_ln">
         <Container>
         <Row className="align-items-center justify-content-center">
            <Col xs="12" sm="12" md="4" className="mb-3">
              <img
                src={require("../Image/about/abb.png")}
                alt="Learning needs"
                className={classes.image_about}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col
              xs="12"
              sm="12"
              md="8"
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ textAlign: "flex-start" }}
            >
              <div className="circle_text">
                <h1
                style={{
                  textAlign: "left",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
                >
                  About <span className="highlight">Learning Needs</span>
                </h1>
              </div>
              <p
                variant="body1"
                style={{
                  fontSize: "15px",

                  fontWeight: "400",
                  textAlign: "justify",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Learning Needs is a training & management consulting company
                based in Kolkata in the lap of nature beside river Ganges,
                India. Learning Needs offers a variety of boutique services,
                tailored to each client's need. Our specialized expertise allows
                the Individual, Institution, Schools and Organizations to
                achieve their objectives; we are very much committed to the
                success of our clients and their individual
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FF4E00",
                  
                  display: "block",
                  width: "fit-content",
                }}
                variant="contained"
              >
                Read More..
              </Button>
            </Col>
          </Row>
         </Container>
        </container-fluid>

        <div
          className="product_back"
          style={{ backgroundColor: "#FFFFFF", width: "100%" }}
        >
          <Container className={classes.container_12}>
            <div className="circle_text">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                <span className="highlight">Learning Needs Traits</span>
              </h1>
            </div>

            <Grid container spacing={3} style={{ marginTop: "2rem" }}>
              {traits.map((trait, index) => (
                <Grid item xs={12} sm={4} md={2} key={index}>
                  <Card className={classes.traitCard}>
                    <img
                      src={trait.src}
                      alt={trait.text}
                      className={classes.traitImage}
                    />
                    <Typography className={classes.traitLetter}>
                      {trait.letter}
                    </Typography>
                    <Typography className={classes.traitText}>
                      {trait.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid
              container
              spacing={3}
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <Grid item xs={12} sm={6} md={5}>
                <img
                  src={learning2Img}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Card className={classes.traitCard}>
                  <img
                    src={supportImg}
                    alt="SERVICES"
                    className={classes.traitImage}
                  />
                  <Typography className={classes.traitLetter}>S-</Typography>
                  <Typography className={classes.traitText}>
                    SERVICES
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={5}>
                <img
                  src={need2Img}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.container_12} style={{ width: "90%" }}>
          <div className="circle_text">
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
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px" }}
          >
            Learning Needs dedicated leadership team is focused on delivering
            quality service and leadership development
          </span>
          <span
            className="sub_headings"
            style={{ fontFamily: "'Outfit', sans-serif'", fontSize: "17px" }}
          >
            programs that exceed our clients expectations and help them achieve
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
                <Grid item xs={12} sm={6}>
                  <h2
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      marginBottom: "10px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "24px", // Adjusted for responsiveness
                      fontWeight: "700",
                      color: "#FF4E00",
                    }}
                  >
                    With us, you can build yourself to achieve your goals
                  </h2>
                  <Typography
                    variant="body1"
                    className={classes.introText_about2}
                  >
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
                  </Typography>

                  <Button className={classes.buttonStyle} variant="contained">
                    Read More..
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <img
                    src={teamSpiritImg}
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
          <Container className={classes.container}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../Image/founder1.png")}
                  alt="Learning needs"
                  className={classes.image_about1}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="circle_text">
                  <h1 className={classes.founderMessage}>
                    <span className="highlight"> Founder's Message</span>
                  </h1>
                </div>
                <p className={classes.introText_about1}>
                  Consulting means different things to different people. For us,
                  it is about being a trusted advisor that helps clients chart
                  and walk the path to sustained success. We are not a solution
                  looking for a problem—we see every project and situation as
                  unique. Our custom-tailored consulting engagements are based
                  on deep listening and decades of experience across industries
                  and issues. The solutions we craft are practical, realistic,
                  and highly effective. We pride ourselves on having a seasoned
                  and multidisciplinary team that can thoughtfully guide,
                  support, and motivate leaders, teachers, and organizations to
                  achieve levels of performance they never have before.
                </p>
                <p className={classes.wishes}>With all the best wishes!</p>
                <p className={classes.founderName}>Rahul Singh</p>
              </Grid>
            </Grid>
          </Container>
          <div
            className="android_back"
            style={{ backgroundColor: "#FFFFFF", width: "100%" }}
          >
            <Container
              className={classes.container_12}
              style={{ marginTop: "3rem", width: "100%" }}
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

              <div className="circle_text">
                <h1 className={classes.circleText}>
                  Clients sharing their
                  <span className={classes.highlight}> experience</span>
                </h1>
              </div>
              <div>
                <TestimonialSlider />
              </div>

              <div style={{ marginTop: "6rem" }} className="play">
                <PlayApp />
              </div>
            </Container>
          </div>

          <Container className="faq" style={{ marginTop: "3rem" }}>
            <div className="circle_text">
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
      </container-fluid>
    </>
  );
};

export default About_UsPage;
