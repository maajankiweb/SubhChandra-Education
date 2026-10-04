"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Building2,
  CreditCard,
  Target,
  Send,
  Loader2,
} from "lucide-react";

const EDUCATION_LEVELS = [
  { id: "10th", label: "10th (Matriculation)", desc: "Completed 10th or secondary school" },
  { id: "12th", label: "12th (Intermediate / +2)", desc: "Completed 12th in Arts, Science or Commerce" },
  { id: "ug", label: "Undergraduate (UG / Degree)", desc: "Completed B.A, B.Sc, B.Com, BCA, B.Tech, etc." },
  { id: "pg", label: "Postgraduate (PG / Masters)", desc: "Completed Master's degree" },
  { id: "diploma", label: "Diploma / Polytechnic", desc: "Completed 3-year technical diploma" },
];

const SCORE_RANGES = [
  { id: "below_50", label: "Below 50%", desc: "Direct eligibility in select accredited universities" },
  { id: "50_60", label: "50% - 60%", desc: "Eligible for most degree programs & credit card" },
  { id: "60_75", label: "60% - 75%", desc: "Eligible for scholarship & top-tier NAAC universities" },
  { id: "above_75", label: "Above 75%", desc: "Merit-based fee concessions & premium placements" },
];

const COURSES_BY_LEVEL = {
  "10th": [
    { id: "polytechnic", name: "Polytechnic Diploma" },
    { id: "intermediate_science", name: "12th Intermediate (Science PCM/PCB)" },
    { id: "intermediate_commerce", name: "12th Intermediate (Commerce)" },
    { id: "intermediate_arts", name: "12th Intermediate (Arts)" },
    { id: "iti", name: "ITI Technical Certification" },
  ],
  "12th": [
    { id: "bca", name: "BCA (Bachelor of Computer Applications)" },
    { id: "bba", name: "BBA (Bachelor of Business Admin)" },
    { id: "btech", name: "B.Tech (Computer Science / AI / IT)" },
    { id: "bcom", name: "B.Com / B.Com (Hons)" },
    { id: "bsc_nursing", name: "B.Sc Nursing" },
    { id: "gnm", name: "GNM (General Nursing & Midwifery)" },
    { id: "bpharm", name: "B.Pharma (Bachelor of Pharmacy)" },
    { id: "bsc_agri", name: "B.Sc Agriculture" },
    { id: "bajmc", name: "BA (Journalism & Mass Comm)" },
    { id: "bhmct", name: "BHMCT (Hotel Management)" },
  ],
  ug: [
    { id: "mba", name: "MBA (Master of Business Admin)" },
    { id: "mca", name: "MCA (Master of Computer Applications)" },
    { id: "mtech", name: "M.Tech (Engineering)" },
    { id: "msc", name: "M.Sc (Information Tech / Data)" },
    { id: "mcom", name: "M.Com (Finance & Accounts)" },
    { id: "ma", name: "M.A (English / Economics / Pol Sci)" },
  ],
  pg: [
    { id: "phd", name: "Ph.D (Doctor of Philosophy)" },
    { id: "executive_mba", name: "Executive MBA" },
    { id: "post_doc", name: "Post-Doctoral Fellowships" },
  ],
  diploma: [
    { id: "btech_lateral", name: "B.Tech Lateral Entry (2nd Year Direct)" },
    { id: "bca_lateral", name: "BCA Lateral Entry" },
    { id: "bba", name: "BBA Management" },
  ],
};

const SPECIALIZATIONS = [
  { id: "cs_ai", name: "Computer Science, AI & Machine Learning" },
  { id: "data_cloud", name: "Data Analytics, Cloud & DevOps" },
  { id: "marketing_fin", name: "Marketing, Finance & Banking" },
  { id: "hr_ops", name: "HR Management & Operations" },
  { id: "healthcare", name: "Healthcare, Nursing & Clinical" },
  { id: "core_eng", name: "Civil, Mechanical & Electrical" },
  { id: "general", name: "Standard Academic Curriculum" },
];

const BUDGETS = [
  { id: "2_4_lakh", label: "₹2 - 4 Lakhs", desc: "100% covered under Bihar Student Credit Card" },
  { id: "4_7_lakh", label: "₹4 - 7 Lakhs", desc: "Affordable semester-wise payment plans" },
  { id: "7_10_lakh", label: "₹7 - 10 Lakhs", desc: "Premier universities with premium placements" },
  { id: "10_plus_lakh", label: "₹10 Lakhs+", desc: "Top tier autonomous institutions" },
];

const BSCC_OPTIONS = [
  {
    id: "yes",
    label: "YES, I want Bihar Student Credit Card (MNSSBY)",
    desc: "Avail up to ₹4 Lakhs collateral-free education loan with 1-year repayment moratorium.",
  },
  {
    id: "no",
    label: "NO, I will pay via Self / Semester Installments",
    desc: "Standard admission with flexible 0% interest semester payment plans.",
  },
];

const GOALS = [
  {
    id: "goal_placement",
    title: "High Placement & Salary Package",
    desc: "Achieve rapid career growth, corporate readiness, and secure 6-12 LPA placements.",
  },
  {
    id: "goal_affordable",
    title: "Quality Education with Affordable Fees",
    desc: "Recognized UGC/NAAC degree without financial burden, utilizing credit card or scholarships.",
  },
  {
    id: "goal_skills",
    title: "Practical Skills & Industry Networking",
    desc: "Hands-on projects, industry certifications, and corporate mentorship.",
  },
  {
    id: "goal_govt_exam",
    title: "Government Job Eligibility & UPSC/BPSC",
    desc: "Valid UGC-recognized degree to qualify for Central & State Government examinations.",
  },
];

export function CollegeFinderModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [validationError, setValidationError] = useState("");

  const [formData, setFormData] = useState({
    educationLevel: "",
    scoreRange: "",
    course: "",
    specialization: "",
    budget: "",
    bsccOption: "",
    goal: "",
    // Final lead info
    fullName: "",
    phone: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stepTitles = [
    "What is your Education Level?",
    "How much did you score in your last degree / exam?",
    "Select the Course you want to pursue",
    "Choose Your Preferred Specialization",
    "What is your Budget for total course fees?",
    "Do you want to use the Bihar Student Credit Card Scheme?",
    "What is your ultimate goal in education and career?",
    "✨ Your AI-Matched University Recommendations",
  ];

  const totalSteps = stepTitles.length;

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationError("");
  };

  const handleNext = () => {
    // Validate current step
    let isValid = false;
    if (currentStep === 0 && formData.educationLevel) isValid = true;
    else if (currentStep === 1 && formData.scoreRange) isValid = true;
    else if (currentStep === 2 && formData.course) isValid = true;
    else if (currentStep === 3 && formData.specialization) isValid = true;
    else if (currentStep === 4 && formData.budget) isValid = true;
    else if (currentStep === 5 && formData.bsccOption) isValid = true;
    else if (currentStep === 6 && formData.goal) isValid = true;

    if (!isValid) {
      setValidationError("Please select an option before proceeding to the next step.");
      return;
    }

    setValidationError("");
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setValidationError("");
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || formData.phone.length < 10) {
      setValidationError("Please enter your name and a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    setValidationError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          city: formData.city || "Bihar",
          program: formData.course || "Degree Guidance",
          creditCardEligible: formData.bsccOption === "yes",
          source: "AI_COLLEGE_FINDER",
          notes: `Education: ${formData.educationLevel}, Score: ${formData.scoreRange}, Specialization: ${formData.specialization}, Budget: ${formData.budget}, Goal: ${formData.goal}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setIsSubmitted(true);
    } catch {
      // Graceful fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setValidationError("");
    setIsSubmitted(false);
    setFormData({
      educationLevel: "",
      scoreRange: "",
      course: "",
      specialization: "",
      budget: "",
      bsccOption: "",
      goal: "",
      fullName: "",
      phone: "",
      city: "",
    });
    onClose();
  };

  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / totalSteps) * 100));

  const availableCourses = COURSES_BY_LEVEL[formData.educationLevel] || COURSES_BY_LEVEL["12th"];

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="" subtitle="">
      <div className="py-2">
        {/* Header Indicator */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </span>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                AI-Powered College Finder
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink">
                Step {currentStep + 1} of {totalSteps}
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700">
            {progressPercent}% Complete
          </span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-3 mb-6">
          <div
            className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Title */}
        <h4 className="text-lg sm:text-xl font-bold text-center text-ink mb-6">
          {stepTitles[currentStep]}
        </h4>

        {/* Validation Toast */}
        {validationError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-700 flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Dynamic Content by Step */}
        <div className="min-h-70">
          {/* Step 0: Education Level */}
          {currentStep === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_LEVELS.map((level) => {
                const isSelected = formData.educationLevel === level.id;
                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => handleSelect("educationLevel", level.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-ink">{level.label}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <p className="text-xs text-ink-light mt-1">{level.desc}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 1: Score Range */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCORE_RANGES.map((score) => {
                const isSelected = formData.scoreRange === score.id;
                return (
                  <button
                    key={score.id}
                    type="button"
                    onClick={() => handleSelect("scoreRange", score.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-ink">{score.label}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <p className="text-xs text-ink-light mt-1">{score.desc}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 2: Course Selection */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-85 overflow-y-auto pr-1">
              {availableCourses.map((c) => {
                const isSelected = formData.course === c.name;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleSelect("course", c.name)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-ink">{c.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 3: Specialization */}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SPECIALIZATIONS.map((spec) => {
                const isSelected = formData.specialization === spec.name;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => handleSelect("specialization", spec.name)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-ink">{spec.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BUDGETS.map((b) => {
                const isSelected = formData.budget === b.label;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => handleSelect("budget", b.label)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-ink">{b.label}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <p className="text-xs text-ink-light mt-1">{b.desc}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 5: Bihar Student Credit Card */}
          {currentStep === 5 && (
            <div className="space-y-3">
              {BSCC_OPTIONS.map((opt) => {
                const isSelected = formData.bsccOption === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect("bsccOption", opt.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-emerald-600" />
                        <span className="font-bold text-sm sm:text-base text-ink">{opt.label}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    </div>
                    <p className="text-xs sm:text-sm text-ink-light mt-1.5 pl-7">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 6: Career & Education Goal */}
          {currentStep === 6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GOALS.map((g) => {
                const isSelected = formData.goal === g.title;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => handleSelect("goal", g.title)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-sm text-ink">{g.title}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </div>
                    <p className="text-xs text-ink-light mt-1 pl-6">{g.desc}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 7: Final Match & Lead Submission */}
          {currentStep === 7 && (
            <div>
              {!isSubmitted ? (
                <div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-5">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-emerald-950">
                          3 Top NAAC A+ Partner Universities Matched!
                        </h5>
                        <p className="text-xs text-emerald-800 mt-1">
                          Based on your preference for <strong>{formData.course || "Degree"}</strong> with budget{" "}
                          <strong>{formData.budget}</strong> and Bihar Credit Card eligibility.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-emerald-200/60 text-center">
                      <div className="bg-white p-2 rounded-lg border border-emerald-100">
                        <span className="text-[11px] font-bold text-ink block truncate">Marwadi Univ</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">NAAC A+</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-emerald-100">
                        <span className="text-[11px] font-bold text-ink block truncate">Subharti Univ</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">NAAC A</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-emerald-100">
                        <span className="text-[11px] font-bold text-ink block truncate">Gyan Vihar</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">NAAC A+</span>
                      </div>
                    </div>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleFinalSubmit} className="space-y-3">
                    <p className="text-xs text-ink font-medium text-center">
                      Enter your contact details to receive full syllabus, fee breakup, and direct admission counselling:
                    </p>

                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        placeholder="10-digit Mobile Number *"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Your City / District (e.g. Patna, Siwan)"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>

                    <p className="text-[10px] text-gray-500 text-center">
                      🔒 Your information is confidential. We will never share your details with third parties.
                    </p>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Get Complete Admission Recommendation
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-ink mb-1">
                    Recommendation Request Received!
                  </h4>
                  <p className="text-sm text-ink-light max-w-md mx-auto mb-6">
                    Our senior academic counsellor will reach out to you within 30 minutes at{" "}
                    <strong>+91 {formData.phone}</strong> with the complete fee structure, brochure, and Bihar Student Credit Card approval steps.
                  </p>
                  <Button variant="outline" size="md" onClick={handleReset} className="cursor-pointer">
                    Done & Close
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {currentStep < 7 && (
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                currentStep === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-100 hover:text-ink"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm cursor-pointer"
            >
              Next Step
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
