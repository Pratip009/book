const mongoose = require("mongoose");
const adminMessageSchema = new mongoose.Schema({
  task: { type: String, required: true },
  secondtasks: { type: String, required: true },
});
module.exports = mongoose.model("secondtasks", adminMessageSchema);
