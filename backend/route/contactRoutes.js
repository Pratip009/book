const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// POST route to add contact
router.post('/add', contactController.addContact);

module.exports = router;