import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SessionRepository {
  async create(playerId: string) {
    return prisma.session.create({
      data: {
        playerId,
        isCompleted: false,
      },
    });
  }
}
