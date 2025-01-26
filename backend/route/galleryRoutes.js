const express = require('express');
const router = express.Router();
const galleryController = require('../controller/galleryController');
const { authenticateUser, authorizeRoles } = require('../middleWare/auth'); // Assuming you have authentication middleware

// Route to upload an image
router.post('/upload', authorizeRoles, galleryController.uploadImage);

// Route to get all gallery images
router.get('/', galleryController.getAllImages);

module.exports = router;
