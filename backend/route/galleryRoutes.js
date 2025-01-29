const express = require('express');
const router = express.Router();
const upload = require('../middleWare/uploadConfig');  // Corrected import path
const {
  getAllGalleries,
  getGalleryDetails,
  createGallery,
  updateGallery,
  deleteGallery,
  uploadGalleryImage,
  deleteGalleryImage,
} = require('../controller/galleryController');
const { isAuthentictedUser, authorizeRoles } = require('../middleware/auth');

// Public Routes
router.route('/gallery').get(getAllGalleries);
router.route('/gallery/:id').get(getGalleryDetails);

// Admin Routes
router
  .route('/admin/gallery/new')
  .post(isAuthentictedUser, authorizeRoles('admin'), createGallery);

router
  .route('/admin/gallery/:id')
  .put(isAuthentictedUser, authorizeRoles('admin'), updateGallery)
  .delete(isAuthentictedUser, authorizeRoles('admin'), deleteGallery);

// Admin Gallery Image Upload Route
router
  .route('/admin/gallery/:id/upload')
  .post(
    isAuthentictedUser,
    authorizeRoles('admin'),
    upload.single('file'),  // 'file' should match the input name from your frontend form
    uploadGalleryImage
  );

// Admin Gallery Image Delete Route
router
  .route('/admin/gallery/:id/image/:imageId')
  .delete(isAuthentictedUser, authorizeRoles('admin'), deleteGalleryImage);

module.exports = router;
