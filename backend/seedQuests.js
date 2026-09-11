// backend/seedQuests.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quest = require("./models/Quest");

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/rightsquest";

const questsData = [
  // KEEP YOUR 10 QUEST OBJECTS HERE EXACTLY AS THEY ARE
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    await Quest.deleteMany({});
    await Quest.insertMany(questsData);

    console.log("Successfully seeded 10 Quests into MongoDB!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();