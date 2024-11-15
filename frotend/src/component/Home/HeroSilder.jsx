import { useState, useCallback, useMemo } from "react";
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
  const handleSelect = useCallback((selectedIndex) => {
    setIndex(selectedIndex);
  }, []);

  const carouselItems = useMemo(() =>
    slides.map((slide, idx) => (
      <Carousel.Item key={idx} className="custom-carousel-item">
        <figure className="carousel-figure" style={{margin:0}}>
          <img
            className="d-block w-100 custom-slider-img"
            src={slide.image}
            alt='slider'
            loading={idx === index ? "eager" : "lazy"}
            width={1440}
            height={666}
          />
          <figcaption className="carousel-caption">
            <span className="quote">
              {idx === index ? (
                <Typed
                  strings={[slide.quote]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              ) : (
                slide.quote
              )}
            </span>
            <span className="sale-text">{slide.saleText}</span>
            <Link to="/products">
              <button
                className="product-button"
                aria-label={`Explore ${slide.productText}`}
              >
                {slide.productText} <FaArrowRight />
              </button>
            </Link>
          </figcaption>
        </figure>
      </Carousel.Item>
    )), [index]
  );

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
      {carouselItems}
    </Carousel>
  );
}

export default HeroSlider;
