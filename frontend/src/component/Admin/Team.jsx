import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography, Link, IconButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";

const Team = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMembers = async () => {
    const response = await fetch("/api/v1/team");
    const data = await response.json();
    setTeamMembers(data);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/v1/team/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, role, bio, photo }),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      setName("");
      setRole("");
      setBio("");
      setPhoto("");
      fetchTeamMembers(); // Refresh the team members list
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    console.log(`Deleting team member with ID: ${id}`); // Log the ID
  
    try {
      const response = await fetch(`/api/v1/team/remove/${id}`, {
        method: "DELETE",
      });
  
      const text = await response.text(); // Get response as text
      console.log("Raw response:", text);
  
      try {
        const result = JSON.parse(text); // Try parsing JSON
        if (response.ok) {
          alert(result.message);
          fetchTeamMembers();
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
          Add Team Member
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
                label="Role"
                variant="outlined"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                variant="outlined"
                multiline
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
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
                Add Team Member
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
          Team Members
        </Typography>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} key={member._id}>
              <Paper elevation={1} style={{ padding: "10px" }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={2}>
                    <img src={member.photo} alt={member.name} style={{ width: "100%", borderRadius: "5px" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="subtitle1">{member.role}</Typography>
                    <Typography variant="body2">{member.bio}</Typography>
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

export default Team;