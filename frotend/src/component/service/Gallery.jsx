import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imageCompression from "browser-image-compression"; // Import compression library
import "./Gallery.css"; // Assuming you're using a custom CSS file

const API_URL =
  "https://render-learningneeds.onrender.com/api/galleries?populate=*";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);
  const [modalImage, setModalImage] = useState(null); // State for modal image
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGalleryData(data.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const schoolImages = galleryData.filter(
    (item) =>
      item.attributes.description &&
      item.attributes.description.toLowerCase() === "school"
  );
  const trainingImages = galleryData.filter(
    (item) =>
      !item.attributes.description ||
      item.attributes.description.toLowerCase() !== "school"
  );

  const handleImageLoad = async (itemId, imageUrl) => {
    const compressedImage = await compressImage(imageUrl);
    setLoadedImages((prev) => [...prev, itemId]);
  };

  const handleOpenModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null); // Clear modal image on close
  };

  const renderImageCard = (item) => {
    const imageUrl = getOptimalImageUrl(item);

    return (
      <MDBCol
        key={item.id}
        lg={4}
        md={6}
        className="gallery-col d-flex justify-content-center align-items-center"
      >
        {item.attributes.images &&
        item.attributes.images.data &&
        item.attributes.images.data.length > 0 &&
        item.attributes.images.data[0].attributes.formats ? (
          <div
            className={`image-card shadow-sm ${
              loadedImages.includes(item.id) ? "visible" : ""
            }`}
          >
            <LazyLoadImage
              src={imageUrl}
              placeholderSrc={getPlaceholderImageUrl(item)}
              alt={item.attributes.description || "Image"}
              effect="blur"
              className="img-fluid rounded gallery-img square-img"
              afterLoad={() => handleImageLoad(item.id, imageUrl)}
              onClick={() => handleOpenModal(imageUrl)} // Open modal on click
            />
            <div className="image-overlay">
              <span className="image-text">
                {item.attributes.description || "Image Description"}
              </span>
            </div>
          </div>
        ) : (
          <span>No gallery image uploaded</span>
        )}
      </MDBCol>
    );
  };

  return (
    <MDBContainer fluid className="gallery-container">
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

      {loading ? (
        <div className="text-center my-4">
          <p>Loading images...</p>
        </div>
      ) : (
        <>
          {/* Section for School */}
          <section>
            <div className="text-center my-4 mt-4">
              <h2
                style={{
                  fontSize: "var(--font-h3)",
                  marginTop: "2rem",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <span className="highlight">Training Gallery</span>
              </h2>
            </div>
            <MDBRow className="g-4 px-2 px-lg-5 mt-4">
              {trainingImages.length > 0 ? (
                trainingImages.map(renderImageCard)
              ) : (
                <div>No training images available</div>
              )}
            </MDBRow>
          </section>
          <section>
            <div className="text-center my-4">
              <h2
                style={{
                  fontSize: "var(--font-h3)",
                  marginTop: "2rem",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <span className="highlight">
                  School Management Service Gallery
                </span>
              </h2>
            </div>
            <MDBRow className="g-4 px-2 px-lg-5 mt-4">
              {schoolImages.length > 0 ? (
                schoolImages.map(renderImageCard)
              ) : (
                <div>No school images available</div>
              )}
            </MDBRow>
          </section>

          {/* Section for Training */}
        </>
      )}

      {/* Modal for displaying the full image */}
      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            {modalImage && (
              <img src={modalImage} alt="Modal" className="modal-image" />
            )}
          </div>
          <div className="modal-background" onClick={handleCloseModal}></div>{" "}
          {/* Background for blur effect */}
        </div>
      )}
    </MDBContainer>
  );
}

// Function to choose optimal image size based on screen width
const getOptimalImageUrl = (item) => {
  const formats = item.attributes.images.data[0].attributes.formats;
  if (window.innerWidth <= 768) {
    return formats.thumbnail.url;
  } else if (window.innerWidth <= 1024) {
    return formats.small.url;
  } else {
    return formats.medium.url;
  }
};

// Function to compress images
const compressImage = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob(); // Fetch the image as a Blob

  const options = {
    maxSizeMB: 0.02, // Maximum size in MB (20 KB)
    maxWidthOrHeight: 1920, // Maximum width or height
    useWebWorker: true,
  };

  try {
    const compressedBlob = await imageCompression(blob, options); // Compress the image
    const compressedImageUrl = URL.createObjectURL(compressedBlob); // Create a URL for the compressed image
    return compressedImageUrl; // Return the compressed image URL
  } catch (error) {
    console.error("Image compression failed:", error);
    return imageUrl; // Return the original image URL if compression fails
  }
};

// Optional: Use a tiny placeholder image or blur for initial load
const getPlaceholderImageUrl = (item) => {
  const formats = item.attributes.images.data[0].attributes.formats;
  return formats.thumbnail.url; // Placeholder image for loading state
};
