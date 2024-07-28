import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import StarIcon from "@mui/icons-material/Star";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TeamMessage from "./TeamMessage";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HailIcon from "@mui/icons-material/Hail";
import GoalsObjective from "./GoalsObjective";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
import { getNotice } from "../../GlobalApi";
import useMediaQuery from "@mui/material/useMediaQuery";
function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getNotice();
        setNotices(response.data.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
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
          <MataData title="Learning Needs" />
          <div className="Home_Page" style={{ overflow: "hidden" }}>
            <div
              className="heroSlider_Home"
              style={{ marginBottom: "0" }} // Adjusted to remove negative margin
            >
              <HeroSlider />
            </div>

            <div
              className="background_image"
              style={{
                position: "relative",
                width: "100%",
                height: "auto", // Changed from 100vh to auto for responsiveness
                overflow: "hidden",
              }}
            >
              <div className="main_content">
                <div
                  className="text_container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    padding: "0 20px", // Added padding for better spacing
                  }}
                >
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    style={{ width: "100%", maxWidth: "1200px" }}
                  >
                    <Grid item xs={12} md={6}>
                      <Welcome />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        padding: "0 30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="container_element_large_text"
                        style={{
                          fontSize: "36px",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "10px",
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
                          fontFamily: "'Outfit', sans-serif",
                          color: "black",
                        }}
                      >
                        Learning Needs is a training & management consulting
                        company based in Kolkata in the lap of nature beside
                        river Ganges, India. Learning Needs offers a variety of
                        boutique services, tailored to each client’s needs. Our
                        specialized expertise allows the Individual,
                        Institution, Schools, and Organizations to achieve their
                        objectives; we are very much committed to the success of
                        our clients and their individuals.
                      </p>
                      <Link to="/about_us">
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
                        >
                          Read More..
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                <div
                  className="text_container_new"
                  style={{
                    marginTop: "20px",
                    padding: "0 20px",
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    style={{ width: "100%", maxWidth: "1200px" }}
                  >
                    <Grid item xs={12} md={6}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          
                          margin: "0 auto",
                         
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="300"
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
                              padding: "15px",
                              height: "100%",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{
                                  backgroundColor: "#FF4E00",
                                  border: "1px solid #D44300",
                                }}
                                sx={{
                                  width: isMobile ? 30 : 60, // Adjusted size for mobile
                                  height: isMobile ? 30 : 60, // Adjusted size for mobile
                                }}
                              >
                                <MenuBookIcon
                                  fontSize={isMobile ? "small" : "large"}
                                />
                              </Avatar>
                              <Typography
                                variant="h6" // Changed from h5 to h6
                                className="training"
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: isMobile ? "0.8rem" : "1.5rem", // Adjusted font size for mobile
                                }}
                              >
                                School Management Service
                              </Typography>
                              <Link to="/school">
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: isMobile ? "25px" : "40px", // Adjusted size for mobile
                                    height: isMobile ? "25px" : "40px", // Adjusted size for mobile
                                  }}
                                >
                                  <ArrowForwardIcon
                                    fontSize={isMobile ? "small" : "large"}
                                  />
                                </IconButton>
                              </Link>
                            </div>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          
                          margin: "0 auto",
                          
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="300"
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
                              padding: "15px",
                              height: "100%",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{
                                  backgroundColor: "#003E90",
                                  border: "1px solid #1879BA",
                                }}
                                sx={{
                                  width: isMobile ? 30 : 60, // Adjusted size for mobile
                                  height: isMobile ? 30 : 60, // Adjusted size for mobile
                                }}
                              >
                                <HailIcon
                                  fontSize={isMobile ? "small" : "large"}
                                />
                              </Avatar>
                              <Typography
                                variant="h6" // Changed from h5 to h6
                                className="training"
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: isMobile ? "0.8rem" : "1.5rem", // Adjusted font size for mobile
                                }}
                              >
                                Training And Development Program
                              </Typography>
                              <Link to="/training">
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: isMobile ? "25px" : "40px", // Adjusted size for mobile
                                    height: isMobile ? "25px" : "40px", // Adjusted size for mobile
                                  }}
                                >
                                  <ArrowForwardIcon
                                    fontSize={isMobile ? "small" : "large"}
                                  />
                                </IconButton>
                              </Link>
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
                      fontFamily: "'Outfit', sans-serif",
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
                    fontFamily: "'Outfit', sans-serif",
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
                  width: "68%",
                }}
              >
                <TeamMessage />
                <div className="circle_text">
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "36px",
                      marginTop: "60px",
                      fontFamily: "'Outfit', sans-serif",
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
                        background: "linear-gradient(120deg, #ff5f6d, #ffc371)",
                        minWidth: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", // Ensure the content is spaced correctly
                        height: "100%", // Make sure the Card takes up full height of its container
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
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        Updates
                      </p>
                      <Card
                        style={{
                          flex: 1, // Allow the inner Card to expand
                          maxHeight: "100%", // Ensure it takes up the available height
                          marginTop: "20px",
                          border: "1px solid #D8D9DA",
                        }}
                      >
                        <div
                          className="container3 blur"
                          style={{ height: "100%" }}
                        >
                          <List
                            sx={{
                              width: "100%",
                              maxWidth: "100%",
                              bgcolor: "white",
                              padding: "3px 0",
                              height: "100%", // Ensure the List takes up the full height of its parent
                            }}
                            className="slider"
                          >
                            {notices.map((notice) => (
                              <React.Fragment key={notice.id}>
                                <ListItem
                                  sx={{
                                    borderBottom: "1px solid #ccc",
                                  }}
                                >
                                  <ListItemIcon sx={{ minWidth: 32 }}>
                                    <StarIcon
                                      fontSize="small"
                                      sx={{ color: "#FF4E00" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={notice.attributes.notices}
                                    primaryTypographyProps={{
                                      style: {
                                        fontFamily: "Outfit, sans-serif",
                                      },
                                    }}
                                    sx={{ marginLeft: 0 }}
                                  />
                                </ListItem>
                                <Divider />
                              </React.Fragment>
                            ))}
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
      )}
    </>
  );
}

export default Home;
