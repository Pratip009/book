import React, { useEffect, useRef, useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { FaRegUser } from "react-icons/fa";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Modal, Avatar } from "@material-ui/core";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./ProfileModel.css";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";

const ProfileModal = ({ user, isAuthenticated }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const createdAt = (user) => {
    const createdDate = new Date(user.createdAt);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    return new Intl.DateTimeFormat("en-IN", options).format(createdDate);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOpen = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const onClose = () => setIsOpen(false);

  const dashboardHandler = () => {
    setIsOpen(false);
    history.push("/admin/dashboard");
  };

  const dashboardHandlerForSpecialUser = () => {
    setIsOpen(false);
    history.push("/specialuser/dashboarduser");
  };

  const dashboardHandlerForStaff = () => {
    setIsOpen(false);
    history.push("/staff/dashboardstaff");
  };

  const accountHandler = () => {
    setIsOpen(false);
    history.push("/account");
  };

  const ordersHandler = () => {
    setIsOpen(false);
    history.push("/orders");
  };

  const cartHandler = () => {
    setIsOpen(false);
    history.push("/cart");
  };

  const loginHandler = () => {
    setIsOpen(false);
    history.push("/login");
  };

  const logoutUserHandler = () => {
    setIsOpen(false);
    dispatch(logout());
    alert.success("Logout Successfully");
  };

  return (
    <>
      <div className="profile-icon" onClick={handleOpen}>
        <FaRegUser
          className={`icon smaller ${isOpen ? "active" : ""}`}
          fontSize="medium"
        />
        {isOpen ? (
          <ArrowDropUpIcon className="arrow-icon" />
        ) : (
          <ArrowDropDownIcon className="arrow-icon" />
        )}
      </div>

      {isOpen && (
        <Modal open={isOpen} onClose={onClose} className="modal-container">
          <div className="modal-content" ref={modalRef}>
            {isAuthenticated && user ? (
              <>
                <div className="profile-info">
                  <Avatar
                    src={user?.avatar?.url || "/defaultAvatar.png"}
                    alt={user?.name || "User Avatar"}
                    className="avatar"
                    style={{ width: "68px", height: "68px" }}
                  />
                  <p className="user-id">
                    <strong>ID :</strong> {user._id?.substring(0, 8)}
                  </p>
                  <p className="user-name">
                    <strong>Name :</strong> {user.name}
                  </p>
                  <p className="user-email">
                    <strong>Email :</strong> {user.email}
                  </p>
                  <p className="created-at">
                    <strong>Joined at:</strong> {createdAt(user)}
                  </p>
                </div>
              </>
            ) : (
              <div className="welcome-message">
                <strong>Welcome!</strong>
                <p>To access your account and manage orders, please log in.</p>
              </div>
            )}

            <div className="divider" />
            <div className="profile-menu">
              {user?.role === "admin" && (
                <div className="menu-item" onClick={dashboardHandler}>
                  <DashboardIcon className="menu-icon" />
                  <span>Dashboard</span>
                </div>
              )}

              {user?.role === "specialuser" && (
                <div className="menu-item" onClick={dashboardHandlerForSpecialUser}>
                  <DashboardIcon className="menu-icon" />
                  <span>Dashboard</span>
                </div>
              )}

              {user?.role === "staff" && (
                <div className="menu-item" onClick={dashboardHandlerForStaff}>
                  <DashboardIcon className="menu-icon" />
                  <span>Dashboard</span>
                </div>
              )}

              <div className="menu-item" onClick={accountHandler}>
                <AccountCircleIcon className="menu-icon" />
                <span>Profile</span>
              </div>

              <div className="menu-item" onClick={ordersHandler}>
                <AssignmentIcon className="menu-icon" />
                <span>Orders</span>
              </div>

              <div className="menu-item" onClick={cartHandler}>
                <ShoppingCartIcon className="menu-icon" />
                <span>Cart</span>
              </div>

              {!isAuthenticated ? (
                <div className="menu-item" onClick={loginHandler}>
                  <LockOpenIcon className="menu-icon" />
                  <span>Login</span>
                </div>
              ) : (
                <div className="menu-item" onClick={logoutUserHandler}>
                  <ExitToAppIcon className="menu-icon" />
                  <span>Logout</span>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
