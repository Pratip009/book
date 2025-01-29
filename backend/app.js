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
const blog = require("./route/blogRoutes");
const contactRoutes = require("./route/contactRoutes");
const team = require("./route/teamRoutes");
const galleryRoutes = require("./route/galleryRoutes");

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
app.post("/api/v1/gallery/upload", (req, res) => {
  const { files, body } = req;

  // Check if files exist
  if (!files || Object.keys(files).length === 0) {
    return res.status(400).send("No file uploaded.");
  }

  const imageFile = files.file; // Assuming field name is 'file'

  // Validate image type (optional)
  if (!imageFile.mimetype.startsWith("image/")) {
    return res.status(400).send("Only image files are allowed.");
  }

  // Sanitize file name to avoid conflicts
  const sanitizedFileName = Date.now() + "-" + imageFile.name;

  // Save the file to the server
  const uploadPath = path.join(__dirname, "uploads", sanitizedFileName);

  imageFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send("Error uploading file.");
    }

    // Optionally, store metadata in MongoDB (e.g., Gallery model)
    const imageUrl = `/uploads/${sanitizedFileName}`;

    // Assuming you have a Gallery model to store image metadata
    Gallery.create({
      title: body.title,
      description: body.description,
      category: body.category,
      imageUrl: imageUrl,
    })
      .then((result) => {
        res.status(200).send({
          message: "File uploaded successfully",
          filePath: imageUrl,
        });
      })
      .catch((err) => {
        res.status(500).send("Error saving image metadata.");
      });
  });
});

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
app.use("/api/v1/gallery", galleryRoutes);

// Serve static files from the frontend in production
if (process.env.NODE_ENV === "production") {
  const __dirname1 = path.resolve();
  app.use(express.static(path.join(__dirname1, "/frotend/build"))); // Correct the typo here

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frotend", "build", "index.html"))
  );
}

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
