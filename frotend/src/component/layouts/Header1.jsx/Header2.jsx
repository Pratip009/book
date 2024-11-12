import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import axios from "axios";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import ProfileModal from "./ProfileModel";
import ScrollingTextHeader from "./ScrollingTextHeader";
import logo from "../../../Image/LN.webp";
import "./Header.css";
import "aos/dist/aos.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const navLinkStyle = {
  fontFamily: "Nunito",
  textDecoration: "none",
  color: "#000000",
  marginRight: "20px",
  fontSize: "var(--font-span)",
};

const navLinkHoverStyle = {
  color: "#FF4E00",
};

function BasicExample() {
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get("https://learningneeds-strapi-11ta.onrender.com/api/phoneand-emails")
      .then((response) => {
        const data = response.data?.data[0]?.attributes;
        if (data) {
          setPhone(data.phone);
          setEmail(data.email);
        }
      })
      .catch((error) => {
        console.error("Error fetching phone and email data:", error);
      });
  }, []);

  const toggleNavbar = () => {
    setIsNavbarCollapsed((prev) => !prev);
  };

  return (
    <>
      {/* First Navbar Section */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#003E90",
          fontFamily: "Nunito",
        }}
      >
        <Container style={{ padding: "0 5px" }}>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between align-items-center"
          >
            <Nav className="d-flex align-items-center flex-row flex-wrap">
              <Nav.Link
                href={`tel:${phone}`}
                className="d-flex align-items-center"
                style={{
                  color: "white",
                  fontFamily: "Nunito",
                  textDecoration: "none",
                }}
              >
                <FaPhoneAlt
                  style={{
                    color: "white",
                    marginRight: "0.25rem",
                    fontSize: "var(--font-span)",
                  }}
                />
                <span
                  style={{ fontSize: "var(--font-span)", fontFamily: "Nunito" }}
                >
                  {phone}
                </span>
              </Nav.Link>

              {/* Social icons in a row for mobile */}
              <MDBRow className="d-flex justify-content-center align-items-center flex-row">
                <MDBCol
                  md="auto"
                  className="text-center"
                  style={{ margin: "0 .25rem" }}
                >
                  {/* Social link with circular white background */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-1 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.15rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFacebook style={{ color: "#1877F2" }} />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-1 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.15rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RiInstagramFill style={{ color: "#C13584" }} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-1 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.15rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaXTwitter style={{ color: "#000000" }} />
                  </a>
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-1 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.15rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoLogoWhatsapp style={{ color: "#25D366" }} />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-1 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.15rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaYoutube style={{ color: "#FF0000" }} />
                  </a>
                </MDBCol>
              </MDBRow>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link
                href={`mailto:${email}`} // Try opening the email client with `mailto`
                target="_blank" // Open the email client in a new tab
                rel="noopener noreferrer"
                className="d-flex align-items-center me-3 d-none d-lg-flex"
                style={{
                  color: "white",
                  
                  textDecoration: "none",
                }}
              >
                <FaEnvelope
                  style={{
                    color: "white",
                    marginRight: "0.5rem",
                    fontSize: "var(--font-span)",
                  }}
                />
                <span
                  style={{ fontSize: "var(--font-span)", fontFamily: "Nunito" }}
                >
                  {email}
                </span>
              </Nav.Link>

              {isAuthenticated ? (
                <Link to="/account">
                  <Button
                    style={{
                      padding: "5px 4px",
                      backgroundColor: "#FF4E00",
                      color: "white",
                      fontFamily: "Nunito",
                      fontSize: "var(--font-span)",
                    }}
                    size="sm"
                  >
                    My Account
                  </Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button
                    style={{
                      padding: "5px 4px",
                      backgroundColor: "#FF4E00",
                      color: "white",
                      fontFamily: "Nunito",
                      fontSize: "var(--font-span)",
                    }}
                    size="sm"
                  >
                    Sign Up
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar
        bg="light"
        data-bs-theme="light"
        expand="lg"
        style={{ padding: 0 }}
      >
        <Container style={{ padding: "0 5px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand className="mx-auto my-auto">
              <img
                src={logo}
                alt="Logo"
                className="logo-lg d-none d-md-block"
                width="200"
                height="200"
              />
              <img
                src={logo}
                alt="Logo"
                className="logo-sm d-block d-md-none"
              />
            </Navbar.Brand>
          </Link>

          {/* Icons for Mobile */}
          <Nav className="d-flex align-items-center ms-auto d-lg-none">
            <div className="d-flex align-items-center">
              <Link to="/cart" className="me-3">
                <CartIcon style={{ color: "black" }} />
              </Link>
              <Link>
                <ProfileModal user={user} isAuthenticated={isAuthenticated} />
              </Link>
              <Nav className="d-lg-none">
                <Nav.Link onClick={toggleNavbar}>
                  <FaBars size={24} />
                </Nav.Link>
              </Nav>
            </div>
          </Nav>

          <Navbar.Collapse
            in={isNavbarCollapsed}
            className="d-lg-flex justify-content-start"
          >
            <Nav
              className="d-none d-lg-flex mx-auto align-items-start"
              id="desktop-nav"
            >
              <Link
                to="/"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Home
              </Link>
              <Link
                to="/about_us"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Products
              </Link>
              <Link
                to="/training"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Training
              </Link>
              <Link
                to="/school"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                School Management Service
              </Link>
              <Link
                to="/service"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                School Essentials
              </Link>
              <Link
                to="/gallery"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="desktop-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Contact
              </Link>
            </Nav>

            {/* Mobile View Navigation */}

            <Nav
              className="d-flex flex-column align-items-start d-lg-none mx-2"
              id="mobile-nav"
            >
              <Link
                to="/"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Home
              </Link>
              <Link
                to="/about_us"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Products
              </Link>
              <Link
                to="/training"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Training
              </Link>
              <Link
                to="/school"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                School Management Service
              </Link>
              <Link
                to="/service"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                School Essentials
              </Link>
              <Link
                to="/gallery"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="d-none d-lg-flex align-items-center ms-auto">
            <Link to="/cart" className="me-3">
              <CartIcon />
            </Link>
            <div>
              <ProfileModal user={user} isAuthenticated={isAuthenticated} />
            </div>
          </Nav>
        </Container>
      </Navbar>
      <ScrollingTextHeader />
    </>
  );
}

export default BasicExample;
// yim0eNWmTH-OiWI0ZDKAs7-BcBMJVE
// admin
