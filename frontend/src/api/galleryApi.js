import axios from "axios";

// Assuming the backend is running at this base URL (adjust it as necessary)
const baseURL = "https://book-rxj9.onrender.com/api/v1"; // Replace with the correct URL of your backend

export const uploadImage = async (formData, category) => {
  try {
    const response = await axios.post(`${baseURL}/gallery/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        category: category, // Passing the category as a query parameter
      },
    });
    return response.data; // Handle the response data accordingly
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};
