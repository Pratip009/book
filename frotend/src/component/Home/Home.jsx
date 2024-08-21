import React, { useState, useEffect } from "react";
import "./Home.css";
import dartImage from "../../Image/dart.png";
import ProductCard from "./ProductCard";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import AOS from "aos";
import List from "@mui/material/List";

import TeamMessage from "./TeamMessage";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HailIcon from "@mui/icons-material/Hail";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
import { getNotice } from "../../GlobalApi";
import useMediaQuery from "@mui/material/useMediaQuery";
import Wellcome2 from "./Wellcome2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";
// import FeaturedSlider from "./FeatureSlider";
import "aos/dist/aos.css";

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

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
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

  const h1Style = {
    textAlign: "center",
    fontSize: "36px",
    marginTop: "10px",
    fontFamily: "'Outfit', sans-serif",

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
            <HeroSlider />

            <div
              className="background_image"
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                overflow: "hidden",
              }}
            >
              <Container>
                <Row style={{ marginTop: "2rem" }}>
                  <Col xs={12} md={6} className="d-flex align-items-stretch">
                    <Welcome />
                  </Col>
                  <Col xs={12} md={6}>
                    <Wellcome2 />
                  </Col>
                </Row>
              </Container>

              <Container
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Row>
                  <Col xs={12} md={6} className="mb-4">
                    <Card
                      sx={{
                        maxWidth: 650,
                        margin: "0",
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
                                marginTop: "10px", // Add margin to separate text from avatar
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
                                  marginTop: "10px", // Add margin to separate icon button from text
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
                  </Col>

                  <Col xs={12} md={6} className="mb-4">
                    <Card
                      sx={{
                        maxWidth: 650,
                        margin: "0",
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
                                marginTop: "10px", // Add margin to separate text from avatar
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
                                  marginTop: "10px", // Add margin to separate icon button from text
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
                  </Col>
                </Row>
              </Container>
            </div>
            <Container className="wrappeeer">
              <Row className="my-1">
                <Col xs={12} className="text-center">
                  <div className="circle_text">
                    <h1 style={h1Style}>
                      Find The <span className="highlight">Right Product</span>{" "}
                      For You
                    </h1>
                  </div>
                  <span className="sub_headings" style={spanStyle}>
                    You don't have to struggle alone, you have got our
                    assistance and help
                  </span>
                </Col>
              </Row>
              <Container className="trending-products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </Container>
            </Container>

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
              <Container>
                <TeamMessage />
              </Container>
            </div>
            <Container>
              <div className="circle_text">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "36px",
                  
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Our <span className="highlight">Goals And Objective</span>
                </h1>
              </div>
              <Row>
                <Col md="3">
                  <img
                    src={dartImage}
                    alt="App"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md="6">
                  <Col>
                    <Card
                      className=""
                      style={{
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        padding: 0,
                        width: "100%",
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar style={{ backgroundColor: "#003E90" }}>
                            <PsychologyIcon fontSize="large" />
                          </Avatar>
                        }
                        title={
                          <span
                            className="goals-objective-title"
                            style={{
                              fontSize: "1rem",
                              color: "#1B1A1A",
                              fontWeight: "600",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            VISION
                          </span>
                        }
                        subheader="To provide the best quality service and products to our customer and clients."
                        action={<IconButton>{/* <ThumbUpIcon/> */}</IconButton>}
                      />
                    </Card>
                    <Card
                      className=""
                      style={{
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar style={{ backgroundColor: "#FF4E00" }}>
                            <MarkUnreadChatAltIcon fontSize="large" />
                          </Avatar>
                        }
                        title={
                          <span
                            className="goals-objective-title"
                            style={{
                              fontSize: "1rem",
                              color: "#1B1A1A",
                              fontWeight: "600",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            MISSION
                          </span>
                        }
                        subheader="Conducting ourselves with honesty and responsibility."
                      />
                    </Card>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        background: "linear-gradient(120deg, #003E90, #3B90FF)",
                        fontSize:{xs:"20px" ,sm:"36px"},
                        padding: "1rem",
                        color: "white",
                      }}
                    >
                      Future Target Innovation
                    </h3>
                    <span
                      className=""
                      style={{
                        fontSize:{xs:"13px" ,sm:"20px"},
                        fontFamily: "'Outfit', sans-serif",
                        textAlign: "justify",
                      }}
                    >
                      Challenging ourselves to create unique ideas and
                      innovative solutions in a technology rich environment to
                      develop the human potentials to achieve different
                      opportunities in future to enhance the new learning
                      process.
                    </span>
                  </Col>
                </Col>
                <Col md="3">
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
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Home;