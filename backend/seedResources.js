require("dotenv").config();

const mongoose = require("mongoose");
const Resource = require("./models/Resource");

const resources = [
  {
    title: "Rights of Persons with Disabilities Act, 2016",
    type: "Document",
    description:
      "The primary Indian legislation protecting the rights and entitlements of persons with disabilities.",
    url: "https://www.indiacode.nic.in/",
    category: "Legal Rights",
    relatedRights: [
      "Right to Accessibility",
      "Right to Education",
      "Right to Non-Discrimination"
    ]
  },
  {
    title: "Department of Empowerment of Persons with Disabilities",
    type: "Website",
    description:
      "Official Government of India department providing information about disability-related policies, schemes, and programmes.",
    url: "https://depwd.gov.in/",
    category: "Government Support",
    relatedRights: [
      "Right to Accessibility",
      "Equal Opportunity"
    ]
  },
  {
    title: "Chief Commissioner for Persons with Disabilities",
    type: "Website",
    description:
      "Government resource for information about disability rights, complaints, and grievance-related mechanisms.",
    url: "https://ccpd.nic.in/",
    category: "Complaints & Grievances",
    relatedRights: [
      "Right to Non-Discrimination",
      "Right to Accessibility"
    ]
  },
  {
    title: "National Helpline for Persons with Disabilities",
    type: "Helpline",
    description:
      "A support resource for persons with disabilities seeking information and assistance.",
    url: "https://depwd.gov.in/",
    category: "Support",
    relatedRights: [
      "Equal Opportunity",
      "Right to Accessibility"
    ]
  },
  {
    title: "Accessible India Campaign",
    type: "Website",
    description:
      "Government initiative focused on improving accessibility in the built environment, transportation, and information and communication systems.",
    url: "https://accessibleindia.gov.in/",
    category: "Accessibility",
    relatedRights: [
      "Right to Accessibility",
      "Right to Accessible Digital Services"
    ]
  },
  {
    title: "Disability Certificate & UDID",
    type: "Website",
    description:
      "Government digital platform providing information and services related to disability certificates and the Unique Disability ID.",
    url: "https://www.swavlambancard.gov.in/",
    category: "Government Services",
    relatedRights: [
      "Equal Opportunity",
      "Right to Accessibility"
    ]
  }
];

async function seedResources() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected!");

    await Resource.deleteMany({});
    console.log("Old resources cleared.");

    await Resource.insertMany(resources);
    console.log(`${resources.length} resources inserted successfully!`);

    await mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedResources();