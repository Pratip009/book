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
import { Parallax } from "react-parallax";

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
            <div className="Home_Page">
              <div className="heroSlider_Home" style={{marginBottom:"-20px"}}>
                <HeroSlider />;
              </div>
              
                <div className="background_image" style={{backgroundColor:"transparent"}}>
                  <div
                    className="text_container"
                    style={{ backgroundColor: "transparent", padding: "20px", marginTop:"20px" }}
                  >
                    <Grid
                      container
                      rowSpacing={2}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid xs={12} md={6}>
                        <p
                          className="container_element_large_text"
                          data-aos="zoom-in"
                        >
                          Our services help you succeed in business
                        </p>

                        <p
                          className="container_element_small_text"
                          style={{
                            padding: "0 30px 0 0",
                            fontSize: "15px",
                            // lineHeight: "35px",
                            fontWeight: "400",
                          }}
                          data-aos="slide-up"
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
                          style={{ color: "#fff", backgroundColor: "#FF6D28" }}
                          variant="contained"
                          data-aos="zoom-in-right"
                        >
                          Read More..
                        </Button>
                      </Grid>
                      <Grid xs={12} md={6} data-aos="zoom-in">
                        <Card
                          style={{
                            backgroundColor: "#272829",
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
                              textShadow:"0 0 10px red",
                              padding: "10px 0 0 0 ",
                            }}
                          >
                            Notice Board
                          </p>
                          <Card
                            style={{
                              maxHeight: "180px",
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

                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{ marginTop: "3rem" }}
                    >
                      <Grid item xs={12} md={6} data-aos="flip-left">
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
                                  style={{ backgroundColor: "#FF6D28",border:"1px solid #D44300" }}
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
                      <Grid item xs={12} md={6} data-aos="flip-right">
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
                                  style={{ backgroundColor: "#3AB0FF",border:"1px solid #1879BA"  }}
                                  
                                  // variant="rounded"
                                  sx={{ width: 56, height: 56 }}
                                >
                                  <HailIcon fontSize="large" />
                                </Avatar>
                                <Typography variant="h5" className="training" >
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
            
              {/* <div className="feature" style={{ marginTop: "3.7rem" }}>
                <h2 className="headings"  = "fade-right"
                  
                >
                  Featured Products
                </h2>
                {products &&
             
                
                       <FeaturedSlider  products ={products}/> }
                  
                 
              
              </div> */}

              {/* <h2 className="headings" >
                Find the right product for you
              </h2> */}
              <Parallax
                bgImage="/path/to/another/image"
                renderLayer={(percentage) => (
                  <div
                    style={{
                      position: "absolute",
                      background: `rgba(239, 239, 240, ${percentage*40})`,
                      opacity:0.5,
                      left: "0",
                      top: "0%",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              >
                <div className="product_back">
                  <div className="circle_text">
                    <p className="non_important" data-aos="fade-left" >
                      Find the{" "}
                      <span class="circle-sketch-highlight">right product</span>{" "}
                      for you{" "}
                    </p>
                  </div>
                  <span className="sub_headings" data-aos="slide-right">
                    you don't have to struggle alone,you have got our assistance
                    and help
                  </span>

                  <div className="trending-products">
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                  </div>
                </div>
              </Parallax>

              
              <div className="text_container" style={{ marginTop: "10vh" }}>
                {/* Team Message section */}
                <TeamMessage />
                
                {/* goals and objective */}

                {/* <h2 className="headings" >
                  our goals and objective
                </h2> */}
                <div className="circle_text">
                  <p className="non_important" data-aos="fade-left">
                    our{" "}
                    <span class="circle-sketch-highlight">
                      goals and objective
                    </span>{" "}
                  </p>
                </div>
                <div
                  style={{
                    marginBottom: "3rem",
                    paddingTop: 0,
                  }}
                >
                  <GoalsObjective />
                </div>

                {/* Learning needs traits */}

                {/* <Traits /> */}
              </div>
              
            </div>
          </>
        </>
      )}
    </>
  );
}

export default Home;
