import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    qualifications: '',
    gender: '',
    coverLetter: '',
    cvUrl: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError('');
    setSuccess('');

    // Validate form data
    if (!formData.fullName || !formData.address || !formData.qualifications || !formData.coverLetter || !formData.cvUrl) {
      setError('Please fill in all fields and provide your CV URL.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const responseData = await response.json();
      setSuccess('Form submitted successfully!');
      console.log(responseData);

      // Clear the form fields upon successful submission
      setFormData({
        fullName: '',
        address: '',
        qualifications: '',
        gender: '',
        coverLetter: '',
        cvUrl: '',
      });
    } catch (error) {
      setError('There was an error submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "200px" }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Want to join us?
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Qualifications"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Cover Letter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          multiline
          rows={4}
          required
          fullWidth
        />
        <TextField
          label="CV URL (Google Drive link)"
          name="cvUrl"
          value={formData.cvUrl}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}