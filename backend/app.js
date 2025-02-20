const express = require("express");
const app = express();
const errorMiddleware = require("./middleWare/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
const Gallery = require('./model/Gallery'); // Adjust the path based on your project structure

// Import routes
const user = require("./route/userRoute");
const order = require("./route/orderRoute");
const product = require("./route/productRoute");
const payment = require("./route/paymentRoute");
const task = require("./route/taskRoute");
const usermessage = require("./route/userMessageRoute");
const adminMessage = require("./route/adminMessageRoute");
const blogRoutes = require("./route/blogRoutes");
const contactRoutes = require("./route/contactRoutes");
const teamRoutes = require("./route/teamRoutes");
const galleryRoutes = require("./route/galleryRoutes");
const testimonialRoutes = require("./route/testimonialRoutes");
// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow credentials (cookies, authorization headers)
};
app.use(cors(corsOptions)); // Apply CORS middleware

// Middleware
app.use(cookieParser());
app.use(express.json()); // Parse JSON body

// Static file serving for uploads
app.use("/uploads", express.static("uploads"));

// File upload middleware configuration
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 50MB
    abortOnLimit: true, // Abort upload on limit exceeded
  })
);

// POST route for image upload


// API Routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", task);
app.use("/api/v1", usermessage);
app.use("/api/v1", adminMessage);
app.use("/api/v1", contactRoutes);
app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/testimonial", testimonialRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use("/api/v1", galleryRoutes);
// Serve static files from the frontend in production
if (process.env.NODE_ENV === "production") {
  const __dirname1 = path.resolve();
  app.use(express.static(path.join(__dirname1, "/frontend/build"))); // Corrected the typo here

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
}

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
