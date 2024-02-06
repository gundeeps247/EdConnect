const express = require("express");
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes");
const { chats } = require("./data/data")
const connectDB = require("./config/db")
const colors = require("colors")


dotenv.config()

connectDB()
const app = express();

app.use(express.json()); // to accept json data

app.get('/', (req, res) => {
    res.send("API is running successfully")
})

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`.blue.bold))