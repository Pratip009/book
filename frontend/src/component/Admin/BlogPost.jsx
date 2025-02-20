import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography, Link, IconButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [blogItems, setBlogItems] = useState([]);

  const fetchBlogItems = async () => {
    const response = await fetch("/api/v1/blogs");
    const data = await response.json();
    setBlogItems(data);
  };

  useEffect(() => {
    fetchBlogItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/v1/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, subtitle, description, imageUrl }),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      setTitle("");
      setSubtitle("");
      setDescription("");
      setImageUrl("");
      fetchBlogItems(); // Refresh the blog items list
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    console.log(`Deleting blog item with ID: ${id}`);

    try {
      const response = await fetch(`/api/v1/blogs/${id}`, {
        method: "DELETE",
      });

      const text = await response.text();
      console.log("Raw response:", text);

      try {
        const result = JSON.parse(text);
        if (response.ok) {
          alert(result.message);
          fetchBlogItems();
        } else {
          alert(result.message);
        }
      } catch (jsonError) {
        console.error("Error parsing JSON response:", text);
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          maxWidth: "500px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add Blog Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subtitle"
                variant="outlined"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#FF4E00", color: "#fff" }}
              >
                Add Blog Item
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography align="center">
                <Link
                  href="https://console.cloudinary.com/console/c-b8a1761df49cd89ee685d0f02e0786/media_library/search?q=&view_mode=mosaic"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
                >
                  Click here to get the image URL
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Paper
        elevation={3}
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Blog Items
        </Typography>
        <Grid container spacing={2}>
          {blogItems.map((item) => (
            <Grid item xs={12} key={item._id}>
              <Paper elevation={1} style={{ padding: "10px" }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={2}>
                    <img src={item.imageUrl} alt={item.title} style={{ width: "100%", borderRadius: "5px" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="subtitle1">{item.subtitle}</Typography>
                    <Typography variant="subtitle2">{item.description}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={() => handleDelete(item._id)}>
                      <FaTrash />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default BlogPost;