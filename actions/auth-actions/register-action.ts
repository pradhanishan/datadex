'use server';

import prisma from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export async function register(formData: z.infer<typeof RegisterSchema>) {
  try {
    const validatedFields = RegisterSchema.safeParse(formData);
    if (!validatedFields.success) {
      return { error: 'invalid credentials' };
    }

    const { username, email, password } = formData;

    const existingUser = await prisma.user.findFirst({ where: { OR: [{ email }, { name: username }] } });
    if (existingUser) {
      if (existingUser.email === email) {
        return { error: 'You have already registered with this email' };
      }
      return { error: `username ${username}} is taken` };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({ data: { name: username, email, hashedPassword } });
    return { success: 'verification email sent' };
  } catch (error) {
    console.log(error);
    return { error: 'An internal server error occurred' };
  }
}
