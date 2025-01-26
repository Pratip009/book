import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import Sidebar from "./Siderbar";
import { Add as AddIcon } from "@mui/icons-material";
import useStyles from "../User/LoginFromStyle"; // Your custom styles

const Team = () => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null); // Store image file
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log("Selected image:", e.target.files[0]);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure all required fields are filled
    if (!name || !designation || !image) {
      setMessage("Please fill all fields and provide an image.");
      return;
    }
  
    // Prepare the form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("image", image); // Append image file
    formData.append("facebook", facebook);
    formData.append("linkedin", linkedin);
    formData.append("instagram", instagram);
  
    // Log the form data before sending
    console.log("Form data being sent:");
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
  
    try {
      // Make the POST request
      const response = await axios.post(
        "/api/v1/team/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Ensure credentials are sent if needed
        }
      );
  
      // Log the response data
      console.log("Response from server:", response);
  
      if (response.status === 200) {
        setMessage("Team member added successfully!");
        // Clear form fields
        setName("");
        setDesignation("");
        setImage(null);
        setFacebook("");
        setLinkedin("");
        setInstagram("");
      }
    } catch (error) {
      // Log the error for debugging
      console.error("Error occurred:", error);
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
              {/* Add any additional navbar links here */}
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div
          style={{
            maxWidth: "500px",
            margin: "50px auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <main>
            <h2
              style={{
                textAlign: "center",
                color: "#333",
                marginBottom: "20px",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Add Team Members
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                  placeholder="Enter designation"
                />
              </div>

              {/* File upload for image */}
              <div className="form-group">
                <label>Image</label>
                <input type="file" onChange={handleImageChange} required />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Team member"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </div>

              <div className="form-group">
                <label>Facebook</label>
                <input
                  type="text"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="Facebook link"
                />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="LinkedIn link"
                />
              </div>
              <div className="form-group">
                <label>Instagram</label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Instagram link"
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                style={{
                  backgroundColor: "#FF4E00",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <AddIcon /> Add Team Member
              </button>
            </form>

            {message && (
              <div
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Team;
