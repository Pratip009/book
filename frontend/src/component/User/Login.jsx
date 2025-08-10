import React, { useState, useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login, clearErrors } from "../../actions/userAction";

import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";

export default function Login() {
  const history = useHistory();
  const loaction = useLocation();

  const dispatch = useDispatch();
  const alert = useAlert();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );


  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const isSignInDisabled = !(email && password && isValidEmail);

  const redirect = loaction.search ? loaction.search.split("=")[1] : "/account";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, isAuthenticated, loading, error, alert, history, redirect]);

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <>
      <MetaData title={"Login"} />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-4">
                    <i className="bi bi-lock fs-1 text-primary"></i>
                  </div>
                  <h5 className="text-center mb-4">Sign in to Your Account</h5>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          !isValidEmail && email !== "" ? "is-invalid" : ""
                        }`}
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {!isValidEmail && email !== "" && (
                        <div className="invalid-feedback">
                          Please enter a valid email address.
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={handleShowPasswordClick}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ms-2">
                          Remember me
                        </label>
                      </div>
                      <Link
                        to="/password/forgot"
                        className="text-decoration-none"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    <p>
                      By logging in, you agree to our{" "}
                      <Link
                        to="/policy/privacy"
                        className="text-decoration-none"
                      >
                        Privacy Policy.
                      </Link>
                    </p>

                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={isSignInDisabled}
                    >
                      Sign in
                    </button>
                  </form>

                  <div className="text-center mt-4">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-decoration-none">
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}