const mongoose = require("mongoose");

const questSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    scenario: {
      type: String,
      required: true,
    },

    options: [
      {
        text: {
          type: String,
          required: true,
        },

        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],

    explanation: {
      type: String,
      required: true,
    },

    xp: {
      type: Number,
      default: 10,
    },

    relatedRights: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quest", questSchema);