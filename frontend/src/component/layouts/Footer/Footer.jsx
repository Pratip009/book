import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import axios from 'axios';
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../Image/LNWhite.png";
import "./Footer.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { Nav } from "react-bootstrap";
import SubscribeForm from "../../User/SubscribeForm";

export default function Footer() {
  const location = useLocation();
  const [phone, setPhone] = useState("8240554890");
  const [email, setEmail] = useState("infolearningneeds@gmail.com");

  const isActive = (path) => location.pathname === path;


 
  return (
    <div className="footer-wrapper">
      <MDBFooter
        className="text-center text-lg-start text-muted footer-custom"
        style={{ backgroundColor: "#003E90", position: "relative" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 social-networks"></section>

        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <MDBContainer className="text-center text-md-center mt-1 p-0">
            <MDBRow className="mt-3 p-0">
              <MDBCol md="4" lg="4" xl="4" xs="4" className="mt-1 p-2">
                <MDBContainer className="m-0 p-0">
                  <MDBNavbarBrand to="/" className="footer_logo">
                    <img src={logo} width={200} alt="Logo" loading="lazy" />
                  </MDBNavbarBrand>
                  <MDBRow>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow
                          className="align-items-center"
                          style={{
                            height: "100%",
                          }}
                        >
                          <TbTruckDelivery style={{ color: "white" }} />
                          <span className="text">Express Delivery</span>
                          <span className="text-two">Ships in 24 Hours</span>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow
                          className="align-items-center"
                          style={{
                            height: "100%",
                          }}
                        >
                          <GiCheckedShield style={{ color: "white" }} />
                          <span className="text">Brand Warranty</span>
                          <span className="text-two">Original products</span>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow
                          className="align-items-center"
                          style={{
                            height: "100%",
                          }}
                        >
                          <RiExchangeBoxLine style={{ color: "white" }} />

                          <span className="text">Exciting Deals</span>
                          <span className="text-two">All prepaid orders</span>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow
                          className="align-items-center"
                          style={{
                            height: "100%",
                          }}
                        >
                          <GrSecure style={{ color: "white" }} />

                          <span className="text">Secure Payment</span>
                          <span className="text-two">Secure certificate</span>
                        </MDBRow>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCol>

              <MDBCol md="6" lg="6" xl="6" xs="6" className="p-2">
                <MDBRow>
                  <MDBCol style={{ textAlign: "start" }}>
                    <h6
                      className="mb-4"
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#003E90",
                        textAlign: "start",
                        fontSize: "var(--font-p)",
                      }}
                    >
                      Help
                    </h6>
                    <p>
                      <NavLink
                        to="/track-order"
                        className={`footer_links ${
                          isActive("/track-order") ? "active_link" : ""
                        }`}
                      >
                        Track Order
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/about_us"
                        className={`footer_links ${
                          isActive("/about_us") ? "active_link" : ""
                        }`}
                      >
                        FAQs
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/policy/return"
                        className={`footer_links ${
                          isActive("/policy/return") ? "active_link" : ""
                        }`}
                      >
                        Cancel Order
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/policy/return"
                        className={`footer_links ${
                          isActive("/policy/return") ? "active_link" : ""
                        }`}
                      >
                        Return Order
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/warranty-info"
                        className={`footer_links ${
                          isActive("/warranty-info") ? "active_link" : ""
                        }`}
                      >
                        Warranty Info
                      </NavLink>
                    </p>
                  </MDBCol>

                  <MDBCol style={{ textAlign: "start" }}>
                    <h6
                      className="mb-4"
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#003E90",
                        textAlign: "start",
                        fontSize: "var(--font-p)",
                      }}
                    >
                      Policies
                    </h6>
                    <p>
                      <NavLink
                        to="/policy/terms"
                        className={`footer_links ${
                          isActive("/policy/terms") ? "active_link" : ""
                        }`}
                      >
                        Return Policy
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/security"
                        className={`footer_links ${
                          isActive("/security") ? "active_link" : ""
                        }`}
                      >
                        Security
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/sitemap"
                        className={`footer_links ${
                          isActive("/sitemap") ? "active_link" : ""
                        }`}
                      >
                        Sitemap
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/policy/privacy"
                        className={`footer_links ${
                          isActive("/policy/privacy") ? "active_link" : ""
                        }`}
                      >
                        Privacy Policy
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/terms/conditions"
                        className={`footer_links ${
                          isActive("/terms/conditions") ? "active_link" : ""
                        }`}
                      >
                        T&C
                      </NavLink>
                    </p>
                  </MDBCol>

                  <MDBCol style={{ textAlign: "start" }}>
                    <h6
                      className="mb-4"
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#003E90",
                        textAlign: "start",
                        fontSize: "var(--font-p)",
                      }}
                    >
                      Company
                    </h6>
                    <p>
                      <NavLink
                        to="/about_us"
                        className={`footer_links ${
                          isActive("/about_us") ? "active_link" : ""
                        }`}
                      >
                        About Us
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/contact"
                        className={`footer_links ${
                          isActive("/contact") ? "active_link" : ""
                        }`}
                      >
                        Contact Us
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/service-centres"
                        className={`footer_links ${
                          isActive("/service-centres") ? "active_link" : ""
                        }`}
                      >
                        Service Centres
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/career"
                        className={`footer_links ${
                          isActive("/career") ? "active_link" : ""
                        }`}
                      >
                        Work With Us
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/courses"
                        className={`footer_links ${
                          isActive("/courses") ? "active_link" : ""
                        }`}
                      >
                        Courses
                      </NavLink>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" xs="2" className="mb-md-0 mb-4 p-0">
                <h6 className="mb-4" style={{ fontSize: "var(--font-p)" }}>
                  Newsletter
                </h6>
                <SubscribeForm/>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center align-items-center mt-4">
              <MDBCol
                md="auto"
                className="text-center mb-3 mb-md-0 d-flex justify-content-center align-items-center"
              >
                <span className="textt">
                  Get connected with us on social networks:
                </span>
              </MDBCol>
              <MDBCol md="auto" className="text-center">
                <NavLink
                  to="https://www.facebook.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </NavLink>
                <NavLink
                  to="https://twitter.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </NavLink>
                <NavLink
                  to="https://www.instagram.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </NavLink>
                <NavLink
                  to="https://wa.me/8240554890"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </NavLink>
                <NavLink
                  to="https://www.youtube.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </NavLink>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center align-items-center mt-2">
              <MDBCol
                md="auto"
                className="text-center mb-3 mb-md-0 d-flex justify-content-center align-items-center"
              >
                <span className="textt d-flex align-items-center">
                  <IoIosMail className="mail-icon" />
                  <span>Email:</span>
                </span>
                <a
                  href={`mailto:${email}`}
                  className="ms-2 text-reset"
                  style={{ fontSize: "15px" }}
                >
                  {email}
                </a>
              </MDBCol>

              <MDBCol
                md="auto"
                className="text-center mb-3 mb-md-0 d-flex justify-content-center align-items-center"
              >
                <span className="textt d-flex align-items-center">
                  <FaPhone className="mail-icon" />
                  <span>Contact:</span>
                </span>
                <a
                  href={`tel:${phone}`}
                  className="ms-2 text-reset"
                  style={{ fontSize: "15px" }}
                >
                  {phone}
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4 footer-custom"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024&nbsp;
          <NavLink to="https://learningneeds.in/" className="text-reset">
            Learning Needs, All Rights Reserved.
          </NavLink>
        </div>
        <div className="overlay-container">
          <div className="overlay-content">
            <MDBRow>
              <MDBCol md="10" xs="12" sm="12" className="text-col-two">
                <h1 className="overlay-heading">
                  Let’s Change, Learn, Grow, and Transform!
                </h1>
                <p className="overlay-text">
                  Learning Needs offers variety of boutique services, tailored
                  to each client's need. Our specialized expertise allows the
                  Individual, Institution, Schools, and Organizations to achieve
                  their objectives.
                </p>
              </MDBCol>
              <MDBCol md="2" xs="12" sm="12" className="button-col">
                <button className="btn btn-primary btn-normal-case">
                  Get Started
                </button>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </MDBFooter>
    </div>
  );
}
