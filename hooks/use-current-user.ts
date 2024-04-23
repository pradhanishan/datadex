import { useSession } from 'next-auth/react';

/**
 *
 * A custom hook to get current user from the active session
 */
export default function useCurrentUser() {
  const session = useSession();
  return session.data?.user;
}
