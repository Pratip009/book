import React from "react";
import "./ScrollingTextHeader.css";
import { Container } from "react-bootstrap";

const ScrollingTextHeader = () => {
  return (
    <Container fluid className="scrolling-header">
      <div className="scrolling-text-wrapper">
        <span className="scrolling-text">
          Exciting news! We're launching our online sales service very soon. Stay
          tuned for updates!
        </span>
      </div>
    </Container>
  );
};

export default ScrollingTextHeader;
