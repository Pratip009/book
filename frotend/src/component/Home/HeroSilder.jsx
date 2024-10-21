import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import slider1Webp from "../../Image/hs1.svg";
import slider2Webp from "../../Image/hs2.svg";
import slider3Webp from "../../Image/hs3.svg";
import "./HeroSlider.css";

const slides = [
  {
    image: slider1Webp,
    quote: "Empowering Kids With Smart Education",
    saleText:
      "Innovative learning solutions designed to boost creativity, critical thinking, and academic success",
    productText: "Explore Today",
  },
  {
    image: slider2Webp,
    quote: "Simplify Education with School Management",
    saleText:
      "Comprehensive tools to streamline school operations, enhance efficiency, and support student success",
    productText: "Explore Today",
  },
  {
    image: slider3Webp,
    quote: "Training for Teachers, Parents, and Students",
    saleText: "Up to 50% Off",
    productText: "Explore Today",
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={10000}
      prevIcon={
        <span aria-hidden="true">
          <FaChevronLeft className="custom-prev-icon" />
        </span>
      }
      nextIcon={
        <span aria-hidden="true">
          <FaChevronRight className="custom-next-icon" />
        </span>
      }
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} className="custom-carousel-item">
          <img
            className="d-block w-100 custom-slider-img"
            src={slide.image}
            alt={slide.quote}
            loading={idx === index ? "eager" : "lazy"}
          />
          <Carousel.Caption className="carousel-caption">
            <span className="quote">
              <Typed
                strings={[slide.quote]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
            <span className="sale-text">{slide.saleText}</span>
            <Link to="/products">
              <button className="product-button">
                {slide.productText} <FaArrowRight />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
