const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB")
const cloudinary = require("cloudinary");
const path = require('path');
var express = require('express');  
const cors = require('cors');
const Stripe = require('stripe')(process.env.SECRET_KEY);
const bodyParser = require('body-parser');



// Handling Uncaught Execption => anything not defind Uncaught Execption 




//config =>
 dotenv.config({path : "backend/config/config.env"})
// Connect With MongoDB
connectDB();


// conncet with cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(cors())
app.use(express.static(path.join(__dirname, "../frotend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frotend/build/index.html"));
});

app.use(bodyParser.json());




const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});


app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});
// Unhandled Promise Rejection  => server issue
process.on("unhandledRejection" , (err) =>{ 
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
// if there any issue occures eg : broken host link eg : then return msg and server will close
server.close(() =>{
    process.exit(1);
})
    
})