// backend/routes/tokens.js

const express = require('express');
const router = express.Router();
const Token = require('../models/Token');

// Route to store FCM tokens
router.post('/store', async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Check if the token already exists
    const existingToken = await Token.findOne({ token });
    if (existingToken) {
      return res.status(409).json({ message: 'Token already exists' });
    }

    // Create a new token document and save it to the database
    const newToken = await Token.create({ token });
    res.status(201).json({ message: 'Token stored successfully', token: newToken });
  } catch (error) {
    console.error('Error storing token:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
