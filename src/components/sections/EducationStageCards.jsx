"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
  FileText,
} from "lucide-react";

export function EducationStageCards() {
  // Modal states
  const [activeModal, setActiveModal] = useState(null); // 'courses-10', 'career-10', 'about-10', etc.
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState("");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const handleProgramClick = (programName) => {
    setActiveModal(null);
    setSelectedProgramForEnquiry(programName);
    setIsEnquiryModalOpen(true);
  };

  return (
    <>
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Explore By Academic Level
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              Choose Your Education Stage
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Explore accredited degree programs, syllabus guides, and verified career pathways tailored for each academic phase.
            </p>
          </div>

          {/* Cards Grid: 10th, 12th, UG, PG */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 10th Stage */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              {/* Card Header & Graphic */}
              <div>
                <div className="relative w-full aspect-16/10 bg-emerald-50 overflow-hidden">
                  <Image
                    src="/puja_assets/frontend/images/10th.webp"
                    alt="Class 10th Guidance"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-ink">Class 10th Guidance</h3>
                  <p className="text-xs text-ink-light mt-1">
                    Guidance on stream selection, polytechnic diplomas, and foundational career options.
                  </p>
                </div>
              </div>

              {/* 3 Action Buttons matching pujaeducation.com */}
              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveModal("about-10")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>About 10th</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("courses-10")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Courses After 10th</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("career-10")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career After 10th</span>
                </button>
              </div>
            </div>

            {/* Card 2: 12th Stage */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-16/10 bg-teal-50 overflow-hidden">
                  <Image
                    src="/puja_assets/frontend/images/12th.webp"
                    alt="Class 12th Guidance"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-ink">Class 12th Guidance</h3>
                  <p className="text-xs text-ink-light mt-1">
                    Direct admission guidance for BBA, BCA, B.Tech, Nursing, B.Pharm & Credit Card support.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveModal("about-12")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>About 12th</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("courses-12")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Courses After 12th</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("career-12")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career After 12th</span>
                </button>
              </div>
            </div>

            {/* Card 3: UG (Undergraduate) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-16/10 bg-emerald-50 overflow-hidden">
                  <Image
                    src="/puja_assets/frontend/images/ug.webp"
                    alt="Under Graduate Guidance"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-ink">Undergraduate (UG)</h3>
                  <p className="text-xs text-ink-light mt-1">
                    Guidance for Master’s programs (MBA, MCA, M.Tech, M.Com) and high-paying campus placements.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveModal("about-ug")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>About UG</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("courses-ug")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Courses After UG</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("career-ug")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career After UG</span>
                </button>
              </div>
            </div>

            {/* Card 4: PG (Postgraduate) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-16/10 bg-teal-50 overflow-hidden">
                  <Image
                    src="/puja_assets/frontend/images/pg.webp"
                    alt="Post Graduate Guidance"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-ink">Postgraduate (PG)</h3>
                  <p className="text-xs text-ink-light mt-1">
                    Advanced research, Ph.D. admissions, university professorships, and government grade-A exams.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveModal("about-pg")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>About PG</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("courses-pg")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Courses After PG</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("career-pg")}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career After PG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODALS REPLICATING EXACT STRUCTURE & CONTENT FROM PUJAEDUCATION.COM */}
      {/* ========================================================================= */}

      {/* Courses After 10th Modal */}
      <Modal
        isOpen={activeModal === "courses-10"}
        onClose={() => setActiveModal(null)}
        title="Courses After 10th (Matriculation)"
        subtitle="Choose from premier vocational and degree stream pathways"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-2">
          {/* Left Column Promo */}
          <div className="md:col-span-4 bg-emerald-50/70 rounded-xl p-4 text-center border border-emerald-100 flex flex-col justify-between items-center">
            <div>
              <h4 className="font-bold text-ink text-sm sm:text-base">Find A College In 2 Minutes!</h4>
              <p className="text-xs text-ink-light mt-0.5">
                with <span className="font-bold text-emerald-700">SubhChandra</span>{" "}
                <span className="font-bold text-red-600">Education!</span>
              </p>
            </div>
            <div className="my-2 relative w-full aspect-4/3 max-w-50">
              <Image
                src="/puja_assets/frontend/images/msSide1.webp"
                alt="Find College In 2 Minutes"
                width={406}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 bg-white rounded-lg border border-emerald-200 text-[11px] text-emerald-800 font-semibold w-full">
              100% Verified UGC & AICTE
            </div>
          </div>

          {/* Right Column Links */}
          <div className="md:col-span-8 space-y-2.5">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Which Program Are You Looking For?
            </h4>
            {[
              "Which Stream to Choose After Class 10 (Science vs Commerce vs Arts)",
              "Polytechnic Engineering Diploma Courses After 10th",
              "Intermediate (+2 Stage) Science PCM / PCB",
              "Intermediate (+2 Stage) Commerce",
              "Intermediate (+2 Stage) Arts & Humanities",
              "ITI Technical Skill Certification Courses",
            ].map((program) => (
              <button
                key={program}
                type="button"
                onClick={() => handleProgramClick(program)}
                className="w-full text-left p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{program}</span>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* Career After 10th Modal */}
      <Modal
        isOpen={activeModal === "career-10"}
        onClose={() => setActiveModal(null)}
        title="Career Opportunities After 10th"
        subtitle="Explore immediate career, defense, railway, and vocational routes"
      >
        <div className="space-y-3 py-2">
          {[
            {
              title: "Career Opportunities After 10th",
              desc: "Comprehensive roadmap for higher secondary stream selection, polytechnic jobs, and commercial certifications.",
            },
            {
              title: "Government Job Opportunities After 10th",
              desc: "Indian Army Soldier GD, Indian Navy Matric Recruit (MR), Railway Group D, SSC MTS, and State Police Constable vacancies.",
            },
            {
              title: "Private Job Opportunities After 10th",
              desc: "Technical field assistant, customer support, data entry operator, and industrial electrical apprentice.",
            },
          ].map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleProgramClick(item.title)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-ink group-hover:text-emerald-700">
                  {item.title}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <p className="text-xs text-ink-light mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </Modal>

      {/* About 10th Modal */}
      <Modal
        isOpen={activeModal === "about-10"}
        onClose={() => setActiveModal(null)}
        title="About Class 10th (Matriculation) Examination"
        subtitle="Key features, eligibility, exam pattern & passing criteria for Bihar Board & CBSE"
      >
        <div className="space-y-4 py-2 text-xs sm:text-sm text-ink leading-relaxed max-h-95 overflow-y-auto pr-2">
          <p>
            The Class 10th board examination (Matric Exam) is conducted annually across state boards (like BSEB Bihar) and central boards (CBSE/ICSE). It is the critical milestone determining student academic and career streams.
          </p>

          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <h5 className="font-bold text-ink mb-1.5">Exam Pattern Highlights:</h5>
            <ul className="list-disc pl-5 space-y-1 text-ink-light text-xs">
              <li><strong>Subjects:</strong> Mathematics, Science, Social Science, English, Hindi/Sanskrit, and Electives.</li>
              <li><strong>Marking Scheme:</strong> 100 marks per subject (Theory + Practical/Internal Assessment).</li>
              <li><strong>Format:</strong> 50% Objective Multiple Choice (OMR based) + 50% Subjective Short & Long Questions.</li>
              <li><strong>Passing Criteria:</strong> Minimum 30% marks in individual theory & aggregate.</li>
            </ul>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                setSelectedProgramForEnquiry("Class 10th Guidance");
                setIsEnquiryModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-sm"
            >
              Request Free Stream Counselling Call
            </button>
          </div>
        </div>
      </Modal>

      {/* Courses After 12th Modal (Crucial) */}
      <Modal
        isOpen={activeModal === "courses-12"}
        onClose={() => setActiveModal(null)}
        title="Courses After 12th (Undergraduate Degrees)"
        subtitle="Explore top degrees available with Bihar Student Credit Card (MNSSBY) support"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-2">
          <div className="md:col-span-4 bg-emerald-50/70 rounded-xl p-4 text-center border border-emerald-100 flex flex-col justify-between items-center">
            <div>
              <h4 className="font-bold text-ink text-sm sm:text-base">Find A College In 2 Minutes!</h4>
              <p className="text-xs text-ink-light mt-0.5">
                with <span className="font-bold text-emerald-700">SubhChandra</span>{" "}
                <span className="font-bold text-red-600">Education!</span>
              </p>
            </div>
            <div className="my-2 relative w-full aspect-4/3 max-w-50">
              <Image
                src="/puja_assets/frontend/images/msSide1.webp"
                alt="Find College In 2 Minutes"
                width={406}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 bg-white rounded-lg border border-emerald-200 text-[11px] text-emerald-800 font-semibold w-full">
              Eligible for ₹4 Lakh Credit Card Loan
            </div>
          </div>

          <div className="md:col-span-8 space-y-2 max-h-90 overflow-y-auto pr-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Which Program Are You Looking For?
            </h4>
            {[
              "Bachelor of Business Administration (BBA)",
              "Bachelor of Computer Application (BCA)",
              "Bachelor of Commerce (B.Com / B.Com Hons)",
              "Bachelor of Science (B.Sc)",
              "Bachelor of Pharmacy (B.Pharma)",
              "B.Sc Agriculture (ICAR Accredited)",
              "Bachelor of Hotel Management & Catering Tech (BHMCT)",
              "Bachelor of Physiotherapy (BPT)",
              "Bachelor of Fine Arts (BFA)",
              "Bachelor of Technology (B.Tech CSE / AI / IT)",
              "General Nursing and Midwifery (GNM)",
              "Bachelor of Arts in Journalism & Mass Comm (BA JMC)",
              "B.Sc Nursing (INC Approved)",
            ].map((course) => (
              <button
                key={course}
                type="button"
                onClick={() => handleProgramClick(course)}
                className="w-full text-left p-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                  <span>{course}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* Career After 12th Modal */}
      <Modal
        isOpen={activeModal === "career-12"}
        onClose={() => setActiveModal(null)}
        title="Career Pathways After 12th"
        subtitle="Opportunities across Science (PCM/PCB), Commerce, Arts, and Government Examinations"
      >
        <div className="space-y-2.5 py-2 max-h-95 overflow-y-auto pr-1">
          {[
            {
              title: "Career in Science: PCM (Physics, Chem, Math)",
              desc: "Engineering (B.Tech), Architecture (B.Arch), Commercial Pilot, Merchant Navy, NDA, BCA.",
            },
            {
              title: "Career in Science: PCB (Physics, Chem, Biology)",
              desc: "MBBS, BDS, B.Sc Nursing, B.Pharma, B.Sc Agriculture, Physiotherapy, Biotechnology.",
            },
            {
              title: "Career in Commerce",
              desc: "Chartered Accountancy (CA), B.Com, BBA, Company Secretary (CS), Banking & Investment.",
            },
            {
              title: "Career in Arts & Humanities",
              desc: "Law (BA LLB), Civil Services (UPSC/BPSC), Journalism & Mass Media, Graphic Design.",
            },
            {
              title: "Government Job Opportunities After 12th",
              desc: "SSC CHSL, NDA Defense Services, Railway Clerk/TC, State Police, Postal Assistant.",
            },
            {
              title: "Private Job Opportunities After 12th",
              desc: "Digital Marketing Executive, Junior Web Developer, Financial Clerk, Customer Relationship.",
            },
          ].map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleProgramClick(item.title)}
              className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-ink group-hover:text-emerald-700">
                  {item.title}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <p className="text-xs text-ink-light mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </Modal>

      {/* About 12th Modal */}
      <Modal
        isOpen={activeModal === "about-12"}
        onClose={() => setActiveModal(null)}
        title="About Class 12th (Intermediate / +2)"
        subtitle="Eligibility, scoring benchmarks, and admission into higher education degrees"
      >
        <div className="space-y-3 py-2 text-xs sm:text-sm text-ink leading-relaxed">
          <p>
            Class 12th marks the defining gateway into higher professional education. Scoring above 50% qualifies students for state and national universities as well as financial assistance schemes like the <strong>Bihar Student Credit Card (MNSSBY)</strong>.
          </p>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <h5 className="font-bold text-emerald-950 mb-1">Key Advantage with SubhChandra:</h5>
            <p className="text-xs text-emerald-800">
              Students passing 12th from BSEB or CBSE can immediately enroll in NAAC A & A+ accredited institutions with zero collateral loans up to ₹4 Lakhs covering tuition, hostel, and laptops.
            </p>
          </div>
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                setSelectedProgramForEnquiry("Class 12th College Guidance");
                setIsEnquiryModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-sm"
            >
              Talk to 12th Career Counselor
            </button>
          </div>
        </div>
      </Modal>

      {/* Courses After UG Modal */}
      <Modal
        isOpen={activeModal === "courses-ug"}
        onClose={() => setActiveModal(null)}
        title="Courses After Graduation (Postgraduate Degrees)"
        subtitle="Accelerate your leadership with UGC & AICTE approved Master's programs"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-2">
          <div className="md:col-span-4 bg-emerald-50/70 rounded-xl p-4 text-center border border-emerald-100 flex flex-col justify-between items-center">
            <div>
              <h4 className="font-bold text-ink text-sm sm:text-base">Find A College In 2 Minutes!</h4>
              <p className="text-xs text-ink-light mt-0.5">
                with <span className="font-bold text-emerald-700">SubhChandra</span>{" "}
                <span className="font-bold text-red-600">Education!</span>
              </p>
            </div>
            <div className="my-2 relative w-full aspect-4/3 max-w-50">
              <Image
                src="/puja_assets/frontend/images/msSide1.webp"
                alt="Find College In 2 Minutes"
                width={406}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 bg-white rounded-lg border border-emerald-200 text-[11px] text-emerald-800 font-semibold w-full">
              Top Corporate Campus Placements
            </div>
          </div>

          <div className="md:col-span-8 space-y-2 max-h-87.5 overflow-y-auto pr-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Which Master Program Are You Looking For?
            </h4>
            {[
              "Master of Business Administration (MBA - Dual Specialization)",
              "Master of Computer Applications (MCA)",
              "Master of Arts (MA)",
              "Master of Commerce (M.Com)",
              "Master of Science (M.Sc)",
              "Master of Technology (M.Tech)",
            ].map((course) => (
              <button
                key={course}
                type="button"
                onClick={() => handleProgramClick(course)}
                className="w-full text-left p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{course}</span>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* Career After UG Modal */}
      <Modal
        isOpen={activeModal === "career-ug"}
        onClose={() => setActiveModal(null)}
        title="Career Opportunities After Graduation"
        subtitle="Government examinations, public sector units (PSU), and high-paying private corporate roles"
      >
        <div className="space-y-3 py-2">
          {[
            {
              title: "Government Job Opportunities After Graduation",
              desc: "UPSC Civil Services, BPSC, SSC CGL (Inspector/Auditor), IBPS/SBI Bank PO, CDS Defense, Railway Station Master.",
            },
            {
              title: "Private Job Opportunities After Graduation",
              desc: "Software Engineer, Management Consultant, Investment Analyst, HR Specialist, Brand Manager with 6-12 LPA packages.",
            },
          ].map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleProgramClick(item.title)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-ink group-hover:text-emerald-700">
                  {item.title}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <p className="text-xs text-ink-light mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </Modal>

      {/* About UG Modal */}
      <Modal
        isOpen={activeModal === "about-ug"}
        onClose={() => setActiveModal(null)}
        title="About Undergraduate Education"
        subtitle="Understanding degree accreditations, credits, and UGC regulations"
      >
        <div className="space-y-3 py-2 text-xs sm:text-sm text-ink leading-relaxed">
          <p>
            Undergraduate programs provide foundational academic and practical qualifications needed for both corporate placements and government services. All programs recommended by SubhChandra are fully accredited by UGC, AICTE, and NAAC with A / A+ ratings.
          </p>
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                setSelectedProgramForEnquiry("Undergraduate Program Guidance");
                setIsEnquiryModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-sm"
            >
              Speak to UG Advisor
            </button>
          </div>
        </div>
      </Modal>

      {/* Courses After PG Modal */}
      <Modal
        isOpen={activeModal === "courses-pg"}
        onClose={() => setActiveModal(null)}
        title="Courses After Post Graduation"
        subtitle="Doctoral and research programs for academic and scientific leadership"
      >
        <div className="space-y-3 py-2">
          <button
            type="button"
            onClick={() => handleProgramClick("Ph.D. (Doctor of Philosophy)")}
            className="w-full text-left p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-between transition-colors cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5" />
              <span>Ph.D. (Doctor of Philosophy) - UGC NET / Entrance Mode</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-ink-light">
            Doctoral programs offered in Engineering, Management, Computer Science, Humanities, Commerce, and Pharmaceutical Sciences across recognized Indian universities.
          </p>
        </div>
      </Modal>

      {/* Career After PG Modal */}
      <Modal
        isOpen={activeModal === "career-pg"}
        onClose={() => setActiveModal(null)}
        title="Career After Post Graduation"
        subtitle="University professorships, research scientist positions & executive roles"
      >
        <div className="space-y-3 py-2">
          {[
            {
              title: "Government Job Opportunities After PG",
              desc: "UGC NET Assistant Professor, UPSC Grade-A Specialist, Scientist in ISRO/DRDO, Senior Administrative Services.",
            },
            {
              title: "Private Job Opportunities After PG",
              desc: "Vice President, Principal Data Scientist, Corporate R&D Director, Chief Financial Strategist.",
            },
          ].map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleProgramClick(item.title)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-ink group-hover:text-emerald-700">
                  {item.title}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <p className="text-xs text-ink-light mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </Modal>

      {/* About PG Modal */}
      <Modal
        isOpen={activeModal === "about-pg"}
        onClose={() => setActiveModal(null)}
        title="About Postgraduate Degrees"
        subtitle="Specialized domain mastery and competitive advantages"
      >
        <div className="space-y-3 py-2 text-xs sm:text-sm text-ink leading-relaxed">
          <p>
            A postgraduate degree sharpens analytical capabilities, qualifies professionals for senior leadership positions, and opens eligibility for doctoral research fellowships.
          </p>
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                setSelectedProgramForEnquiry("Postgraduate Degree Guidance");
                setIsEnquiryModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-sm"
            >
              Consult with PG Specialist
            </button>
          </div>
        </div>
      </Modal>

      {/* Quick Enquiry Modal for any clicked course */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialProgram={selectedProgramForEnquiry}
      />
    </>
  );
}
