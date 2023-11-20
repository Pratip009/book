import React, { useEffect, useState } from "react";
import MetaData from "../layouts/MataData/MataData";
import Sidebar from "./Siderbar";
import NewsList from "./NewsList";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import axios from "axios";
import Navbar from "./Navbar";
import useStyles from "../User/LoginFromStyle";
import { Avatar, TextField, Typography, Button } from "@material-ui/core";
import { baseURL } from "../utils/constant";
function NewsFeed() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/save`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState) => !prevState);
    });
  };
  const updateMode = (id, text) => {
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    });
  };

  const classes = useStyles();
  // togle handler =>
  const toggleHandler = () => {
    console.log("toggle");
    setToggle(!toggle);
  };

  return (
    <>
      <>
        <MetaData title={"Notice"} />
        <div className={classes.updateProduct}>
          <div
            className={
              !toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`
            }
          >
            <Sidebar />
          </div>

          <div className={classes.secondBox1}>
            <div className={classes.navBar1}>
              <Navbar toggleHandler={toggleHandler} />
            </div>

            <div
              className={`${classes.formContainer} ${classes.formContainer2}`}
            >
              <main>
                <Avatar className={classes.avatar}>
                  <AddCircleOutlineIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  component="h1"
                  className={classes.heading}
                >
                  Notice Board
                </Typography>

                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.descriptionInput}
                  label="Notice"
                  multiline
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <Button
                  variant="contained"
                  className={classes.loginButton}
                  fullWidth
                  type="submit"
                  onClick={updateId ? updateTask : addTask}
                >
                  {updateId ? "Update Notice" : "Create Notice"}
                </Button>
              </main>
            </div>

            <ul>
              {task.map((task) => (
                <NewsList
                  key={task._id}
                  id={task._id}
                  task={task.task}
                  setUpdateUI={setUpdateUI}
                  updateMode={updateMode}
                />
              ))}
            </ul>
            
          </div>
        </div>
      </>
    </>
  );
}
export default NewsFeed;
