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
    padding: "2rem",
    boxShadow: "2px 10px 6px rgba(0, 0, 0, 0.4)",
    borderRadius: "5px",
    marginLeft: "0", 
    width: "250px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    border: "5px solid #414141",
    marginBottom: "1rem",
  },
  name: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  email: {
    color: "#414141",
    textAlign: "center",
    fontSize: "0.9rem",
    marginBottom: "1.5rem",
  },
  divider: {
    height: "2px",
    width: "75%",
    backgroundColor: "#414141",
    margin: "1rem 0",
  },
  sideBarMenu: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  sideBarMenuItem: {
    display: "flex",
    alignItems: "center",
    padding: "0.9rem 1rem",
    borderRadius: "2px",
    marginBottom: "1rem",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s, box-shadow 0.3s",
    "&:hover": {
      backgroundColor: "#ed1c24",
      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
      "& svg": {
        color: "white",
      },
    },
  },
  menuItemText: {
    color: "#414141",
    fontSize: "1rem",
    fontWeight: "500",
    marginLeft: "1rem",
    textDecoration: "none",
  },
  button: {
    width: "100%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#292929",
    color: "white",
    padding: "0.8rem 2rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#ed1c24",
    },
  },
}));

function StaffSidebar() {
  const classes = useStyles();
  const { user, loading } = useSelector((state) => state.userData);
  const history = useHistory();

  function accountHandler() {
    history.push("/account");
  }

  return (
    <>
      {!loading && (
        <div className={classes.UserDashboard}>
          <Avatar
            src={user && user.avatar.url}
            alt="User Avatar"
            className={classes.avatar}
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
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className={classes.sideBarMenuItem}>
                <PostAddIcon fontSize="large" />
                <span className={classes.menuItemText}>Home</span>
              </li>
            </Link>
            <Link
              to="/staff/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className={classes.sideBarMenuItem}>
                <PostAddIcon fontSize="large" />
                <span className={classes.menuItemText}>Products</span>
              </li>
            </Link>
            <Link
              to="/staff/addproduct"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className={classes.sideBarMenuItem}>
                <PostAddIcon fontSize="large" />
                <span className={classes.menuItemText}>Add Product</span>
              </li>
            </Link>
            <Link
              to="/staff/orders"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className={classes.sideBarMenuItem}>
                <PostAddIcon fontSize="large" />
                <span className={classes.menuItemText}>Orders</span>
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
      )}
    </>
  );
}

export default StaffSidebar;
