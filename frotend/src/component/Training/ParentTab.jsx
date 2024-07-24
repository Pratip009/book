import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "aos/dist/aos.css";
import AOS from "aos";
import "./TabStyles.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ParentTab() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "#fff", width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="black"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "#003E90" } }}
          style={{backgroundColor:"#003E90"}}
        >
          <Tab
            label="Parenting Workshop"
            {...a11yProps(0)}
            className="tabRoot"
            classes={{ selected: "tabSelected" }}
          />
          <Tab
            label="Education Issues"
            {...a11yProps(1)}
            className="tabRoot"
            classes={{ selected: "tabSelected" }}
          />
          <Tab
            label="Play"
            {...a11yProps(2)}
            className="tabRoot"
            classes={{ selected: "tabSelected" }}
          />
          <Tab
            label="Other Issues"
            {...a11yProps(3)}
            className="tabRoot"
            classes={{ selected: "tabSelected" }}
          />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img src={require("../../Image/pw1.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img src={require("../../Image/st2.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img src={require("../../Image/playyyyy.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <img src={require("../../Image/ei.png")} alt="" />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
