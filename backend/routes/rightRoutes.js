/ RightsRoutes.js
const express = require("express");
const router = express.Router();
const Right = require("../models/Right");

// Get all rights
router.get("/", async (req, res) => {
  try {
    const rights = await Right.find();
    res.json(rights);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rights", error: error.message });
  }
});

// Get one right by ID
router.get("/:id", async (req, res) => {
  try {
    const right = await Right.findById(req.params.id);
    if (!right) {
      return res.status(404).json({ message: "Right not found" });
    }
    res.json(right);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch right", error: error.message });
  }
});

// Create a new right
router.post("/", async (req, res) => {
  try {
    const { title, category, description } = req.body;
    if (!title || !category || !description) {
      return res.status(400).json({ message: "Title, category and description are required" });
    }
    const right = await Right.create(req.body);
    res.status(201).json({ message: "Right created successfully", right });
  } catch (error) {
    res.status(400).json({ message: "Failed to create right", error: error.message });
  }
});

module.exports = router;