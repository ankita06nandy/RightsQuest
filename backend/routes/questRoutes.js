const express = require("express");
const router = express.Router();

const Quest = require("../models/Quest");

// Get all quests
router.get("/", async (req, res) => {
  try {
    const quests = await Quest.find();

    res.json(quests);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch quests",
      error: error.message
    });
  }
});

module.exports = router;
// Get a single quest by ID
router.get("/:id", async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);

    if (!quest) {
      return res.status(404).json({
        message: "Quest not found"
      });
    }

    res.json(quest);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch quest",
      error: error.message
    });
  }
});