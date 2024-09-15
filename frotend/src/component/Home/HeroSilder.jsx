import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slider1Webp from '../../Image/h111.webp';
import slider2Webp from '../../Image/h222.webp';
import slider3Webp from '../../Image/h3333.webp';
import './HeroSlider.css';

const slides = [
  {
    image: slider1Webp,
    quote: "Welcome to Our Store!",
    saleText: "Exclusive Deals for You",
    productText: "Shop Now",
  },
  {
    image: slider2Webp,
    quote: "Discover Amazing Products",
    saleText: "Best Quality Guaranteed",
    productText: "Explore More",
  },
  {
    image: slider3Webp,
    quote: "Limited Time Offers",
    saleText: "Up to 50% Off",
    productText: "Grab Yours",
  },
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={10000}
      prevIcon={<FaChevronLeft className="custom-prev-icon" />}
      nextIcon={<FaChevronRight className="custom-next-icon" />}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} className="custom-carousel-item">
          <img
            className="d-block w-100 custom-slider-img"
            src={slide.image}
            alt={slide.quote}
            loading={idx === index ? "eager" : "lazy"}
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <span className="quote">
              <Typed strings={[slide.quote]} typeSpeed={300} backSpeed={50} loop />
            </span>
            <span className="sale-text">{slide.saleText}</span>
            <Link to="/products">
              <button className="product-button">{slide.productText}</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
