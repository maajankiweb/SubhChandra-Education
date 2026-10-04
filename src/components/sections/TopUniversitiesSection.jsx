"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import {
  Building2,
  MapPin,
  Award,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  ChevronRight,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const UNIVERSITIES_DATA = [
  {
    id: "marwadi",
    name: "Marwadi University",
    image: "/puja_assets/uploads/colleges/images/1739338660.webp",
    location: "Rajkot, Gujarat",
    accreditation: "NAAC A+",
    approvals: "AICTE, NBA, UGC",
    highestPackage: "₹14,00,000 CTC",
    avgPackage: "₹8,00,000 CTC",
    accentColor: "from-emerald-700 to-teal-900",
    description:
      "A premier technical university in Gujarat known for modern high-tech research labs, engineering excellence, and international academic collaborations.",
    popularCourses: ["B.Tech CSE", "BCA", "MBA", "MCA", "B.Pharm"],
  },
  {
    id: "subharti",
    name: "Swami Vivekanand Subharti University",
    image: "/puja_assets/uploads/colleges/images/1739353984.webp",
    location: "Meerut, Uttar Pradesh",
    accreditation: "NAAC A",
    approvals: "AICTE, AIU, DCI, INC, NCTE, PCI, UGC",
    highestPackage: "₹10,00,000 CTC",
    avgPackage: "₹5,00,000 CTC",
    accentColor: "from-primary-700 to-teal-800",
    description:
      "Sprawling 250+ acre campus offering multi-disciplinary programs in medicine, nursing, dental sciences, engineering, and management.",
    popularCourses: ["B.Sc Nursing", "GNM", "BBA", "MBA", "B.Tech"],
  },
  {
    id: "gyan_vihar",
    name: "Suresh Gyan Vihar University",
    image: "/puja_assets/uploads/colleges/images/1739338597.webp",
    location: "Jaipur, Rajasthan",
    accreditation: "NAAC A+",
    approvals: "AICTE, AIU, BCI, ICAR, NCTE, PCI, UGC",
    highestPackage: "₹55,00,000 CTC",
    avgPackage: "₹6,00,000 CTC",
    accentColor: "from-teal-800 to-emerald-900",
    description:
      "First private university in Rajasthan awarded NAAC A+ accreditation, renowned for record-breaking placement offers and ICAR agriculture programs.",
    popularCourses: ["B.Tech (AI & ML)", "B.Sc Agriculture", "BCA", "MBA"],
  },
  {
    id: "tmu",
    name: "Teerthanker Mahaveer University",
    image: "/puja_assets/uploads/colleges/images/1739338550.webp",
    location: "Moradabad, Uttar Pradesh",
    accreditation: "NAAC A",
    approvals: "AICTE, DCI, ICAR, MCI, NCTE, PCI, UGC",
    highestPackage: "₹17,00,000 CTC",
    avgPackage: "₹8,00,000 CTC",
    accentColor: "from-emerald-800 to-primary-900",
    description:
      "Major educational conglomerate offering over 150+ programs with world-class medical hospital training and industry-sponsored labs.",
    popularCourses: ["Medical", "Dental", "B.Tech CSE", "B.Pharm", "BHMCT"],
  },
  {
    id: "mangalyatan",
    name: "Mangalyatan University",
    image: "/puja_assets/uploads/colleges/images/1739338514.webp",
    location: "Aligarh, Uttar Pradesh",
    accreditation: "NAAC A+",
    approvals: "AICTE, AIU, BCI, NCTE, PCI, UGC",
    highestPackage: "₹10–19 LPA CTC",
    avgPackage: "₹2.5–6 LPA CTC",
    accentColor: "from-primary-900 to-teal-900",
    description:
      "UGC-recognized university focusing on values-based education, extensive scholarship schemes, and Bihar Student Credit Card eligibility.",
    popularCourses: ["BBA", "BCA", "BA LLB", "B.Sc Agriculture", "MBA"],
  },
];

export function TopUniversitiesSection() {
  const [selectedUniversityForEnquiry, setSelectedUniversityForEnquiry] = useState("");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [activeDetailsUniversity, setActiveDetailsUniversity] = useState(null);

  const handleApply = (uniName) => {
    setSelectedUniversityForEnquiry(uniName);
    setIsEnquiryModalOpen(true);
  };

  const handleKnowMore = (uni) => {
    setActiveDetailsUniversity(uni);
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Verified Higher Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              Unlock Excellence with <span className="text-emerald-600">Top Universities</span>
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Direct admission & counselling for India&apos;s leading NAAC A & A+ accredited institutions accepting Bihar Student Credit Card.
            </p>
          </div>

          {/* Universities Grid matching pujaeducation.com card structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSITIES_DATA.map((uni) => (
              <div
                key={uni.id}
                className="bg-surface rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Card Title Banner with Real Campus Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-gray-900">
                    <Image
                      src={uni.image}
                      alt={`${uni.name} campus building - ${uni.accreditation} accredited in ${uni.location}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent p-4 flex flex-col justify-end text-white">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-heading font-black text-base sm:text-lg text-white leading-tight drop-shadow-md">
                            {uni.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-white/90 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                            <span>{uni.location}</span>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-xs font-bold text-white border border-emerald-400/40 shrink-0 shadow-sm">
                          {uni.accreditation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-500 font-medium">Approvals: </span>
                        <span className="font-semibold text-ink">{uni.approvals}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                      <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100">
                        <span className="text-[10px] text-emerald-800 font-medium block">
                          Highest Package
                        </span>
                        <span className="text-sm font-bold text-emerald-700">
                          {uni.highestPackage}
                        </span>
                      </div>
                      <div className="p-2.5 bg-primary-50/70 rounded-xl border border-primary-100">
                        <span className="text-[10px] text-primary-800 font-medium block">
                          Average Package
                        </span>
                        <span className="text-sm font-bold text-primary-700">
                          {uni.avgPackage}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-gray-500 block mb-1.5">
                        Key Degrees:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {uni.popularCourses.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-ink-light border border-gray-200"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons: Apply Now & Know More */}
                <div className="p-4 bg-gray-50/80 border-t border-gray-100 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleApply(uni.name)}
                    className="w-full min-h-10 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Apply Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleKnowMore(uni)}
                    className="w-full min-h-10 py-2.5 px-3 rounded-xl bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 text-ink font-semibold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Know More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => handleApply("Top NAAC Partner Universities")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>See All Partner Universities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* University Details Modal ("Know More") */}
      {activeDetailsUniversity && (
        <Modal
          isOpen={!!activeDetailsUniversity}
          onClose={() => setActiveDetailsUniversity(null)}
          title={activeDetailsUniversity.name}
          subtitle={`${activeDetailsUniversity.location} • ${activeDetailsUniversity.accreditation} Accredited`}
        >
          <div className="space-y-4 py-2 text-xs sm:text-sm text-ink leading-relaxed">
            <p className="text-ink-light">{activeDetailsUniversity.description}</p>

            <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <div>
                <span className="text-xs text-gray-500 font-medium block">Highest CTC:</span>
                <span className="text-base font-bold text-emerald-700">
                  {activeDetailsUniversity.highestPackage}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium block">Average CTC:</span>
                <span className="text-base font-bold text-primary-700">
                  {activeDetailsUniversity.avgPackage}
                </span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-xs font-bold text-emerald-950 block mb-1">
                Approvals & Accreditations:
              </span>
              <p className="text-xs text-emerald-800 font-medium">
                {activeDetailsUniversity.approvals}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-ink-light">
                Bihar Student Credit Card (MNSSBY) Accepted
              </span>
              <button
                type="button"
                onClick={() => {
                  const uni = activeDetailsUniversity.name;
                  setActiveDetailsUniversity(null);
                  handleApply(uni);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-sm text-center"
              >
                Apply for {activeDetailsUniversity.name}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Quick Enquiry Modal with preselected university */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialUniversity={selectedUniversityForEnquiry}
      />
    </>
  );
}
