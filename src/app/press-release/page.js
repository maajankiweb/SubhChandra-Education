"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Eye, X, Newspaper } from "lucide-react";
import pagesDatabase from "@/data/pages_database.json";

export default function PressReleasePage() {
  const [selectedClipping, setSelectedClipping] = useState(null);
  const pressItems = pagesDatabase["/press-release"]?.pressItems || [
    { img: "/uploads/press-release/1738673237.webp", paper: "हिन्दुस्तान (Hindustan Live)" },
    { img: "/uploads/press-release/1738671762.webp", paper: "प्रभात खबर (Prabhat Khabar)" },
    { img: "/uploads/press-release/1738671745.webp", paper: "दैनिक भास्कर (Dainik Bhaskar)" },
    { img: "/uploads/press-release/1738671331.webp", paper: "हिन्दुस्तान एक्सप्रेस (Hindustan Express)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface-muted" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-800 font-semibold">Press Release</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Media & Press Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              In The Headlines & Daily News
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Read what Hindustan, Prabhat Khabar, and Dainik Bhaskar publish about SubhChandra Education’s student guidance and Bihar Gaurav Samman award recognition.
            </p>
          </div>

          {/* Newspaper Clippings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pressItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedClipping(item)}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 aspect-4/3 bg-gray-900 cursor-pointer border border-gray-100 flex flex-col justify-between"
              >
                <Image
                  src={item.img}
                  alt={item.paper}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-bold">
                    {item.paper}
                  </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-semibold">Click to view clipping</span>
                    <Eye className="w-4 h-4 text-accent-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Full Clipping Lightbox Modal */}
      {selectedClipping && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedClipping(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedClipping(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full aspect-16/11 rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedClipping.img}
              alt={selectedClipping.paper}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <Footer />
      <QuickEnquiryFixedButton />
      <StickyCallbackBar />
      <WhatsAppButton />
    </div>
  );
}
