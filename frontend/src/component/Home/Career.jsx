import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box } from '@mui/material';

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    qualifications: '',
    gender: '',
    coverLetter: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <Container maxWidth="sm" style={{marginTop:"200px"}}>
      <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Want to join us?
      </Typography>
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
          label="Cover Letter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          multiline
          rows={4}
          required
          fullWidth
        />
        <Button variant="contained" component="label">
          Upload CV
          <input
            type="file"
            name="cv"
            onChange={handleFileChange}
            hidden
            required
          />
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
