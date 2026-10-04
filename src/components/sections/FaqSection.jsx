"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="primary" className="text-xs font-bold uppercase tracking-wider px-3 py-1">
            Got Questions?
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-ink-light">
            Everything students and parents need to know about degrees, counselling, and financial schemes.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-surface transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-700 shrink-0" />
                    <span className="font-semibold text-sm sm:text-base text-ink font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-light leading-relaxed border-t border-gray-100 bg-surface">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
