import { PrismaClient } from '@/db/prisma-client';
import { Session } from 'next-auth';
import { caseService } from '@/services/case.service';
import { serverService } from '@/services/server.service';
import { configService } from '@/services/config.service';
import { imageService } from '@/services/image.service';
import { tokenService } from '@/services/token.service';
import { authService } from '@/services/auth.service';
import { userService } from '@/services/user.service';
import type { User } from '@/generated/prisma';

// Utility type to allow null/undefined in user fields
export type NullableUser = {
  [K in keyof (Session['user'] & Partial<User>)]: (Session['user'] & Partial<User>)[K] | null | undefined;
};

export interface GraphQLContext {
  prisma: PrismaClient;
  session: Session | null;
  user: NullableUser | null;
  caseService: typeof caseService;
  serverService: typeof serverService;
  configService: typeof configService;
  imageService: typeof imageService;
  tokenService: typeof tokenService;
  authService: typeof authService;
  userService: typeof userService;
}
