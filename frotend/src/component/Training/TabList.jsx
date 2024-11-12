import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import SoftSkill from "./SoftSkill";
import Student from "./Student";
import Parent from "./Parent";

function CustomTabPanel({ children, eventKey, activeKey }) {
  return (
    <Tab.Pane eventKey={eventKey}>
      {activeKey === eventKey && <div>{children}</div>}
    </Tab.Pane>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.string.isRequired,
  activeKey: PropTypes.string.isRequired,
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
                    fontFamily: "Nunito",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Soft Skills Workshop
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
                    fontFamily: "Nunito",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Students Workshop
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
                    fontFamily: "Nunito",
                    textTransform: "none",
                    fontSize: "var(--font-h4)",
                  }}
                >
                  Parenting Workshop
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <CustomTabPanel eventKey="0" activeKey={activeKey}>
                <SoftSkill />
              </CustomTabPanel>
              <CustomTabPanel eventKey="1" activeKey={activeKey}>
                <Student />
              </CustomTabPanel>
              <CustomTabPanel eventKey="2" activeKey={activeKey}>
                <Parent />
              </CustomTabPanel>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
