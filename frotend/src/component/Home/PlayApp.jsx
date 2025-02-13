import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import GooglePlay from "../../Image/Footer/google-play-black.svg";
import './PlayApp.css'
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
export default function MediaControlCard() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Define styles for responsiveness
  const commonStyles = {
    appHeading: {
      fontFamily: "Nunito",
      fontSize: "var(--font-h2)",
      margin: "0",
    },
    appSubheading: {
      marginTop: "20px",
      marginBottom: "10px",
      fontFamily: "Nunito",
      fontSize: "var(--font-p)",
      fontWeight: "700",
      color: "#000000",
    },
    appDesc: {
      fontSize: "15px",
      fontFamily: "Nunito",
      color: "rgb(49, 49, 49)",
      textAlign: "justify",
      display: "inline-block",
      marginBottom: "20px",
    },
    appLinks1: {
      width: "20%",
    },
    googlePlayStoreLink: {
      width: "100%",
    },
    appImage: {
      width: "100%",
      height: "auto",
    },
  };

  return (
    <Container style={{ padding: 0 }}>
      <Row>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={require("../../Image/about/abb.png")}
            alt="App"
            style={commonStyles.appImage}
          />
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
          style={{ textAlign: "start" }}
        >
          <div style={{ width: "100%", margin: "auto" }} className="playapp_head">
          <div style={{
            display:'flex',
            alignItems:'flex-start'
          }}>
          <HeaderWithUnderline
          sentence="Educate Yourself"
          highlightedWord="Yourself"
        />
          </div>
            <h2 className="app_subheading">
              Books and resources for better learning
            </h2>
            <p style={commonStyles.appDesc}>
              Learning Needs is a pioneer organization dedicated and committed
              to bring out the best in you. We know all you need is an
              opportunity to prove yourself. However, without the right skills
              your possibilities are severely limited. If your life is not
              presently what you want it to be, you must consider education as a
              solution. You can change your life today! Fast, Simple &
              Delightful.
            </p>
            <div style={commonStyles.appLinks1}>
              <a href="/">
                <img
                  src={GooglePlay}
                  alt="Play Store"
                  style={commonStyles.googlePlayStoreLink}
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
