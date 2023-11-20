import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import AOS from "aos";

import "aos/dist/aos.css";
const School = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="content1" style={{ overflowX: "hidden" }}>
      <div style={{ marginTop: "110px", overflowX: "hidden" }}>
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
          <div style={{ marginTop: "-5rem" }}>
            <h3>School Management Service</h3>
            <span>
              The Learning Needs team has expansive expertise on school
              management issues and can provide all necessary support in various
              ways. Our executives are all well-respected figures in the
              education sector, along with our team, are here to advise you on
              any issues which your school may have. This could be staff
              performance issues, appointing a new governance structure, or even
              a new school build. Learning Needs subject matter experts will
              help you to provide all the support from conceptualization to
              setting your own world class school. We develop a finance model to
              suit our clients need, advice, on building design &amp;
              architecture, affiliation, curriculum, activity books and lesson
              plans, develop activities for students, staff recruitment and
              training workshop. It is important to gain a clear understanding
              of exactly what is required. We can then develop the project
              methodology and main delivery. We offer a full range of services,
              spanning organizational structure, project planning and
              development. At Learning Needs we value the relationships that we
              foster with our educational leaders of the schools we collaborate,
              sometimes over several years. While the knowledge of a school, its
              context and its strengths and challenges are built up by a single
              improvement advisor over time, sometimes a fresh pair of eyes or
              another expert with a particular set of skills or experience, can
              supplement the support of that improvement partner.
            </span>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "23px",
                fontWeight: "700",
              }}
            >
              We help people to start their own school
            </p>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#3AB0FF",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        NO FRANCHISEE FEE
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src={require("../../Image/money-bag.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#3AB0FF",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        NO ROYALTY
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src={require("../../Image/money.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={3}>
                {/* <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                NO LOCK IN PERIOD
              </p> */}
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#3AB0FF",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        NO LOCK IN PERIOD
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src={require("../../Image/blackboard.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#3AB0FF",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        YOU’RE SCHOOL
                      </p>
                    </Grid>
                    <Grid item xs={4}>
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
              <Grid item xs={3}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor: "#3AB0FF",
                    // boxShadow: "none",
                    // border: "1px solid black",
                    padding: "5px 5px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <p
                        style={{
                          padding: "15px 5px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        YOU’RE BRAND
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src={require("../../Image/branding.png")}
                        alt="React"
                        style={{ height: 100 }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
              Starting a new school!
            </h1>
            <span>
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
                <Grid item xs={3}>
                  <img
                    src={require("../../Image/designnn.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    src={require("../../Image/cropped.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    src={require("../../Image/resource.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    src={require("../../Image/teach.png")}
                    alt=""
                    style={{ width: "400px" }}
                  />
                </Grid>
              </Grid>
            </div>

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
              New Start-up School
            </h1>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm1.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm5.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm4.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 2nd row */}
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm3.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm2.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm6.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 3rd row */}
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm7.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm8.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/sm9.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              {/* 4th row */}
              <Grid item xs={4}>
                <img
                  src={require("../../Image/smm10.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/smmm11.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={require("../../Image/smmm12.png")}
                  alt=""
                  style={{ width: "400px" }}
                />
              </Grid>
            </Grid>

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
              For Existing Schools...
            </h1>
            <p style={{ display: "flex", alignItems: "flex-start" }}>
              LEARNING NEEDS provides all levels of support for schools leading
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

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
              Additional support...
            </h1>

            <p style={{ display: "flex", alignItems: "flex-start" }}>
              Team can also assist with:
            </p>
            <div>
              <span>
                1. The quality of teaching (teachers and non-teaching staff)
              </span>
              <br />
              <span>2. Teacher performance evaluation</span>
              <br />
              <span>
                3. Curriculum management including resources and equipment
              </span>
              <br />

              <span>
                4. Student assessment and evaluation system, educational
                standards achieved by pupils
              </span>
              <br />
              <span>
                5. The quality of pupils’ learning, attitudes and behaviour
              </span>
              <br />
              <span>6. Professional development</span>
              <br />
              <span>7. Marketing</span>
              <br />
              <span>
                8. Development offices, fundraising, foundations and alumni
                relations
              </span>
              <br />
              <span>9. Parental services</span>
              <br />
              <span>10. Links with parents and the community</span>
              <br />
              <span>11. Formation of a parent association or subcommittee</span>
              <br />
              <span>12. Higher education</span>
              <br />
              <span>13. Staff pay structure</span>
              <br />
              <span>14. Health and safety audit</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
