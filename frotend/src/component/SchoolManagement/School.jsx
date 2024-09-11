import React from "react";
import Grid from "@mui/material/Grid";

import Card from "react-bootstrap/Card";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import schoolImage from "../../Image/schooln.jpeg";

import "./Schools.css";
import { Col, Container, Row } from "react-bootstrap";
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
  return (
    <container-fluid>
      <container-fluid>
        <img src={schoolImage} alt="School" className="responsive-img" />
      </container-fluid>
      <div style={{ display: "flex", width: "100%" }}>
        {/* <MetaData title={"Training"} /> */}

        <Container>
          <div className="schoolbg">
            <div className="circle_text">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "var(--font-h2)",
                  marginTop: "2rem",
                }}
              >
                <span className="highlight">School Management Service</span>{" "}
              </h1>
            </div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                textAlign: "justify",
                display: "inline-block",
                fontSize: "var(--font-span)",
              }}
            >
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
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                textAlign: "justify",
                display: "inline-block",
                fontSize: "var(--font-span)",
              }}
            >
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

          <div className="circle_text">
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                marginTop: "2rem",
              }}
            >
              We Help People to
              <span className="highlight"> Start Their Own School</span>{" "}
            </h1>
          </div>
          <Container>
            <Row>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO FRANCHISEE
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                       
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/money-bag.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO ROYALTY
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                   
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/money.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO LOCK PERIOD
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                       
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/blackboard.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        YOU’RE SCHOOL
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/school.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container style={{ marginTop: "1rem" }}>
            <Row>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        YOU’RE BRAND
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                       
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/branding.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        FREEDOM
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                       
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/freedom.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        END TO END SUPPORT
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                       
                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/support.png")}
                        alt="React"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="3" xs="6" className="mb-3 p-1">
                <Card body style={{ padding: 0, backgroundColor: "#003E90" }}>
                  <Row>
                    <Col
                      md="9"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "100px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "var(--font-p)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        LOW SETUP COST
                      </p>
                    </Col>

                    <Col
                      md="3"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",

                        padding: 0,
                      }}
                    >
                      <img
                        src={require("../../Image/low-cost.png")}
                        alt="Low Setup Cost"
                        style={{
                          width: "80px", // Set a fixed width
                          height: "80px", // Set a fixed height
                          objectFit: "contain", // Ensures the image scales properly
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>

          <div className="circle_text">
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                marginTop: "2rem",
              }}
            >
              Starting a<span className="highlight"> New School!</span>{" "}
            </h1>
          </div>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              textAlign: "justify",
              display: "inline-block",
              fontSize: "var(--font-span)",
            }}
          >
            Our team has experience of developing and managing new schools from
            the very outset. We can advise on:
          </span>

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
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                marginTop: "2rem",
              }}
            >
              <span className="highlight"> New Start-up School</span>{" "}
            </h1>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sservice1234.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm5.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm4.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            {/* 2nd row */}
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm3.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm2.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/ssm6.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            {/* 3rd row */}
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/ssm7.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm8.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/sm9.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            {/* 4th row */}
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/smm10.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/smmm11.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                src={require("../../Image/smmm12.png")}
                alt=""
                style={{ width: "400px" }}
              />
            </Grid>
          </Grid>

          <div className="circle_text">
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                marginTop: "2rem",
              }}
            >
              <span className="highlight">For Existing Schools</span>{" "}
            </h1>
          </div>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
              fontSize: "var(--font-span)",
            }}
          >
            Learning Needs provides all levels of support for schools leading up
            to their inspections, observations and preparations for affiliation
            networks and collaborations.
          </p>
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

          <Container className="additional">
            <h1
              style={{
                textAlign: "center",
                fontSize: "var(--font-h2)",
                marginTop: "2rem",
              }}
            >
              <span className="highlight">Additional support</span>
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "var(--font-p)",
                marginTop: "2rem",
              }}
            >
              Team can also assist with:
            </p>
            <Container>
              <Row>
                {supportItems.map((text, index) => (
                  <Col xs={12} md={6} key={index} className="mb-3 p-0">
                    <div className="support-item d-flex align-items-start">
                      <div className="icon-container">
                        <CheckBoxIcon className="custom-icon" />
                      </div>
                      <p style={{ margin: 0 }}>{text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </div>
    </container-fluid>
  );
};

export default School;
