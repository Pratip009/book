const mongoose = require("mongoose");
const adminMessageSchema = new mongoose.Schema({
  task: { type: String, required: true },
  secondtasks: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("secondtasks", adminMessageSchema);
