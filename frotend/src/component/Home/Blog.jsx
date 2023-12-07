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
        <h1 style={{ fontSize: "26px", fontFamily: "'Roboto', sans-serif",fontWeight:"700" }}>
          Our Blog
        </h1>
        <Box sx={{ width: "auto", height: "100%", overflowY: "hidden" }}>
          <div className="blog-container">
            <h1 className="blog-title">Title of the Blog Post</h1>
            <p className="blog-description">
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
