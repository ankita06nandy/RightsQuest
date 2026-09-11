// backend/seedQuests.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quest = require("./models/quest");

dotenv.config();

const questsData = [
  {
    title: "The Classroom without a Ramp",
    category: "Education/Accessibility",
    difficulty: "Easy",
    scenario: "you use a wheelchair, but your assigned classroom is on the first floor and the building has no working ramp or lift. Your class is about to begin. What would you do?",
    "Option 1": "Ask the college for an accessible classroom or reasonable accommodation",
    "Option 2": "Skip the class",
    "Option 3": "Ask a friend to carry you upstairs every day",
    "Option 4": "Stop attending that subject",
    correctAnswer: "Option 1",
    explanation: "The student should request a reasonable accommodation and accessible learning environment instead of being excluded from the class.",
    xp: 10,
    relatedRight: "Rights of Persons with Disabilities (RPwD) Act, 2016 — accessibility and inclusive education."
  },
  {
    title: "The Bus Driver Says “No”",
    category: "Transport / Accessibility",
    difficulty: "Easy",
    scenario: "You are travelling in a wheelchair and a public bus arrives. The bus has accessibility provisions, but the driver refuses to let you board. What would you do?",
    "Option 1": "Leave without saying anything",
    "Option 2": "Politely ask for access and report the denial through the appropriate transport authority",
    "Option 3": "Argue aggressively with the driver",
    "Option 4": "Never use public transport again",
    correctAnswer: "Option 2",
    explanation: "A person with a disability should be able to access public transportation without discrimination. Reporting the incident helps create accountability.",
    xp: 10,
    relatedRight: "RPwD Act, 2016 — accessibility and non-discrimination in transport"
  },
  {
    title: "Extra Time for the Exam",
    category: "Education / Examination",
    difficulty: "Medium",
    scenario: "You have a disability that affects your writing speed. Your examination is tomorrow, but you have not received the approved accommodation for extra time. What would you do?",
    "Option 1": "Contact the examination authority and request the approved accommodation",
    "Option 2": "Attempt the examination without accomodation",
    "Option 3": "Skip the examination",
    "Option 4": "Ask another student to write the entire exam without permission",
    correctAnswer: "Option 1",
    explanation: "Students with disabilities may be entitled to appropriate examination accommodations. The correct step is to formally communicate with the examination authority.",
    xp: 20,
    relatedRight: "RPwD Act, 2016 — inclusive education and reasonable accommodation"
  },
  {
    title: "We Can't Hire You",
    category: "Employment / Discrimination",
    difficulty: "Hard",
    scenario: "You are qualified for a job, but during the interview the employer says they will not hire you because of your disability, even though you can perform the job with reasonable accommodation. What would you do?",
    "Option 1": "Accept the decision silently",
    "Option 2": "Threaten the interviewer",
    "Option 3": "Ask for the reason in writing and use the appropriate grievance/redressal mechanism",
    "Option 4": "Hide your disability in future interviews",
    correctAnswer: "Option 3",
    explanation: "Employment decisions should not be based on disability when the person is otherwise qualified. Documenting the incident and using formal grievance mechanisms is the appropriate response.",
    xp: 30,
    relatedRight: "RPwD Act, 2016 — non-discrimination in employment and reasonable accommodation."
  },
  {
    title: "The Website I Can't Use",
    category: "Digital Accessibility / Technology",
    difficulty: "Medium",
    scenario: "You are a student using a screen reader. Your college website has important examination information, but the website is not compatible with your screen reader. What would you do?",
    "Option 1": "Ask someone else to access everything permanently",
    "Option 2": "Report the accessibility issue and request accessible information",
    "Option 3": "Ignore the examination notice",
    "Option 4": "Stop using the college website",
    correctAnswer: "Option 2",
    explanation: "Digital information should be accessible to persons with disabilities. Reporting the barrier and requesting an accessible alternative is a practical solution.",
    xp: 20,
    relatedRight: "RPwD Act, 2016 — accessibility and accessible information/communication."
  },
  {
    title: "This Toilet Is Only for Staff",
    category: "Public Facilities / Accessibility",
    difficulty: "Medium",
    scenario: "You need an accessible toilet in a public building. The only accessible toilet is being kept locked and staff tell you that you cannot use it. What would you do?",
    "Option 1": "Leave without using any toilet",
    "Option 2": "Use an unsafe or unsuitable toilet",
    "Option 3": "Force the door open",
    "Option 4": "Request access and report the accessibility barrier to the responsible authority if necessary",
    correctAnswer: "Option 4",
    explanation: "Accessible facilities exist to remove barriers for persons with disabilities. The safest approach is to request access and escalate the issue through the proper channel.",
    xp: 20,
    relatedRight: "RPwD Act, 2016 — accessibility in public facilities."
  },
  {
    title: "Denied Admission Because of Disability",
    category: "Education / Admission",
    difficulty: "Hard",
    scenario: "You meet the eligibility requirements for a college course, but the college says, “We don't admit students with your disability.” What would you do?",
    "Option 1": "Give up your admission",
    "Option 2": "Ask for the decision in writing and approach the appropriate grievance authority",
    "Option 3": "Change your disability details on the application",
    "Option 4": "Ask a friend to apply instead",
    correctAnswer: "Option 2",
    explanation: "A disability should not automatically become a reason for exclusion from education. The student should document the issue and use the available grievance/redressal process.",
    xp: 30,
    relatedRight: "RPwD Act, 2016 — inclusive education and non-discrimination."
  },
  {
    title: "We Don't Have an Interpreter",
    category: "Communication / Education",
    difficulty: "Medium",
    scenario: "You are a deaf student attending an important college seminar. No sign-language interpreter or accessible communication support has been arranged. What would you do?",
    "Option 1": "Sit silently and try to guess what is being said",
    "Option 2": "Request appropriate communication support from the institution",
    "Option 3": "Leave the seminar immediately",
    "Option 4": "Ask another student to explain everything later",
    correctAnswer: "Option 2",
    explanation: "Accessible communication is essential for meaningful participation. Requesting suitable communication support allows the student to participate equally.",
    xp: 20,
    relatedRight: "RPwD Act, 2016 — accessibility and inclusive education."
  },
  {
    title: "The Office Without an Accessible Entrance",
    category: "Public Building / Accessibility",
    difficulty: "Hard",
    scenario: "You need to visit a government office, but the entrance has stairs and no accessible route. You cannot enter independently. What would you do?",
    "Option 1": "Give up and go home",
    "Option 2": "Try to climb the stairs",
    "Option 3": "Request an accessible route/assistance and report the accessibility barrier to the concerned authority",
    "Option 4": "Ask someone to carry you",
    correctAnswer: "Option 3",
    explanation: "Public buildings should be accessible. The person can request an accessible means of entry and report the barrier so it can be addressed.",
    xp: 30,
    relatedRight: "RPwD Act, 2016 — accessibility standards for public buildings."
  },
  {
    title: "The Scholarship Portal Isn't Accessible",
    category: "Education / Financial Support",
    difficulty: "Medium",
    scenario: "You are eligible for a disability-related scholarship, but the online application portal is inaccessible to you. The deadline is approaching. What would you do?",
    "Option 1": "Wait until the deadline passes",
    "Option 2": "Give up on the scholarship",
    "Option 3": "Ask someone to submit false information",
    "Option 4": "Contact the scholarship authority and request an accessible application method/assistance",
    correctAnswer: "Option 4",
    explanation: "An inaccessible application process can create an unfair barrier. The applicant should contact the responsible authority and request an accessible way to apply.",
    xp: 20,
    relatedRight: "RPwD Act, 2016 — accessibility, equality and non-discrimination."
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/rightsquest");
    console.log("Connected to MongoDB for seeding...");

    await Quest.deleteMany({});
    await Quest.insertMany(questsData);

    console.log("Successfully seeded 10 Quests into MongoDB!");
    process.exit();
  } catch (err) {
    console.error("Failed to seed database:", err);
    process.exit(1);
  }
};

seedDatabase();

Run this command in your backend/ terminal to load your table data into MongoDB:
node seedQuests.js

Step 4: Verify your Central server.js Routes
Ensure your main server.js file mounts all these route modules:
// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/rightsquest")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Connection Error: ", err));

// Route Handlers
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/dashboard", require("./routes/dashboardroutes"));
app.use("/api/progress", require("./routes/ProgressRoutes"));
app.use("/api/quests", require("./routes/questRoutes"));
app.use("/api/resources", require("./routes/ResourceRoutes"));
app.use("/api/rights", require("./routes/RightsRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));