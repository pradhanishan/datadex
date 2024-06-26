'use server';

import { signIn } from '@/auth';
import { DEFAULT_REDIRECT_URL } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export async function login(formData: z.infer<typeof LoginSchema>) {
  try {
    const validatedFields = LoginSchema.safeParse(formData);

    if (!validatedFields.success) {
      return { error: 'Invalid credentials' };
    }

    const { email, password } = validatedFields.data;

    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT_URL,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong' };
      }
    }
    throw error;
  }
}
