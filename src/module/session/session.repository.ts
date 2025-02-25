import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SessionRepository {
  async createSession(playerId: string) {
    return await prisma.session.create({
      data: {
        playerId,
        startTime: new Date().toISOString(),
        isCompleted: false,
      },
    });
  }
}
