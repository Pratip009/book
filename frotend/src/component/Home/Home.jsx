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
import OfferBanner from "./OfferBanner";
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

import useMediaQuery from "@mui/material/useMediaQuery";
import Wellcome2 from "./Wellcome2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [task, setTask] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          "https://learningneeds-strapi-11ta.onrender.com/api/noticeboards"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Notices API response:", data);
        setNotices(data.data); // Extract `data` array from response
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
    fontSize: "var(--font-h2)",
    fontWeight: 700,
    marginTop: "10px",
    fontFamily: "'Outfit', sans-serif",
  };

  const spanStyle = {
    fontSize: "var(--font-span)",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "500",
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
        <OfferBanner/>

            <div
              className="background_image"
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                marginTop: "2rem",
              }}
            >
              <Container>
                <Row style={{ marginTop: "var(--global-margin)" }}>
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
                  marginTop: "var(--global-margin)",
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
                          image={require("../../Image/lap.webp")}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "50%",
                            bgcolor: "#FF6C28CD",
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
                                fontSize: "var(--font-h5)",
                                marginTop: "10px", // Add margin to separate text from avatar
                              }}
                            >
                              School Management Service
                            </Typography>
                            <Link
                              to="/school"
                              onClick={() =>
                                console.log(
                                  "Link clicked: Navigating to /school"
                                )
                              }
                            >
                              <IconButton
                                disableRipple={true}
                                style={{
                                  color: "white",
                                  width: isMobile ? "25px" : "40px",
                                  height: isMobile ? "25px" : "40px",
                                  marginTop: "10px",
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
                          image={require("../../Image/off.webp")}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "50%",
                            bgcolor: "#2885F7C8",
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
                                fontSize: "var(--font-h5)",
                                marginTop: "10px",
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
                      <span className="highlight">
                        Find The Right Product For You
                      </span>{" "}
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
                marginTop: "2rem",
              }}
            >
              <Container>
                <TeamMessage />
              </Container>
            </div>
            <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div className="circle_text">
                <h1 style={h1Style}>
                  <span className="highlight">Our Goals And Objective</span>
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
                              fontSize: "var(--font-h4)",
                              color: "#1B1A1A",
                              fontWeight: "600",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            VISION
                          </span>
                        }
                        subheader="To provide the best quality service and products to our customer and clients."
                        subheaderTypographyProps={{
                          style: {
                            color: "#000000", // Example color
                            fontSize: "var(--font-span)", // Example font size
                            fontFamily: "'Outfit', sans-serif", // Matching font family
                          },
                        }}
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
                              fontSize: "var(--font-h4)",
                              color: "#1B1A1A",
                              fontWeight: "600",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            MISSION
                          </span>
                        }
                        subheader="Conducting ourselves with honesty and responsibility."
                        subheaderTypographyProps={{
                          style: {
                            color: "#000000", // Example color
                            fontSize: "var(--font-span)", // Example font size
                            fontFamily: "'Outfit', sans-serif", // Matching font family
                            // Example font weight
                          },
                        }}
                      />
                    </Card>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        background: "linear-gradient(120deg, #003E90, #3B90FF)",
                        fontSize: "var(--font-h3)",
                        padding: "1rem",
                        color: "white",
                      }}
                    >
                      Future Target Innovation
                    </h3>
                    <span
                      className=""
                      style={{
                        fontSize: "var(--font-span)",
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
                        fontSize: "var(--font-h3)",
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
