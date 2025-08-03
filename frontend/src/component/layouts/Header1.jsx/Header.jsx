import React, { useState, useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchBar from "./Searchbar";
import "./Header.css";
import "aos/dist/aos.css";
import AOS from "aos";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModel";
import axios from "axios";
import CartIcon from "./CartIcon";
import ScrollingTextHeader from "./ScrollingTextHeader";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Header() {
  const history = useHistory();
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  const [searchBarActive, setSearchBarActive] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Fetch phone and email data from API
  useEffect(() => {
    axios
      .get("https://book-rxj9.onrender.com/api/phoneand-emails")
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

  // Handle sideBar Toggle Button
  const handleSideBarMenu = () => {
    setSideMenu(!sideMenu);
  };

  // Handle Search Button toggle
  const handleSearchButtonClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  // Handle input value of Search bar.
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Handle searching
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      history.push(`/products/${searchValue}`);
    } else {
      history.push("/products");
    }
  };

  // Handle sideBar Toggle Button
  const handleCrossButtonClick = () => {
    setSearchValue("");
    setSearchBarActive(!searchBarActive);
  };

  return (
    <>
      {/* Add the scrolling text header here */}
      <div className="header">
        <div className="headerTop">
          <div class="headerTopLeft">
            <div class="headerPhone">
              <CallIcon className="headerRetailer_Svg" />
              <span>{phone}</span>
            </div>
          </div>
          <div className="headerTopRight">
            <div className="headerRetailer">
              <LocationOnIcon className="headerRetailer_Svg" data-aos="fade" />
              <span data-aos="fade" style={{ fontWeight: "400" }}>
                {email} {/* Display fetched email */}
              </span>
            </div>

            <div className="headerLogin">
              {isAuthenticated ? (
                <Link
                  to="/account"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button
                    className="account_box"
                    style={{ backgroundColor: "#FF4E00" }}
                  >
                    <LockPersonIcon className="headerRetailer_Svg2" />
                    <span className="My_account" style={{ fontWeight: "600" }}>
                      My Account
                    </span>
                  </button>
                </Link>
              ) : (
                <Link
                  to="/signup"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button
                    className="account_box"
                    style={{ backgroundColor: "#FF4E00" }}
                  >
                    <LockPersonIcon className="headerRetailer_Svg2" />
                    <span className="My_account" style={{ fontWeight: "600" }}>
                      Sign Up
                    </span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="headerBottom">
          <div className="headerBottom__logo">
            <div className="header_mobile_menu">
              <ReorderIcon
                onClick={() => setSideMenu(!sideMenu)}
                sx={{
                  fontSize: 29,
                  color: "black",
                  "&:hover": {
                    color: "#FF4E00",
                    cursor: "pointer",
                  },
                }}
              />
              {sideMenu && (
                <Sidebar
                  handleSideBarMenu={handleSideBarMenu}
                  isAuthenticated={isAuthenticated}
                  user={user}
                />
              )}
              {/* <SearchBar
                searchBarActive={searchBarActive}
                searchValue={searchValue}
                handleCrossButtonClick={handleCrossButtonClick}
                handleSearchButtonClick={handleSearchButtonClick}
                handleSearchInputChange={handleSearchInputChange}
                handleSearchFormSubmit={handleSearchFormSubmit}
              /> */}
            </div>
          </div>
          {!searchBarActive && (
            <Link to="/">
              <img
                src={require("../../../Image/LN.png")}
                alt="logo"
                className="headerBottom__logo_main"
              />
            </Link>
          )}

          {!searchBarActive && (
            <div className="headerBottom_navMenu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about_us">About Us</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/training">Training</Link>
                </li>
                <li>
                  <Link to="/school">School Management</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="headerBotttom_icons">
            <div className="search_Bar">
              <SearchBar
                searchBarActive={searchBarActive}
                searchValue={searchValue}
                handleCrossButtonClick={handleCrossButtonClick}
                handleSearchButtonClick={handleSearchButtonClick}
                handleSearchInputChange={handleSearchInputChange}
                handleSearchFormSubmit={handleSearchFormSubmit}
              />
            </div>
            <Link
              to="/cart"
              style={{
                color: "none",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <CartIcon />
            </Link>
            <ProfileModal
              user={user}
              isAuthenticated={isAuthenticated}
              className="profile-icon"
            />
          </div>
        </div>
        <ScrollingTextHeader />
      </div>
    </>
  );
}

export default Header;
