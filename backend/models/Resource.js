const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["Guide", "Website", "Helpline", "Document", "Video"],
      required: true
    },

    description: {
      type: String,
      required: true
    },

    url: {
      type: String,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    relatedRights: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Resource", resourceSchema);