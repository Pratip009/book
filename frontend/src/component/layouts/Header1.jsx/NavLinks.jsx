// components/NavLinks.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about_us", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/training", label: "Training" },
  { to: "/school", label: "School Management Service" },
  { to: "/service", label: "School Essentials" },
  { to: "/sports", label: "Sports" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const navLinkStyle = {
  fontFamily: "Nunito",
  textDecoration: "none",
  color: "#000",
  marginRight: "20px",
  fontSize: "var(--font-span)",
};
const navLinkHover = { color: "#FF4E00" };
const activeLink = { fontWeight: "bold", marginTop: "-2px" };

const NavLinks = ({ isMobile = false, onClick }) => {
  const { pathname } = useLocation();
  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          onClick={onClick}
          className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}
          style={{
            ...navLinkStyle,
            ...(pathname === to ? activeLink : {}),
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = navLinkHover.color)}
          onMouseOut={(e) => (e.currentTarget.style.color = navLinkStyle.color)}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
