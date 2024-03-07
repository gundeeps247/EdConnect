// models/Exam.js
const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  examId: { type: String, required: true, unique: true },
  examName: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  // Other exam details
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
