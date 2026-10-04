"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Trophy,
  Users,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

const REASONS = [
  {
    title: "Awarded by Govt. of Bihar",
    text: "Bihar’s fastest-growing educational consultancy startup, recognized by the state government for ethical admission guidance and student empowerment.",
  },
  {
    title: "Recipient of “Bihar Gaurav Samman” Award",
    text: "Honored with the prestigious “Bihar Gaurav Samman” award by the Dy. Health Minister for exemplary service in higher education awareness.",
  },
  {
    title: "20,000+ Satisfied Admissions",
    text: "Over 20,000 successful admissions completed exclusively in UGC-recognized, NAAC A and NIRF-ranked institutions across India.",
  },
  {
    title: "Exclusive Direct University Tie-ups",
    text: "Direct official authorization with premier private and state universities, ensuring 100% transparent fee structures with zero middleman donation.",
  },
  {
    title: "1 Million+ Digital Reach",
    text: "Dominant digital guidance presence with millions of video views on YouTube and social channels, offering honest college reviews.",
  },
  {
    title: "Complete Support: Admission to Placement",
    text: "We stand with our students throughout their academic journey—from Bihar Student Credit Card approval to corporate placement training.",
  },
];

export function WhyBestInBiharSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            State-Level Credibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
            Why We Are <span className="text-emerald-600">Best in Bihar</span>
          </h2>
          <p className="text-sm text-ink-light mt-1.5">
            A proven record of integrity, state-level awards, and unwavering dedication to student welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content List */}
          <div className="lg:col-span-7 space-y-4">
            {REASONS.map((reason, idx) => (
              <div
                key={reason.title}
                className="p-4 rounded-xl border border-gray-100 bg-surface hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-150 flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-ink">{reason.title}</h4>
                  <p className="text-xs text-ink-light mt-1 leading-relaxed">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Award Graphic Card with Real Photo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden p-4">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <Image
                  src="/puja_assets/frontend/images/award.webp"
                  alt="Bihar Gaurav Samman Award"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="pt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                  Honored State Recognition
                </span>
                <h3 className="text-lg font-black font-heading text-ink">
                  Bihar Gaurav Samman Award
                </h3>
                <p className="text-xs text-ink-light mt-1">
                  Conferred by Dy. Health Minister, Govt. of Bihar, for exceptional services in higher education guidance.
                </p>

                <div className="pt-4 border-t border-gray-100 mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                    <span className="font-black text-emerald-700 text-base block">20,000+</span>
                    <span className="text-[10px] text-gray-600 font-medium">Students Enrolled</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-primary-50 border border-primary-100">
                    <span className="font-black text-primary-700 text-base block">100%</span>
                    <span className="text-[10px] text-gray-600 font-medium">Govt Recognized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
