import React, { useState, useEffect } from "react";
import mainImg from "../../Image/Product/blogimg.png";
import Banner from "../Banner";
import pattern from "../../Image/Product/Frame 19.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import { Container } from "react-bootstrap";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const response = await fetch("/api/v1/blogs");
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogData();
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
            <div key={blog._id} style={blogStyle}>
              <img src={blog.imageUrl} alt={blog.title} style={imageStyle} />
              <div style={textContainerStyle}>
                <h2 style={headingStyle}>{blog.title}</h2>
                <p style={subheadingStyle}>{blog.description}</p>
              </div>
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
  padding: "20px 0",
};

const blogContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
};

const blogStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "800px",
};

const textContainerStyle = {
  padding: "10px 0",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "10px 0",
};

const subheadingStyle = {
  fontSize: "16px",
  textAlign: "justify",
  fontFamily: "Nunito",
  color: "#555",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  maxHeight: "400px",
  objectFit: "cover",
};