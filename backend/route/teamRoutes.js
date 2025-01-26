const express = require("express");
const upload = require("../middleWare/uploadMiddleware"); // Import the multer config
const router = express.Router();

router.post('/team/add', upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No image file uploaded.");
      }
  
      console.log('File uploaded:', req.file);
      console.log('Form data:', req.body);
  
      // Process the form data and image (save to DB, etc.)
      res.status(200).send("Team member added successfully!");
    } catch (error) {
      console.error("Error adding team member:", error);
      res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
  });
  

module.exports = router;
