const express = require('express');
const mongoose = require('mongoose');
const tokenRoutes = require('./routes/tokens');
const cors = require('cors');

const app = express();

// Use cors middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/tokens', tokenRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
