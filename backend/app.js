const express = require("express");
const app = express();
const errorMiddleware = require("./middleWare/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload"); // used for image and other files
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
const contactRoutes = require('./route/contactRoutes');
const team = require('./route/teamRoutes')


// for req.cookie to get token while authentication
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  fileUpload({
    createParentPath: true, // This option auto-creates the directory path if it doesn't exist
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use(errorMiddleware);
app.use(cors());

// API routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", task);
app.use("/api/v1", usermessage);
app.use("/api/v1", adminMessage);
app.use("/api/v1",blog);
app.use('/api/v1', contactRoutes);
app.use('/api/v1',team)

// Serve static files from the frontend build directory
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/frotend/build")));

// Catch all route to serve index.html for client-side routing
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frotend", "build", "index.html"))
);

module.exports = app;
