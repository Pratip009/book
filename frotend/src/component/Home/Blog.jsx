import React, { useEffect } from "react";
import mainImg from "../../Image/Product/blogimg.png";
import Banner from "../Banner";
import pattern from "../../Image/Product/Frame 19.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import { Container } from "react-bootstrap";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";

const blogData = [
  {
    id: 1,
    title: "The Power of Habit Formation",
    description:
      "Discover how small habits can lead to big changes in your life. Learn how to build and maintain habits effectively.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnE8sP9oXn01tUzZVjSA1AsjJS-oj4lYVG_w&s",
  },
  {
    id: 2,
    title: "Mindfulness and Productivity",
    description:
      "How practicing mindfulness can improve focus, reduce stress, and boost overall productivity in your daily life.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBVvkuQpdYVimY-xk34t3TCnm3gFC-M924A&s",
  },
  {
    id: 3,
    title: "Time Management Strategies",
    description:
      "Master the art of time management with practical strategies to enhance efficiency and balance your work-life schedule.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGz3Jz1VYr84ZtTiKk8Mz-kFK5ibTh9iPBf43skv_7UdFIRNjf6WBLq4lOuqi8urSoPk&usqp=CAU",
  },
  {
    id: 4,
    title: "The Science of Motivation",
    description:
      "Understand the psychological triggers behind motivation and how to stay driven towards achieving your goals.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEUMbnOoou4Jtjp3kQpQTr7OvK4cyTQ_8pA&s",
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={containerStyle}>
      <Banner
        title="Personal Development for Smart People"
        mainImage={mainImg}
        iconLeft={bookImg}
        backgroundPattern={pattern}
        iconRight={star}
      />

      <Container>
        <HeaderWithUnderline sentence="Our Blog" highlightedWord="Our Blog" />

        <div style={blogContainerStyle}>
          {blogData.map((blog) => (
            <div key={blog.id} style={blogStyle}>
              <img src={blog.image} alt={blog.title} style={imageStyle} />
              <h2 style={headingStyle}>{blog.title}</h2>
              <p style={subheadingStyle}>{blog.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

// Styles
const containerStyle = {
  width: "100%",
  backgroundColor: "white",
  overflowX: "hidden",
 
};

const blogContainerStyle = {
  display: "flex",
  gap: "20px",
  overflowX: "auto", // Enables horizontal scrolling on smaller screens
  justifyContent: "center",
  flexWrap: "wrap",
};

const blogStyle = {
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "10px 0",
};

const subheadingStyle = {
  fontSize: "15px",
  textAlign: "justify",
  fontFamily: "Nunito",
  color: "#555",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
};
