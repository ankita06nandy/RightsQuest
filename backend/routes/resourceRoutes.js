const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resources", error: error.message });
  }
});

// Get one resource by ID
router.get("/:id", async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resource", error: error.message });
  }
});

// Create a new resource
router.post("/", async (req, res) => {
  try {
    const { title, type, description, category } = req.body;
    if (!title || !type || !description || !category) {
      return res.status(400).json({ message: "Title, type, description and category are required" });
    }
    const resource = await Resource.create(req.body);
    res.status(201).json({ message: "Resource created successfully", resource });
  } catch (error) {
    res.status(400).json({ message: "Failed to create resource", error: error.message });
  }
});

module.exports = router;