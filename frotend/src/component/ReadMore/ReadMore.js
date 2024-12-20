import { useState } from "react";
import "./ReadMore.css";
import { Button, Typography } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Grid from "@mui/material/Grid";

import MenuBookIcon from "@mui/icons-material/MenuBook";
const ReadMore = ({ header, shortContent, longContent }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="content">
      {/* <p className="non_important">
        Why <span class="circle-sketch-highlight">book Reading</span> is
        important{" "}
      </p> */}
      <h1
        style={{
          textAlign: "start",
          fontSize: "36px",
          marginTop: "20px",
        }}
      >
        Why <span className="highlight">Book Reading </span>is Important
      </h1>
      <span
        style={{
          fontSize: "17px",
          marginTop: "14px",
          fontWeight: "400",
          textAlign: "justify",
          display: "inline-block",
          fontFamily: "Nunito",
          lineHeight: "22px",
        }}
      >
        {shortContent}
      </span>

      <span
        className={`long-text ${collapse ? "expand" : ""}`}
        style={{
          fontSize: "17px",
          marginTop: "14px",
          fontWeight: "400",
          textAlign: "justify",
          display: "inline-block",
          fontFamily: "Nunito",
          lineHeight: "22px",
        }}
      >
        {longContent}

        {/* <p className="non_important">
          Benefits of <span class="circle-sketch-highlight">Reading Books</span>{" "}
        </p> */}
        <h1
          style={{
            textAlign: "start",
            fontSize: "36px",
            marginTop: "20px",
          }}
        >
          Benefits of <span className="highlight">Reading Books</span>
        </h1>
        <span
          style={{
            fontSize: "17px",
            marginTop: "14px",
            fontWeight: "400",
            textAlign: "justify",
            display: "inline-block",
            fontFamily: "Nunito",
          }}
        >
          Here are few good benefits of reading books. When you read every day
          you:
        </span>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />{" "}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Gain valuable knowledge
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />{" "}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Exercise your brain
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Improve your focus{" "}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Improve your memory
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Enjoy entertainment
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Improve your ability to empathize
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Improve your communication skills
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Stronger Analytical Thinking Skills
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Improve your mental health
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#FF4E00" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "17px",

                        fontWeight: "400",
                        textAlign: "justify",
                        display: "inline-block",
                        fontFamily: "Nunito",
                      }}
                    >
                      Vocabulary Expansion{" "}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </span>
      {/* <button onClick={()=>setCollapse((prev)=>!prev)}>Read More</button> */}
      {/* <Link
        component="button"
        variant="body2"
        onClick={() => setCollapse((prev) => !prev)}
      >
        Read More
      </Link> */}
      <Button
        style={{
          color: "#fff",
          backgroundColor: "#FF4E00",
          display: "flex",
        }}
        variant="contained"
        onClick={() => setCollapse((prev) => !prev)}
      >
        Read More
      </Button>
    </div>
  );
};
export default ReadMore;
