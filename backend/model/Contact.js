const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    number: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', ContactSchema);
