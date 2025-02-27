import { z } from 'zod';

export const createSessionSchema = z.object({
  playerId: z
    .string()
    .regex(/^0x[a-fA-F0-9]{40}$/, 'INVALID_SESSION_PLAYER_ID'),
});
