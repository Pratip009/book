const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  cvUrl: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Career', careerSchema);