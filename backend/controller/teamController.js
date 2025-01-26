const Team = require("../model/TeamMember"); // Assuming you have a Team model
const cloudinary = require("cloudinary").v2; // For image upload to Cloudinary

// Function to add team member
exports.addTeamMember = async (req, res) => {
  try {
    const { name, designation, facebook, linkedin, instagram } = req.body;
    const image = req.file ? req.file.path : null;

    // Handle image upload if necessary (e.g., to Cloudinary)
    let uploadedImage = null;
    if (image) {
      uploadedImage = await cloudinary.uploader.upload(image, {
        folder: "team_members", // Optional: Store in a folder named "team_members"
      });
    }

    // Save team member data to database
    const newTeamMember = await Team.create({
      name,
      designation,
      facebook,
      linkedin,
      instagram,
      image: uploadedImage ? uploadedImage.url : "", // Store image URL if uploaded
    });

    res.status(201).json({
      success: true,
      message: "Team member added successfully!",
      data: newTeamMember,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error adding team member.",
      error: error.message,
    });
  }
};
