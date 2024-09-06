import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import axios from "axios";
import AOS from "aos";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import ProfileModal from "./ProfileModel";
import ScrollingTextHeader from "./ScrollingTextHeader";
import logo from "../../../Image/LN.png";
import "./Header.css";
import "aos/dist/aos.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const navLinkStyle = {
  fontFamily: "'Outfit', sans-serif",
  textDecoration: "none",
  color: "#000000",
  marginRight: "20px",
  fontSize: "var(--font-span)",
};

const navLinkHoverStyle = {
  color: "#FF4E00",
};

function BasicExample() {
  const history = useHistory();
  const { isAuthenticated, user } = useSelector((state) => state.userData);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://heroku-learningneeds-strapi.onrender.com/api/phoneand-emails"
      )
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

    AOS.init({ duration: 2000 });
  }, []);

  const handleSearchButtonClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      history.push(`/products/${searchValue}`);
    } else {
      history.push("/products");
    }
  };

  const handleCrossButtonClick = () => {
    setSearchValue("");
    setSearchBarActive(!searchBarActive);
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
      {/* First Navbar Section */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#003E90",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <Container fluid>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between align-items-center"
          >
            <Nav className="d-flex align-items-center">
              <Nav.Link
                href="#"
                className="d-flex align-items-center"
                style={{
                  color: "white",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                }}
              >
                <FaPhoneAlt
                  style={{
                    color: "white",
                    marginRight: "0.5rem",
                    fontSize: "var(--font-span)",
                  }}
                />
                <span style={{ fontSize: "var(--font-span)" }}>{phone}</span>
              </Nav.Link>

              {/* Add spacing between Nav.Link and MDBRow */}
              <MDBRow className="d-none d-sm-flex justify-content-center align-items-center ms-4">
                <MDBCol md="auto" className="text-center">
                  {/* Social link with circular white background */}
                  <a
                    href="/"
                    className="me-2 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.25rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFacebook style={{ color: "#1877F2" }} />
                  </a>
                  <a
                    href="/"
                    className="me-2 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.25rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RiInstagramFill style={{ color: "#C13584" }} />
                  </a>
                  <a
                    href="/"
                    className="me-2 text-reset"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "0.25rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaTwitter style={{ color: "#1DA1F2" }} />
                  </a>
                </MDBCol>
              </MDBRow>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link
                href="#"
                className="d-flex align-items-center me-3 d-none d-lg-flex"
                style={{
                  color: "white",
                  fontFamily: "'Outfit', sans-serif",
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
                <span style={{ fontSize: "var(--font-span)" }}>{email}</span>
              </Nav.Link>
              {isAuthenticated ? (
                <Link to="/account">
                  <Button
                    style={{
                      backgroundColor: "#FF4E00",
                      color: "white",
                      fontFamily: "'Outfit', sans-serif",
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
                      backgroundColor: "#FF4E00",
                      color: "white",
                      fontFamily: "'Outfit', sans-serif",
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
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand className="mx-auto my-auto">
              <img
                src={logo}
                alt="Logo"
                className="d-none d-md-block"
                style={{
                  width: "200px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <img
                src={logo}
                alt="Logo"
                className="d-block d-md-none"
                style={{
                  width: "150px",
                  maxWidth: "100%",
                  height: "auto",
                  margin: 0,
                }}
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
                School Management
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
                Service
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
                School Management
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
                Service
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
            <Link>
              <ProfileModal user={user} isAuthenticated={isAuthenticated} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <ScrollingTextHeader />
    </>
  );
}

export default BasicExample;
