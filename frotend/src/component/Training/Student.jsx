import { useState } from "react";
import "../ReadMore/ReadMore.css";
import { Button, Typography, Collapse } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import { Container } from "react-bootstrap";
const Student = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container style={{margin:0,padding:0}}>
      <div style={{ marginTop: "-15px", marginBottom: "15px" }}>
        <img src={require("../../Image/ssworkshopneww11.png")} alt="" />
      </div>
      <span
        style={{
          textAlign: "justify",
          display: "inline-block",
          fontSize: "17px",
        }}
      >
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <span>
          <span
            style={{
              textAlign: "justify",
              display: "inline-block",
              fontSize: "17px",
            }}
          >
            Learning Needs regularly arrange student workshops in various fields
            to impart practical approach and experiential learning in
            students, This Workshop is designed to assist students in better
            career decision making by identifying their potential.
          </span>

          <List sx={{ width: "100%", margin: 0 }}>
            <ListItem>
              <RadioButtonCheckedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
              {/* <ListItemText primary="Enjoy entertainment" /> */}
              <ListItemText
                primary={
                  <Typography
                    style={{
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                      marginLeft: "10px",
                    }}
                  >
                    Enjoy entertainment
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <RadioButtonCheckedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
              <ListItemText
                primary={
                  <Typography
                    style={{
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                      marginLeft: "10px",
                    }}
                  >
                    Make career aspirants to understand their Interest,
                    Aptitude, and Potential.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <RadioButtonCheckedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
              {/* <ListItemText primary="Help career aspirants to understand the world of the work (Job Market)." /> */}
              <ListItemText
                primary={
                  <Typography
                    style={{
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                      marginLeft: "10px",
                    }}
                  >
                    Help career aspirants to understand the world of the work
                    (Job Market).
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <RadioButtonCheckedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
              {/* <ListItemText primary="Assist career aspirants to develop career alternatives based on their potential." /> */}
              <ListItemText
                primary={
                  <Typography
                    style={{
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                      marginLeft: "10px",
                    }}
                  >
                    Assist career aspirants to develop career alternatives based
                    on their potential.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <RadioButtonCheckedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
              {/* <ListItemText primary="Assist career aspirants in career preparation and development." /> */}
              <ListItemText
                primary={
                  <Typography
                    style={{
                      textAlign: "justify",
                      display: "inline-block",
                      fontSize: "17px",
                      marginLeft: "10px",
                    }}
                  >
                    Assist career aspirants in career preparation and
                    development.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </span>
      </Collapse>

      <Button
        style={{
          color: "#fff",
          backgroundColor: "#FF4E00",
          display: "flex",
          marginTop: "10px",
        }}
        variant="contained"
        onClick={handleExpandClick}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </Container>
  );
};
export default Student;
