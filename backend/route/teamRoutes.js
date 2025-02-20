const express = require('express');
const { addTeamMember, getTeamMembers, deleteTeamMember } = require('../controller/teamController');
const router = express.Router();

router.post('/add', addTeamMember);
router.get('/', getTeamMembers);
router.delete('/remove/:id', deleteTeamMember);

module.exports = router;