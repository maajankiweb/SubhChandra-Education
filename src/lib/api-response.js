import { NextResponse } from 'next/server';

export class ApiResponse {
  static success(data, message = 'Success', statusCode = 200, meta = null) {
    const payload = {
      success: true,
      message,
      data,
    };
    if (meta) {
      payload.meta = meta;
    }
    return NextResponse.json(payload, { status: statusCode });
  }

  static error(message = 'An error occurred', statusCode = 500, errors = []) {
    return NextResponse.json(
      {
        success: false,
        message,
        errors,
      },
      { status: statusCode }
    );
  }
}
