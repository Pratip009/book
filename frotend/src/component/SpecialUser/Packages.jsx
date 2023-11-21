
import React, { useState } from "react";
import MetaData from "../layouts/MataData/MataData";
import UserDashboard from "./userDashboard";
import Navbar from "./userDashboardNavbar";
import useStyles from "../User/LoginFromStyle";
import UserPricing from "./userPricing";
function Packages() {
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
              <div className="heading">
              <h1>Wellcome!</h1>
              <p>
                Congratulations! Your request for upgrading your account to
                special user has been approved.{" "}
              </p>
              <p>You can check our special packages on the side bar. You can take package as per your requirements for premium contents.</p>
              <div>
              <UserPricing/>
              </div>
              </div>
              
            </div>
           
          </div>
        </div>
      </>
    </>
  );
}
export default Packages;
