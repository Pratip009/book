import React, { useEffect } from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";

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
import teamSpiritImg from "../Image/team-spiri.png";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Banner from "../component/Banner";
import mainImg from "../Image/Product/aboutUsImg.png";
import pattern from "../Image/Product/Frame 18.png";
import bookImg from "../Image/home/teambook.png";
import star from "../Image/home/teamstar.png";
const useStyles = makeStyles((theme) => ({
  image_about1: {
    width: "100%",
    height: "auto",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      marginTop: "0",
    },
  },
  introText_about1: {
    fontSize: "var(--font-span)",
    lineHeight: "1.6",
    textAlign: "justify",
    fontFamily: "Nunito",
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.5",
      padding: "0 1rem",
    },
  },
  founderMessage: {
    textAlign: "start",
    fontSize: "var(--font-h2)",
    fontWeight: 700,
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",

      marginTop: "10px",
    },
  },
  wishes: {
    display: "flex",
    alignItems: "flex-start",
    fontFamily: "Nunito",
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
    fontFamily: "Nunito",
    fontWeight: "600",
    margin: "0",
    padding: "0",
    color: "orange",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      textAlign: "center",
    },
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
    maxWidth: "100%",
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
    fontFamily: "Nunito",
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
    fontFamily: "Nunito",
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
    fontSize: "var(--font-h3)",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  highlight: {
    color: "orange", // or any color you prefer
  },
  introText_about2: {
    lineHeight: "1.5",
    fontFamily: "Nunito",
    marginTop: "-20px",
    color: "#292929",
    fontSize: "0.9rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 0",
  },
  buttonContainer_about: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      gap: "10px", // Reduce space between buttons for smaller screens
    },
  },
  button1_about: {
    backgroundColor: "#003E90 !important",
    fontSize: "var(--font-span)",
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
      fontSize: "var(--font-span) !important",
      marginLeft: "0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
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
      fontSize: "var(--font-span) !important", // Adjust font size
      marginLeft: "0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Make buttons full width for mobile screens
      // Further adjust font size
    },
  },

  traitCard: {
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: 3,
    height: "180px",
    padding: theme.spacing(2),
  },
  traitImage: {
    height: "100px",
    [theme.breakpoints.down("xs")]: {
      height: "70px !important", // Added !important
    },
  },
  traitLetter: {
    color: "#FF4E00",
    fontSize: "var(--font-h4)",
    fontFamily: "Nunito",
    fontWeight: "600",
  },
  traitText: {
    color: "#61677A",
    fontSize: "5px",
    fontFamily: "Nunito",
    fontWeight: "600",
  },
}));

const About_UsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const traits = [
    { src: increaseImg, letterr: "L-", textw: "LEADERSHIP" },
    { src: bearImg, letterr: "E-", textw: "EFFECTIVENESS" },
    { src: bestImg, letterr: "A-", textw: "ATTITUDE" },
    { src: familyImg, letterr: "R-", textw: "RELATION" },
    { src: negoImg, letterr: "N-", textw: "NEGOTIATION" },
    { src: creativeBrainImg, letterr: "I-", textw: "INNOVATION" },
    { src: youCanImg, letterr: "N-", textw: "NURTURE" },
    { src: tarImg, letterr: "G-", textw: "GOAL" },
    { src: inventoryImg, letterr: "N-", textw: "NEEDFUL" },
    { src: warningImg, letterr: "E-", textw: "ESSENTIAL" },
    { src: dreamImg, letterr: "E-", textw: "EXPECTATIONAL" },
    { src: developerImg, letterr: "D-", textw: "DEVELOPMENT" },
  ];
  return (
    <>
      <container-fluid style={{
        backgroundColor:'#ffffff'
      }}>
        <container-fluid>
          <Banner
            title="Innovation In Every Step"
            mainImage={mainImg}
            iconLeft={bookImg}
            backgroundPattern={pattern}
            iconRight={star}
          />
        </container-fluid>

        <MetaData title={"About Us"} />

        <container-fluid className="about_ln">
          <Container>
            <Row className="align-items-center justify-content-center mt-3">
              <Col xs="12" sm="12" md="4" className="mb-0">
                <img
                  src={require("../Image/nabout.jpg")}
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
                className="d-flex flex-column justify-content-start align-items-start"
                style={{ textAlign: "flex-start" }}
              >
                <div className="circle_text"></div>
                <p
                  variant="body1"
                  style={{
                    fontSize: "var(--font-span)",
                    textAlign: "justify",
                    fontFamily: "Nunito",
                  }}
                >
                  Learning Needs is a training & management consulting company
                  based in Kolkata in the lap of nature beside river Ganges,
                  India. Learning Needs offers a variety of boutique services,
                  tailored to each client's need. Our specialized expertise
                  allows the Individual, Institution, Schools and Organizations
                  to achieve their objectives; we are very much committed to the
                  success of our clients and their individual
                </p>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#FF4E00",
                    fontSize: "var(--font-span)",
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

        <div className="product_back" style={{ backgroundColor: "#FFFFFF" }}>
          <Container className={classes.container_12}>
            <div className="circle_text">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "var(--font-h2)",
                  fontWeight: 700,
                  marginTop: "2rem",
                }}
              >
                <span className="highlight">Learning Needs Traits</span>
              </h1>
            </div>

            <Grid container spacing={3} style={{ marginTop: "2rem" }}>
              {traits.map((trait, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Card className={classes.traitCard}>
                    <img
                      src={trait.src}
                      alt={trait.textw}
                      className={classes.traitImage}
                    />
                    <Typography
                      style={{
                        color: "#FF4E00",
                        fontSize: "var(--font-h4)",
                        fontFamily: "Nunito",
                        fontWeight: "600",
                      }}
                    >
                      {trait.letterr}
                    </Typography>
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "var(--font-span)",
                        fontFamily: "Nunito",
                        fontWeight: "600",
                      }}
                    >
                      {trait.textw}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Container
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MDBRow
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MDBCol item xs={4} sm={6} md={2}>
                  <img
                    src={learning2Img}
                    alt="Learning needs"
                    className={classes.image_about}
                  />
                </MDBCol>

                <MDBCol item xs={4} sm={6} md={2}>
                  <Card className={classes.traitCard}>
                    <img
                      src={supportImg}
                      alt="SERVICES"
                      className={classes.traitImage}
                    />
                    <Typography
                      style={{
                        color: "#FF4E00",
                        fontSize: "var(--font-h4)",
                        fontFamily: "Nunito",
                        fontWeight: "600",
                      }}
                    >
                      S-
                    </Typography>
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "var(--font-span)",
                        fontFamily: "Nunito",
                        fontWeight: "600",
                      }}
                    >
                      SERVICES
                    </Typography>
                  </Card>
                </MDBCol>

                <MDBCol item xs={4} sm={6} md={2}>
                  <img
                    src={need2Img}
                    alt="Learning needs"
                    className={classes.image_about}
                  />
                </MDBCol>
              </MDBRow>
            </Container>
          </Container>
        </div>
        <div className="ourteam_back">
          <Container className="p-2">
            <Row
              className="g-4"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center", // This centers the text horizontally
                height: "100%", // Ensure the column takes full height if needed
              }}
            >
              <Col md={8} sm={12} xs={12}>
                <h2
                  style={{
                    textAlign: "start",
                    marginTop: "0",
                    marginBottom: "10px",
                    fontFamily: "Nunito",
                    fontSize: "var(--font-h3)",
                    fontWeight: "700",
                    color: "#FF4E00",
                  }}
                >
                  With us, you can build yourself to achieve your goals
                </h2>
                <p
                  style={{
                    fontSize: "var(--font-span)",

                    fontFamily: "Nunito",
                    textAlign: "justify",
                  }}
                >
                  Learning Needs is committed to help its clients reach their
                  goals. By providing an innovative environment, which makes a
                  difference. Our strong sense of identification with client
                  projects means that we are constantly striving to provide
                  solutions, even for issues they aren’t yet aware of. To this
                  end, we adopt a progressive approach to technology and
                  marketing techniques. This sense of identification also means
                  we value and promote seamless interaction with clients’ own
                  teams, and ensure the best value is obtained from their
                  budget. Our long experience at the top of the education and
                  training business means we have expertise which reaches across
                  a number of sectors and schools. But we know that things
                  change, and we are constantly striving to adapt and improve.
                </p>
                <Button
                  style={{
                    width: "20%",
                    display: "flex",
                    fontSize: "var(--font-span)",
                    textAlign: "start",
                    backgroundColor: "#FF4E00",
                    color: "#fff",
                    fontFamily: "Nunito",
                    fontWeight: "600",
                  }}
                  variant="contained"
                >
                  Read More..
                </Button>
              </Col>

              <Col md={4} sm={12} xs={12}>
                <img
                  src={teamSpiritImg}
                  alt="Learning needs"
                  className={classes.image_about}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className={classes.container_12}>
          <div className="circle_text">
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                fontWeight: 700,
              }}
            >
              <span className="highlight">Our Team </span>
            </h1>
          </div>
          <span
            className="sub_headings"
            style={{
              fontFamily: "Nunito",
              fontSize: "var(--font-span)",
              fontWeight: 500,
            }}
          >
            Learning Needs dedicated leadership team is focused on delivering
            quality service and leadership development
          </span>
          <span
            className="sub_headings"
            style={{
              fontFamily: "Nunito",
              fontSize: "var(--font-span)",
              fontWeight: 500,
            }}
          >
            programs that exceed our clients expectations and help them achieve
            their goals.
          </span>

          <OurTeam />

          <Container className="p-0">
            <Row className="justify-content-center">
              <Col
                xs={12}
                sm={6}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src={require("../Image/founder1.png")}
                  alt="Learning needs"
                  style={{ height: "350px", width: "auto", objectFit: "cover" }}
                  className={classes.image_about1}
                />
              </Col>
              <Col xs={12} sm={6}>
                <div className="circle_text">
                  <h1
                    style={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: "var(--font-h2)",
                      fontWeight: 700,
                      marginTop: "2rem",
                    }}
                  >
                    <span className="highlight">Founder's Message</span>
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
              </Col>
            </Row>
          </Container>

          <div
            className="android_back"
            style={{ backgroundColor: "#FFFFFF", width: "100%" }}
          >
            <Container
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                marginTop: "4rem",
              }}
            >
              <div className="circle_text">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "var(--font-h2)",
                    fontWeight: 700,
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                >
                  <span className="highlight">Pride of Learning Needs</span>
                </h1>
              </div>
              <TestimonialSlider />
            </Container>
            <div className="play" style={{ marginTop: "4rem" }}>
              <PlayApp />
            </div>
          </div>

          <Container className="faq p-0 mb-5">
            <div className="circle_text">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "var(--font-h2)",
                  fontWeight: 700,
                  marginTop: "2rem",
                }}
              >
                <span className="highlight">Frequently Asked Questions</span>
              </h1>
            </div>
            <Faq />
          </Container>
        </Container>
      </container-fluid>
    </>
  );
};

export default About_UsPage;
