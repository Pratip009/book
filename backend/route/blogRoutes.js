const express = require('express');
const multer = require('multer');
const { Router } = require("express");
const {
  getBlogs,
  saveBlogs,
  updateBlogs,
  deleteBlogs,
  saveBlogPost, // Assuming saveBlogPost is also here for handling image uploads
} = require("../controller/blogController");

const router = Router();

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// Blog post CRUD operations
router.get("/", getBlogs);
router.post("/", saveBlogs);
router.put("/:id", updateBlogs);
router.delete("/:id", deleteBlogs);

// // Route for uploading images
// router.post("/upload", upload.single("image"), saveBlogPost);

module.exports = router;
