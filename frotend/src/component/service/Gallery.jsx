import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { getGallery } from "../../../src/GlobalApi.js"; // Import your Axios API functions

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch gallery data when component mounts
    const fetchGallery = async () => {
      try {
        const response = await getGallery();
        console.log("Gallery API response:", response.data); // Log the API response
        setGalleryData(response.data.data); // Update state with fetched data
      } catch (error) {
        setError(error); // Set error state if there's an error
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGallery();

    // Cleanup function
    return () => {
      // Any cleanup code, if necessary
    };
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Render error message
  }

  return (
    <div className="container___" style={{ backgroundColor: "white",width:"100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList
          sx={{
            width: "80%",
            height: "auto",
            margin: "auto",
            marginTop: "150px",
            backgroundColor: "white"
          }}
        >
          {galleryData.map((item) => (
            <ImageListItem key={item.id}>
              {item.attributes.images.data.attributes.url ? ( // Check if URL exists before rendering
                <img
                  srcSet={`${item.attributes.images.data.attributes.url}`}
                  src={`${item.attributes.images.data.attributes.url}`}
                  alt={item.attributes.description || "Image"} // Provide fallback alt text
                  loading="lazy"
                />
              ) : (
                <span>Image URL not found</span>
              )}
              <ImageListItemBar
                title={item.attributes.description}
                position="below"
                titleStyle={{ // Add custom styles to the title
                  fontSize: "16px", // Custom font size
                  fontWeight: "bold", // Custom font weight
                  color: "black" // Custom color
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
