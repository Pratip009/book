import React, { useEffect } from "react";
import "./OfferBanner.css"; // External CSS for styling
import "aos/dist/aos.css";
import Aos from "aos";
const OfferBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="offer-banner">
      <div className="offer-text">Limited Time Offer - Up to 50% Off!</div>
      <button className="offer-button" data-aos="fade-in" data-aos-delay="300">
        Connect With Us Today
      </button>
    </div>
  );
};

export default OfferBanner;
