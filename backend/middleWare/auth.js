const asyncWrapper = require("../middleWare/asyncWrapper");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
    // Extract token from cookies
    const { token } = req.cookies;
    
    console.log("Token from cookies:", token); // Debugging log to check if token exists
    
    // If no token is found
    if (!token) {
        console.log("No token found. User is not authenticated."); // Debugging log
        return next(new ErrorHandler("Please Login to access this resource", 401)); 
    }

    try {
        // Verify token with secret key
        const deCodeToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", deCodeToken); // Debugging log to check decoded token
        
        // Get user by id from decoded token
        const user = await userModel.findById(deCodeToken.id);
        
        console.log("User from database:", user); // Debugging log to check user data

        req.user = user; // Store user in req.user
        
        next();
    } catch (error) {
        console.error("Error during token verification:", error); // Debugging log for verification errors
        return next(new ErrorHandler("Invalid or expired token", 401)); // Handle token errors
    }
});

// Function to authorize roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        console.log("User Role:", req.user.role); // Debugging log to check the user's role
        
        if (!roles.includes(req.user.role)) {
            console.log(`Role: ${req.user.role} is not allowed to access this resource.`); // Debugging log for role mismatch
            return next(
                new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403)
            );
        }
        
        next();
    };
};
