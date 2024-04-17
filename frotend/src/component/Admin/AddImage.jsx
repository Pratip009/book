import React, { useState } from "react";
import axios from "axios";

function AddImage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [filePath, setFilePath] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/v1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully:", response.data);
      // Display success message to the admin
    } catch (error) {
      console.error("Error uploading image:", error);
      // Display error message to the admin
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setFilePath(selectedImage.name); // Display file path
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result); // Display image preview
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setPreviewURL("");
    }
  };

  return (
    <div>
      <h2>Add Image</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageInput">Image:</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {previewURL && (
          <div>
            <img
              src={previewURL}
              alt="Preview"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        )}
        {filePath && (
          <div>
            <p>File Path: {filePath}</p>
          </div>
        )}
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default AddImage;
