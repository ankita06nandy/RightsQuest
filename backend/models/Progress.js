const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    completedQuests: [
      {
        quest: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Quest"
        },

        completedAt: {
          type: Date,
          default: Date.now
        },

        score: {
          type: Number,
          default: 0
        }
      }
    ],

    totalXP: {
      type: Number,
      default: 0
    },

    completedCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Progress", progressSchema);