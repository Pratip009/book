require('dotenv').config({ path: './backend/config/.env' });
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_LINK;
    if (!dbURI) {
      throw new Error('DB_LINK environment variable is not set');
    }
    console.log('DB_LINK:', dbURI);  // Log the dbURI to verify it's correct

    mongoose.set('strictQuery', true);
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
