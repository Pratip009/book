import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../Image/LN.webp";
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
          <MDBContainer fluid className="text-center text-md-center mt-1 p-0">
            <MDBRow className="mt-3 p-0">
              <MDBCol md="4" lg="4" xl="4" xs="4" className="mt-1 p-2">
                <MDBContainer className="m-0 p-0">
                  <MDBNavbarBrand href="/" className="footer_logo">
                    <img
                      src={logo}
                     width={200}
                      alt="Logo"
                      loading="lazy"
                      style={{
                        backgroundColor: "white",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                      }}
                    />
                    
                  </MDBNavbarBrand>
                  <MDBRow>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow className="align-items-center">
                          <MDBCol md="4" className="icon-col">
                            <TbTruckDelivery className="icon" />
                          </MDBCol>
                          <MDBCol md="8" className="text-col">
                            <span className="text">Express Delivery</span>
                            <span className="text-two">Ships in 24 Hours</span>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow className="align-items-center">
                          <MDBCol md="4" className="icon-col">
                            <GiCheckedShield className="icon" />
                          </MDBCol>
                          <MDBCol md="8" className="text-col">
                            <span className="text">Brand Warranty</span>
                            <span className="text-two">Original products</span>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow className="align-items-center">
                          <MDBCol md="4" className="icon-col">
                            <RiExchangeBoxLine className="icon" />
                          </MDBCol>
                          <MDBCol md="8" className="text-col">
                            <span className="text">Exciting Deals</span>
                            <span className="text-two">All prepaid orders</span>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" xs="12" className="box-col">
                      <div className="box">
                        <MDBRow className="align-items-center">
                          <MDBCol md="4" className="icon-col">
                            <GrSecure className="icon" />
                          </MDBCol>
                          <MDBCol md="8" className="text-col">
                            <span className="text">Secure Payment</span>
                            <span className="text-two">Secure certificate</span>
                          </MDBCol>
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
                        fontSize:"var(--font-p)"
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
                      <a href="#!" className="footer_links">
                        Cancel Order
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
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
                         fontSize:"var(--font-p)",
                      }}
                    >
                      Policies
                    </h6>
                    <p>
                      <a href="#!" className="footer_links">
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
                      <a href="#!" className="footer_links">
                        Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
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
                         fontSize:"var(--font-p)"
                      }}
                    >
                      Company
                    </h6>
                    <p>
                      <a href="#!" className="footer_links">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="footer_links">
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
                <h6 className="mb-4" style={{fontSize:"var(--font-p)"}}>Newsletter</h6>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
                <p className="textt">
                  By submitting your email address you agree to the Terms &
                  Conditions
                </p>
                <MDBBtn
                  color="light"
                  type="submit"
                  className="mb-4 custom-btn w-100"
                  style={{  fontFamily:"'Outfit', sans-serif"}}
                >
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol md="auto" className="text-center mb-3 mb-md-0">
                <span className="textt">
                  Get connected with us on social networks:
                </span>
              </MDBCol>
              <MDBCol md="auto" className="text-center">
                <a href="/" className="me-4 text-reset">
                  <FaFacebook />
                </a>
                <a href="/" className="me-4 text-reset">
                  <FaXTwitter />
                </a>
                <a href="/" className="me-4 text-reset">
                  <FaInstagram />
                </a>
                <a href="/" className="me-4 text-reset">
                  <IoLogoWhatsapp />
                </a>
                <a href="/" className="me-4 text-reset">
                  <FaYoutube />
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
              Learning Needs offers a variety of boutique services, tailored to
              each client's need. Our specialized expertise allows the
              Individual, Institution, Schools, and Organizations to achieve
              their objectives.
            </p>
          </MDBCol>
          <MDBCol md="2" xs="12" sm="12" className="button-col">
            <button className="btn btn-primary btn-normal-case">Get Started...</button>
          </MDBCol>
        </MDBRow>
        </div>
      </div>
    </div>
  );
}
