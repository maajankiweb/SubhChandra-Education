"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { LeadForm } from "@/components/forms/LeadForm";
import {
  ChevronRight,
  MapPin,
  Building2,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Sparkles,
  HelpCircle,
  FileText,
  Search,
} from "lucide-react";

export function UniversityPageTemplate({ uniData }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [courseFilter, setCourseFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!uniData) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">University Not Found</h1>
            <p className="text-gray-500 mt-2">The requested university page could not be found.</p>
            <Link
              href="/our-associates"
              className="mt-4 inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm"
            >
              Browse All Partner Universities
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tableRows = uniData.coursesTable || [];
  const headerRow = tableRows[0] || [];
  const dataRows = tableRows.slice(1);

  const filteredRows = dataRows.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(courseFilter.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface-muted" suppressHydrationWarning>
      <Header />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO BANNER: Campus Photo, Name, Accreditations & Form */}
        {/* ========================================================= */}
        <section className="relative bg-linear-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-10 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-primary-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-400" />
              <Link href="/our-associates" className="hover:text-white transition-colors">
                Universities
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-accent-400 font-semibold">{uniData.h1}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (7 cols): Details */}
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 border border-accent-400/30 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions 2026-27 Open</span>
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                  {uniData.h1}
                </h1>

                {uniData.city && (
                  <div className="flex items-center gap-2 text-sm sm:text-base text-primary-100 font-medium">
                    <MapPin className="w-4 h-4 text-accent-400 shrink-0" />
                    <span>{uniData.city}</span>
                  </div>
                )}

                {/* Accreditations Row */}
                {uniData.accreditations && uniData.accreditations.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-primary-300 uppercase tracking-wider mb-2">
                      Recognitions & Accreditations:
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {uniData.accreditations.map((acc, idx) => (
                        <div
                          key={idx}
                          className="h-10 px-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center p-1"
                        >
                          <Image
                            src={acc.startsWith("/") ? acc : `/${acc}`}
                            alt="Accreditation"
                            width={80}
                            height={32}
                            className="object-contain max-h-7"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-ink font-bold text-xs sm:text-sm shadow-lg hover:shadow-accent-500/30 transition-all cursor-pointer"
                  >
                    Apply Now for 2026-27
                  </button>
                  <a
                    href="#courses"
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    View Courses & Fee Structure
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Embedded Quick Application Form */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-gray-100 text-ink">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase">
                      Fast Track Admission
                    </span>
                    <h3 className="text-lg font-bold text-ink mt-1">Apply to {uniData.h1}</h3>
                    <p className="text-xs text-ink-light">Direct Seat Allocation with 0% Processing Fee</p>
                  </div>
                  <LeadForm onSuccess={() => toast?.success("Application submitted successfully!")} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. STICKY TAB NAVIGATION                                  */}
        {/* ========================================================= */}
        <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-6 sm:space-x-8 overflow-x-auto whitespace-nowrap text-xs sm:text-sm font-bold">
              {[
                { id: "overview", label: "Overview" },
                { id: "courses", label: "Courses & Fees" },
                { id: "faqs", label: "FAQs" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "border-emerald-600 text-emerald-700 font-extrabold"
                      : "border-transparent text-gray-600 hover:text-ink hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. TAB CONTENT AREA                                       */}
        {/* ========================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-ink font-heading">
                    About {uniData.h1}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-light mt-1">
                    Complete campus overview, affiliations, infrastructure, and accreditation highlights.
                  </p>
                </div>

                {uniData.uniDetailsHtml ? (
                  <div
                    className="prose prose-emerald max-w-none text-ink-light text-sm leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: uniData.uniDetailsHtml }}
                  />
                ) : (
                  <p className="text-sm text-ink-light leading-relaxed">
                    {uniData.h1} offers leading undergraduate, postgraduate, and diploma programs with NAAC A+ & UGC approval, state-of-the-art campus facilities, high placement ratios, and complete support under the Bihar Student Credit Card scheme.
                  </p>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                  <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Why Choose {uniData.h1}?</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-ink-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>UGC Recognized & NAAC Accredited degrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>100% Eligible under Bihar Student Credit Card (MNSSBY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Corporate tie-ups with 250+ top recruiters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Modern hostels, laboratories, and Wi-Fi campus</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    Check Eligibility & Apply
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Courses & Fees */}
          {activeTab === "courses" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-ink font-heading">
                    Courses Offered & Fee Structure
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-light mt-1">
                    Explore degree programs, duration, eligibility, and semester fees.
                  </p>
                </div>

                {/* Course Search Filter */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Filter courses (e.g. BCA, MBA)..."
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-emerald-600 font-medium"
                  />
                </div>
              </div>

              {tableRows.length > 0 ? (
                <div className="overflow-x-auto border border-gray-200 rounded-xl">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-emerald-50 text-emerald-950 font-bold border-b border-gray-200">
                        {headerRow.map((h, idx) => (
                          <th key={idx} className="p-3 sm:p-3.5">
                            {h}
                          </th>
                        ))}
                        <th className="p-3 sm:p-3.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50/80 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 sm:p-3.5 text-ink-light">
                              {cell}
                            </td>
                          ))}
                          <td className="p-3 sm:p-3.5 text-right">
                            <button
                              type="button"
                              onClick={() => setIsModalOpen(true)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-colors cursor-pointer"
                            >
                              Apply
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>Detailed course list is being updated. Contact counsellors for latest syllabus and fee structure.</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: FAQs */}
          {activeTab === "faqs" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ink font-heading">
                  Frequently Asked Questions about {uniData.h1}
                </h2>
                <p className="text-xs sm:text-sm text-ink-light mt-1">
                  Everything you need to know about admission, fees, credit cards, and hostels.
                </p>
              </div>

              {uniData.faqs && uniData.faqs.length > 0 ? (
                <div className="space-y-3">
                  {uniData.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-gray-200">
                      <h4 className="text-sm font-bold text-ink">{faq.q}</h4>
                      <div
                        className="text-xs text-ink-light mt-2 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold text-ink">
                      Is {uniData.h1} eligible for Bihar Student Credit Card (MNSSBY)?
                    </h4>
                    <p className="text-xs text-ink-light mt-1.5 leading-relaxed">
                      Yes! {uniData.h1} holds UGC and NAAC accreditations, making all its eligible degree and diploma programs 100% eligible for the Bihar Student Credit Card scheme with loans up to ₹4 Lakhs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold text-ink">
                      How can I apply through SubhChandra Education?
                    </h4>
                    <p className="text-xs text-ink-light mt-1.5 leading-relaxed">
                      You can submit your application online or visit any of SubhChandra Education’s offices in Patna, Siwan, Rohtas, or Noida for free seat allotment and document verification.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Floating Action Components */}
      <QuickEnquiryFixedButton />
      <StickyCallbackBar />
      <WhatsAppButton />

      {/* Admission Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram={uniData.h1}
      />
    </div>
  );
}
