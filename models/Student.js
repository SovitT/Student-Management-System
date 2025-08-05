const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  course: String,
  city:String,
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);
