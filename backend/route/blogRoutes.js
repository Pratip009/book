// Inside route/blogRoutes.js
const express = require("express");
const router = express.Router();
const { getAllPosts, createPost } = require("../controller/blogController");

router.get("/posts", getAllPosts);
router.post("/posts", createPost);

module.exports = router;
