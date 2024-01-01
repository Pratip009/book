import * as React from "react";
import Box from "@mui/material/Box";
import "./Blog.css";
export default function Blog() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        overflowX: "hidden",
        marginTop: "100px",
      }}
    >
      <div className="container___">
        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginTop: "20px",
          }}
        >
          <span className="highlight">Our Blog</span>
        </h1>
        <Box sx={{ width: "auto", height: "100%", overflowY: "hidden" }}>
          <div className="blog-container">
            <h1
              className="blog-title"
              style={{ fontSize: "36px", fontWeight: "500", color: "#FF4E00" }}
            >
              Title of the Blog Post
            </h1>
            <p
              className="blog-description"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
                display: "inline-block",
                fontSize: "17px",
              }}
            >
              This is a brief description or summary of the blog post content.
              It can be a few lines long, providing an overview of what the blog
              post is about.
            </p>
            <img src={require("../../Image/rossse.webp")} alt="logo" />
          </div>
        </Box>
      </div>
    </div>
  );
}
