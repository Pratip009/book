import React from "react";
import PlayApp from "../component/Home/PlayApp.jsx";
import MetaData from "../component/layouts/MataData/MataData";
import Banner from "../component/Banner";
import mainImg from "../Image/Product/aboutUsImg.png";
import pattern from "../Image/Product/Frame 18.png";
import bookImg from "../Image/home/teambook.png";
import star from "../Image/home/teamstar.png";
import TraitsGid from "./TraitsGid.jsx";

import learning2Img from "../Image/learning2.png";
import need2Img from "../Image/need2.png";
import Faq from "./Faq";
import teamSpiritImg from "../Image/team-spiri.png";
import TestimonialSlider from "../component/Home/TestimonialSlider.jsx";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Aboutus.css";
import { Grid, Typography } from "@mui/material";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import OurTeam from "../component/Home/OurTeam";
import underlineImgAbout from "../Image/home/underline.png";
import carClipArt from "../Image/home/car.png";
import globeClipArt from "../Image/home/globe.png";
import { motion } from "framer-motion";
const planetIcon = require("../Image/home/teamglobe.png");
const bookIcon = require("../Image/home/teambook.png");
const starIcon = require("../Image/home/teamstar.png");

const Aboutus = () => {
  return (
    <container fluid>
      <Banner
        title="Innovation In Every Step"
        mainImage={mainImg}
        iconLeft={bookImg}
        backgroundPattern={pattern}
        iconRight={star}
      />
      <MetaData title={"About Us"} />
      <container
        fluid
        style={{
          position: "relative",
          zIndex: "1",
        }}
      >
        <img
          src={carClipArt}
          alt="Car Clip Art"
          className="carClipArtAbout"
          loading="lazy"
        />
        <img
          src={globeClipArt}
          alt="Globe Clip Art"
          className="globeClipArtAbout"
          loading="lazy"
        />
        <Container>
          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="12" sm="12" md="4" className="mb-0">
              <motion.img
                src={require("../Image/nabout.jpg")}
                alt="Learning needs"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </Col>
            <Col
              xs="12"
              sm="12"
              md="8"
              className="d-flex flex-column justify-content-start align-items-start"
              style={{ textAlign: "flex-start" }}
            >
              <h1
                className="about_head3"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                About Learning Needs
              </h1>

              <motion.p
                className="about_paragraph"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Learning Needs is a training & management consulting company
                based in Kolkata in the lap of nature beside river Ganges,
                India. Learning Needs offers a variety of boutique services,
                tailored to each client's need. Our specialized expertise allows
                the Individual, Institution, Schools and Organizations to
                achieve their objectives; we are very much committed to the
                success of our clients and their individual.
              </motion.p>
              <Button
                style={{
                  color: "#fff",
                  fontFamily: "Nunito",
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
      </container>

      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h1
            className="about_head"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Learning Needs Traits
          </motion.h1>
        </div>

        <TraitsGid />
      </Container>

     

      <Container
        fluid
        style={{
          position: "relative",
          backgroundColor: "#D6FBFFFF",
          padding: "1rem 0",
          margin: "2rem 0",
          zIndex: 1,
        }}
      >
        <img
          src={carClipArt}
          alt="Car Clip Art"
          className="carClipArtAbout"
          loading="lazy"
        />
        <img
          src={globeClipArt}
          alt="Globe Clip Art"
          className="globeClipArtAbout"
          loading="lazy"
        />
        <Container>
          <Row
            className=""
            style={{
              zIndex: 2,
              marginTop: "2rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col md={8} sm={12}>
              <motion.h2
                className="about_title_new"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Learning Needs is committed to help its clients reach their
                goals
              </motion.h2>
              <motion.p
                className="about_paragraph"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Learning Needs is committed to help its clients reach their
                goals. By providing an innovative environment, which makes a
                difference. Our strong sense of identification with client
                projects means that we are constantly striving to provide
                solutions, even for issues they aren’t yet aware of. To this
                end, we adopt a progressive approach to technology and marketing
                techniques. This sense of identification also means we value and
                promote seamless interaction with clients’ own teams, and ensure
                the best value is obtained from their budget. Our long
                experience at the top of the education and training business
                means we have expertise which reaches across a number of sectors
                and schools. But we know that things change, and we are
                constantly striving to adapt and improve.
              </motion.p>
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
              <motion.img
                src={teamSpiritImg}
                alt="Learning needs"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="about_head">Our Team</h1>
        </div>

        <p className="about_paragraph2">
          Learning Needs dedicated leadership team is focused on delivering
          quality service and leadership development programs that exceed our
          clients expectations and help them achieve their goals.
        </p>
        <OurTeam />
      </Container>

      <Container fluid className="founder_container">
        <img
          src={starIcon}
          alt="Star Icon"
          className="icon star-icon"
          loading="lazy"
        />

        <img
          src={bookIcon}
          alt="Book Icon"
          className="icon book-icon"
          loading="lazy"
        />
        <img
          src={planetIcon}
          alt="Planet Icon"
          className="icon planet-icon"
          loading="lazy"
        />
        <Container>
          <Row className="justify-content-center">
            {" "}
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center"
              style={{
                padding: 0,
              }}
            >
              <motion.img
                src={require("../Image/founder1.png")}
                alt="Learning needs"
                style={{ height: "350px", width: "auto", objectFit: "cover" }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              />
            </Col>
            <Col xs={12} sm={6}>
              <h1 className="about_head3">Founder's Message</h1>

              <motion.p
                className="about_paragraph"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Consulting means different things to different people. For us,
                it is about being a trusted advisor that helps clients chart and
                walk the path to sustained success. We are not a solution
                looking for a problem—we see every project and situation as
                unique. Our custom-tailored consulting engagements are based on
                deep listening and decades of experience across industries and
                issues. The solutions we craft are practical, realistic, and
                highly effective. We pride ourselves on having a seasoned and
                multidisciplinary team that can thoughtfully guide, support, and
                motivate leaders, teachers, and organizations to achieve levels
                of performance they never have before.
              </motion.p>
              <p className="intro_text">With all the best wishes!</p>
              <p className="founderName">Rahul Singh</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="Testimonial_container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="about_head">Pride of Learning Needs</h1>
        </div>
        <span>Client's Sharing Their Experience</span>
        <TestimonialSlider />
      </Container>

      <Container fluid className="playapp_container">
        <img
          src={carClipArt}
          alt="Car Clip Art"
          className="carClipArtAbout"
          loading="lazy"
        />
        <img
          src={globeClipArt}
          alt="Globe Clip Art"
          className="globeClipArtAbout"
          loading="lazy"
        />
        <Container style={{ marginTop: "2rem" }}>
          <PlayApp />
        </Container>
      </Container>

      <Container className="faq">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="about_head">Frequently Asked Questions</h1>
        </div>

        <Faq />
      </Container>
    </container>
  );
};

export default Aboutus;
