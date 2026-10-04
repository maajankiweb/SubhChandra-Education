"use client";

import React, { useState, useMemo } from "react";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";
import {
  Search,
  Building2,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  CreditCard,
  MapPin,
  X,
} from "lucide-react";

const SEARCH_DATABASE = [
  // Universities
  {
    type: "university",
    category: "University",
    title: "Marwadi University",
    subtitle: "Rajkot, Gujarat • NAAC A+ Accredited • Highest: ₹14 LPA",
    link: "/universities",
    tags: ["marwadi", "rajkot", "gujarat", "engineering", "bca", "mca", "naac a+"],
  },
  {
    type: "university",
    category: "University",
    title: "Swami Vivekanand Subharti University",
    subtitle: "Meerut, Uttar Pradesh • NAAC A Accredited • UGC, AICTE, DCI, INC",
    link: "/universities",
    tags: ["subharti", "meerut", "up", "medical", "nursing", "bba", "mba", "naac a"],
  },
  {
    type: "university",
    category: "University",
    title: "Suresh Gyan Vihar University",
    subtitle: "Jaipur, Rajasthan • NAAC A+ Accredited • Highest: ₹55 LPA",
    link: "/universities",
    tags: ["gyan vihar", "sgvu", "jaipur", "rajasthan", "btech", "naac a+", "highest package"],
  },
  {
    type: "university",
    category: "University",
    title: "Teerthanker Mahaveer University (TMU)",
    subtitle: "Moradabad, Uttar Pradesh • NAAC A Accredited • 17 LPA Highest",
    link: "/universities",
    tags: ["tmu", "teerthanker", "moradabad", "medical", "dental", "engineering"],
  },
  {
    type: "university",
    category: "University",
    title: "Mangalyatan University",
    subtitle: "Aligarh, Uttar Pradesh • NAAC A+ Accredited • Approved by UGC, BCI, PCI",
    link: "/universities",
    tags: ["mangalyatan", "aligarh", "bba", "bca", "naac a+", "credit card accepted"],
  },

  // Degree Courses
  {
    type: "course",
    category: "UG Degree Course",
    title: "BCA (Bachelor of Computer Applications)",
    subtitle: "3 Years • Software Dev, Cloud, AI & Python • Credit Card Eligible",
    link: "/programs",
    tags: ["bca", "computer", "it", "software", "coding", "ug"],
  },
  {
    type: "course",
    category: "UG Degree Course",
    title: "BBA (Bachelor of Business Administration)",
    subtitle: "3 Years • Management, Digital Marketing, Finance & Sales",
    link: "/programs",
    tags: ["bba", "business", "management", "marketing", "finance", "ug"],
  },
  {
    type: "course",
    category: "UG Degree Course",
    title: "B.Tech (Computer Science & Engineering)",
    subtitle: "4 Years • Full-Stack, AI, Data Science & Cyber Security",
    link: "/programs",
    tags: ["btech", "engineering", "cse", "computer science", "b.tech", "ug"],
  },
  {
    type: "course",
    category: "Healthcare Course",
    title: "B.Sc Nursing & GNM",
    subtitle: "Clinical Training, Hospital Placement, INC Approved",
    link: "/programs",
    tags: ["nursing", "bsc nursing", "gnm", "medical", "hospital", "healthcare"],
  },
  {
    type: "course",
    category: "Pharmacy Course",
    title: "B.Pharma & D.Pharma",
    subtitle: "PCI Approved • Pharmaceutical Chemistry & Clinical Drug Dev",
    link: "/programs",
    tags: ["bpharm", "pharma", "pharmacy", "medicine", "dpharma"],
  },
  {
    type: "course",
    category: "Agriculture Course",
    title: "B.Sc Agriculture (Hons)",
    subtitle: "4 Years • ICAR Recognized • Agronomy, Genetics & Crop Science",
    link: "/programs",
    tags: ["agriculture", "bsc agri", "farming", "icar"],
  },
  {
    type: "course",
    category: "PG Degree Course",
    title: "MBA (Master of Business Administration)",
    subtitle: "2 Years • Dual Specialization • Executive Leadership & Placement",
    link: "/programs",
    tags: ["mba", "post graduate", "masters", "business", "management"],
  },
  {
    type: "course",
    category: "PG Degree Course",
    title: "MCA (Master of Computer Applications)",
    subtitle: "2 Years • Advanced Software Architectures & AI Systems",
    link: "/programs",
    tags: ["mca", "post graduate", "software engineer", "masters"],
  },

  // 10th & 12th Career Guidance
  {
    type: "career",
    category: "Career After 10th",
    title: "Polytechnic Diploma Courses",
    subtitle: "3 Years Technical Engineering Diploma with Direct 2nd Year B.Tech Lateral Entry",
    link: "/programs",
    tags: ["10th", "polytechnic", "diploma", "after 10th", "matric"],
  },
  {
    type: "career",
    category: "Career After 12th",
    title: "Science Stream: PCM vs PCB Guidance",
    subtitle: "Engineering, Medical, Architecture, Pharmacy and Clinical Sciences",
    link: "/programs",
    tags: ["12th", "pcm", "pcb", "science", "intermediate"],
  },
  {
    type: "career",
    category: "Career After 12th",
    title: "Government Job Opportunities After 12th",
    subtitle: "SSC CHSL, Railway Group D/NTPC, Defence (NDA, Navy, Airforce), State Police",
    link: "/programs",
    tags: ["govt jobs", "sarkari", "ssc", "railway", "nda", "defence", "12th"],
  },

  // Financial Aid & Schemes
  {
    type: "scheme",
    category: "Financial Aid",
    title: "Bihar Student Credit Card (MNSSBY)",
    subtitle: "Up to ₹4 Lakh Collateral-Free Loan • 1% Interest for Girls/PWD, 4% for Boys",
    link: "/financial-aid/bihar-student-credit-card",
    tags: ["credit card", "bihar credit card", "mnssby", "education loan", "financial aid", "drcc"],
  },
];

export function LiveSearchModal({ isOpen, onClose, onSelectProgram }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      // return default popular recommendations
      return SEARCH_DATABASE.slice(0, 6);
    }
    const q = searchQuery.toLowerCase().trim();
    return SEARCH_DATABASE.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.includes(q))
    );
  }, [searchQuery]);

  const handleItemClick = (item) => {
    onClose();
    if (onSelectProgram) {
      onSelectProgram(item.title);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" subtitle="">
      <div className="py-2">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
              <Search className="w-5 h-5 text-emerald-600" />
            </span>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Live Search Directory
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink">
                Find Colleges, Courses & Career Pathways
              </h3>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mt-4 mb-4">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-emerald-600" />
          </div>
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type course name, college or location (e.g. BCA, Subharti, Credit Card)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-full border-2 border-emerald-500 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/15 outline-none text-sm sm:text-base text-ink shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-xs text-ink-light font-medium py-1">Popular:</span>
          {["BCA", "B.Tech", "MBA", "Nursing", "Credit Card", "Marwadi Univ", "Subharti Univ"].map(
            (tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchQuery(tag)}
                className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-90 overflow-y-auto space-y-2 pr-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-8 text-ink-light">
              <p className="text-sm font-semibold">No direct match found for &quot;{searchQuery}&quot;</p>
              <p className="text-xs mt-1">
                Try searching for general terms like &quot;Degree&quot;, &quot;Engineering&quot;, or &quot;Medical&quot;.
              </p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              let Icon = GraduationCap;
              if (item.type === "university") Icon = Building2;
              else if (item.type === "scheme") Icon = CreditCard;
              else if (item.type === "career") Icon = BookOpen;

              return (
                <div
                  key={`${item.title}-${index}`}
                  onClick={() => handleItemClick(item)}
                  className="p-3.5 rounded-xl border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-150 cursor-pointer group flex items-center justify-between"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-white text-emerald-700 shrink-0 mt-0.5 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-ink group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-800">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-ink-light mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-gray-100 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-ink-light">
          <span>{filteredResults.length} options found</span>
          <span className="text-[11px] text-emerald-700 font-semibold">
            Click any item to view counselling & admission details
          </span>
        </div>
      </div>
    </Modal>
  );
}
