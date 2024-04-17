import React, { useState } from 'react';
import axios from 'axios'; // Ensure you've installed axios

export default function BlogPostAdmin() {
  const [post, setPost] = useState({
    title: '',
    description: '',
    imageUrl: '', // Assuming you're using a URL for the image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/posts', post);
      alert('Post created successfully!');
      console.log(response.data);
      // Clear form fields or redirect as needed
    } catch (error) {
      console.error("There was an error creating the post:", error);
      alert('Failed to create post');
    }
  };

  return (
    <div>
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={post.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
