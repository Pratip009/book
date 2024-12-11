import React from "react";
import Banner from "../Banner";
import mainImg from "../../Image/home/sport.png";
import pattern from "../../Image/Product/Frame 20.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import "./Sports.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function Sports() {
  const trainingItems = [
    "Strength Training",
    "Endurance Training",
    "Speed and Agility Training",
    "Skill Development",
    "Flexibility Training",
    "Mental Training",
    "Tactical & Strategic Training",
  ];
  return (
    <container-fluid className="sports_cont mb-4">
      <container-fluid>
        <Banner
          title="Sports Training"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
      </container-fluid>
      <Container>
        <div className="sports_head">
          <h1>Fitness Development Programs</h1>
        </div>
        <p className="sports_paragraph">
          Our Sports training for children is essential for promoting physical
          health, building teamwork, and developing essential motor skills. It
          focuses on age-appropriate exercises that improve strength,
          coordination, flexibility, and endurance, all while minimizing the
          risk of injury. At this stage, the emphasis should be on fun, learning
          basic techniques, and fostering a love for physical activity rather
          than intense competition. Sports training also teaches important life
          skills such as discipline, perseverance, and how to handle both
          success and failure. By engaging children in sports, they develop not
          only physical abilities but also social skills and emotional
          resilience, which are crucial for their overall growth and
          development.
        </p>
      </Container>
      <Container>
        <div className="sports_head">
          <h1>Sports training categories include</h1>
        </div>
      </Container>
      <Container className="mt-4">
        <Row className="g-3">
          {trainingItems.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4} // Three cards per row on medium and larger screens
              className={index === trainingItems.length - 1 ? "mx-auto" : ""}
            >
              <div
                className={`sports-card ${
                  index === trainingItems.length - 1 ? "center-align" : ""
                }`}
              >
                <span className="star-icon">⭐</span> {item}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </container-fluid>
  );
}
