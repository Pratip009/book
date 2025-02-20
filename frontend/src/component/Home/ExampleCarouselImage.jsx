import React from 'react';

const ExampleCarouselImage = ({ image, altText }) => {
  return <img className="d-block w-100 custom-slider-img" src={image} alt={altText} />;
};

export default ExampleCarouselImage;
