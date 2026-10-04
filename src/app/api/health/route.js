import { ApiResponse } from '@/lib/api-response';

export async function GET() {
  return ApiResponse.success(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      service: 'SubhChandra Education API',
    },
    'Health check operational'
  );
}
