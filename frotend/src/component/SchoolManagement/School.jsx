import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import AOS from "aos";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "aos/dist/aos.css";
import "./Schools.css";

const School = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="content1" style={{ overflowX: "hidden" }}>
      <div
        style={{ marginTop: "110px", overflowX: "hidden" }}
        data-aos="fade-down"
      >
        <img
          src={require("../../Image/breadcrumbnew/school-management.jpg")}
          alt=""
        />
      </div>
      <div
        className="privacy-policy-container"
        style={{ display: "flex", width: "100%" }}
      >
        {/* <MetaData title={"Training"} /> */}
        <div className="container___">
          <div style={{ marginTop: "-5rem" }} data-aos="fade-down">
            {/* <h3
              style={{
                fontSize: "23px",
                fontWeight: "700",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              School Management Service
            </h3> */}
            <div className="schoolbg">
              <h1
                style={{
                  textAlign: "start",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                <span className="highlight">School Management Service</span>
              </h1>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                  fontSize: "17px",
                }}
              >
                The Learning Needs team has expansive expertise on school
                management issues and can provide all necessary support in
                various ways. Our team member can advise you on any issues which
                your school may have. This could be staff performance issues,
                appointing a new governance structure, or even a new school
                build. Learning Needs subject matter experts will help you to
                provide all the support from conceptualization to setting your
                own world class school. We develop a finance model to suit our
                clients need, advice, on building design &amp; architecture,
                affiliation, curriculum, activity books and lesson plans,
                develop activities for students, staff recruitment and training
                workshop. It is important to gain a clear understanding of
                exactly what is required.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                  fontSize: "17px",
                }}
              >
                We can then develop the project methodology and main delivery.
                We offer a full range of services, spanning organizational
                structure, project planning and development. At Learning Needs
                we value the relationships that we foster with our educational
                leaders of the schools we collaborate, sometimes over several
                years. While the knowledge of a school, its context and its
                strengths and challenges are built up by a single improvement
                advisor over time, sometimes a fresh pair of eyes or another
                expert with a particular set of skills or experience, can
                supplement the support of that improvement partner.
              </p>
            </div>

            {/* <p
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "23px",
                fontWeight: "700",
              }}
            >
              We help people to start their own school
            </p> */}
            <h1
              style={{
                textAlign: "start",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              We Help People to
              <span className="highlight"> Start Their Own School</span>
            </h1>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: "2rem" }}
            >
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO FRANCHISEE
                      </p>
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <img
                        src={require("../../Image/money-bag.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO ROYALTY
                      </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <img
                        src={require("../../Image/money.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                {/* <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "blue",
                  fontWeight: "500",
                }}
              >
                NO LOCK IN PERIOD
              </p> */}
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        NO LOCK PERIOD
                      </p>
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <img
                        src={require("../../Image/blackboard.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        YOU’RE SCHOOL
                      </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <img
                        src={require("../../Image/school.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            {/* 2ND ROW */}

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ marginTop: "2rem" }}
            >
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item md={8} xs={6}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        YOU’RE BRAND
                      </p>
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <img
                        src={require("../../Image/branding.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item md={8} xs={6}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        FREEDOM
                      </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <img
                        src={require("../../Image/freedom.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        END TO END SUPPORT
                      </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <img
                        src={require("../../Image/support.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#003E90",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        LOW SETUP COST
                      </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <img
                        src={require("../../Image/low-cost.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            {/* <h1 style={{ display: "flex", alignItems: "flex-start" , fontFamily: "'Outfit', sans-serif",fontSize:"23px", marginTop:"70px"}}>
              Starting a new school!
            </h1> */}
            <h1
              style={{
                textAlign: "start",
                fontSize: "36px",
                marginTop: "2rem",
              }}
            >
              Starting a<span className="highlight"> New School!</span>
            </h1>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                textAlign: "justify",
                display: "inline-block",
                fontSize: "17px",
              }}
            >
              Our team has experience of developing and managing new schools
              from the very outset. We can advise on:
            </span>
            {/* <List
              sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Architectural design" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Internal technical requirements" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Resource and equipment" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Prep schools who wish to expand to an all through school" />
              </ListItemButton>
            </List> */}
            <div style={{ marginTop: "2rem" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item md={3}>
                  <img
                    src={require("../../Image/designnn.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={require("../../Image/cropped.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={require("../../Image/resource.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={require("../../Image/teach.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
              </Grid>
            </div>

            {/* <h1
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "23px",
                marginTop: "50px",
              }}
            >
              New Start-up School
            </h1> */}
            <h1
              style={{
                textAlign: "start",
                fontSize: "36px",
                marginTop: "2rem",
              }}
            >
              <span className="highlight"> New Start-up School</span>
            </h1>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={4}>
                <img
                  src={require("../../Image/sservice1234.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm5.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm4.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 2nd row */}
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm3.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm2.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/ssm6.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 3rd row */}
              <Grid item md={4}>
                <img
                  src={require("../../Image/ssm7.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm8.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/sm9.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 4th row */}
              <Grid item md={4}>
                <img
                  src={require("../../Image/smm10.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/smmm11.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item md={4}>
                <img
                  src={require("../../Image/smmm12.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
            </Grid>

            {/* <h1
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "23px",
                marginTop: "50px",
              }}
            >
              For Existing Schools...
            </h1> */}
            <h1
              style={{
                textAlign: "start",
                fontSize: "36px",
                marginTop: "2rem",
              }}
            >
              <span className="highlight">For Existing Schools</span>
            </h1>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                textAlign: "justify",
                display: "inline-block",
                fontSize: "17px",
              }}
            >
              Learning Needs provides all levels of support for schools leading
              up to their inspections, observations and preparations for
              affiliation networks and collaborations.
            </p>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <img
                  src={require("../../Image/big1.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={require("../../Image/big2.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={require("../../Image/big3.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={12}>
                <img
                  src={require("../../Image/aws.png")}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            {/* <h1
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "23px",
                marginTop: "50px",
              }}
            >
              Additional support...
            </h1> */}
            <div className="additional">
              <h1
                style={{
                  textAlign: "start",
                  fontSize: "36px",
                  marginTop: "2rem",
                }}
              >
                <span className="highlight">Additional support</span>
              </h1>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                  fontSize: "19px",
                  fontWeight: "600",
                }}
              >
                Team can also assist with:
              </p>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      The quality of teaching (teachers and non-teaching staff)
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Teacher performance evaluation
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Curriculum management including resources and equipment
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Student assessment and evaluation system, educational
                      standards achieved by pupils
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      The quality of pupils’ learning, attitudes and behaviour
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Professional development
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Marketing
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Development offices, fundraising, foundations and alumni
                      relations
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Parental services
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Links with parents and the community
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Formation of a parent association or subcommittee
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Higher education{" "}
                    </p>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Staff pay structure
                    </p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckBoxIcon style={{ color: "blue" }} fontSize="19px" />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "15px",
                      }}
                    >
                      Health and safety audit
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
