import prisma from '@/lib/db';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

/**
 * Retrieves a user by their ID.
 * @param {string} id - The ID of the user.
 * @returns {Promise<User | null>} A Promise that resolves to the user object if found, or null if not found.
 */
export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findFirst({ where: { id } });
}

/**
 * Retrieves a user by their email address.
 * @param {string} email - The email address of the user.
 * @returns {Promise<User | null>} A Promise that resolves to the user object if found, or null if not found.
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findFirst({ where: { email } });
}

/**
 * Retrieves a user by their email address or name.
 * @param {Object} options - Object containing email and name properties.
 * @param {string} options.email - The email address of the user.
 * @param {string} options.name - The name of the user.
 * @returns {Promise<User | null>} A Promise that resolves to the user object if found, or null if not found.
 */
export async function getUserByNameOrEmail({ email, name }: { email: string; name: string }): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email }, { name }],
    },
  });
}

/**
 * Hashes a password using bcrypt.
 * @param {string} password - The password to be hashed.
 * @returns {Promise<string>} A Promise that resolves to the hashed password.
 */
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

/**
 * Validates a password by comparing it to a hashed password.
 * @param {Object} options - Object containing password and hashedPassword properties.
 * @param {string} options.password - The plain text password to be validated.
 * @param {string} options.hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean | null>} A Promise that resolves to true if the password is valid, false if not, or null if an error occurs.
 */
export async function validatePassword({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}): Promise<boolean | null> {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * Creates a new user with the provided name, email, and hashed password.
 * @param {Object} userData - Object containing name, email, and hashedPassword properties.
 * @param {string} userData.name - The name of the user.
 * @param {string} userData.email - The email address of the user.
 * @param {string} userData.hashedPassword - The hashed password of the user.
 * @returns {Promise<User>} A Promise that resolves to the newly created user object.
 */
export async function create({
  name,
  email,
  hashedPassword,
}: {
  name: string;
  email: string;
  hashedPassword: string;
}): Promise<User> {
  return await prisma.user.create({ data: { name, email, hashedPassword } });
}
