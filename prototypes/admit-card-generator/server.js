// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./models/Student');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route to generate admit card
app.get('/api/admit-card/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    // Logic to generate admit card
    const admitCard = {
      name: student.name,
      rollNumber: student.rollNumber,
      // Other details
    };

    // Return the admit card as JSON response
    res.json(admitCard);
  } catch (error) {
    console.error('Error generating admit card:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
