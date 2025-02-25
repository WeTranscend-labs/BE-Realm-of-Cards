export type ErrorDetail = {
  code: number;
  message: string;
  statusCode: number;
};

export const ERROR_CODES: Record<string, ErrorDetail> = {
  VALIDATION_ERROR: {
    code: 1001,
    message: 'Invalid input data',
    statusCode: 400,
  },

  // Session-related errors
  INVALID_SESSION_PLAYER_ID: {
    code: 2001,
    message:
      'The provided player ID is invalid or empty. Please provide a valid Ethereum wallet address.',
    statusCode: 400,
  },
  SESSION_ALREADY_ACTIVE: {
    code: 2002,
    message: 'An active session already exists for this player.',
    statusCode: 409,
  },
  SESSION_NOT_FOUND: {
    code: 2003,
    message: 'Session not found.',
    statusCode: 404,
  },

  // General error
  INTERNAL_SERVER_ERROR: {
    code: 9999,
    message: 'Unexpected error occurred',
    statusCode: 500,
  },
};
