const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please Enter news heading"],
    trim: true,
  },
});
module.exports = mongoose.model("Task", taskSchema);
