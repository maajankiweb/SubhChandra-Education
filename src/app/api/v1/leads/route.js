import { handleLeadCreation, handleLeadsList } from '@/lib/leads-handler';

export async function POST(req) {
  return handleLeadCreation(req);
}

export async function GET() {
  return handleLeadsList();
}
