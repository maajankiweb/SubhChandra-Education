import { connectDB } from '@/lib/db';
import Program from '@/models/Program';
import { ApiResponse } from '@/lib/api-response';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const level = searchParams.get('level');
    const stream = searchParams.get('stream');
    const q = searchParams.get('q');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const filter = { isPublished: true };

    if (level && level !== 'all') {
      filter.level = level;
    }

    if (stream) {
      filter.stream = new RegExp(stream, 'i');
    }

    if (q) {
      filter.$or = [
        { title: new RegExp(q, 'i') },
        { code: new RegExp(q, 'i') },
        { overview: new RegExp(q, 'i') },
      ];
    }

    await connectDB();

    const total = await Program.countDocuments(filter);
    const programs = await Program.find(filter)
      .sort({ isFeatured: -1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return ApiResponse.success(
      programs,
      'Programs fetched successfully',
      200,
      { page, limit, total }
    );
  } catch (error) {
    console.warn('[Programs API Warning]:', error.message);
    return ApiResponse.success(
      [],
      'Programs fetched (offline or empty)',
      200,
      { page: 1, limit: 20, total: 0 }
    );
  }
}
