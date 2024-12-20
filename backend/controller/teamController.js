const cloudinary = require("cloudinary").v2;
const TeamMember = require("../model/TeamMember");

// Cloudinary Configuration (assuming you have already set up the credentials in your environment)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Set in .env
  api_key: process.env.CLOUDINARY_API_KEY,      // Set in .env
  api_secret: process.env.CLOUDINARY_API_SECRET // Set in .env
});

// Create a Team Member
const addTeamMember = async (req, res) => {
  try {
    // Destructure data from the request body
    const { name, designation, socialLinks } = req.body;

    // Check if an image file is included in the request
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageFile = req.files.image;

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(imageFile.tempFilePath, {
      folder: "team_images", // Optionally specify a folder in Cloudinary
    });

    const imageUrl = uploadResponse.secure_url;

    // Create a new Team Member instance with the uploaded image URL and other data
    const newTeamMember = new TeamMember({
      name,
      designation,
      image: imageUrl,
      socialLinks,
    });

    // Save the new team member to the database
    await newTeamMember.save();

    // Send a success response
    res.status(201).json({
      message: "Team member added successfully",
      teamMember: newTeamMember,
    });
  } catch (error) {
    console.error("Error adding team member:", error);
    res.status(500).json({ message: "Failed to add team member. Try again later." });
  }
};

const getTeamMembers = async (req, res) => {
  try {
    // Fetch all team members from the database
    const teamMembers = await TeamMember.find();

    // Send the response with the list of team members
    res.status(200).json({
      message: "Team members retrieved successfully",
      teamMembers: teamMembers,
    });
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ message: "Failed to retrieve team members. Try again later." });
  }
};

module.exports = {
  addTeamMember,
  getTeamMembers, // Add this to the export
};
