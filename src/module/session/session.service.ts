import { AppException } from '@/exception/AppException';
import { SessionRepository } from './session.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';

export class SessionService {
  constructor(private sessionRepository: SessionRepository) {}

  async createSession(playerId: string) {
    if (!playerId || typeof playerId !== 'string' || playerId.trim() === '') {
      throw new AppException(ERROR_CODES.INVALID_SESSION_PLAYER_ID);
    }
    let newSession;
    console.log(playerId);
    try {
      newSession = await this.sessionRepository.create(playerId);
    } catch (err) {
      console.log(err);
    }

    return newSession;
  }
}
