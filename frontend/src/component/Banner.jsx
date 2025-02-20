import React from "react";
import "./Banner.css"; // Import the CSS file
import { Container } from "react-bootstrap";

const Banner = ({
  title,
  mainImage,
  iconLeft,
  iconRight,
  backgroundPattern,
}) => {
  return (
    <Container fluid className="banner-main">
      <Container className="banner-container">
        {/* Background Pattern behind Main Image */}

        {backgroundPattern && (
          <img
            src={backgroundPattern}
            alt="Background Pattern"
            className="banner-background"
          />
        )}

        {/* Left Icon */}
        {iconLeft && (
          <img src={iconLeft} alt="Left Icon" className="icon-left" />
        )}

        {/* Heading Text */}
        <h1 className="banner-title">{title}</h1>

        {/* Main Image */}
        {mainImage && <img src={mainImage} alt="Main" className="main-image" />}

        {/* Right Icon */}
        {iconRight && (
          <img src={iconRight} alt="Right Icon" className="icon-right" />
        )}
      </Container>
    </Container>
  );
};

export default Banner;
