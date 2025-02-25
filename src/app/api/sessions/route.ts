import { ApiResponse } from '@/common/ApiResponse';
import { AppException } from '@/exception/AppException';
import { ERROR_CODES } from '@/exception/ErrorCode';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { SessionRepository } from '@/module/session/session.repository';
import { SessionService } from '@/module/session/session.service';
import { NextResponse } from 'next/server';

// Khởi tạo repository và service
const sessionRepository = new SessionRepository();
const sessionService = new SessionService(sessionRepository);

export async function POST(req: Request) {
  try {
    const { playerId } = await req.json();

    if (!playerId) {
      throw new AppException(ERROR_CODES.INVALID_SESSION_PLAYER_ID);
    }

    const newSession = await sessionService.createSession(playerId);

    return NextResponse.json(
      ApiResponse.success(newSession, 'Session created successfully').toJSON(),
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
