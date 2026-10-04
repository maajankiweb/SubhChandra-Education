import { ApiResponse } from '@/lib/api-response';

export async function GET() {
  return ApiResponse.success(
    {
      brandName: 'SubhChandra Education',
      tagline: 'Right course. Right career.',
      phone: '+91 98765 43210',
      email: 'counselling@subhchandra.org',
      whatsapp: '919876543210',
      stats: {
        studentsGuided: '15,000+',
        partnerUniversities: '45+',
        verifiedAdmissions: '100%',
        experience: '12+ Yrs',
      },
    },
    'Public settings retrieved successfully'
  );
}
