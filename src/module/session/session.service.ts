import { AppException } from '@/exception/AppException';
import { SessionRepository } from './session.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';

export class SessionService {
  constructor(private sessionRepository: SessionRepository) {}

  async createSession(playerId: string) {
    // Kiểm tra xem playerId có hợp lệ không (cơ bản)
    if (!playerId || typeof playerId !== 'string' || playerId.trim() === '') {
      throw new AppException(ERROR_CODES.INVALID_SESSION_PLAYER_ID);
    }

    // Tạo session mới bằng cách gọi repository
    const newSession = await this.sessionRepository.createSession(playerId);

    return newSession;
  }
}
