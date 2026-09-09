const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const rightRoutes = require("./routes/rightRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/rights", rightRoutes);
app.use("/api/resources", resourceRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "RightsQuest backend is running!"
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`RightsQuest server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });