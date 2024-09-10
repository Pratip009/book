import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import galleryImg from "../../Image/gal11.png";
// ../../Image/gal11.png
// Replace with the actual API URL
const API_URL =
  "https://render-learningneeds.onrender.com/api/galleries?populate=*";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Gallery API response:", data);
        setGalleryData(data.data); // Extract `data` array from response
      } catch (error) {
        setError(error);
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGallery();
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <MDBContainer fluid className="bg-white p-0">
      <MDBRow className="mb-4">
        <MDBCol lg={12} md={12} className="mb-4 mb-lg-0">
          <div
            style={{
              width: "100%",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <img
              src={galleryImg}
              alt="Blog"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </MDBCol>
      </MDBRow>
      <div className="text-center my-4">
        <h1
          style={{
            fontSize: "var(--font-h2)",
            marginTop: "2rem",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          <span className="highlight">Gallery</span>
        </h1>
      </div>
      <MDBRow className="g-4 px-2 px-lg-5">
        {galleryData.map((item) => (
          <MDBCol
            key={item.id}
            lg={6}
            md={12}
            className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            {item.attributes.images &&
            item.attributes.images.data &&
            item.attributes.images.data.length > 0 ? (
              <img
                src={
                  item.attributes.images.data[0].attributes.formats.medium.url
                } // Use the medium format URL
                className="img-fluid shadow-1-strong rounded mb-4"
                alt={item.attributes.description || "Image"}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%", // Ensure the image fits within the column
                  maxHeight: "300px", // Image will not exceed 300px height
                }}
              />
            ) : (
              <span>No gallery image uploaded</span> // Show message when no image
            )}
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
