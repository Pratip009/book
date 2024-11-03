import React from "react";
import "./AboutUsSection.css";
import aboutImg from "../../Image/home/about.png";
import carClipArt from "../../Image/home/car.png";
import globeClipArt from "../../Image/home/globe.png";
import { MdOutlineCheckCircle } from "react-icons/md";
import callIcon from "../../Image/home/Background.png";
import underlineImg from "../../Image/home/underline.png";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUsSection = () => {
  return (
    <div className="Aboutcontainer container-fluid d-flex justify-content-center align-items-center z-1">
      {/* Background Clip Art */}
      <img src={carClipArt} alt="Car Clip Art" className="carClipArt" />
      <img src={globeClipArt} alt="Globe Clip Art" className="globeClipArt" />

      {/* Background Boxes */}
      <div className="backgroundBoxOne"></div>
      <div className="backgroundBoxTwo"></div>

      <div className="row align-items-center justify-content-center text-center text-md-start">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
          <img
            src={aboutImg}
            alt="Team working together"
            className="image img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-6 mainAboutContainer">
          <h3 className="subheading">About Us</h3>
          <h2 className="heading">Our Services Help You Succeed in Business</h2>

          {/* Underline Image */}
          <div className="d-flex justify-content-center justify-content-md-start">
            <img src={underlineImg} alt="Underline" className="underline" />
          </div>

          {/* Features List */}
          <div className="features row justify-content-start z-2">
            {" "}
            {/* Changed justify-content-center to justify-content-start */}
            {[
              "Leadership Development",
              "Process Optimization",
              "Ongoing Support",
              "Cost Efficiency",
            ].map((feature, index) => (
              <div
                key={index}
                className="featureItem col-12 col-sm-6 d-flex align-items-center justify-content-start mx-auto"
              >
                <span className="checkMark">
                  <MdOutlineCheckCircle />
                </span>
                <span>{feature}</span>{" "}
                {/* Wrapped feature in a span for proper alignment */}
              </div>
            ))}
          </div>

          {/* Explore More Button and Contact Info */}
          <div className="actionSection d-flex flex-row align-items-center justify-content-between justify-content-md-start mt-3 z-2">
            <button className="button me-3">Explore More →</button>

            <div className="contactInfo d-flex align-items-center">
              <img src={callIcon} alt="Phone Icon" className="phoneIcon" />
              <div>
                <p className="call">Call Us Now</p>
                <p className="phoneNumber">
                  <a href="tel:+2085550112" className="phone-link">
                    +208-555-0112
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
