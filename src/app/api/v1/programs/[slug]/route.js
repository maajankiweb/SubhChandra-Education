import { connectDB } from '@/lib/db';
import Program from '@/models/Program';
import { ApiResponse } from '@/lib/api-response';

export async function GET(req, { params }) {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    if (!slug) {
      return ApiResponse.error('Slug parameter is missing', 400);
    }

    await connectDB();

    const program = await Program.findOne({
      slug: slug.toLowerCase(),
      isPublished: true,
    });

    if (!program) {
      return ApiResponse.error('Program not found', 404);
    }

    return ApiResponse.success(program, 'Program details retrieved');
  } catch (error) {
    console.error('[Program Slug Error]:', error);
    return ApiResponse.error(error.message || 'Internal Server Error', 500);
  }
}
