const sendJWtToken = (user, statusCode = 200, res) => {
    try {
        const token = user.getJWTToken(); // Ensure user model has this method

        // Check if token is generated
        if (!token) {
            console.error("JWT Token generation failed");
            return res.status(500).json({ success: false, message: "Token generation failed" });
        }

        // Convert COOKIE_EXPIRE to a number and set a default value if undefined
        const cookieExpire = Number(process.env.COOKIE_EXPIRE) || 5;

        // Options for cookie
        const options = {
            expires: new Date(Date.now() + cookieExpire * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        };

        // Debugging Logs
        console.log("Sending Token:", token);
        console.log("Status Code:", statusCode);
        console.log("Cookie Options:", options);

        // Send response
        res.status(statusCode).cookie("token", token, options).json({
            success: true,
            user,
            token,
        });
    } catch (error) {
        console.error("Error in sendJWtToken:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = sendJWtToken;
