// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  // Other student details such as email, address, etc.
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
