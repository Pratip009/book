import React from "react";
import "./OfferBanner.css"; // External CSS for styling
import { Link } from "react-router-dom";
const OfferBanner = () => {
  return (
    <div className="offer-banner">
      <div className="offer-text">Limited Time Offer - Up to 50% Off!</div>
      <Link to="/contact">
        <button className="offer-button">Connect With Us Today</button>
      </Link>
    </div>
  );
};

export default OfferBanner;
