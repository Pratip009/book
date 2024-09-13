import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons
import slider1 from '../../Image/h111.jpeg';
import slider2 from '../../Image/h222.jpeg';
import slider3 from '../../Image/h3333.jpeg';
import './HeroSlider.css';

// Array for slides data
const slides = [
  {
    image: slider1,
    quote: "Welcome to Our Store!",
    saleText: "Exclusive Deals for You",
    productText: "Shop Now",
  },
  {
    image: slider2,
    quote: "Discover Amazing Products",
    saleText: "Best Quality Guaranteed",
    productText: "Explore More",
  },
  {
    image: slider3,
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
      prevIcon={<FaChevronLeft className="custom-prev-icon" />} // Custom previous icon
      nextIcon={<FaChevronRight className="custom-next-icon" />} // Custom next icon
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} className="custom-carousel-item">
          <img className="d-block w-100 custom-slider-img" src={slide.image} alt={slide.quote} />
          <div className="carousel-overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <span className="quote">
              <Typed strings={[slide.quote]} typeSpeed={350} backSpeed={200} loop />
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
