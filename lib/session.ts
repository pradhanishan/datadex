import { auth } from '@/auth';
import { $Enums, User } from '@prisma/client';

export async function getCurrentUser() {
  const session = await auth();
  const user = session?.user;
  return user;
}
