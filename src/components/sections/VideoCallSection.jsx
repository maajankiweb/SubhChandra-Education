"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { PhoneCall, Play, Sparkles } from "lucide-react";

export function VideoCallSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Video Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              Watch How We Guide Students to Success
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Learn about top university accreditations, campus selection tips, and the complete Bihar Student Credit Card loan procedure.
            </p>
          </div>

          {/* YouTube Video Player (Responsive 16:9) */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-black aspect-video mb-12">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oEQ96sMGUYc?mute=1"
              title="SubhChandra Education Career Guidance & Bihar Student Credit Card Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="flex justify-center items-center">
            <div
              onClick={() => setIsModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsModalOpen(true);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Request free 1-on-1 career counsellor call"
              className="group relative inline-flex items-center gap-3.5 sm:gap-5 px-5 sm:px-8 py-3.5 sm:py-5 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl hover:shadow-2xl hover:border-emerald-600 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 max-w-full"
            >
              {/* Radar Wave Animation Container */}
              <div className="relative flex items-center justify-center">
                {/* Expanding Waves */}
                <span className="absolute w-14 h-14 rounded-full bg-emerald-500/20 animate-ping" />
                <span className="absolute w-20 h-20 rounded-full bg-emerald-500/10 animate-pulse" />

                {/* Phone Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform p-3">
                  <Image
                    src="/puja_assets/frontend/images/phone-call.png"
                    alt="Counsellor Call"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain animate-bounce"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                  Free 1-on-1 Advisory
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-ink group-hover:text-emerald-700 transition-colors">
                  Counsellor Call
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram="Counsellor Direct Call Request"
      />
    </>
  );
}
