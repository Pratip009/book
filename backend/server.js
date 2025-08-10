require("dotenv").config({ path: "backend/config/config.env" });
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const Stripe = require("stripe")(process.env.SECRET_KEY);
const connectDB = require("./db/connectDB");

const app = require("./app");

// Connect to Database
connectDB();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Serve Frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Payment Route
app.post("/payment", async (req, res) => {
  try {
    const { token, amount } = req.body;
    const charge = await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    res.json({ success: true, charge });
  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

console.log("JWT_SECRET:", process.env.JWT_SECRET);
// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Error: ${err.message}`);
  server.close(() => process.exit(1));
});
