import { useState } from "react";
import "../ReadMore/ReadMore.css";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
const Student = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="content">
      <div style={{ marginTop: "-15px", marginBottom: "15px" }}>
        <img src={require("../../Image/sdworkshop1.png")} alt="" />
      </div>
      <span style={{ display: "flex", textAlign: "start" }}>
        We offer educative workshops for children, parents and teachers.
        Children’s workshops target different dimensions of the child’s
        personality. Which are essential for global development. Some of these
        include persona build-up, gender education, stress free living, study
        skills and spiritual growth. They build upon the children’s strengths by
        enabling them to open up to others easily and express their views, help
        them set positive impressions on their peers, allow sharing of ideas,
        and add to their own confidence. Sessions for parents enhance parenting
        skills while those for teachers target optimal teacher-student
        relationships and ways for teachers to deal with children better.
      </span>

      <span className={`long-text ${collapse ? "expand" : ""}`}>
        <span style={{ display: "flex", textAlign: "start" }}>
          Learning Needs regularly arrange student workshops in various fields
          to impart practical approach and experiential learning in our
          students, This Workshop is designed to assist students in better
          career decision making by identifying their potential.
        </span>

        <List sx={{ width: "100%", margin: 0 }}>
          <ListItem>
            <RadioButtonCheckedIcon fontSize="medium" />
            <ListItemText primary="Enjoy entertainment" />
          </ListItem>
          <ListItem>
            <RadioButtonCheckedIcon fontSize="medium" />
            <ListItemText primary="Make career aspirants to understand their Interest, Aptitude, and Potential." />
          </ListItem>
          <ListItem>
            <RadioButtonCheckedIcon fontSize="medium" />
            <ListItemText primary="Help career aspirants to understand the world of the work (Job Market)." />
          </ListItem>
          <ListItem>
            <RadioButtonCheckedIcon fontSize="medium" />
            <ListItemText primary="Assist career aspirants to develop career alternatives based on their potential." />
          </ListItem>
          <ListItem>
            <RadioButtonCheckedIcon fontSize="medium" />
            <ListItemText primary="Assist career aspirants in career preparation and development." />
          </ListItem>
        </List>
      </span>

      <Button
        style={{
          color: "#fff",
          backgroundColor: "#f58c00",
          display: "flex",
        }}
        variant="contained"
        onClick={() => setCollapse((prev) => !prev)}
      >
        Read More..
      </Button>
    </div>
  );
};
export default Student;
