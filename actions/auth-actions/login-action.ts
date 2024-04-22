'use server';

import { LoginSchema } from '@/schemas';
import { z } from 'zod';

export async function login(formData: z.infer<typeof LoginSchema>) {
  console.log(formData);
}
