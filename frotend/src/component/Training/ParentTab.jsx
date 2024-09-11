import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included

// Updated CustomTabPanel to accept an image
function CustomTabPanel({ children, eventKey, activeKey, imageSrc, altText }) {
  return (
    <Tab.Pane eventKey={eventKey}>
      {activeKey === eventKey && (
        <div>
          {/* Display the image */}
          <img
            src={imageSrc}
            alt={altText}
            className="img-fluid mb-3" // Responsive image with bottom margin
          />
          {children}
        </div>
      )}
    </Tab.Pane>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.string.isRequired,
  activeKey: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default function TabList() {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Tab.Container
            id="full-width-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
          >
            {/* Navigation for tabs */}
            <Nav
              variant="tabs"
              className="mb-3"
              style={{
                backgroundColor: "#003E90",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link
                  eventKey="0"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: activeKey === "0" ? "white" : "white",
                    backgroundColor: activeKey === "0" ? "#FF4E00" : "#003E90",
                    border: "none",
                    borderRadius: "0",
                    padding: "15px 12px",
                    textDecoration: "none",
                    transition: "background-color 0.3s, color 0.3s",
                    fontFamily: "'Outfit', sans-serif",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Parenting Workshop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link
                  eventKey="1"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: activeKey === "1" ? "white" : "white",
                    backgroundColor: activeKey === "1" ? "#FF4E00" : "#003E90",
                    border: "none",
                    borderRadius: "0",
                    padding: "15px 12px",
                    textDecoration: "none",
                    transition: "background-color 0.3s, color 0.3s",
                    fontFamily: "'Outfit', sans-serif",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Education Issues
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link
                  eventKey="2"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: activeKey === "2" ? "white" : "white",
                    backgroundColor: activeKey === "2" ? "#FF4E00" : "#003E90",
                    border: "none",
                    borderRadius: "0",
                    padding: "15px 12px",
                    textDecoration: "none",
                    transition: "background-color 0.3s, color 0.3s",
                    fontFamily: "'Outfit', sans-serif",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Play
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link
                  eventKey="3"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: activeKey === "3" ? "white" : "white",
                    backgroundColor: activeKey === "3" ? "#FF4E00" : "#003E90",
                    border: "none",
                    borderRadius: "0",
                    padding: "15px 12px",
                    textDecoration: "none",
                    transition: "background-color 0.3s, color 0.3s",
                    fontFamily: "'Outfit', sans-serif",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Other Issues
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Tab content with respective images */}
            <Tab.Content>
              <CustomTabPanel
                eventKey="0"
                activeKey={activeKey}
                imageSrc={require("../../Image/pw1.png")}
                altText="Parenting Workshop"
              >
             
              </CustomTabPanel>

              <CustomTabPanel
                eventKey="1"
                activeKey={activeKey}
                imageSrc={require("../../Image/st2.png")}
                altText="Education Issues"
              >
             
              </CustomTabPanel>

              <CustomTabPanel
                eventKey="2"
                activeKey={activeKey}
                imageSrc={require("../../Image/playyyyy.png")}
                altText="Play"
              >
            
              </CustomTabPanel>

              <CustomTabPanel
                eventKey="3"
                activeKey={activeKey}
                imageSrc={require("../../Image/ei.png")}
                altText="Other Issues"
              >
               
              </CustomTabPanel>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
