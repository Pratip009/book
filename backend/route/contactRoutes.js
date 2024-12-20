const express = require('express');
const { addContact, getContacts } = require('../controller/contactController');
const router = express.Router();

// Route for adding a contact
router.post('/contacts/add', addContact); // Change to /contacts/add

// Route for getting contacts
router.get('/contacts', getContacts);  // Change to /contacts/list

module.exports = router;
