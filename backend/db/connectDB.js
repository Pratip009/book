require('dotenv').config({ path: './backend/config/.env' });

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_LINK;
    if (!dbURI) {
      throw new Error('DB_LINK environment variable is not set');
    }
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
