import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar } from "@material-ui/core";
import "./TestimonialSlider.css";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const PreviousBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <BsArrowLeftSquareFill className="slick-arrow-icon" />
  </div>
);

const NextBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <BsArrowRightSquareFill className="slick-arrow-icon" />
  </div>
);

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/testimonial`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <Container className="testimonial-container" fluid>
      <Row>
        <Col xs={12}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial._id || index}
                img={testimonial.photo}
                description={testimonial.description}
                name={testimonial.name}
                position={testimonial.designation}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

const TestimonialCard = ({ img, description, name, position }) => (
  <div className="testimonial-card text-center">
    <Avatar
      imgProps={{ style: { borderRadius: "50%" } }}
      src={img}
      className="testimonial-avatar mb-3"
      style={{ width: "120px", height: "120px" }}
    />
    <p className="testimonial-name">
      <span style={{ color: "red" }}>{name}</span> {position}
    </p>
    <p className="testimonial-description">{description}</p>
  </div>
);

export default TestimonialSlider;
