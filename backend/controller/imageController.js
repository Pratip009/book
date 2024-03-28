// // controllers/imageController.js
// // Controller function to get all images
// export async function getAllImages(req, res) {
//   try {
//     const images = await find();
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// // Controller function to upload a new image
// export async function uploadImage(req, res) {
//   console.log("uploadImage function called");
//   try {
//     const { title } = req.body;
//     const result = await cloudinary.uploader.upload(req.file.path); // Upload image to Cloudinary
//     const imageUrl = result.secure_url; // Get the secure URL of the uploaded image from Cloudinary

//     // Log the data before saving to MongoDB
//     console.log("Image Title:", title);
//     console.log("Image URL:", imageUrl);

//     const newImage = new Image({ img: imageUrl, title });
//     await newImage.save();
//     res.status(201).json(newImage);

//     // Log success message
//     console.log("Image saved to MongoDB successfully:", newImage);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     // Log error message
//     console.error("Error saving image to MongoDB:", error);
//   }
// }

// // Controller function to delete an image by ID
// export async function deleteImage(req, res) {
//   try {
//     const image = await findById(req.params.id);
//     if (!image) {
//       return res.status(404).json({ message: "Image not found" });
//     }
//     await image.remove();
//     res.json({ message: "Image deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
