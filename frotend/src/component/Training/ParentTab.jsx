import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./TabStyles.css"; // Ensure custom CSS styles are applied

function TabPanel({ children, eventKey }) {
  return (
    <div>
      <div role="tabpanel" aria-labelledby={`tab-${eventKey}`}>
        {children}
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.string.isRequired,
};

export default function ParentTab() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [key, setKey] = useState('first');

  const handleSelect = (k) => setKey(k);

  return (
    <Container className="mt-4">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={handleSelect}
        className="mb-3"
      >
        <Tab eventKey="first" title="Parenting Workshop" className={key === 'first' ? 'custom-tab-active' : 'custom-tab'}>
          <TabPanel eventKey="first">
            <img src={require("../../Image/pw1.png")} alt="Parenting Workshop" className="img-fluid" />
          </TabPanel>
        </Tab>
        <Tab eventKey="second" title="Education Issues" className={key === 'second' ? 'custom-tab-active' : 'custom-tab'}>
          <TabPanel eventKey="second">
            <img src={require("../../Image/st2.png")} alt="Education Issues" className="img-fluid" />
          </TabPanel>
        </Tab>
        <Tab eventKey="third" title="Play" className={key === 'third' ? 'custom-tab-active' : 'custom-tab'}>
          <TabPanel eventKey="third">
            <img src={require("../../Image/playyyyy.png")} alt="Play" className="img-fluid" />
          </TabPanel>
        </Tab>
        <Tab eventKey="fourth" title="Other Issues" className={key === 'fourth' ? 'custom-tab-active' : 'custom-tab'}>
          <TabPanel eventKey="fourth">
            <img src={require("../../Image/ei.png")} alt="Other Issues" className="img-fluid" />
          </TabPanel>
        </Tab>
      </Tabs>
    </Container>
  );
}
