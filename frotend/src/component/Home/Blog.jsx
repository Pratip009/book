import React, { useEffect, useState } from "react";
import blogImage from "../../Image/blog1124.png";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://learningneeds-strapi-11ta.onrender.com/api/blogs?populate=*"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data.data); // `data.data` should be an array of blog objects
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
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <img
              src={blogImage}
              alt="Blog"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: "var(--font-h2)",
              marginTop: "2rem",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <span className="highlight">Our Blog</span>
          </h1>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} style={blogStyle}>
                <h2 style={headingStyle}>{blog.attributes.heading}</h2>
                <p style={subheadingStyle}>{blog.attributes.subheading}</p>
                {blog.attributes.images &&
                  blog.attributes.images.data &&
                  blog.attributes.images.data.length > 0 && (
                    <img
                      src={
                        blog.attributes.images.data[0].attributes.formats.medium
                          .url
                      }
                      alt={
                        blog.attributes.images.data[0].attributes.name ||
                        "Blog Image"
                      }
                      style={imageStyle}
                    />
                  )}
              </div>
            ))
          ) : (
            <div>No blogs available</div>
          )}
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  width: "100%",
  backgroundColor: "white",
  overflowX: "hidden",
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
  maxWidth: "50%",
  height: "auto",
};
