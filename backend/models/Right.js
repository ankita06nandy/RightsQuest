const mongoose = require("mongoose");

const rightSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    law: {
      type: String,
      trim: true
    },

    section: {
      type: String,
      trim: true
    },

    whoCanUse: {
      type: String
    },

    howToUse: {
      type: String
    },

    keywords: [
      {
        type: String,
        trim: true
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Right", rightSchema);