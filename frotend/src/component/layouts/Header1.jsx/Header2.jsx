import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import axios from "axios";
import AOS from "aos";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./Searchbar";
import CartIcon from "./CartIcon";
import ProfileModal from "./ProfileModel";
import ScrollingTextHeader from "./ScrollingTextHeader";
import logo from "../../../Image/LN.png";
import "./Header.css";
import "aos/dist/aos.css";

const navLinkStyle = {
  fontFamily: "'Outfit', sans-serif",
  textDecoration: "none",
  color: "#000000",
  marginRight: "20px",
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
        "https://learningneeds-strapi-1-r94y.onrender.com/api/phoneand-emails"
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
                    fontSize: "1.2rem",
                  }}
                />
                <span>{phone}</span>
              </Nav.Link>
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
                    fontSize: "1.2rem",
                  }}
                />
                <span>{email}</span>
              </Nav.Link>
              {isAuthenticated ? (
                <Link to="/account">
                  <Button
                    style={{
                      backgroundColor: "#FF4E00",
                      color: "white",
                      fontFamily: "'Outfit', sans-serif",
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

      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
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
                margin:0
              }}
            />
          </Navbar.Brand>

          {/* Icons for Mobile */}
          <Nav className="d-flex align-items-center ms-auto d-lg-none">
            <div className="d-flex align-items-center">
              {/* SearchBar hidden on xs screens */}
              <Nav.Link href="#search" className="d-none d-lg-block me-3">
                <SearchBar
                  searchBarActive={searchBarActive}
                  searchValue={searchValue}
                  handleCrossButtonClick={handleCrossButtonClick}
                  handleSearchButtonClick={handleSearchButtonClick}
                  handleSearchInputChange={handleSearchInputChange}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                />
              </Nav.Link>
              <Nav.Link href="/cart" className="me-3">
                <CartIcon style={{ color: "black" }} />
              </Nav.Link>
              <Nav.Link href="/profile">
                <ProfileModal user={user} isAuthenticated={isAuthenticated} />
              </Nav.Link>
              <Nav className="d-lg-none">
                <Nav.Link onClick={toggleNavbar}>
                  <FaBars size={24} />
                </Nav.Link>
              </Nav>
            </div>
          </Nav>

          {/* Navigation Links and SearchBar for larger screens */}
          <Navbar.Collapse
            in={isNavbarCollapsed}
            className="d-lg-flex justify-content-center"
          >
            <Nav className="mx-auto d-flex align-items-center">
              <Nav.Link
                href="/"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about_us"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/products"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="/training"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Training
              </Nav.Link>
              <Nav.Link
                href="/school"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                School Management
              </Nav.Link>
              <Nav.Link
                href="/service"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Service
              </Nav.Link>
              <Nav.Link
                href="/gallery"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="/blog"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="/contact"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="d-none d-lg-flex align-items-center ms-auto">
            <Nav.Link className="me-3">
              <SearchBar
                searchBarActive={searchBarActive}
                searchValue={searchValue}
                handleCrossButtonClick={handleCrossButtonClick}
                handleSearchButtonClick={handleSearchButtonClick}
                handleSearchInputChange={handleSearchInputChange}
                handleSearchFormSubmit={handleSearchFormSubmit}
              />
            </Nav.Link>
            <Nav.Link href="/cart" className="me-3">
              <CartIcon />
            </Nav.Link>
            <Nav.Link>
              <ProfileModal user={user} isAuthenticated={isAuthenticated} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Scrolling Text Header */}
      <ScrollingTextHeader />
    </>
  );
}

export default BasicExample;
