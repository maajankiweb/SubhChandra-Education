"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello SubhChandra Education, I would like to enquire about degree admissions and Bihar Student Credit Card guidance."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with education counsellor on WhatsApp"
      className="fixed bottom-18 md:bottom-6 right-5 z-40 w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 group"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="sr-only">Chat on WhatsApp</span>

      {/* Tooltip on hover */}
      <span className="absolute right-15 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block">
        Chat with Expert Counsellor
      </span>
    </a>
  );
}
