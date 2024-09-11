import { useState } from "react";
import "../ReadMore/ReadMore.css";
import { Button, Collapse } from "@mui/material";
import ParentTab from "./ParentTab";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import { Container } from "react-bootstrap";

const Parent = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container style={{margin:0,padding:0}}>
      <div style={{ marginTop: "-15px", marginBottom: "15px" }}>
        <img src={require("../../Image/PW.png")} alt="" />
      </div>
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          textAlign: "justify",
          display: "inline-block",
          fontSize: "var(--font-span)",
        }}
      >
        Most of the parents always worry about their children & don’t know how
        to deal with them. They may not know the fact that all children are
        unique in the way they process information and learn things from their
        parents. Our successful Parenting workshop is especially for all such
        parents. Through this workshop, parents will learn parenting skills to
        tackle their children ageing from 2 to 20 years. They can educate
        themselves to educate their child. Parents can apply real-life parenting
        techniques, taught in this workshop. They will find so many parenting
        advice in this workshop, which will teach them how to deal with their
        children. The generational gap forbids the parents to understand child’s
        psychology, hence, they respond the same as their parents did. “Child
        Psychology” was not taught to our ancestors . Someone needs to break
        this chain & upgrade because with time new generation children are more
        advanced than ever. Parents have a huge part to play in understanding &
        supporting their children’s emotional & social needs. Packed with expert
        advice, key strategies and examples of positive parenting, Learning
        Needs reveal the secrets of raising happy, confident & well-adjusted
        children.
      </span>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <span>
          <div style={{ marginTop: "2rem", width: "100%" }}>
            <ParentTab />
          </div>
        </span>
      </Collapse>

      <Button
        style={{
          color: "#fff",
          backgroundColor: "#FF4E00",
          display: "flex",
          marginTop: "10px",
        }}
        variant="contained"
        onClick={handleExpandClick}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </Container>
  );
};
export default Parent;
