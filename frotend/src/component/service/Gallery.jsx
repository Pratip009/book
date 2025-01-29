import React from "react";
import Banner from "../Banner";
import mainImg from "../../Image/Product/galleryImg.png";
import pattern from "../../Image/Product/Frame 18.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
import { Container } from "react-bootstrap";
const staticGalleryData = {
  training: [
    {
      id: 4,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1721804065/ln88_1f96d47303.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1721804065/large_ln55_8f0435fe7f.jpg",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1721804065/large_ln33_5313fe48c5.jpg",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1721804064/ln100_ee08a991af.jpg",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1738130532/r1_iczfet.jpg",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1738130532/r2_iqfenx.jpg",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1738130532/r4_smmneb.jpg",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhlw57iz4/image/upload/v1738130532/r6_awmzgj.jpg",
    },
  ],
};

const Gallery = () => {
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
      <Container>
        {Object.entries(staticGalleryData).map(([category, images]) => (
          <div key={category}>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "10px",
              }}
            >
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={category}
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </container-fluid>
  );
};

export default Gallery;
