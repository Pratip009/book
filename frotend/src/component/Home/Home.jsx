import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
// import FeaturedSlider from "./FeatureSlider";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import TeamMessage from "./TeamMessage";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HailIcon from "@mui/icons-material/Hail";
import GoalsObjective from "./GoalsObjective";
import axios from "axios";
import { baseURL } from "../utils/constant";
import NoticeBoard from "../Admin/NoticeBoard";
import Welcome from "./Welcome";

function Home() {
  // we provided all parameter for react-alert at index.js
  const alert = useAlert();
  const [task, setTask] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <>
            <MataData title="Learning Needs" />
            <div className="Home_Page" style={{ overflow: "hidden" }}>
              <div
                className="heroSlider_Home"
                style={{ marginBottom: "-20px" }}
              >
                <HeroSlider />;
              </div>

              <div
                className="background_image"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                <div className="main_content">
                  <div
                    className="text_container"
                    style={{
                      marginTop: "60px",
                    }}
                  >
                    <Grid
                      container
                      rowSpacing={2}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid xs={12} md={6}>
                        <Welcome />
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                        style={{ padding: "0px 30px 30px 30px" }}
                      >
                        <p
                          className="container_element_large_text"
                          // data-aos="zoom-in"
                          style={{
                            fontSize: "36px",
                            fontFamily: "'Roboto', sans-serif",
                          }}
                        >
                          Our Services Help You Succeed in Business
                        </p>

                        <p
                          className="container_element_small_text"
                          style={{
                            fontSize: "15px",
                            marginTop: "14px",
                            fontWeight: "400",
                            textAlign: "justify",
                            display: "inline-block",
                            fontFamily: "'Roboto', sans-serif",
                          }}
                          // data-aos="slide-up"
                        >
                          Learning Needs is a training & management consulting
                          company based in Kolkata in the lap of nature beside
                          river Ganges, India. Learning Needs offers a variety
                          of boutique services, tailored to each clients need.
                          Our specialized expertise allows the Individual,
                          Institution, Schools and Organizations to achieve
                          their objectives; we are very much committed to the
                          success of our clients and their individual.
                        </p>
                        <Button
                          style={{
                            border: "1px solid white",
                            color: "#fff",
                            background:
                              "linear-gradient(45deg, #ff5f6d, #ffc371)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "0.3s",
                            outline: "none",
                            cursor: "pointer",
                            marginTop: "23px",
                          }}
                          variant="contained"
                          // data-aos="slide-right"
                        >
                          Read More..
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    className="text_container_new"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{ marginTop: "20px" }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={6}
                        //  data-aos="flip-left"
                      >
                        <Card
                          sx={{
                            maxWidth: 345,
                            borderRadius: "30px",
                            margin: "0 auto",
                            padding: "0.1em",
                          }}
                        >
                          <Box sx={{ position: "relative" }}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={require("../../Image/lap.jpg")}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "50%",
                                bgcolor: "#FF6D28bc",
                                color: "white",
                                padding: "10px",
                                height: "45rem",
                              }}
                            >
                              <div className="overlay_section">
                                <Avatar
                                  style={{
                                    backgroundColor: "#FF4E00",
                                    border: "1px solid #D44300",
                                  }}
                                  // variant="rounded"
                                  sx={{ width: 56, height: 56 }}
                                >
                                  <MenuBookIcon fontSize="large" />
                                </Avatar>
                                <Typography variant="h5" className="training">
                                  School Management Service
                                </Typography>
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: "35px",
                                    height: "35px",
                                    // backgroundColor: "#FFFFFF",
                                    // boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                                  }}
                                >
                                  <ArrowForwardIcon />
                                </IconButton>
                              </div>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        // data-aos="flip-right"
                      >
                        <Card sx={{ maxWidth: 345, height: 200 }}>
                          <Box sx={{ position: "relative" }}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={require("../../Image/off.jpg")}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "50%",
                                bgcolor: "#3AB0FFaf",
                                color: "white",
                                padding: "10px",
                                height: "45rem",
                              }}
                            >
                              <div className="overlay_section">
                                <Avatar
                                  style={{
                                    backgroundColor: "#003E90",
                                    border: "1px solid #1879BA",
                                  }}
                                  // variant="rounded"
                                  sx={{ width: 56, height: 56 }}
                                >
                                  <HailIcon fontSize="large" />
                                </Avatar>
                                <Typography variant="h5" className="training">
                                  Training And Development Program
                                </Typography>
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: "35px",
                                    height: "35px",
                                    // backgroundColor: "#FFFFFF",
                                    // boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                                  }}
                                >
                                  <ArrowForwardIcon />
                                </IconButton>
                              </div>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>

              <div className="wrappeeer">
                <div className="content">
                  <div className="circle_text">
                    <h1
                      style={{
                        textAlign: "center",
                        fontSize: "36px",
                        marginTop: "10px",
                      }}
                    >
                      Find The <span className="highlight">Right Product</span>{" "}
                      For You
                    </h1>
                  </div>
                  <span
                    className="sub_headings"
                    // data-aos="slide-right"
                    style={{
                      fontSize: "19px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    You don't have to struggle alone,you have got our assistance
                    and help
                  </span>

                  <div className="trending-products">
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                  </div>
                </div>
              </div>

              <div
                className="goal"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="inner_goal"
                  style={{
                    width: "75%",
                  }}
                >
                  <TeamMessage />
                  <div className="circle_text">
                    <h1
                      style={{
                        textAlign: "center",
                        fontSize: "36px",
                        marginTop: "60px",
                      }}
                    >
                      Our <span className="highlight">Goals And Objective</span>
                    </h1>
                  </div>

                  <Grid container spacing={1}>
                    <Grid item md={9}>
                      <GoalsObjective />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Card
                        style={{
                          background:
                            "linear-gradient(120deg, #ff5f6d, #ffc371)",
                          minWidth: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <p
                          className="container_element_large_text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textShadow: "0 0 10px red",
                            padding: "10px 0 0 0 ",
                          }}
                        >
                          Updates
                        </p>
                        <Card
                          style={{
                            maxHeight: "220px",
                            marginTop: "20px",
                            border: "1px solid #D8D9DA",
                          }}
                        >
                          <div className="container3 blur">
                            <List
                              sx={{
                                width: "100%",
                                maxWidth: "100%",
                                bgcolor: "white",
                                padding: "3px 0",
                              }}
                              className="slider"
                            >
                              <Box
                                component="ul"
                                sx={{
                                  padding: "0 0",
                                  listStyle: "none",
                                  display: "grid",
                                  gap: "30px",
                                  gridTemplateColumns: "repeat(1, 1fr)",
                                }}
                              >
                                {task.map((task) => (
                                  <NoticeBoard
                                    key={task._id}
                                    id={task._id}
                                    task={task.task}
                                  />
                                ))}
                              </Box>
                            </List>
                          </div>
                        </Card>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
}

export default Home;
