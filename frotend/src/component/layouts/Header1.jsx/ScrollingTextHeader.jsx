import React from "react";
import "./ScrollingTextHeader.css";
import { Container } from "react-bootstrap";

const ScrollingTextHeader = () => {
  return (
    <Container fluid className="scrolling-header">
      <p className="scrolling-text">
        Exciting news! We're launching our online sales service very soon. Stay
        tuned for updates!
      </p>
    </Container>
  );
};

export default ScrollingTextHeader;
