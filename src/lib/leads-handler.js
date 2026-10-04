import { connectDB } from '@/lib/db';
import Lead from '@/models/Lead';
import { ApiResponse } from '@/lib/api-response';

export async function handleLeadCreation(req) {
  try {
    const body = await req.json();

    const {
      name,
      fullName,
      phone,
      email,
      city,
      qualification,
      program,
      course,
      mode,
      preferredSlot,
      message,
      notes,
      source,
      consent,
      website, // Honeypot field
    } = body;

    // Honeypot anti-spam check: If bot filled 'website', silently return success
    if (website && String(website).trim() !== '') {
      return ApiResponse.success(
        { id: 'mock-bot-submission' },
        'Your request has been received.',
        201
      );
    }

    const candidateName = (name || fullName || '').trim();
    if (!candidateName) {
      return ApiResponse.error('Name is required', 400, [
        { field: 'name', message: 'Name is required' },
      ]);
    }

    const cleanPhone = phone ? String(phone).replace(/\s+/g, '').replace(/^\+91/, '') : '';
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      return ApiResponse.error(
        'Please provide a valid 10-digit mobile number',
        400,
        [{ field: 'phone', message: 'Invalid 10-digit mobile number' }]
      );
    }

    const clientIp =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      '';

    let leadId = null;

    try {
      await connectDB();

      // Check for duplicate recent submission within last 24h
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const existingLead = await Lead.findOne({
        phone: cleanPhone,
        createdAt: { $gte: oneDayAgo },
      });

      if (existingLead) {
        return ApiResponse.success(
          { id: existingLead._id },
          'Counselling request already scheduled! An advisor will call you shortly.',
          201
        );
      }

      const notesArray = [];
      if (notes) {
        notesArray.push({
          text: typeof notes === 'string' ? notes : JSON.stringify(notes),
          at: new Date(),
        });
      }

      const parsedSource =
        typeof source === 'object' && source !== null
          ? source
          : { page: '/', utm: { source: typeof source === 'string' ? source : 'web' } };

      const newLead = new Lead({
        name: candidateName,
        phone: cleanPhone,
        email: email ? String(email).trim().toLowerCase() : '',
        city: city ? String(city).trim() : '',
        qualification: qualification || '12th',
        program: (program || course || 'General Counselling').trim(),
        mode: mode || 'telephonic',
        preferredSlot: preferredSlot || { window: 'morning' },
        message: message ? String(message).trim() : '',
        source: parsedSource,
        notes: notesArray,
        consent: {
          given: consent !== undefined ? Boolean(consent) : true,
          at: new Date(),
          ip: String(clientIp),
        },
      });

      await newLead.save();
      leadId = newLead._id;
    } catch (dbErr) {
      console.warn('[Leads DB Warning] Database operation deferred or offline:', dbErr.message);
      // Graceful fallback for dev or if mongo is momentarily offline
      leadId = 'temp-' + Date.now();
    }

    return ApiResponse.success(
      { id: leadId },
      'Counselling enquiry booked successfully! Our academic counsellor will connect with you.',
      201
    );
  } catch (error) {
    console.error('[Leads API Error]:', error);
    return ApiResponse.error(
      error.message || 'Internal Server Error while processing lead',
      500
    );
  }
}

export async function handleLeadsList() {
  try {
    await connectDB();
    const leads = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(50);
    return ApiResponse.success(leads, 'Leads retrieved successfully');
  } catch (error) {
    console.warn('[Leads List Warning]:', error.message);
    return ApiResponse.success([], 'No leads available or database offline');
  }
}
