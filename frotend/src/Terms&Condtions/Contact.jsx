import React, { useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Contact.css";
import Banner from "../component/Banner";
import mainImg from "../Image/Product/contactImg.png";
import pattern from "../Image/Product/Frame 18.png";
import bookImg from "../Image/home/teambook.png";
import star from "../Image/home/teamstar.png";
const useStyles = makeStyles((theme) => ({
  root_contactus: {
    padding: "8rem 2rem",
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0.5rem",
    },
  },
  contact_Container_contactus: {
    width: "70%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title_contact_us: {
    color: "#414141",
    fontSize: "1.5rem !important",
    padding: "1rem 3rem",
    fontFamily: "Roboto",
    fontWeight: "700 !important",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      padding: "1rem 0",
    },
  },
  divider_contact: {
    width: "90%",
    backgroundColor: "#b6b6b6",
    margin: "2rem 0 !important",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
    },
  },
  helpTitle_contact_us: {
    fontSize: "1.5rem",
    color: "black",
    padding: "1rem 0", // Adjusted padding for better alignment
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: "0.5rem 0",
    },
  },
  para_contact: {
    paddingBottom: "1rem",
    paddingTop: "1rem",
    marginLeft: "0.5rem",
    marginTop: "0.5rem",
    color: "#414141",
    lineHeight: "1.5rem",
    fontSize: "1rem !important",
    width: "90%",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "0.9rem",
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
  },
  address_contacts: {
    paddingBottom: "1rem",
    marginLeft: "0.5rem",
    color: "#414141",
    lineHeight: "1.5rem",
    fontSize: "1rem !important",
    width: "90%",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "0.9rem",
      paddingBottom: "0.5rem",
    },
  },
  buttonGroup: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
  },
  supportButton: {
    backgroundColor: "#003E90 !important",
    color: "white !important",
    padding: "0.8rem 2rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 1.5rem !important",
    },
  },
  callButton: {
    backgroundColor: "#003E90 !important",
    color: "white !important",
    padding: "0.8rem 2rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 1.5rem !important",
    },
  },
  formContainer_container: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  formField_contact: {
    width: "100%",
    marginBottom: "1rem",
  },
  submitButtons: {
    alignSelf: "center",
    backgroundColor: "#003E90 !important",
    color: "white !important",
    padding: "1rem 3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 2rem !important",
    },
  },
  SelectOption_contact: {
    width: "100%",
    marginBottom: "1rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderRadius: "none !important",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiSelect-root": {
      backgroundColor: "white",
      color: "black",
    },
    "& .MuiSelect-icon": {
      color: "black",
    },
    "& .MuiList-root": {
      backgroundColor: "white",
      color: "black",
    },
  },
  lableText_contact: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "1rem",
  },
  menu_contact: {
    "& .MuiList-root": {
      backgroundColor: "white",
      color: "black",
    },
  },
  headcontainer: {
    width: "100%",
    height: "300px",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
  headimage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    boxSizing: "border-box",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const alert = useAlert();
  const history = useHistory();
  const handleCall = () => {
    window.location.href = "tel:+8171280446";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert.success("Your message has been sent successfully");
    history.push("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <container-fluid>
      <container-fluid>
        <Banner
          title="Get the Help You Need"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
      </container-fluid>
      <MetaData title={"Contact Us"} />
      <div className={classes.contact_Container_contactus}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Container>
            <Row>
              <Col xs={12} md={6} className="mx-auto">
                <div className="circle_text">
                  <h1
                    style={{
                      fontSize: "var(--font-h2)",
                      marginTop: "2rem",
                      fontFamily: "Nunito",
                      fontWeight: 700,
                    }}
                  >
                    <span className="highlight">Contact Us</span>{" "}
                  </h1>
                </div>
                <div style={{ padding: ".5rem" }}>
                  <h2
                    className="blog-title"
                    style={{
                      fontSize: "var(--font-h4)",
                      marginTop: "2rem",
                      fontFamily: "Nunito",
                    }}
                  >
                    Need Help?
                  </h2>

                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "var(--font-span)",
                    }}
                  >
                    Catch us anytime you want? Fill out our support form below,
                    and we'll be in touch shortly.
                  </p>

                  <address>
                    <p style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <strong>Learning Needs</strong>
                      <br />
                      Kolkata
                      <br />
                      West Bengal
                      <br />
                      India
                    </p>
                  </address>

                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "var(--font-span)",
                    }}
                  >
                    We have live chat available, look for the chat icon in the
                    lower right-hand corner of this page. If it isn’t there,
                    then give us a call at{" "}
                    <strong
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "var(--font-span)",
                      }}
                      onClick={handleCall}
                    >
                      8240554890
                    </strong>
                    .
                  </p>

                  <div className="d-flex justify-content-between mt-4">
                    <a href="#issue-select" style={{ textDecoration: "none" }}>
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "#003E90",
                          color: "white",
                          fontFamily: "Nunito",
                          fontSize: "var(--font-span)",
                        }}
                      >
                        Support Form
                      </Button>
                    </a>

                    <Button
                      variant="primary"
                      onClick={handleCall}
                      style={{
                        width: "20%",
                        backgroundColor: "#FF4E00",
                        color: "white",
                        fontFamily: "Nunito",
                        fontSize: "var(--font-span)",
                      }}
                    >
                      Call Us
                    </Button>
                  </div>

                  <hr style={{ borderColor: "#FF4E00" }} />
                </div>
              </Col>
              <Col xs={12} md={6} className="mx-auto">
                <div style={{ padding: ".5rem" }}>
                  <div className="circle_text">
                    <h1
                      style={{
                        fontSize: "var(--font-h2)",
                        marginTop: "2rem",
                        fontFamily: "Nunito",
                        fontWeight: 700,
                      }}
                    >
                      <span className="highlight">Support Form</span>{" "}
                    </h1>
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "Nunito",
                      fontSize: "var(--font-span)",
                    }}
                  >
                    Need a quicker answer? Look for our chat icon on the right
                    hand side of this page.
                  </p>

                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      fontFamily: "Nunito",
                      padding: "20px",
                      borderRadius: "15px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
                      maxWidth: "600px",
                      margin: "auto",
                    }}
                  >
                    <Form.Group
                      controlId="issue-select"
                      style={{ marginBottom: "20px" }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        ISSUE *
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="e-commerce"
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "16px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        <option value="e-commerce">E-Commerce</option>
                        <option value="app">App</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group
                      controlId="detail-select"
                      style={{ marginBottom: "20px" }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        DETAIL *
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="others"
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "16px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        <option value="availability">Availability</option>
                        <option value="return/exchange">Return/Exchange</option>
                        <option value="technical-support">
                          Technical Support
                        </option>
                        <option value="invoicing">Invoicing</option>
                        <option value="tracking-info">Tracking Info</option>
                        <option value="others">Others</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group
                      controlId="language-select"
                      style={{ marginBottom: "20px" }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        LANGUAGE *
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="english"
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "16px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group
                      controlId="email-input"
                      style={{ marginBottom: "20px" }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        EMAIL *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email *"
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "16px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                        }}
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="message-textarea"
                      style={{ marginBottom: "20px" }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        MESSAGE *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Enter Your Message *"
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "16px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                        }}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="primary"
                      style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(90deg, #0062E6 0%, #33AEFF 100%)", // Gradient button
                        color: "#fff",
                        borderRadius: "10px",
                        border: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.background =
                          "linear-gradient(90deg, #0056C1 0%, #1C8AFF 100%)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.background =
                          "linear-gradient(90deg, #0062E6 0%, #33AEFF 100%)")
                      }
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Grid>

        <Container>
          <Row>
            <Col xs={12}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              >
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.64012325197!2d88.03548933303698!3d22.53544413842691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1720683033483!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </container-fluid>
  );
};

export default ContactForm;
