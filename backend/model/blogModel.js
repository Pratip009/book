const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  description: String,
  // imageUrl: String,
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
