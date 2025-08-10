// frontend/components/ProfilePage.js
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ExitToApp as LogoutIcon } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, load_UserProfile } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import Loader from '../layouts/loader/Loader';

const ProfilePage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated, loading: userLoading, error } = useSelector(
    (state) => state.userData
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: 'CLEAR_ERRORS' });
    }
    if (isAuthenticated && !user && !userLoading) {
      dispatch(load_UserProfile());
    }
    if (!isAuthenticated && !userLoading) {
      history.push('/login');
    }
  }, [history, isAuthenticated, userLoading, user, dispatch, error, alert]);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully');
    history.push('/login');
  };

  const formatCreatedAt = (user) => {
    if (!user?.createdAt) return '';
    const createdAt = new Date(user.createdAt);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    };
    return new Intl.DateTimeFormat('en-IN', options).format(createdAt);
  };

  if (userLoading) {
    return <Loader />;
  }

  if (!isAuthenticated || !user) {
    return <div>Error: Please log in to view your profile. {error || 'Unknown error'}</div>;
  }

  return (
    <div className="rootProfile">
      <div className="header-root">
        <Typography variant="h5" component="h1" className="headingProfile">
          Hi, {user.name} !
        </Typography>
        <Typography variant="body2" className="greeting">
          Welcome back! Happy learning!
        </Typography>
      </div>

      <div className="profileConatiner">
        {/* Left Container */}
        <div className="leftCotainer">
          <h4 className="profileHeadingLeft">Profile Overview</h4>
          <div className="profileSection">
            <Avatar
              alt={user.name}
              src={user.avatar?.url || '/default-avatar.png'}
              className="profileAvatar"
            />
            <div className="leftDetails">
              <Typography className="profileText">
                <h5 className="profileSubHeading">Name :</h5>
                {user.name}
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">Email : </h5>
                {user.email}
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">Member since :</h5>
                {formatCreatedAt(user)}
              </Typography>
              {user.role === 'admin' && (
                <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" className="profileButton">
                    Admin Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="myOrder">
            <Typography variant="h4" component="h1" className="profileHeading">
              Orders
            </Typography>
            <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="contained" className="ordersButton">
                Orders
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Container */}
        <div className="rightConatiner">
          <div className="righHeadings">
            <Typography variant="h4" component="h1" className="profileHeading">
              Personal Information
            </Typography>
            <Typography className="profileText2">
              Hey there! Feel free to edit any of your details below so your account is up to date.
            </Typography>
          </div>

          <div className="profileDetials">
            <div className="detials">
              <Typography variant="h4" component="h1" className="profileHeading">
                MY DETAILS
              </Typography>
              <Typography className="profileText">{user.name}</Typography>
              <Typography className="profileText">{user.email}</Typography>
            </div>

            <Link to="/profile/update" style={{ textDecoration: 'none' }}>
              <Button variant="contained" className="profileButton">
                EDIT DETAILS
              </Button>
            </Link>

            <div className="detials" style={{ marginTop: '1.5rem' }}>
              <Typography variant="h4" component="h1" className="profileHeading">
                LOGIN DETAILS
              </Typography>
              <Typography className="profileSubHeading">EMAIL</Typography>
              <Typography className="profileText">{user.email}</Typography>
              <Typography className="profileSubHeading" style={{ marginTop: '10px' }}>
                PASSWORD
              </Typography>
              <Typography className="profileSubHeading">*************</Typography>
            </div>

            <Link to="/password/update" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="contained" className="profileButton">
                UPDATE PASSWORD
              </Button>
            </Link>

            <div className="mangeAccount">
              <Typography variant="h4" component="h1" className="profileHeading">
                Log out from all devices
              </Typography>
              <p className="profileText3">
                This will log you out from all browsers you have used before.
              </p>
            </div>

            <Button
              variant="contained"
              color="primary"
              className="profileButton"
              startIcon={<LogoutIcon />}
              onClick={logoutHandler}
            >
              Logout Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;