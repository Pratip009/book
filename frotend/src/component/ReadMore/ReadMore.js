import { useState } from "react";
import "./ReadMore.css";
import { Button } from "@mui/material";

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
      <p className="non_important">
        Why <span class="circle-sketch-highlight">book Reading</span> is
        important{" "}
      </p>

      {shortContent}
      <span className={`long-text ${collapse ? "expand" : ""}`}>
        {longContent}

        <p className="non_important">
          Benefits of <span class="circle-sketch-highlight">Reading Books</span>{" "}
        </p>
        <span>
          Here are few good benefits of reading books. When you read every day
          you:
        </span>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />{" "}
                </ListItemAvatar>
                <ListItemText primary="Gain valuable knowledge" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />{" "}
                </ListItemAvatar>
                <ListItemText primary="Exercise your brain" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Improve your focus" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Improve your memory" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Enjoy entertainment" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Improve your ability to empathize" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Improve your communication skills" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Reduce stress" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Improve your mental health" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon fontSize="large" style={{ color: "#f58c00" }} />
                </ListItemAvatar>
                <ListItemText primary="Live longer" />
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
export default ReadMore;
