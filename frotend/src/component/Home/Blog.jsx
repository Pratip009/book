import React, { useEffect, useState } from "react";
import mainImg from "../../Image/Product/blogimg.png";
import Banner from "../Banner";
import pattern from "../../Image/Product/Frame 19.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import { Container } from "react-bootstrap";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
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
    <container-fluid>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <container-fluid>
          <container-fluid>
            <Banner
              title="Personal Development for Smart People"
              mainImage={mainImg}
              iconLeft={bookImg}
              backgroundPattern={pattern}
              iconRight={star}
            />
          </container-fluid>

          <Container>
           
            <HeaderWithUnderline sentence="Our Blog" highlightedWord="Our Blog" />

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
                          blog.attributes.images.data[0].attributes.formats
                            .thumbnail.url
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
          </Container>
        </container-fluid>
      )}
    </container-fluid>
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
  fontFamily: "Nunito",
};

const imageStyle = {
  maxWidth: "50%",
  height: "auto",
};
