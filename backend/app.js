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
const blogRoutes = require("./route/blogRoutes");
const contactRoutes = require("./route/contactRoutes");
const teamRoutes = require("./route/teamRoutes");
const galleryRoutes = require("./route/galleryRoutes");
const testimonialRoutes = require("./route/testimonialRoutes");
const careerRoutes = require('./route/careerRoute');
const subscribeRoutes = require('./route/subscribeRoute');

// ✅ CORS Configuration: allow local dev + production
const corsOptions = {
  origin: [
    "http://localhost:3000",        // for local development
    "https://learningneeds.in"      // for production frontend
  ],
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // allow cookies / auth headers
};
app.use(cors(corsOptions));

// ✅ Middlewares
app.use(cookieParser());
app.use(express.json()); // parse JSON body

// Static files (uploads)
app.use("/uploads", express.static("uploads"));

// File upload configuration
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 }, // limit: 50 MB
    abortOnLimit: true,
  })
);

// ✅ API Routes
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
app.use("/api/v1", careerRoutes);
app.use('/api/v1', subscribeRoutes);

// ✅ Serve frontend build in production
if (process.env.NODE_ENV === "production") {
  const __dirname1 = path.resolve();
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
}

// ✅ Error middleware (must be last)
app.use(errorMiddleware);

module.exports = app;
