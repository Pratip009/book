const asyncWrapper = require("../middleWare/asyncWrapper");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

console.log("🚦 Auth middleware file loaded"); // Should log once on server start

exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
  console.log(
    `🛡️ isAuthentictedUser middleware triggered on URL: ${req.originalUrl}`
  );

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("🔑 Token found in header:", token);
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
    console.log("🔑 Token found in cookies:", token);
  } else {
    console.log("❌ No token found in authorization header or cookies");
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded.id);
    if (!req.user) {
      console.log("❌ User not found in DB");
      return next(new ErrorHandler("User not found", 401));
    }
    console.log(
      `✅ Authenticated user: ${req.user.email}, role: ${req.user.role}`
    );
    next();
  } catch (error) {
    console.log("❌ JWT verification failed:", error.message);
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});

// Function to authorize roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log("🎭 authorizeRoles middleware triggered");
    console.log("👤 User role:", req.user.role);
    if (!roles.includes(req.user.role)) {
      console.log(`🚫 Role ${req.user.role} is not allowed`);
      return next(
        new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403)
      );
    }
    console.log("✅ Role authorized");
    next();
  };
};
