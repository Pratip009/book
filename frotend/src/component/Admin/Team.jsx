import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import Sidebar from './Siderbar'
import { Add as AddIcon } from "@mui/icons-material";
import useStyles from "../User/LoginFromStyle"; // Your custom styles
import CloudinaryUploadWidget from "../../CloudinaryUploadWidget";

const Team = () => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(""); // Store image URL
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  // Handle image URL update after successful upload
  const handleImageUpload = (url) => {
    setImage(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTeamMember = {
        name,
        designation,
        image,
        socialLinks: { facebook, linkedin, instagram },
      };

      const response = await axios.post("http://localhost:5000/api/v1/team", newTeamMember);
      setMessage("Team member added successfully!");

      // Clear form
      setName("");
      setDesignation("");
      setImage("");
      setFacebook("");
      setLinkedin("");
      setInstagram("");
    } catch (error) {
      console.error(error);
      setMessage("Error adding team member. Please try again.");
    }
  };

  return (
    <div className={classes.updateProduct}>
      <div
        className={!toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`}
      >
        <Sidebar />
      </div>

      <div className={classes.secondBox1}>
        <div className={classes.navBar1}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">TEAM</Navbar.Brand>
            <Navbar.Toggle onClick={toggleHandler} />
            <Navbar.Collapse>
              {/* Add your navbar links here if necessary */}
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <main>
            <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontFamily: "'Outfit', sans-serif" }}>Add Team Members</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
              </div>

              {/* Image upload component */}
              <div className="form-group">
                <label>Upload Image</label>
                <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
                {image && <img src={image} alt="Uploaded" style={{ width: "100px", height: "100px" }} />}
              </div>

              <div className="form-group">
                <label>Facebook</label>
                <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Instagram</label>
                <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
              </div>

              <button type="submit" className="submit-btn">
                <AddIcon /> Add Team Member
              </button>
            </form>
            {message && <div className="message">{message}</div>}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Team;
