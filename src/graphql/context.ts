// src/graphql/context.ts

import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/db/prisma-client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CaseService } from '@/services/case.service';

export type Context = {
  prisma: typeof prisma;
  session: any;
  user: any;
  caseService: typeof CaseService;
};

export async function createContext({ req }: { req: NextRequest }): Promise<Context> {
  try {
    const session = await getServerSession(authOptions);
    return {
      prisma,
      session: session || null,
      user: session?.user || null,
      caseService: CaseService
    };
  } catch (error) {
    console.error('Error creating context:', error);
    return {
      prisma,
      session: null,
      user: null,
      caseService: CaseService
    };
  }
}