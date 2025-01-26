const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  designation: String,
  image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" }, // Reference to GridFS file
  socialLinks: {
    facebook: String,
    linkedin: String,
    instagram: String,
  },
});

module.exports = mongoose.model("Team", teamSchema);
