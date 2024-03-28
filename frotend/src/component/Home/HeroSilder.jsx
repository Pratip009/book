import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  slide: {
    marginTop: "40px",
    height: "calc(80vh)",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      marginTop: "5rem",
    },
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 1,
    width: "80%", // Adjust as needed
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  quote: {
    fontSize: "25px",
    fontFamily: "'Roboto', sans-serif",
    color: "#000000",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  saleText: {
    fontSize: "35px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "800",
    color: "#2B2B2B",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  productButton: {
    backgroundColor: "#FF4E00",
    color: "#fff",
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "#FF4E00",
      border: "1px solid #FF4E00",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      padding: theme.spacing(0.5, 2),
    },
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(100%)",
  },
}));

const slides = [
  {
    image: require("../../Image/bes.png"),
    quote: "Training & Management Consulting",
    saleText: "We Facilitate Transformation",
    productText: "Explore More",
  },
  {
    image: require("../../Image/bes11.png"),
    quote: "Elevate Your Performance and Unleash Your True Potential",
    saleText: "New Arrivals: Enhance your skills and excel on the field",
    productText: "Explore More",
  },
  {
    image: require("../../Image/des9.png"),
    quote: "Training & Management Consulting",
    saleText: "We Facilitate Transformation",
    productText: "Explore More",
  },
];

export default function HeroSlider() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length
    );
  };

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Carousel
      autoPlay={true}
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      interval={10000}
      timeout={500}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#FF0000",
          borderRadius: 0,
          padding: 0,
          margin: 0,
          height: "100%",
        },
      }}
      prevButton={
        <Button
          className="slider-nav-btn prev"
          onClick={handleBack}
          startIcon={<ArrowBackIosIcon />}
        />
      }
      nextButton={
        <Button
          className="slider-nav-btn next"
          onClick={handleNext}
          endIcon={<ArrowForwardIosIcon />}
        />
      }
      fullHeightHover={false}
      className={classes.slide}
      index={activeStep}
      onChangeIndex={setActiveStep}
    >
      {slides.map((slide, index) => (
        <div key={index} className={classes.slide}>
          <img
            src={slide.image}
            alt="slider"
            className={classes.slideImage}
          />
          <div className={classes.slideContent}>
            <h2 className={classes.quote}>
              <Typed
                strings={[slide.quote]}
                typeSpeed={350}
                backSpeed={200}
                loop
              />
            </h2>
            <h3 className={classes.saleText}>{slide.saleText}</h3>
            <Link to="/products">
              <Button className={classes.productButton}>
                {slide.productText}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
