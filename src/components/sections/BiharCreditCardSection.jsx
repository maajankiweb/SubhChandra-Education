"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import {
  CreditCard,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Building,
  Sparkles,
  FileCheck,
} from "lucide-react";

export function BiharCreditCardSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-surface-muted/50 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Government Welfare Scheme
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              About <span className="text-emerald-600">Bihar Student Credit Card</span>
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Empowering Bihar’s youth with collateral-free higher education loans up to ₹4 Lakhs under Mukhyamantri Nishchay Swayam Sahayata Bhatta Yojana (MNSSBY).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column with Read More/Less Toggle */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
              <p className="text-sm text-ink leading-relaxed text-justify mb-4">
                The Bihar Student Credit Card Scheme is a visionary state government initiative aimed at providing financial assistance to students pursuing higher professional education. Launched by the Government of Bihar, this scheme helps ambitious students access necessary credit without the immediate burden of repayment, ensuring no deserving candidate is left behind due to financial limitations.
              </p>

              <h4 className="text-base font-bold text-ink mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Key Features of the Scheme:</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-ink-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-ink">Loan Amount:</strong> Eligible students can avail of a collateral-free loan of up to ₹4 Lakhs to cover their complete higher education expenses, including tuition fees, hostel accommodation, laptop, books, and study materials.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-ink">Eligibility Criteria:</strong> Open to all permanent residents of Bihar who have passed Class 12th (or equivalent) and secured admission to recognized institutions in India for approved UG, PG, or technical diploma programs.
                  </div>
                </li>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="space-y-3 pt-2 animate-fadeIn">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-ink">Repayment Terms & Moratorium:</strong> Enjoy a peaceful 1-year moratorium period after completing your course or finding employment before loan repayment begins. Repayment can be conveniently structured in simple installments over up to 15 years.
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-ink">Subsidized Interest Rates:</strong> Highly affordable nominal simple interest rate: only <strong>1% simple interest</strong> for female applicants, transgender students, and differently-abled (Divyang) candidates, and <strong>4% simple interest</strong> for male applicants.
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-ink">Collateral-Free & Zero Guarantor:</strong> Unlike traditional private commercial bank loans, no property mortgage, third-party security, or collateral is required under the state guarantee.
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-ink">Hassle-Free Online Process:</strong> SubhChandra Education provides end-to-end guidance for District Registration and Counseling Center (DRCC) verification, bonafide certificates, and timely fee disbursement.
                      </div>
                    </li>

                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mt-4">
                      <h5 className="font-bold text-emerald-950 text-xs sm:text-sm mb-1.5">
                        Key Advantages for Bihar Students:
                      </h5>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-emerald-800">
                        <li>Freedom to choose top NAAC A & A+ universities outside Bihar.</li>
                        <li>Reduced student dropout rates due to financial constraints.</li>
                        <li>Direct laptop and maintenance fund allowance transferred to student bank accounts.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </ul>

              {/* Read More / Read Less Action Button */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                >
                  <span>{isExpanded ? "Read Less..." : "Read More..."}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Apply Under Credit Card
                </button>
              </div>
            </div>

            {/* Right Interactive Credit Card Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200 p-2 flex items-center justify-center">
                <Image
                  src="/puja_assets/frontend/images/credit-card.webp"
                  alt="Bihar Student Credit Card (MNSSBY)"
                  width={600}
                  height={380}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md mt-5 text-center">
                <div className="p-2 sm:p-3 bg-white rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[11px] sm:text-xs font-bold text-ink block">₹4 Lakhs</span>
                  <span className="text-[9px] sm:text-[10px] text-ink-light">Max Loan Limit</span>
                </div>
                <div className="p-2 sm:p-3 bg-white rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[11px] sm:text-xs font-bold text-ink block">1% - 4%</span>
                  <span className="text-[9px] sm:text-[10px] text-ink-light">Simple Interest</span>
                </div>
                <div className="p-2 sm:p-3 bg-white rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[11px] sm:text-xs font-bold text-ink block">Course+1 Yr</span>
                  <span className="text-[9px] sm:text-[10px] text-ink-light">Moratorium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Application Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram="Bihar Student Credit Card (MNSSBY) Guidance"
      />
    </>
  );
}
