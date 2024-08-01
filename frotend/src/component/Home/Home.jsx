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
import Wellcome2 from "./Wellcome2";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [task, setTask] = useState([]);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Initial width check
    handleResize();
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
  const getWidth = () => {
    if (width <= 320) return '90%';
    if (width <= 360) return '90%';
    if (width <= 393) return '90%';
    if (width <= 412) return '90%';
    if (width <= 420) return '90%';
    if (width <= 440) return '90%';
    if (width <= 480) return '90%';
    if (width <= 540) return '90%';
    if (width <= 600) return '90%';
    if (width <= 721) return '90%';
    if (width <= 767) return '90%';
    return '68%'; // For larger screens
  };
  const h1Style = {
    textAlign: "center",
    fontSize: "36px",
    marginTop: "10px",
    fontFamily: "'Outfit', sans-serif",
    // Inline media queries
    "@media (max-width: 767px)": { fontSize: "32px" },
    "@media (max-width: 721px)": { fontSize: "30px" },
    "@media (max-width: 600px)": { fontSize: "28px" },
    "@media (max-width: 540px)": { fontSize: "26px" },
    "@media (max-width: 480px)": { fontSize: "24px" },
    "@media (max-width: 440px)": { fontSize: "22px" },
    "@media (max-width: 420px)": { fontSize: "20px" },
    "@media (max-width: 412px)": { fontSize: "18px" },
    "@media (max-width: 393px)": { fontSize: "16px" },
    "@media (max-width: 360px)": { fontSize: "14px" },
    "@media (max-width: 320px)": { fontSize: "12px" },
  };

  const spanStyle = {
    fontSize: "19px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "500",
    // Inline media queries
    "@media (max-width: 767px)": { fontSize: "17px" },
    "@media (max-width: 721px)": { fontSize: "16px" },
    "@media (max-width: 600px)": { fontSize: "15px" },
    "@media (max-width: 540px)": { fontSize: "14px" },
    "@media (max-width: 480px)": { fontSize: "13px" },
    "@media (max-width: 440px)": { fontSize: "12px" },
    "@media (max-width: 420px)": { fontSize: "11px" },
    "@media (max-width: 412px)": { fontSize: "10px" },
    "@media (max-width: 393px)": { fontSize: "9px" },
    "@media (max-width: 360px)": { fontSize: "8px" },
    "@media (max-width: 320px)": { fontSize: "7px" },
  };

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
                <div className="text_container">
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    style={{ width: "100%", maxWidth: "1200px" }}
                    className="noMarginPadding"
                  >
                    <Grid item xs={12} md={6}>
                      <Welcome />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Wellcome2 />
                    </Grid>
                  </Grid>
                </div>
                <div
                  className="text_container_new"
                  style={{
                    marginTop: "20px",
                    padding: "0 10px",
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
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{
                                  backgroundColor: "#FF4E00",
                                  border: "1px solid #D44300",
                                }}
                                sx={{
                                  width: isMobile ? 30 : 60,
                                  height: isMobile ? 30 : 60,
                                }}
                              >
                                <MenuBookIcon
                                  fontSize={isMobile ? "small" : "large"}
                                />
                              </Avatar>
                              <Typography
                                variant="h6"
                                className="training"
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: isMobile ? "0.8rem" : "1.5rem",
                                  marginTop: "10px", // Add some margin to separate text from avatar
                                }}
                              >
                                School Management Service
                              </Typography>
                              <Link to="/school">
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: isMobile ? "25px" : "40px",
                                    height: isMobile ? "25px" : "40px",
                                    marginTop: "10px", // Add some margin to separate icon button from text
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
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{
                                  backgroundColor: "#003E90",
                                  border: "1px solid #1879BA",
                                }}
                                sx={{
                                  width: isMobile ? 30 : 60,
                                  height: isMobile ? 30 : 60,
                                }}
                              >
                                <HailIcon
                                  fontSize={isMobile ? "small" : "large"}
                                />
                              </Avatar>
                              <Typography
                                variant="h6"
                                className="training"
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: isMobile ? "0.8rem" : "1.5rem",
                                  marginTop: "10px", // Add some margin to separate text from avatar
                                }}
                              >
                                Training And Development Program
                              </Typography>
                              <Link to="/training">
                                <IconButton
                                  disableRipple={true}
                                  style={{
                                    color: "white",
                                    width: isMobile ? "25px" : "40px",
                                    height: isMobile ? "25px" : "40px",
                                    marginTop: "10px", // Add some margin to separate icon button from text
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
                  <h1 style={h1Style}>
                    Find The <span className="highlight">Right Product</span>{" "}
                    For You
                  </h1>
                </div>
                <span
                  className="sub_headings"
                  // data-aos="slide-right"
                  style={spanStyle}
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
                  width: getWidth(),
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
