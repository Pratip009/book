const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
  subscribe: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model('Subscribe', subscribeSchema);