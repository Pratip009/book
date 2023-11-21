import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Avatar, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PostAddIcon from "@mui/icons-material/PostAdd";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  UserDashboard: {
    backgroundColor: "#fff",
    padding: "10rem 0",
    boxShadow: "2px 10px 6px rgba(0, 0, 0, 0.4)",
    borderRadius: "5px",
    margin: "0 auto",
    width: "100%",
  },
  avatar11: {
    width: "80px",
    height: "80px",
    border: "5px solid #414141",
    margin: "0 auto",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: "1rem",
  },
  email: {
    color: "#414141",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  divider: {
    height: "2px",
    width: "75%",
    backgroundColor: "#414141",
    margin: "2rem",
  },
  button: {
    marginLeft: "2rem !important",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "70%     !important",
    padding: "0.8rem 2rem   !important",
    borderRadius: "4px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  sideBarMenu: {
    listStyleType: "none",
    padding: 0,
    margin: "3rem  10px",
    width: "100%",
  },
  sideBarMenuItem: {
    display: "flex",
    alignItems: "center",
    padding: "0.9rem 1rem",
    borderRadius: "2px",
    marginTop: "1.3rem",
    width: "75%",
    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      backgroundColor: "#ed1c24",
      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
      "& svg": {
        color: "white",
      },
      "& span": {
        color: "white !important",
      },
    },
    "& svg": {
      color: "#414141",
      fontSize: "26px",
      margin: "0 20px  0 ",
    },
    "& span": {
      color: "#414141",
      fontSize: "1rem",
      fontWeight: "500",
      marginLeft: "1rem",
      textDecoration: "none",
      textDecorationLine: "none",
      transition: "color 0.3s ease",
    },
  },
}));

function UserDashboard() {
  const classes = useStyles();
  const { user, loading } = useSelector((state) => state.userData);

  const history = useHistory();

  function accountHandler() {
    history.push("/account");
  }

  return (
    <>
      {!loading && (
        <>
          <div className={classes.UserDashboard}>
            <Avatar
              src={user && user.avatar.url}
              alt="User Avatar"
              className={classes.avatar11}
            />
            <Typography variant="subtitle1" className={classes.name}>
              {user && user.name}
            </Typography>
            <Typography variant="subtitle2" className={classes.email}>
              {user && user.email}
            </Typography>
            <div className={classes.divider} />
            <ul className={classes.sideBarMenu}>
              <Link
                to="/specialuser/packages"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className={classes.sideBarMenuItem}>
                  <PostAddIcon fontSize="large" />

                  <span className={classes.sideBarMenuItem_text}>
                    {" "}
                    Packages
                  </span>
                </li>
              </Link>

              <Link
                to="/specialuser/chat"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className={classes.sideBarMenuItem}>
                  <PostAddIcon fontSize="large" />

                  <span className={classes.sideBarMenuItem_text}> Ask Admin</span>
                </li>
              </Link>
            </ul>
            <div className={classes.divider} />

            <Button
              className={classes.button}
              onClick={accountHandler}
              variant="contained"
            >
              <ManageAccountsIcon
                fontSize="large"
                style={{ marginRight: "10px" }}
              />
              Account
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default UserDashboard;
