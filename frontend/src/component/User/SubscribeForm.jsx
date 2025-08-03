import React, { useState } from "react";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";

function SubscribeForm() {
  const [subscribe, setSubscribe] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess("");

    // Validate form data
    if (!subscribe) {
      setError("Please provide your email address.");
      return;
    }

    try {
      const response = await axios.post(
        "https://book-rxj9.onrender.com/api/v1/subscribe",
        { subscribe }
      );

      if (response.status !== 201) {
        throw new Error("Failed to subscribe");
      }

      setSuccess("Subscription successful!");
      console.log(response.data);

      // Clear the form fields upon successful submission
      setSubscribe("");
    } catch (error) {
      setError("There was an error subscribing.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="custom-input-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control custom-input-field"
          placeholder="Email Address"
          required
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <p className="textt">
          By submitting your email address you agree to the Terms & Conditions
        </p>
        <MDBBtn
          color="light"
          type="submit"
          className="mb-4 custom-btn w-100"
          style={{ fontFamily: "Nunito" }}
        >
          Subscribe
        </MDBBtn>
      </form>
    </div>
  );
}

export default SubscribeForm;
