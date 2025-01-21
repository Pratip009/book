const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const cloudinary = require("cloudinary").v2;
const path = require("path");
var express = require("express");
const cors = require("cors");
const Stripe = require("stripe")(process.env.SECRET_KEY);
const bodyParser = require("body-parser");

// Configuration
dotenv.config({ path: "backend/config/config.env" });
connectDB();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(cors());
app.use(express.static(path.join(__dirname, "../frotend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frotend/build/index.html"));
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  
});

// Payment route
app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.error(error);
    status = "Failure";
    res.json({ error, status });
  }
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
 
  server.close(() => {
    process.exit(1);
  });
});
