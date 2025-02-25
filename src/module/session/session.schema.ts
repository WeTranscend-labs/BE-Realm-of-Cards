import { z } from 'zod';

export const createSessionSchema = z.object({
  playerId: z
    .string()
    .min(1, 'Player ID must not be empty')
    .regex(
      /^0x[a-fA-F0-9]{40}$/,
      'Player ID must be a valid Ethereum wallet address'
    ),
});
