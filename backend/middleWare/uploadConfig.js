const multer = require('multer');

// Set up the storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // specify the folder where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // give the file a unique name
  },
});

// Create the upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
