import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Avatar } from "@material-ui/core";
import "./TestimonialSlider.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsArrowLeftSquareFill className="slick-arrow-icon" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsArrowRightSquareFill className="slick-arrow-icon" />
    </div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720593516/large_testimonial1_2562bd22f7.jpg",
      name: "Neha Aswin",
      designation:
        ", Principal at Maharishi Vidya Mandir Senior Secondary School, Jolarpet",
      feedback:
        "Learning Needs is indeed true to its name when it comes to service.It is indeed the best program on teachers training which I have come across.Mr.Rahul is a thorough professional who creates tailor made sessions according to the client's need.This was a very interactive workshop compared to those available from other providers which feel more like lectures. The day really fine tuned my skills and the updates I have received since mean I can continue my learning into the future.Maharishi Vidya Mandir school has been immensely benefitted by the training program.The performance of the teachers has also shown remarkable difference after the training session.",
    },
    {
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720590777/testimonial2_b9e2bc2ade.jpg",
      name: "S.Swathika. BBA.,MBA",
      designation:
        ", Teacher of Maharishi Vidya Mandir.Pudur, Jolarpettai Tirupattur dt.",
      feedback:
        "I recently completed the teacher training program and I must say it was a truly transformative Experience.The Program provided me with a deeper understanding of Effective Teaching practices.I gained a wealth of Knowledge and Skills that I can apply in my classroom.It was particularly helpful as it allowed me to explore new approaches and strategies that I can use to engage and motivate my students.I really wanted to thank Mr.RAHUL ,a best educator who guided and educated me all through the teacher training program.",
    },
    {
      image:
        "https://res.cloudinary.com/dhlw57iz4/image/upload/v1720590777/testimonial3_e43beb3556.jpg",
      name: "M Sudhakar BE.,B.Ed",
      designation:
        ", Teacher of Maharishi Vidya Mandir School.Anna Street, Jolarpettai, Tirupattur District",
      feedback:
        "I recently attended the teacher training program, and I was thoroughly impressed with the trainer session led by Mr.Rahul. The Teacher Training program was engaging, informative, and  demonstrated exceptional knowledge and expertise in the field, and their passion for teaching was truly remarkable.                       The session was packed with valuable resources, including practical tips, templates, and tools that I can apply immediately. I appreciated the emphasis on  technology integration, project-based learning, and how it can enhance student engagement and learning outcomes.The training session made me  inspired, motivated, and equipped with new ideas to transform my teaching practice and make a positive impact on their students learning experiences.",
    },
  ];

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
                key={testimonial.id || index}
                img={testimonial.image}
                description={testimonial.feedback}
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

const TestimonialCard = ({ img, description, name, position }) => {
  return (
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
};

export default TestimonialSlider;
