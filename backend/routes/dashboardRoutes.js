// dashboardroutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Quest = require("../models/Quest");

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch quests from database to build recommendations dynamically
    const quests = await Quest.find().limit(4);
    const recommendations = quests.map(q => ${q.title} (${q.difficulty || 'Easy'}));

    const userLevel = Math.floor(user.xp / 100) + 1;

    res.json({
      level: userLevel,
      xp: user.xp,
      totalXp: userLevel * 1000,
      lessons: 12,
      scenarios: quests.length,
      badges: 4,
      points: user.xp,
      modules: [
        { title: "Know Your Rights", description: "Learn about disability laws, rights, and policies", progress: 75 },
        { title: "Real-life Scenarios", description: "Explore obstacles and find solutions", progress: 60 },
        { title: "Take Action", description: "Learn how to advocate and make informed choices", progress: 40 },
        { title: "Community Stories", description: "Read stories from others and share experiences", progress: 20 },
      ],
      recommendations: recommendations.length > 0 ? recommendations : [
        "Denied Bus Access (Easy)",
        "Exam Accommodation (Medium)",
        "Workplace Discrimination (Hard)",
        "Digital Inaccessibility (Medium)"
      ]
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard data", error: err.message });
  }
});

module.exports = router;
