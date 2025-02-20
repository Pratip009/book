const Gallery = require('../model/Gallery');

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
  const { title, imageUrl, category } = req.body;

  try {
    const newGalleryItem = new Gallery({
      title,
      imageUrl,
      category,
    });

    await newGalleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all gallery items or filter by category
exports.getGalleryItems = async (req, res) => {
  const { category } = req.query;

  try {
    let galleryItems;
    if (category) {
      galleryItems = await Gallery.find({ category });
    } else {
      galleryItems = await Gallery.find();
    }
    res.status(200).json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a gallery item by ID
exports.deleteGalleryItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Gallery.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.status(200).json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};