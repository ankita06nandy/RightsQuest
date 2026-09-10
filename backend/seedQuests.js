require("dotenv").config();

const mongoose = require("mongoose");
const Quest = require("./models/Quest");

const quests = [
  {
    title: "The Classroom without a Ramp",
    category: "Education",
    difficulty: "Easy",
    scenario:
      "You use a wheelchair and your classroom is on the second floor, but the building has no ramp or lift. What should you do?",
    options: [
      {
        text: "Request an accessible classroom or reasonable accommodation from the college.",
        isCorrect: true
      },
      {
        text: "Stop attending the class.",
        isCorrect: false
      },
      {
        text: "Ask a friend to carry you upstairs every day.",
        isCorrect: false
      },
      {
        text: "Ignore the problem.",
        isCorrect: false
      }
    ],
    explanation:
      "Students with disabilities have the right to accessibility and reasonable accommodation in education.",
    xp: 10,
    relatedRights: ["Right to Accessibility", "Right to Education"]
  },

  {
    title: 'The Bus Driver Says "No"',
    category: "Transport",
    difficulty: "Easy",
    scenario:
      "A bus driver refuses to let you board because you use a wheelchair. What is the best action?",
    options: [
      {
        text: "Go home without saying anything.",
        isCorrect: false
      },
      {
        text: "Report the incident and request accessible transport support.",
        isCorrect: true
      },
      {
        text: "Argue with other passengers.",
        isCorrect: false
      },
      {
        text: "Never use public transport again.",
        isCorrect: false
      }
    ],
    explanation:
      "Persons with disabilities should have equal access to public transportation without discrimination.",
    xp: 10,
    relatedRights: ["Right to Accessibility", "Right to Non-Discrimination"]
  },

  {
    title: "Extra Time for the Exam",
    category: "Education",
    difficulty: "Medium",
    scenario:
      "You have a disability that makes it difficult to complete an examination within the standard time. What should you do?",
    options: [
      {
        text: "Request reasonable accommodation such as extra time.",
        isCorrect: true
      },
      {
        text: "Skip the examination.",
        isCorrect: false
      },
      {
        text: "Ask another student to complete the exam for you.",
        isCorrect: false
      },
      {
        text: "Accept the disadvantage.",
        isCorrect: false
      }
    ],
    explanation:
      "Reasonable accommodation can help ensure students with disabilities have an equal opportunity during examinations.",
    xp: 15,
    relatedRights: ["Right to Reasonable Accommodation", "Right to Education"]
  },

  {
    title: "We Can't Hire You",
    category: "Employment",
    difficulty: "Hard",
    scenario:
      "A company rejects you during recruitment only because you have a disability. What should you do?",
    options: [
      {
        text: "Accept the decision without asking questions.",
        isCorrect: false
      },
      {
        text: "Hide your disability during future interviews.",
        isCorrect: false
      },
      {
        text: "Seek clarification and report discriminatory treatment through the appropriate channel.",
        isCorrect: true
      },
      {
        text: "Stop applying for jobs.",
        isCorrect: false
      }
    ],
    explanation:
      "Discrimination against persons with disabilities in employment is not acceptable, and appropriate grievance mechanisms can be used.",
    xp: 20,
    relatedRights: ["Right to Employment", "Right to Non-Discrimination"]
  },

  {
    title: "The Website I Can't Use",
    category: "Digital Accessibility",
    difficulty: "Medium",
    scenario:
      "A government website is not accessible using your screen reader. What should you do?",
    options: [
      {
        text: "Stop using the service.",
        isCorrect: false
      },
      {
        text: "Report the accessibility issue and request an accessible alternative.",
        isCorrect: true
      },
      {
        text: "Ask someone else to always use the website for you.",
        isCorrect: false
      },
      {
        text: "Ignore the issue.",
        isCorrect: false
      }
    ],
    explanation:
      "Digital accessibility helps persons with disabilities access public services independently.",
    xp: 15,
    relatedRights: ["Right to Accessibility", "Digital Accessibility"]
  },

  {
    title: "This Toilet Is Only for Staff",
    category: "Public Facilities",
    difficulty: "Medium",
    scenario:
      "You need an accessible toilet in a public building, but staff tell you that the accessible toilet is only for employees. What should you do?",
    options: [
      {
        text: "Leave immediately.",
        isCorrect: false
      },
      {
        text: "Use an unsafe or inaccessible toilet.",
        isCorrect: false
      },
      {
        text: "Ignore the situation.",
        isCorrect: false
      },
      {
        text: "Request access to an appropriate accessible facility and raise the issue if access is denied.",
        isCorrect: true
      }
    ],
    explanation:
      "Accessible public facilities should be available to persons with disabilities without unnecessary restrictions.",
    xp: 15,
    relatedRights: ["Right to Accessibility", "Accessible Public Facilities"]
  },

  {
    title: "Denied Admission Because of Disability",
    category: "Education",
    difficulty: "Hard",
    scenario:
      "A college refuses your admission after learning that you have a disability. What should you do?",
    options: [
      {
        text: "Give up on higher education.",
        isCorrect: false
      },
      {
        text: "Ask for the decision in writing and use the appropriate grievance or complaint mechanism.",
        isCorrect: true
      },
      {
        text: "Hide your disability from the college.",
        isCorrect: false
      },
      {
        text: "Withdraw your application without asking why.",
        isCorrect: false
      }
    ],
    explanation:
      "Persons with disabilities have rights to equal opportunity and non-discrimination in education.",
    xp: 20,
    relatedRights: ["Right to Education", "Right to Non-Discrimination"]
  },

  {
    title: "We Don't Have an Interpreter",
    category: "Communication",
    difficulty: "Medium",
    scenario:
      "You are a student who is deaf and your class does not provide the communication support you need. What should you do?",
    options: [
      {
        text: "Stop attending the class.",
        isCorrect: false
      },
      {
        text: "Request appropriate communication support or reasonable accommodation.",
        isCorrect: true
      },
      {
        text: "Ask another student to interpret every class informally.",
        isCorrect: false
      },
      {
        text: "Ignore the problem.",
        isCorrect: false
      }
    ],
    explanation:
      "Accessible communication and reasonable accommodation help ensure equal participation in education.",
    xp: 15,
    relatedRights: ["Right to Communication", "Right to Education"]
  },

  {
    title: "The Office Without an Accessible Entrance",
    category: "Public Building",
    difficulty: "Hard",
    scenario:
      "You visit a public office but the entrance has stairs and no accessible alternative. What should you do?",
    options: [
      {
        text: "Leave without receiving the service.",
        isCorrect: false
      },
      {
        text: "Ask another person to complete everything for you.",
        isCorrect: false
      },
      {
        text: "Request an accessible route or reasonable alternative and report the accessibility barrier.",
        isCorrect: true
      },
      {
        text: "Never visit the office again.",
        isCorrect: false
      }
    ],
    explanation:
      "Public buildings and services should be accessible to persons with disabilities.",
    xp: 20,
    relatedRights: ["Right to Accessibility", "Accessible Public Services"]
  },

  {
    title: "The Scholarship Portal Isn't Accessible",
    category: "Education",
    difficulty: "Medium",
    scenario:
      "You cannot complete an online scholarship application because the portal is not accessible with your assistive technology. What should you do?",
    options: [
      {
        text: "Give up the scholarship.",
        isCorrect: false
      },
      {
        text: "Ask a friend to submit it without informing the authority.",
        isCorrect: false
      },
      {
        text: "Ignore the deadline.",
        isCorrect: false
      },
      {
        text: "Report the accessibility problem and request an accessible way to apply.",
        isCorrect: true
      }
    ],
    explanation:
      "Accessible digital services help ensure persons with disabilities can access educational and financial opportunities equally.",
    xp: 15,
    relatedRights: ["Right to Accessibility", "Equal Opportunity"]
  }
];

async function seedQuests() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected!");

    await Quest.deleteMany({});
    console.log("Old quests cleared.");

    await Quest.insertMany(quests);
    console.log(`${quests.length} quests inserted successfully!`);

    await mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedQuests();