// backend/routes/questRoutes.js
const express = require('express');
const router = express.Router();
const Quest = require("../models/Quest");

// ❌ WRONG: router.get('/api/quests', ...)  <-- Do NOT repeat /api/quests here!
// ✅ CORRECT:
router.get('/', async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch quests from MongoDB', error: err.message });
  }
});

// GET single quest by ID
router.get('/:id', async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    if (!quest) return res.status(404).json({ message: 'Quest not found' });
    res.json(quest);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch quest', error: err.message });
  }
});

module.exports = router;