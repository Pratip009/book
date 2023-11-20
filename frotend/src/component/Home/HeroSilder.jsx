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
      // // height: "50vh",
      // marginTop : "5rem",
    },
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    textAlign: "left",
    color: "#fff",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  quote: {
    fontSize: "17px",
    fontFamily: "'Poppins', sans-serif",
    width: "60vw",
    color: "white",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      width: "80vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      width: "90vw",
    },
  },
  saleText: {
    fontSize: "25px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "800",
    color: "#ffffff",
    width: "80vw",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      width: "80vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      width: "90vw",
    },
  },
  productButton: {
    backgroundColor: "#FF6D28",
    color: "#fff",
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "#FF6D28",
      border: "1px solid #FF6D28",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      padding: theme.spacing(0.5, 2),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      padding: theme.spacing(0.5, 1.5),
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
    image: require("../../Image/des61.png"),
    quote: "Training & Management Consulting",
    saleText: "We Deliver Transformation",
    productText: "Explore More",
  },

  {
    image: require("../../Image/des11.png"),
    quote: "Elevate Your Performance and Unleash Your True Potential",
    saleText: "New Arrivals: Enhance your skills and excel on the field",
    productText: "Explore More",
  },
  {
    image: require("../../Image/des9.png"),
    quote: "Training & Management Consulting",
    saleText: "We Deliver Transformation",
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
    <>
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
            backgroundColor: "#5E17EB",
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
    </>
  );
}
