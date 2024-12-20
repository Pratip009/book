const express = require("express");
const router = express.Router();
const teamController = require("../controller/teamController");

// Route to add a team member
router.post("/add", teamController.addTeamMember);

// Route to get all team members
router.get("/", teamController.getTeamMembers); // Add this route for GET request

module.exports = router;
