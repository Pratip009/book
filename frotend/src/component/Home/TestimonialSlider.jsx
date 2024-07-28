import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { getTestimonal } from "../../GlobalApi"; // Adjust the path as necessary

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

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonal();
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonial-slider-container">
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              img={testimonial.attributes.image.data[0].attributes.url}
              description={testimonial.attributes.description}
              name={testimonial.attributes.name}
              position={testimonial.attributes.position}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const TestimonialCard = ({ img, description, name, position }) => {
  return (
    <div className="testimonial-card">
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        className="testimonial-avatar"
      />
      <p className="testimonial-description">{description}</p>
      <p className="testimonial-name">
        <span>{name}</span> {position}
      </p>
    </div>
  );
};

export default TestimonialSlider;
