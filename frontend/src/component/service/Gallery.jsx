import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import mainImg from "../../Image/Product/galleryImg.png";
import pattern from "../../Image/Product/Frame 18.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
import { Container, Nav } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeTab, setActiveTab] = useState("training");
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/gallery`);
      const data = await response.json();
      setGalleryItems(data);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => item.category.toLowerCase() === activeTab
  );

  return (
    <container-fluid>
      <container-fluid>
        <Banner
          title="You'll Only See the Best of the Best"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
       </container-fluid>

      <HeaderWithUnderline sentence="Gallery" highlightedWord="Gallery" />

      <Container className="my-5">
        {/* Tabs */}
        <Nav
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
          className="justify-content-center gap-3 my-4"
          style={{ borderBottom: "none" }}
        >
          {["training", "school"].map((tab) => (
            <Nav.Item key={tab}>
              <Nav.Link
                eventKey={tab}
                className={`px-4 py-2 text-lg fw-semibold rounded-pill border 
                  ${
                    activeTab === tab
                      ? "bg-dark text-white border-dark shadow-sm"
                      : "bg-light text-secondary border border-gray-300"
                  }`}
                style={{
                  transition: "all 0.3s ease",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Image Grid */}
        <div className="mt-4">
          {filteredItems.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {filteredItems.map((image) => (
                <div
                  key={image._id}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.05)";
                  }}
                  onClick={() => setSelectedImage(image.imageUrl)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-3">No images found for {activeTab}.</p>
          )}
        </div>
      </Container>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "20px",
                background: "#fff",
                borderRadius: "50%",
                padding: "8px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Full"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      )}
    </container-fluid>
  );
};

export default Gallery;
