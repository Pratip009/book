import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import redicon from "../../Image/home/redicon.png";
import yellowicon from "../../Image/home/yellowicon.png";
import greenicon from "../../Image/home/greenicon.png";
import { FaStar } from "react-icons/fa6";

import Banner from "../../component/Banner";
import mainImg from "../../Image/Product/schoolManagementImg.png";
import pattern from "../../Image/Product/Frame 18.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";

import "./Schools.css";
import { Col, Container, Row } from "react-bootstrap";
const feature = [
  { text: "Teacher's Training", bgColor: "#F5CCC1", imgSrc: redicon },
  { text: "Infrustructure Designing", bgColor: "#FDE1A4", imgSrc: yellowicon },
  { text: "Marketing Training", bgColor: "#B6E3DF", imgSrc: greenicon },
  { text: "Interior Layout Designing", bgColor: "#B6E3DF", imgSrc: greenicon },
  { text: "Advertisement Plan", bgColor: "#F5CCC1", imgSrc: redicon },
  { text: "Operation Plan", bgColor: "#FDE1A4", imgSrc: yellowicon },
  { text: "Staff Selection Support", bgColor: "#F5CCC1", imgSrc: redicon },
  { text: "Name Selection", bgColor: "#FDE1A4", imgSrc: yellowicon },
  { text: "Area & Site Selection", bgColor: "#B6E3DF", imgSrc: greenicon },
  {
    text: "Furniture & Learning Aid Selection",
    bgColor: "#B6E3DF",
    imgSrc: greenicon,
  },
  {
    text: "School Organization Structure",
    bgColor: "#F5CCC1",
    imgSrc: redicon,
  },
  {
    text: "Collateral Designing Support",
    bgColor: "#FDE1A4",
    imgSrc: yellowicon,
  },
];
const features = [
  { text: "No Franchisee", icon: "💰" },
  { text: "No Royalty", icon: "💵" },
  { text: "No Lock Period", icon: "📅" },
  { text: "You're School", icon: "🏫" },
  { text: "You're Brand", icon: "✨" },
  { text: "Freedom", icon: "🕊️" },
  { text: "End to End Support", icon: "🖥️" },
  { text: "Low Setup Cost", icon: "💲" },
];

const supportItems = [
  "The quality of teaching (teachers and non-teaching staff)",
  "Teacher performance evaluation",
  "Curriculum management including resources and equipment",
  "Student assessment and evaluation system, educational standards achieved by pupils",
  "The quality of pupils’ learning, attitudes and behaviour",
  "Professional development",
  "Marketing",
  "Development offices, fundraising, foundations and alumni relations",
  "Parental services",
  "Links with parents and the community",
  "Formation of a parent association or subcommittee",
  "Higher education",
  "Staff pay structure",
  "Health and safety audit",
];
const School = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <container-fluid>
      <container-fluid>
        <Banner
          title="We Work to Make you Happy"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
      </container-fluid>
      <container-fluid>
        {/* <MetaData title={"Training"} /> */}

        <Container>
          <div className="">
            <div className="circle_text">
              <h1 className="school_header">School Management Service</h1>
            </div>
            <p className="school_para">
              The Learning Needs team has expansive expertise on school
              management issues and can provide all necessary support in various
              ways. Our team member can advise you on any issues which your
              school may have. This could be staff performance issues,
              appointing a new governance structure, or even a new school build.
              Learning Needs subject matter experts will help you to provide all
              the support from conceptualization to setting your own world class
              school. We develop a finance model to suit our clients need,
              advice, on building design &amp; architecture, affiliation,
              curriculum, activity books and lesson plans, develop activities
              for students, staff recruitment and training workshop. It is
              important to gain a clear understanding of exactly what is
              required.
            </p>
            <p className="school_para">
              We can then develop the project methodology and main delivery. We
              offer a full range of services, spanning organizational structure,
              project planning and development. At Learning Needs we value the
              relationships that we foster with our educational leaders of the
              schools we collaborate, sometimes over several years. While the
              knowledge of a school, its context and its strengths and
              challenges are built up by a single improvement advisor over time,
              sometimes a fresh pair of eyes or another expert with a particular
              set of skills or experience, can supplement the support of that
              improvement partner.
            </p>
          </div>

          <div
            className="circle_text"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="school_header">
              We Help People to Start Their Own School
            </h1>
          </div>
          <div className="container py-5">
            <div className="row text-center">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="p-3 border rounded d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#B6E3DF66" }}
                  >
                    <span style={{ fontSize: "2rem", marginRight: "10px" }}>
                      {feature.icon}
                    </span>
                    <p className="school_para2">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-center">
              {features.slice(6).map((feature, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="p-3 border rounded d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#B6E3DF66" }}
                  >
                    <span style={{ fontSize: "2rem", marginRight: "10px" }}>
                      {feature.icon}
                    </span>
                    <p className="school_para2">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="circle_text">
            <h1 className="school_header">Starting a New School!</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{
                fontFamily: "Nunito",
                textAlign: "center",
                display: "inline-block",
                fontSize: "var(--font-span)",
              }}
            >
              Our team has experience of developing and managing new schools
              from the very outset. We can advise on:
            </span>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={3} xs={6}>
                <img
                  src={require("../../Image/designnn.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  src={require("../../Image/cropped.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  src={require("../../Image/resource.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  src={require("../../Image/teach11.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
            </Grid>
          </div>

          <div className="circle_text">
            <h1 className="school_header">New Start-up School</h1>
          </div>
          <div className="container py-5">
            <div className="row">
              {feature.map((feature, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="p-3 rounded d-flex align-items-center"
                    style={{
                      backgroundColor: feature.bgColor,
                      height: "100px", 
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: "10px",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        textAlign: "center",
                        lineHeight: "35px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={feature.imgSrc}
                        alt="feature"
                        style={{
                          width: "100%", // Make the image fill the circle
                          height: "100%", // Make the image fill the circle
                          objectFit: "cover", // Ensure the image doesn't stretch
                        }}
                      />
                    </span>

                    <p className="school_para22">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="circle_text">
            <h1 className="school_header">For Existing Schools</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="school_para4">
              Learning Needs provides all levels of support for schools leading
              up to their inspections, observations and preparations for
              affiliation networks and collaborations.
            </p>
          </div>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={3} xs={6}>
              <img
                src={require("../../Image/big1.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <img
                src={require("../../Image/big2.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <img
                src={require("../../Image/big3.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <img
                src={require("../../Image/big4.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={12} xs={12}>
              <img
                src={require("../../Image/aws.png")}
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          <Container className="">
            <div className="circle_text">
              <h1 className="school_header">Additional Support</h1>
            </div>
            <p className="school_para1">Team can also assist with:</p>
            <Container>
              <Row>
                {supportItems.map((text, index) => (
                  <Col xs={12} md={6} key={index} className="mb-3 p-0">
                    <div className="support-item d-flex align-items-start">
                      <div className="icon-container">
                        <FaStar className="custom-icon" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p>{text}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </container-fluid>
    </container-fluid>
  );
};

export default School;
