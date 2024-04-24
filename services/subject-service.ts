import prisma from '@/lib/db';
import { Subject } from '@prisma/client';

export async function getAllSubjects(): Promise<Subject[] | null> {
  return await prisma.subject.findMany();
}
