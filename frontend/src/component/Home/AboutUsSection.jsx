import React, { useMemo } from "react";
import "./AboutUsSection.css";
import aboutImg from "../../Image/home/about.png";
import carClipArt from "../../Image/home/car.png";
import globeClipArt from "../../Image/home/globe.png";
import { MdOutlineCheckCircle } from "react-icons/md";
import callIcon from "../../Image/home/Background.png";
import underlineImg from "../../Image/home/underline.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
const AboutUsSection = () => {


  // Memoize static data to prevent re-creation on each render
  const features = useMemo(
    () => [
      "Leadership Development",
      "Process Optimization",
      "Ongoing Support",
      "Cost Efficiency",
    ],
    []
  );

  return (
    <motion.section
      className="Aboutcontainer container-fluid d-flex justify-content-center align-items-center z-1 "
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Background Clip Art with lazy loading */}
      <img
        src={carClipArt}
        alt="Car Clip Art"
        className="carClipArt"
        loading="lazy"
      />
      <img
        src={globeClipArt}
        alt="Globe Clip Art"
        className="globeClipArt"
        loading="lazy"
      />

      {/* Background Boxes */}
      <div
        className="backgroundBoxOne"
        aria-hidden="true"
        style={{
          position: "absolute",
        }}
      ></div>
      <div
        className="backgroundBoxTwo"
        aria-hidden="true"
        style={{
          position: "absolute",
        }}
      ></div>

      <div className="row align-items-center justify-content-center text-center text-md-start">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center mb-3 mb-md-0 position-relative">
          <img
            src={aboutImg}
            alt="Team working together"
            className="image img-fluid"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-6 mainAboutContainer">
          <h3 className="subheading">"Simply The Best"</h3>
          <h2 className="heading">Our Services Help You Succeed in Business</h2>
          
          {/* Underline Image */}
          <div className="d-flex justify-content-center justify-content-md-start">
            <img
              src={underlineImg}
              alt="Decorative underline"
              className="underline"
              loading="lazy"
            />
          </div>

          {/* Features List */}
          <ul className="features row justify-content-start z-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="featureItem col-12 col-sm-6 d-flex align-items-center justify-content-start mx-auto"
              >
                <span className="checkMark">
                  <MdOutlineCheckCircle />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Explore More Button and Contact Info */}
          <div className="actionSection d-flex flex-row align-items-center justify-content-between justify-content-md-start mt-3 z-2">
            <Link to="/about_us" aria-label="Explore more about our services">
              <button className="button me-3">Explore More →</button>
            </Link>

            <div className="contactInfo d-flex align-items-center">
              <img
                src={callIcon}
                alt="Phone Icon"
                className="phoneIcon"
                loading="lazy"
              />
              <div
                style={{
                  zIndex: "2",
                }}
              >
                <p className="call">Call Us Now</p>
                <p className="phoneNumber">
                  <a
                    href="tel:8240554890"
                    className="phone-link"
                    aria-label="Call us at 8240554890"
                  >
                    +91 82405-54890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
