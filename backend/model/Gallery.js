const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // Image URL or path
  },
  category: {
    type: String,
    enum: ['Training', 'School'],
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Assuming you have a User model to reference the admin who uploaded it
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
