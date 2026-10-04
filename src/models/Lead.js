import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [80, 'Name cannot exceed 80 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: '',
    },
    city: {
      type: String,
      trim: true,
      default: '',
    },
    qualification: {
      type: String,
      enum: ['10th', '12th', 'Graduate', 'Postgraduate', 'Working', 'Other'],
      default: '12th',
    },
    program: {
      type: String,
      required: [true, 'Interested program is required'],
      trim: true,
    },
    mode: {
      type: String,
      enum: ['telephonic', 'office', 'video'],
      default: 'telephonic',
    },
    preferredSlot: {
      window: {
        type: String,
        enum: ['morning', 'afternoon', 'evening'],
        default: 'morning',
      },
      date: {
        type: Date,
      },
    },
    message: {
      type: String,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
      default: '',
    },
    source: {
      page: { type: String, default: '/' },
      utm: {
        source: { type: String, default: 'direct' },
        medium: { type: String, default: '' },
        campaign: { type: String, default: '' },
      },
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'counselled', 'converted', 'closed'],
      default: 'new',
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    notes: [
      {
        by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        at: { type: Date, default: Date.now },
      },
    ],
    consent: {
      given: { type: Boolean, required: true, default: true },
      at: { type: Date, default: Date.now },
      ip: { type: String, default: '' },
    },
  },
  {
    timestamps: true,
  }
);

leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ phone: 1, createdAt: -1 });

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);
