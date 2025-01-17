import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../Image/LNWhite.png";
import "./Footer.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
export default function Footer() {
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
                  <MDBNavbarBrand href="/" className="footer_logo">
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
                        
                            <TbTruckDelivery style={{color:'white'}} />
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
                         
                            <GiCheckedShield style={{color:'white'}} />
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
                         
                            <RiExchangeBoxLine style={{color:'white'}} />
                          
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
                        
                            <GrSecure style={{color:'white'}} />
                      
                       
                            <span className="text">Secure Payment</span>
                            <span className="text-two">Secure certificate</span>
                     
                        </MDBRow>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCol>

              <MDBCol md="6" lg="6" xl="6" xs="6" className=" p-2">
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
                      <a href="#!" className="footer_links">
                        Track Order
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        FAQs
                      </a>
                    </p>
                    <p>
                      <a href="/policy/return" className="footer_links">
                        Cancel Order
                      </a>
                    </p>
                    <p>
                      <a href="/policy/return" className="footer_links">
                        Return Order
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Warranty Info
                      </a>
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
                      <a href="/policy/Terms" className="footer_links">
                        Return Policy
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Security
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Sitemap
                      </a>
                    </p>
                    <p>
                      <a href="/policy/Terms" className="footer_links">
                        Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="/terms/conditions" className="footer_links">
                        T&C
                      </a>
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
                      <a href="/about_us" className="footer_links">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="/contact" className="footer_links">
                        Contact Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Service Centres
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Work With Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
                        Courses
                      </a>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" xs="2" className="mb-md-0 mb-4 p-0">
                <h6 className="mb-4" style={{ fontSize: "var(--font-p)" }}>
                  Newsletter
                </h6>
                <div className="custom-input-wrapper">
                  <input
                    type="email"
                    className="form-control custom-input-field"
                    placeholder=" "
                    required
                  />
                  <label className="custom-floating-label">Email address</label>
                </div>
                <p className="textt">
                  By submitting your email address you agree to the Terms &
                  Conditions
                </p>
                <MDBBtn
                  color="light"
                  type="submit"
                  className="mb-4 custom-btn w-100"
                  style={{ fontFamily: "Nunito" }}
                >
                  Subscribe
                </MDBBtn>
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
                <a
                  href="https://www.facebook.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/8240554890"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a>
                <a
                  href="https://www.youtube.com"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
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
                  href="mailto:infolearningneeds@gmail.com"
                  className="ms-2 text-reset"
                >
                  infolearningneeds@gmail.com
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
                <a href="tel:8240554890" className="ms-2 text-reset">
                  8240554890
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
          <a href="https://learningneeds.in/" className="text-reset">
            Learning Needs, All Rights Reserved.
          </a>
        </div>
      </MDBFooter>

      <div className="overlay-container">
        <div className="overlay-content">
          <MDBRow>
            <MDBCol md="10" xs="12" sm="12" className="text-col-two">
              <h1 className="overlay-heading">
                Let’s Change, Learn, Grow, and Transform!
              </h1>
              <p className="overlay-text">
                Learning Needs offers a variety of boutique services, tailored
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
    </div>
  );
}
