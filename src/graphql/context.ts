// src/graphql/context.ts

import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/db/prisma-client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { caseService } from '@/services/case.service';
import { serverService } from '@/services/server.service';
import { configService } from '@/services/config.service';
import { imageService } from '@/services/image.service';
import { tokenService } from '@/services/token.service';
import { authService } from '@/services/auth.service';
import { userService } from '@/services/user.service';

export type Context = {
  prisma: typeof prisma;
  session: any;
  user: any;
  caseService: typeof caseService;
  serverService: typeof serverService;
  configService: typeof configService;
  imageService: typeof imageService;
  tokenService: typeof tokenService;
  authService: typeof authService;
  userService: typeof userService;
};

export async function createContext({ req }: { req: NextRequest }): Promise<Context> {
  try {
    const session = await getServerSession(authOptions);
    return {
      prisma,
      session: session || null,
      user: session?.user || null,
      caseService,
      serverService,
      configService,
      imageService,
      tokenService,
      authService,
      userService,
    };
  } catch (error) {
    console.error('Error creating context:', error);
    return {
      prisma,
      session: null,
      user: null,
      caseService,
      serverService,
      configService,
      imageService,
      tokenService,
      authService,
      userService,
    };
  }
}