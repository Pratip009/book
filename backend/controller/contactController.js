const Contact = require('../model/Contact');

// Helper function to validate email and phone number
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const isValidPhoneNumber = (number) => /^\d{10}$/.test(number);

// Add a new contact
exports.addContact = async (req, res) => {
  try {
    const { email, number } = req.body;

    // Validate email and phone number
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!isValidPhoneNumber(number)) {
      return res.status(400).json({ error: 'Invalid phone number format. It should be 10 digits.' });
    }

    const newContact = new Contact({ email, number });
    await newContact.save();

    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).json({ error: 'Failed to add contact' });
  }
};

// Get all contacts
// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts); // Return contacts as JSON
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

