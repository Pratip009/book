const express = require('express');
const router = express.Router();
const galleryController = require('../controller/galleryController');

router.post('/gallery', galleryController.createGalleryItem);
router.get('/gallery', galleryController.getGalleryItems);
router.delete('/gallery/:id', galleryController.deleteGalleryItem);

module.exports = router;