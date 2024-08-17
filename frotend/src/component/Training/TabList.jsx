import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import SoftSkill from './SoftSkill';
import Student from './Student';
import Parent from './Parent';

function CustomTabPanel({ children, eventKey, activeKey }) {
  return (
    <Tab.Pane eventKey={eventKey}>
      {activeKey === eventKey && (
        <div>
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
};

export default function TabList() {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <Container fluid>
      <Row>
        <Col>
          <Tab.Container id="full-width-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Nav
              variant="tabs"
              className="mb-3"
              style={{
                backgroundColor: '#003E90',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around', // Spread out the tabs evenly
              }}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="0"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    color: activeKey === '0' ? 'white' : 'white',
                    backgroundColor: activeKey === '0' ? 'orange' : '#003E90',
                    border: 'none',
                    borderRadius: '0',
                    padding: '15px 12px',
                    margin: '0 4px', // Margin between tabs
                    textDecoration: activeKey === '0' ? 'none' : 'none', // No underline
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                >
                  Soft Skills Workshop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="1"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    color: activeKey === '1' ? 'white' : 'white',
                    backgroundColor: activeKey === '1' ? 'orange' : '#003E90',
                    border: 'none',
                    borderRadius: '0',
                    padding: '15px 12px',
                    margin: '0 4px', 
                    textDecoration: activeKey === '1' ? 'none' : 'none',
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                >
                  Students Workshop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    color: activeKey === '2' ? 'white' : 'white',
                    backgroundColor: activeKey === '2' ? 'orange' : '#003E90',
                    border: 'none',
                    borderRadius: '0',
                    padding: '15px 12px',
                    margin: '0 4px', // Margin between tabs
                    textDecoration: activeKey === '2' ? 'none' : 'none',
                    transition: 'background-color 0.3s, color 0.3s',
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
