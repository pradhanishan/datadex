import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import { LoginSchema } from './schemas';
import { userService } from './services';

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await userService.getUserByEmail(email);
        if (!user || !user.hashedPassword) {
          return null;
        }

        if (!(await userService.validatePassword({ password, hashedPassword: user.hashedPassword }))) {
          return null;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
