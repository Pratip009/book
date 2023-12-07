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
    <Box sx={{ bgcolor: "#fff", width: 1000 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="black"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: "#FF7700" }}
        >
          <Tab label="Parenting Workshop" {...a11yProps(0)} />
          <Tab label="Education Issues" {...a11yProps(1)} />
          <Tab label="Play" {...a11yProps(2)} />
          <Tab label="Other Issues" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Common Children’s Issues
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Mealtimes and Picky Eaters
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Sleep Issues
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Aggression
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Aggression in Girls
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Competition
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Stress: Risk and Resilience
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Overscheduling
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Honesty
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Respect
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Role of Fathers
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Sibling Rivalry
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Perfectionism
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Separation Anxiety
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Fears
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",
                  fontSize:"15px"
                }}
              >
                TV and technology
              </p>
            </Grid>
          </Grid> */}
          <img src={require("../../Image/pw1.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Communicating with Parents/Conferences</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Reading with Children</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Learning Styles and Multiple Intelligence</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Observing and Recording Behaviour</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Pre-reading and Pre-writing</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Pre-math and Pre-science</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Academic Motivation</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Kindergarten Readiness</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Managing Homework</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Language Development</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Cognitive Development</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Motivation</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Emotional Development</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Social Development</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Motor Development</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Sexual Development</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Temperament</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Self-Esteem</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Discipline</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>The Steps (2 hours)</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Offering Choices and Style</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Consequences</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Setting Boundaries and Power Struggles</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Tantrums, Whining, Backtalk</p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>The Use of Rewards and Power Assertive</p>
            </Grid>
            <Grid item xs={4}>
            <p style={{ display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px",fontSize:"15px"}}>Time-Out and 1-2-3 Magic</p>
            </Grid>
          </Grid> */}
          <img src={require("../../Image/st2.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {/* <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
               Floor time
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Power of Play
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
              Toys
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Playrooms
              </p>
            </Grid>
          </Grid> */}
          <img src={require("../../Image/playy.png")} alt="" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {/* <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
               Divorce
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"13px"
                }}
              >
                Empathy, Guilt and Forgiveness
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
              Music/Art/Sports
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
              Grand parenting
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
              Money and Allowance
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Overindulgence
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
             Teaching Personal Safety
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  border: "1px solid #D8D9DA",
                  padding: "3px", fontSize:"15px"
                }}
              >
                Dealing with Bullies
              </p>
            </Grid>
          </Grid> */}
          <img src={require("../../Image/ei.png")} alt="" />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
