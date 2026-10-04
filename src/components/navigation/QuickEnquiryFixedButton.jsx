"use client";

import React, { useState } from "react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { Sparkles, MessageSquare } from "lucide-react";

export function QuickEnquiryFixedButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-3.5 rounded-l-xl shadow-2xl flex items-center gap-2 -rotate-90 origin-bottom-right translate-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-0 tracking-wider uppercase border border-white/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-400 rotate-90" />
          <span>Quick Enquiry</span>
        </button>
      </div>

      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram="Floating Quick Enquiry"
      />
    </>
  );
}
