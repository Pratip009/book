import React from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function Wellcome() {
  const isXs = useMediaQuery({ maxWidth: 576 });
  return (
    <div>
      <Container fluid style={{background: "linear-gradient(120deg, #003E90, #3B90FF)",}}>
        <h3
          className="app_heading1"
          style={{
            fontFamily: "'Outfit', sans-serif",
            
            padding: isXs ? "0.5rem" : "1rem",
            color: "white",
            fontSize:'var(--font-h3)',
          }}
        >
          Welcome to Learning Needs
        </h3>
      </Container>

      <p
        style={{
          fontSize: "var(--font-span)",
          fontFamily: "'Outfit', sans-serif",
          color: "black",
          textAlign: "justify",
          backgroundColor:"#FFFFFF34",

        }}
      >
        Necessity is the Mother of Invention, and this proverb perfectly defines
        the inception of Learning Needs. We believe all companies have one thing
        in common they survive and thrive by creating and maintaining satisfied
        customers through their people. The Learning Needs understands the
        importance of awakening, developing, and rewarding the greatness of a
        company's people through transformation. With our experience and
        expertise in leadership training, school consulting, teachers training,
        school start up, and Learning Needs customized product, we help
        organization to achieve their goals.
      </p>
    </div>
  );
}
