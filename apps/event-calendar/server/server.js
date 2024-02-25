require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importing cors middleware

const app = express();
app.use(bodyParser.json());

// Adding CORS middleware
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  // mongoose options
})
.then(() => {
    console.log("Database connected successfully.")
})
.catch((error) => {
    console.error("Error connecting to database:", error);
});

app.use("/api/calendar", require('./Controllers/CalendarController'));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
