const Gallery = require('../models/Gallery');
const cloudinary = require('cloudinary').v2; // For image upload (you can also use other solutions like Multer if you're storing images locally)

// Configure Cloudinary (if using)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.uploadImage = async (req, res) => {
  try {
    const { category } = req.body;
    const uploadedBy = req.user._id; // Assuming user is authenticated and we have access to the admin's user ID

    // Check if category is valid
    if (!['Training', 'School'].includes(category)) {
      return res.status(400).json({ message: 'Invalid category selected.' });
    }

    // Upload image to Cloudinary (you can also use local storage instead)
    const file = req.files.image; // Assuming you're using a package like `express-fileupload`
    const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'gallery_images', // Optionally set folder in Cloudinary
    });

    // Create gallery entry
    const gallery = new Gallery({
      image: uploadResult.secure_url, // Store the URL of the uploaded image
      category,
      uploadedBy,
    });

    await gallery.save();
    res.status(201).json({ message: 'Image uploaded successfully', gallery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get all gallery items
exports.getAllImages = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to fetch gallery items' });
  }
};
