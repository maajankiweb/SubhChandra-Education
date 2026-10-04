"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80, "Name too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number (e.g. 9876543210)"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  city: z.string().min(2, "Please enter your city/town"),
  qualification: z.enum(["10th", "12th", "Graduate", "Postgraduate", "Working"]),
  program: z.string().min(1, "Please select an interested program"),
  mode: z.enum(["telephonic", "office", "video"]),
  preferredSlot: z.object({
    window: z.enum(["morning", "afternoon", "evening"]),
  }),
  message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to receive admission updates & counselling" }),
  }),
  website: z.string().optional(), // Honeypot field for anti-spam
});

export function LeadForm({
  defaultProgram = "",
  variant = "full", // "full" or "compact"
  onSuccess,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      qualification: "12th",
      program: defaultProgram,
      mode: "telephonic",
      preferredSlot: {
        window: "morning",
      },
      message: "",
      consent: true,
      website: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: {
            page: typeof window !== "undefined" ? window.location.pathname : "/",
            utm: {
              source: "direct_web",
            },
          },
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to submit enquiry. Please try again.");
      }

      toast.success("Counselling request booked! Our academic advisor will contact you shortly.");
      setIsSubmitted(true);
      reset();
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.message || "Unable to submit enquiry. Please call our helpline directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-4 bg-primary-50 rounded-xl border border-primary-100 space-y-4">
        <div className="w-14 h-14 bg-success text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-ink font-heading">
          Request Received Successfully!
        </h3>
        <p className="text-sm text-ink-light max-w-md mx-auto">
          Thank you for choosing SubhChandra Education. An authorized senior education counsellor will call you within 2 business hours.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot field hidden from users */}
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Student / Parent Name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Rahul Kumar"
            className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink transition-all bg-white"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-danger mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            10-Digit Mobile Number <span className="text-danger">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-sm text-gray-500 font-medium">
              +91
            </span>
            <input
              id="phone"
              type="tel"
              placeholder="98765 43210"
              maxLength={10}
              className="w-full h-11 pl-12 pr-3.5 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink transition-all bg-white"
              {...register("phone")}
            />
          </div>
          {errors.phone && <p className="text-xs text-danger mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Email Address (Optional)
          </label>
          <input
            id="email"
            type="email"
            placeholder="student@example.com"
            className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink transition-all bg-white"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-danger mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            City / District <span className="text-danger">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Patna, Muzaffarpur, Meerut"
            className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink transition-all bg-white"
            {...register("city")}
          />
          {errors.city && <p className="text-xs text-danger mt-1">{errors.city.message}</p>}
        </div>
      </div>

      {/* Program & Current Qualification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="program" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Interested Program <span className="text-danger">*</span>
          </label>
          <select
            id="program"
            className="w-full h-11 px-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink bg-white transition-all cursor-pointer"
            {...register("program")}
          >
            <option value="">Select Degree Course</option>
            <option value="BCA">BCA (Bachelor of Computer Applications)</option>
            <option value="MCA">MCA (Master of Computer Applications)</option>
            <option value="BBA">BBA (Bachelor of Business Administration)</option>
            <option value="MBA">MBA (Master of Business Administration)</option>
            <option value="BTech">B.Tech (Computer Science / AI / Core)</option>
            <option value="BSc Nursing">B.Sc Nursing (INC Approved)</option>
            <option value="GNM">GNM (Nursing & Midwifery)</option>
            <option value="BHMCT">BHMCT (Hotel Management)</option>
            <option value="BCom">B.Com / M.Com</option>
            <option value="BA JMC">BA (Journalism & Mass Comm)</option>
            <option value="Other">Other Degree / Career Counselling</option>
          </select>
          {errors.program && <p className="text-xs text-danger mt-1">{errors.program.message}</p>}
        </div>

        <div>
          <label htmlFor="qualification" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Current Qualification <span className="text-danger">*</span>
          </label>
          <select
            id="qualification"
            className="w-full h-11 px-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink bg-white transition-all cursor-pointer"
            {...register("qualification")}
          >
            <option value="12th">Class 12th (Pursuing / Passed)</option>
            <option value="10th">Class 10th</option>
            <option value="Graduate">Graduation (BA/BSc/BCom/BCA)</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Working">Working Professional</option>
          </select>
          {errors.qualification && (
            <p className="text-xs text-danger mt-1">{errors.qualification.message}</p>
          )}
        </div>
      </div>

      {/* Mode & Preferred Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mode" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Counselling Mode <span className="text-danger">*</span>
          </label>
          <select
            id="mode"
            className="w-full h-11 px-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink bg-white transition-all cursor-pointer"
            {...register("mode")}
          >
            <option value="telephonic">Phone Call (Quickest)</option>
            <option value="office">In-Person Office Visit</option>
            <option value="video">Online Video Counselling</option>
          </select>
        </div>

        <div>
          <label htmlFor="slotWindow" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Preferred Time Slot
          </label>
          <select
            id="slotWindow"
            className="w-full h-11 px-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink bg-white transition-all cursor-pointer"
            {...register("preferredSlot.window")}
          >
            <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
            <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
          </select>
        </div>
      </div>

      {variant === "full" && (
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Questions / Credit Card Guidance Needed (Optional)
          </label>
          <textarea
            id="message"
            rows={2}
            placeholder="Ask about college fees, Bihar Student Credit Card eligibility, or hostel facilities..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 outline-none text-sm text-ink transition-all bg-white"
            {...register("message")}
          />
        </div>
      )}

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-ink-light cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded text-primary-700 focus:ring-primary-700 border-gray-300"
            {...register("consent")}
          />
          <span>
            I agree to receive academic counselling and admissions updates via Phone Call, WhatsApp, and SMS from SubhChandra Education.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-danger mt-1 font-medium">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        isLoading={isSubmitting}
        className="w-full text-base font-semibold shadow-md hover:shadow-lg mt-2"
      >
        <Sparkles className="w-5 h-5 text-ink" />
        Book Free Counselling Call
      </Button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-success" />
        <span>100% Free Consultation. No hidden charges or spam.</span>
      </div>
    </form>
  );
}
