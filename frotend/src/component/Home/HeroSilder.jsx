import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typed from "react-typed";
import slider1 from "../../Image/h1.webp";
import slider2 from "../../Image/h2.webp";
import slider3 from "../../Image/h3.webp";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import fontSizes, { desktopFontSizes, mobileFontSizes } from "../../Fontsize";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "calc(80vh)",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      height: "30vh", // Adjust for smaller screens
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
      zIndex: 1,
    },
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image covers the entire area
    zIndex: 1,
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 2,
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: theme.spacing(2),
    },
  },
  quote: {
    fontSize: desktopFontSizes.h2,
    color: "#E0FFFF", // Light Cyan for better contrast
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: mobileFontSizes.h2,
    },
  },
  saleText: {
    fontSize: desktopFontSizes.h1,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 800,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: mobileFontSizes.h1,
      marginBottom: theme.spacing(3),
    },
  },
  productButton: {
    backgroundColor: "#FF4E00",
    color: "#fff",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 4),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "#FF4E00",
      border: "1px solid #FF4E00",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 'var(--font-span)',
      padding: theme.spacing(1, 3)
    },
  },
}));

const staticSlides = [
  {
    image: slider1,
    alt: "Welcome to Our Store!",
    quote: "Welcome to Our Store!",
    saleText: "Exclusive Deals for You",
    productText: "Shop Now",
  },
  {
    image: slider2,
    alt: "Discover Amazing Products",
    quote: "Discover Amazing Products",
    saleText: "Best Quality Guaranteed",
    productText: "Explore More",
  },
  {
    image: slider3,
    alt: "Limited Time Offers",
    quote: "Limited Time Offers",
    saleText: "Up to 50% Off",
    productText: "Grab Yours",
  },
];

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export default function HeroSlider() {
  const windowWidth = useWindowWidth();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const slides = staticSlides;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length
    );
  };

  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      indicators
      animation="slide"
      interval={10000}
      timeout={500}
      cycleNavigation
      navButtonsProps={{
        style: {
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          padding: 0,
          margin: 0,
          height: windowWidth <= 767 ? "50px" : "100%",
        },
      }}
      prevButton={
        <Button onClick={handleBack} startIcon={<ArrowBackIosIcon />} />
      }
      nextButton={
        <Button onClick={handleNext} endIcon={<ArrowForwardIosIcon />} />
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
            srcSet={`${slide.image} 1x, ${slide.image} 2x`}
            alt={slide.alt}
            className={classes.slideImage}
            loading="lazy"
          />
          <div className={classes.slideContent}>
            <h1 className={classes.quote}>
              <Typed
                strings={[slide.quote]}
                typeSpeed={350}
                backSpeed={200}
                loop
              />
            </h1>
            <h2 className={classes.saleText}>{slide.saleText}</h2>
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
