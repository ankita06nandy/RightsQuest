const mongoose = require('mongoose');

const questSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    difficulty: String,
    scenario: String,
    correctAnswer: String,
    explanation: String,
    xp: Number,
    relatedRight: String
  },
  { 
    strict: false // Allows dynamic fields like "Option 1" to bypass Mongoose filters
  }
);

module.exports = mongoose.model('Quest', questSchema);