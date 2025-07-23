import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../actions/cartAction";
import CartItem from "../../../component/Cart/CartItem";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import ButtonMUI from "@material-ui/core/Button";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../../../component/DisplayMoney/DisplayMoney";
import CartIcon from "./CartIcon";
import ProfileModal from "../../../component/layouts/Header1.jsx/ProfileModel";
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
import { FaTrash } from "react-icons/fa6";

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

const activeLinkStyle = {
  fontWeight: "bold",
  marginTop: "-2px",
};

function Header2() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { isAuthenticated, user } = useSelector((state) => state.userData);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("8240554890");
  const [email, setEmail] = useState("infolearningneeds@gmail.com");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsNavbarCollapsed(false);
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    } else {
      dispatch(addItemToCart(id, newQty));
    }
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleApplyCoupon = () => {
    setIsValid(false); // Placeholder for coupon logic
  };

  const handleFocus = (event) => {
    setIsFocused(event.target.value !== "");
  };

  const checkoutHandler = () => {
    setShowSidebar(false);
    window.location.href = "/login?redirect=/shipping";
  };

  // Calculate price after discount
  let totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let discountedPrice = generateDiscountedPrice(totalPrice);
  let totalDiscount = totalPrice - discountedPrice;
  let final = totalPrice - totalDiscount;
  final = dispalyMoney(final);
  totalDiscount = dispalyMoney(totalDiscount);
  totalPrice = dispalyMoney(totalPrice);

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
                  marginRight: "10px",
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
                href={`mailto:${email}`}
                target="_blank"
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

          <Nav className="d-flex align-items-center ms-auto d-lg-none">
            <div className="d-flex align-items-center">
              <Nav.Link onClick={toggleSidebar} className="me-3">
                <CartIcon style={{ color: "black" }} />
              </Nav.Link>
              <span>
                <ProfileModal user={user} isAuthenticated={isAuthenticated} />
              </span>
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
                style={{
                  ...navLinkStyle,
                  ...(isActive("/") && activeLinkStyle),
                }}
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
                style={isActive("/about_us") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/products") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/training") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/school") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/service") ? activeLinkStyle : navLinkStyle}
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
                to="/sports"
                className="desktop-nav-link"
                style={isActive("/sports") ? activeLinkStyle : navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Sports
              </Link>
              <Link
                to="/gallery"
                className="desktop-nav-link"
                style={isActive("/gallery") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/blog") ? activeLinkStyle : navLinkStyle}
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
                style={isActive("/contact") ? activeLinkStyle : navLinkStyle}
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

            <Nav
              className="d-flex flex-column align-items-start d-lg-none mx-2"
              id="mobile-nav"
            >
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                to="/sports"
                onClick={handleLinkClick}
                className="mobile-nav-link"
                style={navLinkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = navLinkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = navLinkStyle.color)
                }
              >
                Sports
              </Link>
              <Link
                to="/gallery"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
            <Nav.Link onClick={toggleSidebar} className="me-3">
              <CartIcon />
            </Nav.Link>
            <div>
              <ProfileModal user={user} isAuthenticated={isAuthenticated} />
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Cart Sidebar */}
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="end"
        className="tw-w-[400px] tw-bg-gray-50"
      >
        <Offcanvas.Header closeButton className="tw-bg-white tw-shadow-sm">
          <Offcanvas.Title className="tw-font-nunito tw-text-xl tw-font-bold tw-text-gray-800">
            Your Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="tw-p-4 tw-flex tw-flex-col tw-gap-4">
          {cartItems.length === 0 ? (
            <div className="tw-text-center tw-py-8">
              <Typography
                variant="h6"
                className="tw-font-nunito tw-text-gray-700 tw-mb-2"
              >
                Your Shopping Cart is Empty
              </Typography>
              <Typography
                variant="body2"
                className="tw-font-nunito tw-text-gray-500 tw-mb-4"
              >
                Let's get shopping!
              </Typography>
              <ButtonMUI
                variant="contained"
                className="tw-bg-[#FF4E00] tw-text-white tw-font-nunito hover:tw-bg-[#e64400]"
                onClick={() => {
                  toggleSidebar();
                  window.location.href = "/products";
                }}
              >
                Shop Now
              </ButtonMUI>
            </div>
          ) : (
            <div className="tw-relative tw-flex tw-flex-col tw-gap-6 tw-p-4 tw-bg-gray-50 tw-rounded-lg tw-shadow-inner tw-min-h-[500px]">
              {/* Cart Items Section */}
              <div className="tw-max-h-[300px] tw-overflow-y-auto tw-pr-2">
                {cartItems.map((item) => {
                  const isPDF = item.type === "pdf";
                  const imageSrc = isPDF
                    ? "https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    : item.image || "https://via.placeholder.com/60";

                  return (
                    <div
                      key={item.productId}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                        padding: "16px",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        cursor: "default",
                        hover: {
                          transform: "scale(1.01)",
                          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null; // prevent infinite loop if fallback also fails
                          e.target.src =
                            "https://static.vecteezy.com/system/resources/previews/023/234/824/non_2x/pdf-icon-red-and-white-color-for-free-png.png"; // your fallback image URL
                        }}
                        style={{
                          width: "64px",
                          height: "64px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: "4px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "14px",
                            color: "#6b7280",
                            marginBottom: "8px",
                          }}
                        >
                          Price: {dispalyMoney(item.price)}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          <ButtonMUI
                            variant="outlined"
                            size="small"
                            style={{
                              fontFamily: "Nunito",
                              borderColor: "#d1d5db",
                              color: "#374151",
                              minWidth: "32px",
                              padding: "4px 10px",
                            }}
                            onClick={() =>
                              decreaseQuantity(item.productId, item.quantity)
                            }
                          >
                            −
                          </ButtonMUI>
                          <p
                            style={{
                              fontFamily: "Nunito, sans-serif",
                              fontSize: "15px",
                              fontWeight: 600,
                              padding: "0 4px",
                              minWidth: "20px",
                              textAlign: "center",
                              margin:0
                            }}
                          >
                            {item.quantity}
                          </p>
                          <ButtonMUI
                            variant="outlined"
                            size="small"
                            style={{
                              fontFamily: "Nunito",
                              borderColor: "#d1d5db",
                              color: "#374151",
                              minWidth: "32px",
                              padding: "4px 10px",
                            }}
                            onClick={() =>
                              increaseQuantity(
                                item.productId,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </ButtonMUI>
                          <ButtonMUI
                            
                            size="small"
                            style={{
                              fontFamily: "Nunito",
                              color: "#dc2626",
                             
                              
                             
                              marginLeft: "auto",
                            }}
                            onClick={() => deleteCartItems(item.productId)}
                          >
                            <FaTrash />

                          </ButtonMUI>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  padding: "20px",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#2D3748",
                    marginBottom: "12px",
                  }}
                >
                  Order Summary ({cartItems.length}{" "}
                  {cartItems.length > 1 ? "items" : "item"})
                </Typography>

                {/* Price Details */}
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ color: "#718096" }}>Original Price</span>
                    <span style={{ fontWeight: "500", color: "#2D3748" }}>
                      {totalPrice}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ color: "#718096" }}>Discount</span>
                    <span style={{ color: "#A0AEC0" }}>
                      <del>{totalDiscount}</del>
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "#718096" }}>Delivery</span>
                    <span style={{ color: "#38A169", fontWeight: "bold" }}>
                      Free
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{ borderTop: "1px solid #E2E8F0", margin: "16px 0" }}
                />

                {/* Final Total */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <Typography
                      style={{ fontWeight: "bold", color: "#2D3748" }}
                    >
                      Total Price
                    </Typography>
                    <Typography style={{ fontSize: "12px", color: "#A0AEC0" }}>
                      (Inclusive of all taxes)
                    </Typography>
                  </div>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#2D3748",
                    }}
                  >
                    {final}
                  </Typography>
                </div>

                {/* Sticky Checkout Button */}
                <div
                  style={{
                    position: "sticky",
                    bottom: 0,
                    backgroundColor: "#F7FAFC",
                    paddingTop: "12px",
                    paddingBottom: "16px",
                    marginTop: "24px",
                  }}
                >
                  <ButtonMUI
                    variant="contained"
                    onClick={checkoutHandler}
                    fullWidth
                    style={{
                      backgroundColor: "#FF4E00",
                      color: "#fff",
                      fontWeight: "600",
                      padding: "12px 0",
                      fontSize: "16px",
                      borderRadius: "8px",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    Proceed to Checkout
                  </ButtonMUI>
                </div>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <ScrollingTextHeader />
    </>
  );
}

export default Header2;
