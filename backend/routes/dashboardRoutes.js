const express = require("express");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const progress = {
      level: 4,
      xp: 750,
      totalXp: 1000,
      lessons: 12,
      scenarios: 8,
      badges: 4,
      points: 120,
    };

    const modules = [
      { title: "Know Your Rights", description: "Learn about disability laws, rights, and policies", progress: 100 },
      { title: "Real-life Scenarios", description: "Explore obstacles and find solutions", progress: 80 },
      { title: "Take Action", description: "Learn how to advocate and make informed choices", progress: 40 },
      { title: "Community Stories", description: "Read stories from others and share experiences", progress: 20 },
    ];

    const recommendations = [
      "Denied Bus Access (Intermediate)",
      "Exam Accommodation (Beginner)",
      "Workplace Discrimination (Advanced)",
      "Digital Inaccessibility (Intermediate)"
    ];

    res.json({
      ...progress,
      modules,
      recommendations,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
});

module.exports = router;
