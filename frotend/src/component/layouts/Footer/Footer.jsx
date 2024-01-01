import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Box, Paper } from "@mui/material";
import FooterHover from "./FooterHover";
import "./Footer.css";
import {
  LocalShipping,
  Security,
  LocalOffer,
  CreditCard,
} from "@mui/icons-material";
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
        <Box
          elevation={16}
          style={{
            width: "65%",
            height: "220px",
           
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <FooterHover />
        </Box>

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
                <div
                  style={{
                    marginTop: "5px",
                    marginLeft: "27px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <Grid container spacing={1}>
                      <Grid item xs={6} style={{ marginTop: "5px" }}>
                        <Paper
                          elevation={3}
                          style={{
                            backgroundColor: "#FF4E00",
                            height: "auto",
                            padding: "2px 1px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%",
                          }}
                        >
                          <div>
                            <LocalShipping
                              fontSize="large"
                              style={{ color: "#FFFFFF" }}
                            />
                          </div>
                          <div style={{}}>
                            <p
                              style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#ffffff",
                                marginBottom: "-5px",
                              }}
                            >
                              Express Delivery
                            </p>
                            <p style={{ fontSize: "11px", color: "#ffffff" }}>
                              Ships in 24 Hours
                            </p>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={6} style={{ marginTop: "5px" }}>
                        <Paper
                          elevation={3}
                          style={{
                            backgroundColor: "#FF4E00",
                            height: "auto",
                            padding: "2px 1px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%",
                          }}
                        >
                          <div>
                            <Security
                              fontSize="large"
                              style={{ color: "#FFFFFF" }}
                            />
                          </div>
                          <div>
                            <p
                              style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#ffffff",
                                marginBottom: "-5px",
                              }}
                            >
                              Brand Warranty
                            </p>
                            <p style={{ fontSize: "11px", color: "#ffffff" }}>
                              Original products
                            </p>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper
                          elevation={3}
                          style={{
                            backgroundColor: "#FF4E00",
                            height: "auto",
                            padding: "2px 1px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%",
                          }}
                        >
                          <div>
                            <LocalOffer
                              fontSize="large"
                              style={{ color: "#FFFFFF" }}
                            />
                          </div>
                          <div>
                            <p
                              style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#ffffff",
                                marginBottom: "-5px",
                              }}
                            >
                              Exciting Deals
                            </p>
                            <p style={{ fontSize: "11px", color: "#ffffff" }}>
                              On all prepaid orders
                            </p>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper
                          elevation={3}
                          style={{
                            backgroundColor: "#FF4E00",
                            height: "auto",
                            padding: "2px 1px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%",
                          }}
                        >
                          <div>
                            <CreditCard
                              fontSize="large"
                              style={{ color: "#FFFFFF" }}
                            />
                          </div>
                          <div>
                            <p
                              style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#ffffff",
                                marginBottom: "-5px",
                              }}
                            >
                              Secure Payments
                            </p>
                            <p style={{ fontSize: "11px", color: "#ffffff" }}>
                              Secure сertificate
                            </p>
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                </div>
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
                  <h5>Newsletter</h5>
                  <form onSubmit={handleSubmit} className="foot_form">
                    <input
                      type="email"
                      className="input_field_footer"
                      placeholder="Email Address*"
                      required
                      value={subValue}
                      onChange={(e) => setSubValue(e.target.value)}
                    />
                    <p style={{ color: "white" }}>
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
