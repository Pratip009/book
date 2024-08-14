const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/.env" });

function connectDB() {
    console.log("DB_LINK:", process.env.DB_LINK); // Add this line to debug

    mongoose.set("strictQuery", false);

    mongoose
        .connect(process.env.DB_LINK)
        .then(function () {
            console.log("DB_connected");
        })
        .catch(function (err) {
            console.log("error", err);
        });
}

module.exports = connectDB;
