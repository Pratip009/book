const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  file: {
    type: String,
    required: [true, "Please provide a file"],
  },
});

module.exports = mongoose.model("Item", itemSchema);