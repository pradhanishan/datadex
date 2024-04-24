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
export const subjects: ISubject[] = [
  {
    name: 'Tables',
    description:
      'Explore comprehensive details about tables created within your workspace, including their purpose, subject area, associated pipelines, notebooks, data sources, ownership information, metadata attributes, and more.',
  },
  // More subject definitions can be added here
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
