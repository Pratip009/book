const asyncWrapper = require("../middleWare/asyncWrapper");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
  const { token } = req.cookies;
  // if there is no token found
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  // now verify that token with secret key
  try {
    const deCodeToken = jwt.verify(token, process.env.JWT_SECRET);

    // Log the user role
    console.log("User role:", deCodeToken.role);

    // now get user id from decoded token because when we make token in userSchema so we added userID in payload section. with that id get user and store inside req object.
    const user = await userModel.findById(deCodeToken.id);

    req.user = user; // now we have user in req.user

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
});


// taking role as param and converting it into array using spread operator. for using array method
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Check if the user is authenticated
    if (!req.user) {
      return next(
        new ErrorHandler("Please log in to access this resource", 401)
      );
    }

    // Check if the user's role is included in the allowed roles or if the user is a staff member
    if (!roles.includes(req.user.role) && req.user.role !== 'staff') {
      return next(
        new ErrorHandler(
          `Role '${req.user.role}' is not authorized to access this resource`,
          403
        )
      );
    }

    next();
  };
};

