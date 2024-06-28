/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { getBlogs } from "../../../src/GlobalApi.js"; // Import getBlogs as a named import
import { BorderBottom } from "@mui/icons-material";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        console.log(response);
        setBlogs(response.data.data); // Update to access the correct data array
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={containerStyle}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
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
          {blogs.map((blog) => (
            <div key={blog.id} style={blogStyle}>
              <h2 style={headingStyle}>{blog.attributes.heading}</h2>
              <p style={subheadingStyle}>{blog.attributes.subheading}</p>
              {blog.attributes.images &&
                blog.attributes.images.data &&
                blog.attributes.images.data[0] && (
                  <img
                    src={blog.attributes.images.data[0].attributes.url}
                    alt="Blog Image"
                    style={imageStyle}
                  />
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  width: "100%",
  backgroundColor: "white",
  overflowX: "hidden",
  marginTop: "100px",
};

const blogStyle = {
  marginBottom: "20px",
  padding: "20px",
  borderBottom: "1px solid #ddd",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subheadingStyle = {
  fontSize: "15px",
  marginBottom: "10px",
  textAlign: "justify",
  fontFamily: "'Outfit', sans-serif",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
};
