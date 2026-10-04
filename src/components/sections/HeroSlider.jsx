"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  CreditCard,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";
import { LiveSearchModal } from "@/components/forms/LiveSearchModal";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

const SLIDES = [
  {
    id: 1,
    desktopImage: "/puja_assets/uploads/banner/1746700743.webp",
    mobileImage: "/puja_assets/uploads/banner-phone/1746700194.webp",
    alt: "Sahi Course Sahi University Toh Sahi Package - SubhChandra Education",
    tag: "Admissions 2026-27 Open",
    title: "Sahi Course • Sahi University • Sahi Package",
    programQuery: "BCA / MBA / B.Tech",
  },
  {
    id: 2,
    desktopImage: "/puja_assets/uploads/banner/1746704780.webp",
    mobileImage: "/puja_assets/uploads/banner-phone/1746688712.webp",
    alt: "Bihar Student Credit Card (MNSSBY) Guidance - SubhChandra Education",
    tag: "Govt. of Bihar MNSSBY Scheme",
    title: "Bihar Student Credit Card (MNSSBY) Guidance",
    programQuery: "Bihar Credit Card",
  },
  {
    id: 3,
    desktopImage: "/images/hero-banner-1.png",
    mobileImage: "/images/hero-banner-1.png",
    alt: "45+ Top UGC & NAAC A+ Accredited Universities - SubhChandra Education",
    tag: "Top Partner Universities",
    title: "45+ UGC & NAAC A+ Accredited Campuses Across India",
    programQuery: "Engineering / Management",
  },
  {
    id: 4,
    desktopImage: "/puja_assets/uploads/banner/1746700743.webp",
    mobileImage: "/puja_assets/uploads/banner-phone/1746700194.webp",
    alt: "100% Verified Placements & Career Counselling - SubhChandra Education",
    tag: "Trusted by 50,000+ Students",
    title: "100% Verified Admissions & Corporate Placements",
    programQuery: "Nursing & Pharmacy",
  },
];

const QUICK_TAGS = [
  "BCA",
  "MBA",
  "B.Tech",
  "B.Sc Nursing",
  "B.Pharma",
  "BBA",
  "Bihar Credit Card Colleges",
];

const TRUST_PILLARS = [
  {
    icon: GraduationCap,
    label: "45+ Top Universities",
    desc: "UGC & NAAC A+ Accredited",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: CreditCard,
    label: "Bihar Credit Card",
    desc: "Up to ₹4 Lakhs 0% Stress",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Building2,
    label: "100% Verified Admissions",
    desc: "Direct Campus Allotment",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Award,
    label: "50,000+ Students Guided",
    desc: "Bihar Gaurav Samman Award",
    color: "text-purple-600 bg-purple-50",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  // Touch swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-play timer (4.5s)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleSlideClick = (slide) => {
    setSelectedProgram(slide.programQuery || "General Counselling");
    setIsEnquiryModalOpen(true);
  };

  const handleSelectProgramFromSearch = (program) => {
    setSelectedProgram(program);
    setIsEnquiryModalOpen(true);
  };

  return (
    <>
      <section className="relative w-full pb-6 sm:pb-10">
        {/* ========================================================= */}
        {/* 1. HERO CAROUSEL: Full Width Edge-to-Edge Display         */}
        {/* ========================================================= */}
        <div
          className="relative w-full overflow-hidden bg-gray-950 group select-none shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track with Smooth Transform */}
          <div
            className="flex transition-transform duration-500 ease-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full shrink-0 relative cursor-pointer"
                onClick={() => handleSlideClick(slide)}
              >
                {/* Mobile View: Dedicated Phone Banner (504x358 ratio) */}
                <div className="relative w-full aspect-504/358 sm:hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={slide.mobileImage}
                    alt={slide.alt}
                    width={504}
                    height={358}
                    priority={idx === 0}
                    className="w-full h-full object-cover pointer-events-none"
                    sizes="100vw"
                  />
                  <div className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{slide.tag}</span>
                  </div>
                </div>

                {/* Desktop & Tablet View: Dedicated Banner (1400x400 / 3.5:1 ratio) */}
                <div className="relative w-full aspect-1400/400 hidden sm:flex bg-gray-100 items-center justify-center">
                  <Image
                    src={slide.desktopImage}
                    alt={slide.alt}
                    width={1400}
                    height={400}
                    priority={idx === 0}
                    className="w-full h-full object-cover pointer-events-none"
                    sizes="100vw"
                  />
                  <div className="absolute top-3 sm:top-4 left-4 sm:left-6 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Compact Live Search Bar DIRECTLY ON TOP OF THE BANNER IMAGE */}
          <div className="absolute z-30 bottom-[13%] min-[480px]:bottom-[16%] sm:bottom-[32%] left-1/2 sm:left-[34%] -translate-x-1/2 w-[92%] sm:w-auto sm:min-w-80 md:min-w-95 max-w-xs sm:max-w-md px-1 sm:px-0">
            <div
              onClick={() => setIsSearchModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsSearchModalOpen(true);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Search colleges and courses"
              className="bg-white/95 backdrop-blur-md rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-xl hover:shadow-emerald-500/20 border border-emerald-500/80 hover:border-emerald-600 transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 group transform hover:scale-[1.01]"
            >
              <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <input
                type="text"
                readOnly
                placeholder="Search colleges & courses..."
                className="w-full bg-transparent text-ink placeholder:text-gray-500 text-[11px] sm:text-xs md:text-sm font-medium outline-none cursor-pointer"
              />
              <span className="hidden sm:inline-flex px-3 sm:px-3.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shrink-0 transition-colors shadow-sm">
                Search
              </span>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Slide"
            className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8.5 h-8.5 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Slide"
            className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8.5 h-8.5 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* 4-Slide Indicator Dots (Bottom Center) */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentSlide
                    ? "w-5 sm:w-7 h-1.5 sm:h-2 bg-emerald-400 shadow-sm"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/90"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter (Top Right) */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 px-2 sm:px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-white/90 border border-white/10">
            {currentSlide + 1} / {SLIDES.length}
          </div>
        </div>

        {/* 2. TAGS & VALUE PILLARS (Centered Max Width Container) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Popular Search Tags Bar */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-500">
            <span className="font-bold text-gray-700">🔥 Popular:</span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedProgram(tag);
                  setIsSearchModalOpen(true);
                }}
                className="px-2.5 py-0.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer border border-gray-200 shadow-xs font-medium"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* ========================================================= */}
          {/* 3. TRUST PILLARS STRIP: 4 Core Value Propositions         */}
          {/* ========================================================= */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2.5 sm:gap-3.5"
                >
                  <div className={`p-2.5 sm:p-3 rounded-xl shrink-0 ${pillar.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-ink leading-tight truncate">
                      {pillar.label}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 truncate mt-0.5">
                      {pillar.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Search Modal */}
      <LiveSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProgram={handleSelectProgramFromSearch}
      />

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialProgram={selectedProgram}
      />
    </>
  );
}
