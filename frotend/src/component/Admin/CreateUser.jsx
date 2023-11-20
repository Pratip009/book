import React from 'react'
import  {  useState } from "react";
import MetaData from "../layouts/MataData/MataData";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";
import useStyles from "../User/LoginFromStyle";

const CreateUser = () => {
    const [toggle, setToggle] = useState(false);
    const classes = useStyles();

    // togle handler =>
    const toggleHandler = () => {
      console.log("toggle");
      setToggle(!toggle);
    };
  return (
    <>
      <>
        <MetaData title={"Create User"} />
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
              
            </div>

           
            
          </div>
        </div>
      </>
    </>
  )
}

export default CreateUser
