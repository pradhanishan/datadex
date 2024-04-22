import { z } from 'zod';

export const RegisterSchema = z.object({
  username: z.string().min(3, { message: 'min 3 characters' }).max(30, { message: 'max 30 characters' }),
  email: z.string().email({ message: 'email is required' }),
  password: z.string().min(1, { message: 'password is required' }),
});
