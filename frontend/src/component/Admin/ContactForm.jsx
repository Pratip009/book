import React, { useState } from "react";
import axios from "axios";
import useStyles from "../User/LoginFromStyle";
import qs from "qs";
import { Navbar } from "react-bootstrap";
import Sidebar from "./Siderbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
  });

  const [updateId, setUpdateId] = useState(""); // To store the ID for updating
  const [toggle, setToggle] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [errorMessage, setErrorMessage] = useState(""); // Error message

  const baseURL = "https://book-rxj9.onrender.com/api/v1"; // Base URL for your API

  const classes = useStyles();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed - Name: ${name}, Value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (for adding new contact details)
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending data to:", `${baseURL}/contacts/add`);
    console.log("Data being sent:", formData);

    // Validate mobile number format (should be exactly 10 digits)
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(formData.number)) {
      setErrorMessage("Invalid phone number format. It should be 10 digits.");
      setSuccessMessage(""); // Clear success message
      return;
    }

    // Transform data into URL-encoded format
    const params = qs.stringify(formData);

    try {
      const response = await axios.post(`${baseURL}/contacts/add`, params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      console.log("Contact details added successfully:", response.data);
      setSuccessMessage("Contact details added successfully!");
      setErrorMessage(""); // Clear any previous errors
    } catch (error) {
      console.error(
        "Error adding contact details:",
        error.response || error.message
      );
      setErrorMessage("Failed to add contact details. Please try again.");
      setSuccessMessage(""); // Clear success message
    }
  };

  // Handle update operation
  const handleUpdate = async () => {
    if (!updateId) {
      setErrorMessage("Please provide an ID for updating.");
      return;
    }

    console.log("Updating contact details:", {
      id: updateId,
      ...formData,
    });

    try {
      const response = await axios.put(
        `${baseURL}/update/${updateId}`,
        formData
      );
      console.log("Response from server (update):", response.data);
      setFormData({ email: "", number: "" });
      setSuccessMessage("Contact details updated successfully!");
      setErrorMessage(""); // Clear error message
    } catch (error) {
      console.error("Error updating contact details:", error);
      setErrorMessage("Failed to update contact details. Please try again.");
      setSuccessMessage(""); // Clear success message
    }
  };

  const toggleHandler = () => {
    setToggle(!toggle);
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
            <Navbar.Brand href="#">Contact Form</Navbar.Brand>
            <Navbar.Toggle onClick={toggleHandler} />
            <Navbar.Collapse>
              {/* Add your navbar links here if necessary */}
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
              Add or Update Contact Details
            </h2>

            {/* Success and Error Messages */}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="mobileNumber"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter mobile number"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="updateId"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Update ID:
                </label>
                <input
                  type="text"
                  id="updateId"
                  name="updateId"
                  value={updateId}
                  onChange={(e) => setUpdateId(e.target.value)}
                  placeholder="Enter ID to update (optional)"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#FF4E00",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Add Contact
              </button>
            </form>

            {/* Update Button */}
            <button
              onClick={handleUpdate}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Update Contact
            </button>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
