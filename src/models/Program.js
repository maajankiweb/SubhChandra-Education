import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Program title is required'],
      trim: true,
    },
    code: {
      type: String,
      trim: true,
      default: '',
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    level: {
      type: String,
      enum: ['UG', 'PG', 'Diploma', 'Certificate'],
      required: true,
    },
    stream: {
      type: String,
      trim: true,
      default: 'General',
    },
    mode: [
      {
        type: String,
        enum: ['Online', 'Regular', 'Hybrid', 'Distance'],
      },
    ],
    duration: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      default: '',
    },
    syllabus: [
      {
        semester: String,
        topics: [String],
      },
    ],
    careers: [String],
    feeRange: {
      min: Number,
      max: Number,
      displayText: String,
    },
    creditCardEligible: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    lastReviewedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

programSchema.index({ level: 1, isPublished: 1 });
programSchema.index({ title: 'text', overview: 'text' });

export default mongoose.models.Program || mongoose.model('Program', programSchema);
