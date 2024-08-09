import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { getGallery } from "../../GlobalApi";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchGallery = async () => {
      try {
        const response = await getGallery();
        console.log("Gallery API response:", response.data); 
        setGalleryData(response.data.data); 
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
          <img
            src={require('../../Image/gal11.png')}
            className="img-fluid shadow-1-strong rounded mb-4"
            alt="About"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </MDBCol>
      </MDBRow>
      <div className="text-center my-4">
        <h1 className="display-4">
          <span className="highlight">Gallery</span>
        </h1>
      </div>
      <MDBRow className="g-4 px-2 px-lg-5">
        {galleryData.map((item) => (
          <MDBCol key={item.id} lg={6} md={12} className="mb-4 mb-lg-0">
            {item.attributes.images.data.attributes.url ? ( 
              <img
                src={item.attributes.images.data.attributes.url}
                className="img-fluid shadow-1-strong rounded mb-4"
                alt={item.attributes.description || "Image"}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            ) : (
              <span>Image URL not found</span>
            )}
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
