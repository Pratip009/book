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
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
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
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "85%", textAlign: "center" }}>
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "grey",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #FF4E00",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p
        style={{
          fontSize: "15px",
          fontFamily: "'Outfit', sans-serif",
          display: "inline-block",
        }}
      >
        {description}
      </p>
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: "600",
          marginTop: 25,
        }}
      >
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> {position}
      </p>
    </div>
  );
};

export default TestimonialSlider;
