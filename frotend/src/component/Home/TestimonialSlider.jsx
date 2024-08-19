import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./TestimonialSlider.css";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="slick-arrow-icon" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="slick-arrow-icon" />
    </div>
  );
};

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://heroku-learningneeds-strapi.onrender.com/api/testimonials?populate=*"
        );
        setTestimonials(response.data.data);
      } catch (error) {
        setError("Failed to fetch testimonials. Please try again later.");
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const settings = {
   
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="testimonial-container p-0" fluid>
      <Row>
        <Col xs={12}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id || index}
                img={testimonial?.attributes?.image?.data?.[0]?.attributes?.url || ""}
                description={testimonial?.attributes?.description || "No description provided"}
                name={testimonial?.attributes?.name || "Anonymous"}
                position={testimonial?.attributes?.position || ""}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

const TestimonialCard = ({ img, description, name, position }) => {
  return (
    <div className="testimonial-card text-center">
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        className="testimonial-avatar mb-3"
      />
      <p className="testimonial-description">{description}</p>
      <p className="testimonial-name">
        <span style={{color:"red"}}>{name}</span> {position}
      </p>
    </div>
  );
};

export default TestimonialSlider
