import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@material-ui/core';

function BlogPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    // formData.append('image', file);

    // Client-side logging of FormData contents
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post('http://localhost:5000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post uploaded successfully:', response.data);
      setTitle('');
      setDescription('');
      // setFile(null);
    } catch (error) {
      console.error('Error uploading blog post:', error.response ? error.response.data : "Network Error");
    }
  };

  return (
    <div>
      <Typography variant="h4">Create a Blog Post</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {/* <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        /> */}
        <Button type="submit" color="primary" variant="contained">Upload</Button>
      </form>
    </div>
  );
}

export default BlogPost;
