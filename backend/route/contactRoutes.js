const express = require('express');
const { addContact, getContacts } = require('../controller/contactController');
const router = express.Router();

// Route for adding a contact
router.post('/contacts/add', addContact);

// Route for getting contacts
router.get('/contacts', getContacts);  

module.exports = router;
