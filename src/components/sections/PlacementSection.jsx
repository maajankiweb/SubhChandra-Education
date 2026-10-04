"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import {
  Award,
  Building2,
  MapPin,
  GraduationCap,
  PlayCircle,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Siddharth Gupta",
    image: "/puja_assets/uploads/testimonials/1738755236.webp",
    company: "Accenture",
    package: "5 LPA",
    course: "BBA",
    from: "Siwan, Bihar",
    university: "Mangalyatan University",
    initials: "SG",
  },
  {
    name: "Satyam Kumar",
    image: "/puja_assets/uploads/testimonials/1738755173.webp",
    company: "FinancePeer",
    package: "9 LPA",
    course: "B.Tech",
    from: "Patna, Bihar",
    university: "Swami Vivekanand Subharti University",
    initials: "SK",
  },
  {
    name: "Anshika",
    image: "/puja_assets/uploads/testimonials/1738755073.webp",
    company: "Sopra Steria",
    package: "12 LPA",
    course: "B.Tech CSE",
    from: "Gopalganj, Bihar",
    university: "Suresh Gyan Vihar University",
    initials: "AN",
  },
  {
    name: "Vaibhav Tyagi",
    image: "/puja_assets/uploads/testimonials/1738754915.webp",
    company: "Hexaware",
    package: "6 LPA",
    course: "BCA",
    from: "Chapra, Bihar",
    university: "Suresh Gyan Vihar University",
    initials: "VT",
  },
  {
    name: "Ritika Katayal",
    image: "/puja_assets/uploads/testimonials/1738754807.webp",
    company: "Hexaware",
    package: "6 LPA",
    course: "B.Sc CS",
    from: "Jamui, Bihar",
    university: "Suresh Gyan Vihar University",
    initials: "RK",
  },
  {
    name: "Rupesh Kumar",
    image: "/puja_assets/uploads/testimonials/1738754718.webp",
    company: "AgroStar",
    package: "6 LPA",
    course: "B.Sc Agriculture",
    from: "Gaya, Bihar",
    university: "Swami Vivekanand Subharti University",
    initials: "RK",
  },
  {
    name: "Kartiki Mishra",
    image: "/puja_assets/uploads/testimonials/1738754605.webp",
    company: "Elets",
    package: "7 LPA",
    course: "MBA",
    from: "Aurangabad, Bihar",
    university: "Swami Vivekanand Subharti University",
    initials: "KM",
  },
  {
    name: "Vaishnavi Gupta",
    image: "/puja_assets/uploads/testimonials/1738754393.webp",
    company: "RemoteState",
    package: "5 LPA",
    course: "MCA",
    from: "Rohtas, Bihar",
    university: "Suresh Gyan Vihar University",
    initials: "VG",
  },
];

export function PlacementSection() {
  const [activeStudent, setActiveStudent] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCardsCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Get circular slice
  const visibleCards = [];
  for (let i = 0; i < visibleCardsCount; i++) {
    visibleCards.push(TESTIMONIALS[(startIndex + i) % TESTIMONIALS.length]);
  }

  return (
    <>
      <section className="py-12 bg-surface-muted/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Proven Student Success
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              Top Placement <span className="text-emerald-600">Given By Us</span>
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Real students from Siwan, Patna, Gopalganj, Gaya and across Bihar now working at Fortune 500 tech companies and high-growth startups.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous placements"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 text-ink flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next placements"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 text-ink flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((student, idx) => (
              <div
                key={`${student.name}-${idx}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Student Top Header with Real Photo */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm shrink-0 bg-gray-100">
                      <Image
                        src={student.image}
                        alt={`${student.name} - ${student.course} graduate placed at ${student.company}`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-base text-ink">{student.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-ink-light">
                        <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{student.from}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company & Package Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100 mb-3 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-500 font-medium block">Placed At:</span>
                      <strong className="text-ink text-sm font-bold flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                        {student.company}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-medium block">Package:</span>
                      <strong className="text-emerald-700 text-sm font-black flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {student.package}
                      </strong>
                    </div>
                  </div>

                  {/* Course & University */}
                  <div className="space-y-1.5 text-xs text-ink-light pt-1">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>
                        Course: <strong className="text-ink">{student.course}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">
                        University: <strong className="text-ink">{student.university}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meet Student Button */}
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setActiveStudent(student)}
                    className="w-full min-h-10.5 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Meet {student.name} (Interview)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Student Interview Modal */}
      {activeStudent && (
        <Modal
          isOpen={!!activeStudent}
          onClose={() => setActiveStudent(null)}
          title={`Meet ${activeStudent.name}`}
          subtitle={`${activeStudent.course} Graduate • Placed at ${activeStudent.company} (${activeStudent.package})`}
        >
          <div className="py-2 text-center space-y-4">
            {/* Embedded 16:9 Guidance / Interview Preview */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oEQ96sMGUYc?autoplay=1&mute=1"
                title={`${activeStudent.name} Student Placement Story`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl text-left border border-emerald-100">
              <h5 className="font-bold text-sm text-emerald-950 mb-1">
                Student Journey from {activeStudent.from}
              </h5>
              <p className="text-xs text-emerald-800 leading-relaxed">
                &ldquo;SubhChandra Education guided me from day one of my {activeStudent.course} admission at{" "}
                {activeStudent.university}, facilitated my Bihar Student Credit Card loan, and provided corporate interview training that helped me crack {activeStudent.company} at {activeStudent.package}.&rdquo;
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
