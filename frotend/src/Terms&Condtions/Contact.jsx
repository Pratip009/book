import React from "react";
import {
  Divider,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";

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

  return (
    <Box className={classes.root_contactus}>
      <div className={classes.headcontainer}>
        <img
          src={require("../../src/Image/cont1211.png")}
          alt="contact"
          className={classes.headimage}
        />
      </div>
      <MetaData title={"Contact Us"} />
      <div className={classes.contact_Container_contactus}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" className={classes.title_contact_us}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  marginTop: "20px",
                }}
              >
                <span className="highlight">Contact Us</span>
              </h1>
            </Typography>

            <Divider className={classes.divider_contact} />

            <Typography variant="h4" className={classes.helpTitle_contact_us}>
              <h1
                className="blog-title"
                style={{
                  fontSize: "36px",
                  fontWeight: "500",
                  color: "#FF4E00",
                }}
              >
                Need Help?
              </h1>
            </Typography>
            <Typography variant="body2" className={classes.para_contact}>
              <p>
                Catch us anytime you want? Fill out our support form below, and
                we'll be in touch shortly.
              </p>
            </Typography>

            <Typography variant="body2" className={classes.address_contacts}>
              <span>Learning Needs</span>
              <br />
              Kolkata
              <br />
              West Bengal
              <br />
              India
            </Typography>
            <Typography variant="body2" className={classes.para_contact}>
              We have live chat available, look for the chat icon in the lower
              right-hand corner of this page. If it isn’t there, then give us a
              call at{" "}
              <strong
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleCall}
              >
                8240554890
              </strong>
              .
            </Typography>
            <div className={classes.buttonGroup}>
              <a href="#issue-select" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className={classes.supportButton}
                  style={{ backgroundColor: "#003E90" }}
                >
                  Support Form
                </Button>
              </a>

              <Button
                variant="contained"
                className={classes.callButton}
                onClick={handleCall}
              >
                Call Us
              </Button>
            </div>

            <Divider className={classes.divider_contact} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.supportForm}>
              <Typography
                variant="h4"
                className={classes.title_contact_us}
                style={{ paddingBottom: "1rem" }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "36px",
                    marginTop: "20px",
                  }}
                >
                  <span className="highlight">Support Form </span>
                </h1>
              </Typography>

              <Typography variant="body2" className={classes.para_contact}>
                <p>
                  Need a quicker answer? Look for our chat icon on the right
                  hand side of this page.
                </p>
              </Typography>

              <form
                className={classes.formContainer_container}
                onSubmit={handleSubmit}
              >
                <div className={classes.SelectOption_contact}>
                  <Typography
                    variant="body2"
                    className={classes.lableText_contact}
                  >
                    ISSUE *
                  </Typography>
                  <FormControl className={classes.formField_contact}>
                    <Select
                      labelId="issue-label"
                      id="issue-select"
                      defaultValue="e-commerce"
                      MenuProps={{
                        classes: { paper: classes.menu_contact },
                      }}
                    >
                      <MenuItem value="e-commerce">E-Commerce</MenuItem>
                      <MenuItem value="app">App</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={classes.SelectOption_contact}>
                  <Typography
                    variant="body2"
                    className={classes.lableText_contact}
                  >
                    DETAIL *
                  </Typography>
                  <FormControl className={classes.formField_contact}>
                    <Select
                      labelId="detail-label"
                      id="detail-select"
                      defaultValue="others"
                      MenuProps={{
                        classes: { paper: classes.menu_contact },
                      }}
                    >
                      <MenuItem value="availability">Availability</MenuItem>
                      <MenuItem value="return/exchange">
                        Return/Exchange
                      </MenuItem>
                      <MenuItem value="technical-support">
                        Technical Support
                      </MenuItem>
                      <MenuItem value="invoicing">Invoicing</MenuItem>
                      <MenuItem value="tracking-info">Tracking Info</MenuItem>
                      <MenuItem value="others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={classes.SelectOption_contact}>
                  <Typography
                    variant="body2"
                    className={classes.lableText_contact}
                  >
                    Language *
                  </Typography>
                  <FormControl className={classes.formField_contact}>
                    <Select
                      labelId="language-label"
                      id="language-select"
                      defaultValue="english"
                      MenuProps={{
                        classes: { paper: classes.menu_contact },
                      }}
                    >
                      <MenuItem value="english" className="menu_color">
                        English
                      </MenuItem>
                      <MenuItem value="hindi">Hindi</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={classes.SelectOption_contact}>
                  <Typography
                    variant="body2"
                    className={classes.lableText_contact}
                  >
                    EMAIL *
                  </Typography>
                  <FormControl className={classes.formField_contact}>
                    <TextField
                      placeholder="Enter Your Email *"
                      id="email-input"
                      type="email"
                    />
                  </FormControl>
                </div>

                <div className={classes.SelectOption_contact}>
                  <Typography
                    variant="body2"
                    className={classes.lableText_contact}
                  >
                    MESSAGE *
                  </Typography>
                  <FormControl className={classes.formField_contact}>
                    <TextField
                      id="message-textarea"
                      multiline
                      rows={6}
                      variant="outlined"
                      placeholder="Enter Your Message *"
                    />
                  </FormControl>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButtons}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>

        <Box className="map" sx={{ marginTop: "5rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  borderRadius: "8px",
                  "& iframe": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  },
                  "@media (max-width: 600px)": {
                    paddingBottom: "75%",
                  },
                }}
              >
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.64012325197!2d88.03548933303698!3d22.53544413842691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1720683033483!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default ContactForm;
