const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rightsquest';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/quests', require('./routes/questRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // 👈 Added Auth Routes

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});