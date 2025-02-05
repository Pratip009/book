import React from "react";
import { Link, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";

export default function Wellcome2() {
  const isXs = useMediaQuery({ maxWidth: 576 });
  return (
    <div>
      <Container
        fluid
        style={{ background: "linear-gradient(120deg, #FF4E00, #FFB99BFF)" }}
      >
        <h3
          className="app_heading1"
          style={{
            fontFamily: "Nunito",
            padding: isXs ? "0.5rem" : "1rem",
            color: "#FFFFFFFF",
            fontSize: "var(--font-h3)",
          }}
        >
          Our Services Help You Succeed in Business
        </h3>
      </Container>
      <p
        style={{
          fontSize: "var(--font-span)",
          fontFamily: "Nunito",
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
            width: "30%",
            border: "1px solid white",
            color: "#fff",
            background: "linear-gradient(45deg, #ff5f6d, #ffc371)",
            position: "relative",
            overflow: "hidden",
            transition: "0.3s",
            outline: "none",
            cursor: "pointer",
            marginTop: "23px",
            fontSize: "var(--font-span)",
          }}
          variant="contained"
        >
          Read More
        </Button>
      </Link>
    </div>
  );
}
