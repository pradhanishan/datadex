import authConfig from '@/auth.config';
import prisma from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { type ROLE } from '@prisma/client';
import NextAuth from 'next-auth';

import { userService } from './services';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
  callbacks: {
    // Callback function to manipulate JWT token
    async jwt({ token }) {
      // If token doesn't have a subject (user ID), return it unchanged
      if (!token.sub) {
        return token;
      }

      // Fetch user details from the database using user ID
      const user = await userService.getUserById(token.sub);

      // If user is not found, return token unchanged
      if (!user) {
        return token;
      }

      // Add user's role to the JWT token
      token.role = user.role;

      return token; // Return modified token
    },
    // Callback function to manipulate session data
    async session({ session, token }) {
      // If token, session user, or token role is missing, return session unchanged
      if (!token.sub || !session.user || !token.role) {
        return session;
      }

      // Add user's ID and role to the session
      session.user.id = token.sub;
      session.user.role = token.role;

      return session; // Return modified session
    },
  },
});
