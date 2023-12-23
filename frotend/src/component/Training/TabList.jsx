import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SoftSkill from "./SoftSkill";
import Student from "./Student";

import Parent from "./Parent";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="black"
          textColor="black"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: "#003E90" }}
          
        >
          <Tab label="Soft Skills Workshop" {...a11yProps(0)} style={{color:"white", fontWeight:"600"}}/>
          <Tab label="Students Workshop" {...a11yProps(1)}  style={{color:"white", fontWeight:"600"}}/>
          <Tab label="Parenting Workshop" {...a11yProps(2)}  style={{color:"white", fontWeight:"600"}}/>
        </Tabs>
        
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SoftSkill />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Student />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Parent />
      </CustomTabPanel>
    </Box>
  );
}
