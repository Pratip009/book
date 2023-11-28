import React, { useState, useEffect } from "react";
import MetaData from "../layouts/MataData/MataData";
import UserDashboard from "./userDashboard";
import Navbar from "./userDashboardNavbar";
import useStyles from "../User/LoginFromStyle";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { baseURL } from "../utils/constant";
import { useRef } from "react";
import MessageList from "./messageList";
function Chat() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [taskss, setTaskss] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const fileInputRef = useRef();

  const classes = useStyles();
  // togle handler =>
  const toggleHandler = () => {
    console.log("toggle");
    setToggle(!toggle);
  };
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTaskss(res.data);
    });
  }, [updateUI]);

  const addTasks = () => {
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

  const updateTasks = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    });
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
            <UserDashboard />
          </div>

          <div className={classes.secondBox1}>
            <div className={classes.navBar1}>
              <Navbar toggleHandler={toggleHandler} />
            </div>

            <div
              className={`${classes.formContainer} ${classes.formContainer2}`}
            >
              <main>
                <div className="heading">
                  <h1>Ask your Question</h1>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Question"
                    multiline
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />

                 <br/><br/><br/><br/>
                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    fullWidth
                    type="submit"
                    onClick={updateId ? updateTasks : addTasks}
                  >
                    {updateId ? "Update Message" : "Send Message"}
                  </Button>
                </div>
              </main>
            </div>
            <ul>
              {taskss.map((task) => (
                <MessageList
                  key={task._id}
                  id={task._id}
                  task={task.task}
                  secondtasks={task.secondtasks}
                  
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
export default Chat;
