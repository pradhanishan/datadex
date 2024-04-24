// Import required modules and dependencies
import { PrismaClient } from '@prisma/client';
// Import PrismaClient for interacting with the database
import bcrypt from 'bcryptjs';

// Import bcrypt for hashing passwords

// Initialize PrismaClient
const prisma = new PrismaClient();

// Define an asynchronous function to seed an admin user
async function seedAdmin() {
  // Hash the admin password using bcrypt
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);

  // Upsert (update or create if not exists) the admin user in the database
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL }, // Check if admin user already exists by email
    update: {}, // No need to update anything if user already exists
    create: { name: 'admin', email: process.env.ADMIN_EMAIL!, hashedPassword, role: 'ADMIN' }, // Create admin user if not exists
  });
}

// Define an interface for the subject objects
interface ISubject {
  name: string;
  description: string;
}

// Define an array of subjects with their names and descriptions
const subjects: ISubject[] = [
  {
    name: 'Tables',
    description:
      'Explore comprehensive details about tables created within your workspace, including their purpose, subject area, associated pipelines, notebooks, data sources, ownership information, metadata attributes, and more.',
  },
  {
    name: 'Pipelines',
    description:
      'Gain insights into Azure Data Factory pipelines, understanding their execution frequency, objectives, linked data sources, associated entities, dependencies, scheduling details, and other pertinent attributes crucial for managing data workflows effectively.',
  },
  {
    name: 'Dashboards',
    description:
      'Delve into detailed insights regarding Power BI dashboards, understanding their specific purposes, linked datasets, intended audience, update schedules, visualization configurations, and other essential characteristics for optimizing data presentation and consumption.',
  },
  {
    name: 'Data Providers',
    description:
      'Discover comprehensive details about the source systems collaborating with your workspace, including insights into the data they share, their integration methods, data formats, frequency of updates, and other essential attributes critical for data ingestion and management.',
  },
  {
    name: 'Data Consumers',
    description:
      'Gain insights into the systems consuming data from your workspace, understanding their data consumption patterns, integration methods, data usage, and other pertinent details essential for optimizing data delivery and meeting consumer requirements.',
  },
  {
    name: 'FAQs',
    description:
      'Access a repository of frequently asked questions (FAQs) directed to your team, providing comprehensive answers to common queries, enabling efficient communication and knowledge sharing within your organization.',
  },
  {
    name: 'Data Marts',
    description: 'View data models categorized by subject areas.',
  },
];

// Define an asynchronous function to seed subjects into the database
async function seedSubjects() {
  // Loop through each subject and upsert it into the database
  subjects.forEach(async (subject) => {
    await prisma.subject.upsert({
      where: { name: subject.name }, // Check if subject already exists by name
      update: {}, // No need to update anything if subject already exists
      create: { name: subject.name, description: subject.description }, // Create subject if not exists
    });
  });
}

// Define the main asynchronous function to execute seeding operations
async function main() {
  // Seed the admin user
  await seedAdmin();

  // Seed the subjects
  await seedSubjects();
}

// Execute the main function
main()
  .then(async () => {
    // Disconnect PrismaClient after seeding is completed successfully
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // Log and handle errors if any
    console.error(e);
    // Disconnect PrismaClient even if there's an error
    await prisma.$disconnect();
    // Exit the process with non-zero status code to indicate failure
    process.exit(1);
  });
