"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import {
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "/puja_assets/uploads/gallery/1746858142.webp",
    title: "Bihar Higher Education Mega Seminar",
    desc: "Over 2,500 students and parents participated in Patna for university and career counseling.",
    category: "Annual Seminar",
  },
  {
    id: 2,
    image: "/puja_assets/uploads/gallery/1746858606.webp",
    title: "Student Credit Card Awareness Drive",
    desc: "District-level workshops explaining MNSSBY benefits, DRCC verification, and course eligibility.",
    category: "Welfare Workshop",
  },
  {
    id: 3,
    image: "/puja_assets/uploads/gallery/1746857457.webp",
    title: "Top Placement Felicitation Ceremony",
    desc: "Honoring students from Siwan, Patna, Gaya & Muzaffarpur placed in leading corporate companies.",
    category: "Placement Conclave",
  },
  {
    id: 4,
    image: "/puja_assets/uploads/gallery/1746857679.webp",
    title: "Partner University MoUs & Campus Tours",
    desc: "Direct academic tie-ups with NAAC A+ universities to guarantee verified seats and zero donation.",
    category: "Campus Visit",
  },
  {
    id: 5,
    image: "/puja_assets/uploads/gallery/1739533276.webp",
    title: "Counseling & Mentorship Conclave",
    desc: "1-on-1 mentorship for Bihar youth pursuing B.Tech, BCA, Nursing and Management programs.",
    category: "Mentorship Drive",
  },
  {
    id: 6,
    image: "/puja_assets/uploads/gallery/1739533261.webp",
    title: "State Level Education Excellence Conclave",
    desc: "Convening academic leaders and university vice-chancellors for student development.",
    category: "Excellence Summit",
  },
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Moments & Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink">
                From The <span className="text-emerald-600">Gallery</span>
              </h2>
              <p className="text-sm text-ink-light leading-relaxed text-justify">
                Step into the world of inspiration and learning with a glimpse of our journey at SubhChandra Education. Our gallery showcases the highlights of impactful career seminars, counseling drives, and transformative campus orientations across Bihar and Eastern UP. Peek into how our team connects with students, educators, and university leaders to shape meaningful, successful futures.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <span className="text-lg font-black text-emerald-700 block">50+</span>
                  <span className="text-[10px] text-ink-light">District Seminars</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <span className="text-lg font-black text-primary-700 block">20K+</span>
                  <span className="text-[10px] text-ink-light">Students Guided</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <span className="text-lg font-black text-accent-500 block">100%</span>
                  <span className="text-[10px] text-ink-light">Genuine Support</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs inline-flex items-center gap-1.5 mt-2"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Show More Events</span>
                </button>
              </div>
            </div>

            {/* Right Carousel Column */}
            <div className="md:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 flex items-center bg-gray-900">
                {GALLERY_ITEMS.map((item, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-bold text-emerald-300">
                          <Users className="w-3.5 h-3.5" />
                          <span>{item.category}</span>
                        </div>

                        <div className="relative z-10">
                          <h4 className="text-lg sm:text-xl font-bold font-heading mb-1 text-white drop-shadow-md">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {GALLERY_ITEMS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === currentSlide ? "w-6 bg-emerald-400" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <Modal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        title="SubhChandra Education Gallery & Events"
        subtitle="Highlights from career counseling workshops, university MoUs, and campus events"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 max-h-105 overflow-y-auto pr-1">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white flex flex-col"
            >
              <div className="relative aspect-16/10 w-full bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {item.category}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-ink mb-1">{item.title}</h5>
                  <p className="text-xs text-ink-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
