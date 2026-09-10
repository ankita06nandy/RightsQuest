require("dotenv").config();

const mongoose = require("mongoose");
const Right = require("./models/Right");

const rights = [
  {
    title: "Right to Accessibility",
    category: "Accessibility",
    description:
      "Persons with disabilities should be able to access buildings, services, transportation, information, and other public facilities on an equal basis.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 40",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Request an accessible facility or reasonable alternative when an accessibility barrier prevents equal access.",
    keywords: ["accessibility", "public facilities", "barrier", "access"]
  },
  {
    title: "Right to Education",
    category: "Education",
    description:
      "Persons with disabilities have the right to inclusive and equal opportunities in education.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 16",
    whoCanUse: "Students with disabilities",
    howToUse:
      "Request inclusive education, accessibility, and appropriate support from the educational institution.",
    keywords: ["education", "college", "school", "student"]
  },
  {
    title: "Right to Reasonable Accommodation",
    category: "Education & Employment",
    description:
      "Reasonable accommodation helps persons with disabilities participate equally by making appropriate adjustments to a situation or environment.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 2(y)",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Identify the barrier and request an appropriate adjustment from the responsible institution or organization.",
    keywords: ["accommodation", "extra time", "support", "adjustment"]
  },
  {
    title: "Right to Non-Discrimination",
    category: "Equality",
    description:
      "Persons with disabilities should not face discrimination because of their disability.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 3",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Document the discriminatory incident and use the appropriate complaint or grievance mechanism.",
    keywords: ["discrimination", "equality", "employment", "admission"]
  },
  {
    title: "Right to Employment",
    category: "Employment",
    description:
      "Persons with disabilities have rights relating to equality and non-discrimination in employment.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 19",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Seek clarification about discriminatory treatment and use an appropriate grievance or complaint mechanism.",
    keywords: ["employment", "job", "work", "recruitment"]
  },
  {
    title: "Right to Accessible Public Services",
    category: "Public Services",
    description:
      "Public services should be accessible to persons with disabilities so that they can use them equally and independently.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 41",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Report accessibility barriers and request an accessible route, service, or reasonable alternative.",
    keywords: ["public service", "government", "office", "accessibility"]
  },
  {
    title: "Right to Accessible Digital Services",
    category: "Digital Accessibility",
    description:
      "Digital information and services should be made accessible so persons with disabilities can use them effectively.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 42",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Report inaccessible websites or digital services and request an accessible alternative.",
    keywords: ["website", "screen reader", "digital", "technology"]
  },
  {
    title: "Right to Equal Opportunity",
    category: "Equality",
    description:
      "Persons with disabilities should receive equal opportunities to participate in education, employment, services, and society.",
    law: "Rights of Persons with Disabilities Act, 2016",
    section: "Section 3",
    whoCanUse: "Persons with disabilities",
    howToUse:
      "Raise concerns when a disability creates unequal access to an opportunity and use the appropriate support or grievance mechanism.",
    keywords: ["equal opportunity", "equality", "education", "employment"]
  }
];

async function seedRights() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected!");

    await Right.deleteMany({});
    console.log("Old rights cleared.");

    await Right.insertMany(rights);
    console.log(`${rights.length} rights inserted successfully!`);

    await mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedRights();