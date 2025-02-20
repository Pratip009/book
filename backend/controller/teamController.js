const TeamMember = require('../model/TeamMember');

// Add a new team member
exports.addTeamMember = async (req, res) => {
  try {
    const { name, role, bio, photo } = req.body;
    const newTeamMember = new TeamMember({
      name,
      role,
      bio,
      photo,
    });
    await newTeamMember.save();
    res
      .status(201)
      .json({
        message: "Team member added successfully",
        teamMember: newTeamMember,
      });
  } catch (error) {
    res.status(500).json({ message: "Failed to add team member", error });
  }
};

// Get all team members
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch team members", error });
  }
};

// Delete a team member
exports.deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received request to delete ID:", id); // Log the ID
    const deletedMember = await TeamMember.findByIdAndDelete(id);

    if (!deletedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ message: "Failed to delete team member", error });
  }
};