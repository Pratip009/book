import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import mainImg from "../../Image/Product/galleryImg.png";
import pattern from "../../Image/Product/Frame 18.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
import { Container } from "react-bootstrap";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch("/api/v1/gallery");
      const data = await response.json();
      setGalleryItems(data);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const groupedItems = galleryItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <Banner
          title="You'll Only See the Best of the Best"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
      </div>
      <HeaderWithUnderline sentence="Gallery" highlightedWord="Gallery" />
      <Container>
        {Object.entries(groupedItems).map(([category, images]) => (
          <div key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "10px",
              }}
            >
              {images.map((image) => (
                <img
                  key={image._id}
                  src={image.imageUrl}
                  alt={image.title}
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Gallery;