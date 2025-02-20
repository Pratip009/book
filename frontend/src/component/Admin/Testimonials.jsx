import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography, Link, IconButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";

const Testimonials = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const response = await fetch("/api/v1/testimonial");
    const data = await response.json();
    setTestimonials(data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/v1/testimonial/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, designation, description, photo }),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      setName("");
      setDesignation("");
      setDescription("");
      setPhoto("");
      fetchTestimonials(); // Refresh the testimonials list
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    console.log(`Deleting testimonial with ID: ${id}`); // Log the ID
  
    try {
      const response = await fetch(`/api/v1/testimonial/remove/${id}`, {
        method: "DELETE",
      });
  
      const text = await response.text(); // Get response as text
      console.log("Raw response:", text);
  
      try {
        const result = JSON.parse(text); // Try parsing JSON
        if (response.ok) {
          alert(result.message);
          fetchTestimonials();
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
          Add Testimonial
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Designation"
                variant="outlined"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Photo URL"
                variant="outlined"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#FF4E00", color: "#fff" }}
              >
                Add Testimonial
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
          Testimonials
        </Typography>
        <Grid container spacing={2}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} key={testimonial._id}>
              <Paper elevation={1} style={{ padding: "10px" }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={2}>
                    <img src={testimonial.photo} alt={testimonial.name} style={{ width: "100%", borderRadius: "5px" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="subtitle1">{testimonial.designation}</Typography>
                    <Typography variant="body2">{testimonial.description}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={() => handleDelete(testimonial._id)} color="secondary">
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

export default Testimonials;