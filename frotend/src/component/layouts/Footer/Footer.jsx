import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

import "./Footer.css";
const footMenu = [
  {
    id: 1,
    title: "Help",
    menu: [
      {
        id: 1,
        link: "Track Order",
        path: "/orders",
      },
      {
        id: 2,
        link: "FAQs",
        // path: "/terms/conditions",
      },

      {
        id: 3,
        link: "Cancel Order",
        // path: "/policy/return",
      },
      {
        id: 4,
        link: "Return Order",
        // path: "/policy/return",
      },
      {
        id: 5,
        link: "Warranty Info",
        // path: "/policy/Terms",
      },
    ],
  },
  {
    id: 2,
    title: "Policies",
    menu: [
      {
        id: 1,
        link: "Return Policy",
        // path: "/policy/return",
      },
      {
        id: 2,
        link: "Security",
        // path: "/policy/privacy",
      },
      {
        id: 3,
        link: "Sitemap",
        // path: "/policy/Terms",
      },
      {
        id: 4,
        link: "Privacy Policy",
        // path: "/policy/privacy",
      },
      {
        id: 5,
        link: "T&C",
        // path: "/terms/conditions",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    menu: [
      {
        id: 1,
        link: "About Us",
        path: "/about",
      },
      {
        id: 2,
        link: "Contact Us",
        path: "/contact",
      },
      {
        id: 3,
        link: "Service Centres",
        path: "/",
      },
      {
        id: 4,
        link: "Careers",
        path: "/",
      },
      {
        id: 5,
        link: "Courses",
        path: "/terms/conditions",
      },
    ],
  },
];

const Footer = () => {
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thankyou, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "230px",
            background: "linear-gradient(to right, #FF7700, #FF4E00)",
            marginBottom: "-100px",
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              style={{
                padding: "40px",
              }}
            >
              <h1
                style={{
                  fontSize: "23px",
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ffffff",
                }}
              >
                Let’s Change, Learn, Grow, and Transform!
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
                  textAlign: "justify",
                  display: "inline-block",
                  color: "#ffffff",
                }}
              >
                Learning Needs offers a variety of boutique services, tailored
                to each clients need. Our specialized expertise allows the
                Individual, Institution, Schools and Organizations to achieve
                their objectives{" "}
              </p>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  border: "1px solid white",
                  color: "#fff",
                  background: "linear-gradient(45deg, #003E90, #003E90A2)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "0.3s",
                  outline: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
                variant="contained"
              >
                Get Started..
              </Button>
            </Grid>
          </Grid>
        </div>
        <footer className="footer">
          <div className="container" style={{ height: "300px" }}>
            <div className="wrapper_footer footer_wrapper ">
              <div className="foot_about foot1">
                <div className="foot_logo" style={{}}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <img
                      src={require("../../../Image/LN.png")}
                      alt="cricekt weapon logo"
                      style={{
                        background: "white",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    />
                    {/* <h1 className="Foot_heading"></h1> */}
                  </Link>
                </div>
                {/* <div className="logo_text">
                <h1>Let's Change,Learn,Grow and Transform!</h1>
              </div>
              <div className="logo_span">
                <span>
                  Learning Needs offers a variety of boutique services, tailored
                  to each clients need. Our specialized expertise allows the
                  Individual, Institution, Schools and Organizations to achieve
                  their objectives
                </span>
              </div> */}
              </div>

              <div class="foot_menu_container">
                {footMenu.map((item) => {
                  const { id, title, menu } = item;
                  return (
                    <div
                      class="foot_menu foot2"
                      key={id}
                      style={{ marginTop: "100px" }}
                    >
                      <h4>{title}</h4>
                      <ul>
                        {menu.map((item) => {
                          const { id, link, path } = item;
                          return (
                            <li key={id}>
                              <Link to={path}>{link}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="foot_links foot3">
                <div className=""></div>

                {/* socila media link */}

                {/* <div className="foot_social">
                {footSocial.map((item) => {
                  const { id, icon, path } = item;
                  return (
                    <a
                      href={path}
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div> */}
                <div className="foot_subs" style={{ marginTop: "120px" }}>
                  <h5>Newslatter</h5>
                  <form onSubmit={handleSubmit} className="foot_form">
                    <input
                      type="email"
                      className="input_field_footer"
                      placeholder="Email Address*"
                      required
                      value={subValue}
                      onChange={(e) => setSubValue(e.target.value)}
                    />
                    <p>
                      By submitting your email address you agree to the{" "}
                      <Link to="/terms/conditions" className="foot_subs_text">
                        Terms & Conditions
                      </Link>
                    </p>
                    <button type="submit" className="btnFooter">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="sub_footer_root">
            <div className="container_Footer">
              <div className="sub_footer_wrapper">
                <div className="foot_policyLink">
                  <ul>
                    <li className="subfoot_link_text1">
                      <Link to="/policy/privacy">
                        <p className="foot_policyLink_p">Privacy Policy</p>
                      </Link>
                    </li>
                    <li className="subfoot_link_text2">
                      <Link to="/terms/conditions">
                        <p className="foot_policyLink_p">Terms & Conditions</p>
                      </Link>
                    </li>
                    <li className="subfoot_link_text3">
                      <Link to="/policy/Terms">
                        <p className="foot_policyLink_p">Terms of Use</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="foot_copyright">
                  <p>
                    &copy; {currYear} | Learning Needs, All Rights Reserved.
                    <span>
                      <a href="https://www.gospeedy.co.in/">
                        {" "}
                        | GoSpeedy Developer
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
