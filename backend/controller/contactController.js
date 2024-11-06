// controllers/contactController.js
const Contact = require('../model/contactModel');

// Controller function to add a new contact
exports.addContact = async (req, res) => {
  const { email, mobileNumber } = req.body;

  try {
    // Create a new contact document
    const newContact = new Contact({ email, mobileNumber });
    await newContact.save();

    res.status(201).send("Contact added successfully.");
  } catch (error) {
    res.status(400).send("Error adding contact: " + error.message);
  }
};
