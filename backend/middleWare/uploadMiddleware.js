const multer = require("multer");
const path = require("path");

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`
    );
  },
});

// Initialize multer with the storage configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // File size limit (50MB)
});

module.exports = upload;
