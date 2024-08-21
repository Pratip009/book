import React from "react";
import { Link, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";

export default function Wellcome2() {
  const isXs = useMediaQuery({ maxWidth: 576 });
  return (
    <div>
      <Container fluid>
        <h3
          className="app_heading1"
          style={{
            fontFamily: "'Outfit', sans-serif",

            color: "#FF4E00",
            fontSize: isXs ? "24px" : "36px",
          }}
        >
          Our Services Help You Succeed in Business
        </h3>
      </Container>
      <p
        style={{
          fontSize: "15px",
          fontFamily: "'Outfit', sans-serif",
          color: "black",
          textAlign: "justify",
        }}
      >
        Learning Needs is a training & management consulting company based in
        Kolkata in the lap of nature beside river Ganges, India. Learning Needs
        offers a variety of boutique services, tailored to each client’s needs.
        Our specialized expertise allows the Individual, Institution, Schools,
        and Organizations to achieve their objectives; we are very much
        committed to the success of our clients and their individuals.
      </p>
      <Link to="/about_us">
        <Button
          style={{
            border: "1px solid white",
            color: "#fff",
            background: "linear-gradient(45deg, #ff5f6d, #ffc371)",
            position: "relative",
            overflow: "hidden",
            transition: "0.3s",
            outline: "none",
            cursor: "pointer",
            marginTop: "23px",
          }}
          variant="contained"
        >
          Read More..
        </Button>
      </Link>
    </div>
  );
}
