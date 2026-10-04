"use client";

import React, { useState } from "react";
import { Phone, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Modal } from "@/components/ui/Modal";
import { LeadForm } from "@/components/forms/LeadForm";

export function StickyCallbackBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-3 py-2 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 h-11 bg-primary-700 text-white rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm active:bg-primary-800"
        >
          <Phone className="w-4 h-4 text-accent-500" />
          <span>Call Helpline</span>
        </a>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex-1 h-11 bg-accent-500 text-ink rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm active:bg-accent-600 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-ink" />
          <span>Free Counselling</span>
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Free Career Counselling"
        subtitle="Our expert academic advisor will call you to discuss courses, colleges, and scholarships."
      >
        <LeadForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
