const express = require("express");
const router = express.Router();

const Progress = require("../models/Progress");
const User = require("../models/User");
const Quest = require("../models/Quest");

// Get user's progress
router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.params.userId
    }).populate("completedQuests.quest");

    if (!progress) {
      return res.json({
        totalXP: 0,
        completedCount: 0,
        completedQuests: []
      });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch progress",
      error: error.message
    });
  }
});

// Complete a quest
router.post("/complete", async (req, res) => {
  try {
    const { userId, questId, score } = req.body;
    if (score !== undefined && (score < 0 || score > 1)) {
  return res.status(400).json({
    message: "Score must be 0 or 1"
  });
}

    if (!userId || !questId) {
      return res.status(400).json({
        message: "userId and questId are required"
      });
    }

    const user = await User.findById(userId);
    const quest = await Quest.findById(questId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (!quest) {
      return res.status(404).json({
        message: "Quest not found"
      });
    }

    let progress = await Progress.findOne({ user: userId });

    if (!progress) {
      progress = await Progress.create({
        user: userId
      });
    }

    const alreadyCompleted = progress.completedQuests.some(
      (item) => item.quest.toString() === questId
    );

    if (alreadyCompleted) {
      return res.status(400).json({
        message: "Quest already completed"
      });
    }

    progress.completedQuests.push({
      quest: questId,
      score: score || 0
    });

    progress.completedCount += 1;
    progress.totalXP += quest.xp;

    user.xp += quest.xp;

    user.level = Math.floor(user.xp / 100) + 1;

    await progress.save();
    await user.save();

    res.json({
      message: "Quest completed successfully",
      earnedXP: quest.xp,
      totalXP: user.xp,
      level: user.level,
      completedCount: progress.completedCount
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to complete quest",
      error: error.message
    });
  }
});

module.exports = router;