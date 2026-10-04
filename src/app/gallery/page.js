"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Eye, X, Camera } from "lucide-react";
import pagesDatabase from "@/data/pages_database.json";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryItems = [
    { img: "/uploads/gallery/1746858142.webp", alt: "Annual Career Counselling & Degree Seminar" },
    { img: "/uploads/gallery/1746858606.webp", alt: "Bihar Student Credit Card Awareness Workshop" },
    { img: "/uploads/gallery/1746857457.webp", alt: "Top Placement Felicitation Ceremony" },
    { img: "/uploads/gallery/1746857679.webp", alt: "Partner University MoUs & Campus Tours" },
    { img: "/uploads/gallery/1739533276.webp", alt: "1-on-1 Student Career Mentorship Conclave" },
    { img: "/uploads/gallery/1739533261.webp", alt: "State Level Education Excellence Summit" },
    { img: "/uploads/gallery/1738747675.webp", alt: "Parents & Candidate Admission Advisory Camp" },
    { img: "/uploads/gallery/1746857785.webp", alt: "Direct University Seat Allocation Drive" },
    { img: "/uploads/gallery/1738747635.webp", alt: "Higher Education Guidance Keynote Session" },
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
            <span className="text-gray-800 font-semibold">Gallery</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Life at SubhChandra
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              Photo Gallery & Event Moments
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Highlights from our annual student felicitation ceremonies, career conclaves, campus visits, and counselling workshops.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 aspect-4/3 bg-gray-900 cursor-pointer border border-gray-100"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{item.alt}</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full aspect-16/10 rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.img}
              alt={selectedImage.alt}
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
