const express = require("express");
const router = express.Router();

const Resource = require("../models/Resource");

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();

    res.json(resources);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch resources",
      error: error.message
    });
  }
});

// Get one resource by ID
router.get("/:id", async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        message: "Resource not found"
      });
    }

    res.json(resource);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch resource",
      error: error.message
    });
  }
});

module.exports = router;