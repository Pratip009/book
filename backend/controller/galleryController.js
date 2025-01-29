const Gallery = require("../model/Gallery");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier"); // Ensure you import streamifier

// Get all galleries
exports.getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json({ success: true, galleries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Upload an image to a gallery
exports.uploadGalleryImage = async (req, res) => {
  try {
    const { file } = req; // The file uploaded by Multer
    const { title, description } = req.body;

    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Upload image to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "galleries",  // Optional: Specify a folder name in Cloudinary
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ success: false, message: error.message });
        }

        // Image uploaded successfully, save the image details to the gallery
        const gallery = await Gallery.findById(req.params.id);
        if (!gallery) {
          return res.status(404).json({ success: false, message: "Gallery not found" });
        }

        // Save image details (URL and public_id) to MongoDB
        gallery.images.push({
          url: result.secure_url,  // Cloudinary URL
          public_id: result.public_id,  // Cloudinary public_id
        });
        await gallery.save();

        res.status(200).json({
          success: true,
          message: "Image uploaded successfully",
          gallery,
        });
      }
    );

    // Pipe the file buffer to Cloudinary upload stream
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get details of a specific gallery
exports.getGalleryDetails = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }
    res.status(200).json({ success: true, gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new gallery
exports.createGallery = async (req, res) => {
  try {
    const { title, description } = req.body;

    const gallery = new Gallery({ title, description });
    await gallery.save();

    res.status(201).json({ success: true, message: "Gallery created successfully", gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a gallery
exports.updateGallery = async (req, res) => {
  try {
    const { title, description } = req.body;

    let gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }

    gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, message: "Gallery updated successfully", gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a gallery
exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }

    // Delete images from Cloudinary (optional)
    for (let img of gallery.images) {
      await cloudinary.uploader.destroy(img.public_id); // Destroy each image by its public_id
    }

    // Remove gallery
    await gallery.remove();

    res.status(200).json({ success: true, message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an image from a gallery
exports.deleteGalleryImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }

    // Find the image to delete and remove it
    const imageToDelete = gallery.images.find((img) => img._id.toString() === imageId);
    if (!imageToDelete) {
      return res.status(404).json({ success: false, message: "Image not found in gallery" });
    }

    // Delete image from Cloudinary using public_id
    await cloudinary.uploader.destroy(imageToDelete.public_id);

    // Remove the image from the gallery
    gallery.images = gallery.images.filter((img) => img._id.toString() !== imageId);
    await gallery.save();

    res.status(200).json({ success: true, message: "Image deleted successfully", gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
