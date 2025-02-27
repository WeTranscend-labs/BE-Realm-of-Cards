import { ApiResponse } from '@/common/ApiResponse';
import { AppException } from '@/exception/AppException';
import { ERROR_CODES } from '@/exception/ErrorCode';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { SessionRepository } from '@/module/session/session.repository';
import { SessionService } from '@/module/session/session.service';
import { NextResponse } from 'next/server';

// Khởi tạo repository và service
const sessionService = new SessionService(new SessionRepository());

export async function POST(req: Request) {
  try {
    const { playerId } = await req.json();

    const newSession = await sessionService.createSession(playerId);

    return NextResponse.json(
      ApiResponse.success(newSession, 'Session created successfully').toJSON(),
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
