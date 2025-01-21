const express = require("express");
const app = express();
const errorMiddleware = require("./middleWare/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });

// Import routes
const user = require("./route/userRoute");
const order = require("./route/orderRoute");
const product = require("./route/productRoute");
const payment = require("./route/paymentRoute");
const task = require("./route/taskRoute");
const usermessage = require("./route/userMessageRoute");
const adminMessage = require("./route/adminMessageRoute");
const blog = require("./route/blogRoutes");
const contactRoutes = require("./route/contactRoutes");
const team = require("./route/teamRoutes");

// Middleware
app.use(cookieParser());
app.use(express.json()); // Replaces bodyParser.json()
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

// CORS Configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Set this to your frontend's URL
    credentials: true, // Allow cookies to be sent
  })
);

// API Routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", task);
app.use("/api/v1", usermessage);
app.use("/api/v1", adminMessage);
app.use("/api/v1", blog);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", team);

// Serve static files from the frontend
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/frotend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frotend", "build", "index.html"))
);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
