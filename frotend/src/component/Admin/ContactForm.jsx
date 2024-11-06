// src/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await axios.post('http://localhost:3000/contacts/add', formData);
      setStatusMessage("Contact added successfully.");
      setFormData({ email: '', mobileNumber: '' }); // Clear form
    } catch (error) {
      setStatusMessage("Error adding contact: " + error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
