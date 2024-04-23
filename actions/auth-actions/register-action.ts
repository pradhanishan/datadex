'use server';

import prisma from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import { userService } from '@/services';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export async function register(formData: z.infer<typeof RegisterSchema>) {
  try {
    const validatedFields = RegisterSchema.safeParse(formData);
    if (!validatedFields.success) {
      return { error: 'invalid credentials' };
    }
    const { username, email, password } = formData;
    const existingUser = await userService.getUserByNameOrEmail({ email, name: username });
    const hashedPassword = await userService.hashPassword(password);
    const createdUser = await userService.create({ name: username, email, hashedPassword: hashedPassword });
    return { success: 'verification email sent' };
  } catch (error) {
    console.log(error);
    return { error: 'An internal server error occurred' };
  }
}
