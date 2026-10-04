import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Building2, MapPin, Sparkles, Award } from "lucide-react";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "Top Universities in India - 2026 Admissions | SubhChandra Education",
  description:
    "Explore premier UGC and NAAC A+ accredited partner universities. Complete guidance on courses, eligibility, and Bihar Student Credit Card Scheme.",
};

const UNIVERSITIES = [
  {
    name: "Marwadi University",
    slug: "/marwadi-university",
    location: "Rajkot, Gujarat",
    badge: "NAAC A+ Graded",
    image: "/uploads/colleges/images/1739338660.webp",
    logo: "/uploads/colleges/logo/1739338660.webp",
    desc: "Established in 2016, Marwadi University is authorized by AICTE, PCI, BCI, and UGC, offering industry-aligned engineering, management, and pharmacy degrees.",
  },
  {
    name: "Swami Vivekanand Subharti University",
    slug: "/swami-vivekanand-subharti-university",
    location: "Meerut, Uttar Pradesh",
    badge: "NAAC A Accredited",
    image: "/uploads/colleges/images/1739338629.webp",
    logo: "/uploads/colleges/logo/1739338629.webp",
    desc: "A multidisciplinary university offering medicine, engineering, law, journalism, and management programs with world-class faculty and campus.",
  },
  {
    name: "Suresh Gyan Vihar University",
    slug: "/suresh-gyan-vihar-university",
    location: "Jaipur, Rajasthan",
    badge: "NAAC A+ (Score 3.32)",
    image: "/uploads/colleges/images/1739338597.webp",
    logo: "/uploads/colleges/logo/1739338597.webp",
    desc: "State private university pioneering research, entrepreneurship, and specialized degree programs in engineering, agriculture, and business.",
  },
  {
    name: "Teerthanker Mahaveer University",
    slug: "/teerthanker-mahaveer-university",
    location: "Moradabad, Uttar Pradesh",
    badge: "12-B Status by UGC",
    image: "/uploads/colleges/images/1739338550.webp",
    logo: "/uploads/colleges/logo/1739338550.webp",
    desc: "Top private institution with recognized medical college, super-specialty hospital, engineering institutes, and high corporate placement rates.",
  },
  {
    name: "Mangalyatan University",
    slug: "/mangalyatan-university",
    location: "Aligarh, Uttar Pradesh",
    badge: "NAAC A+ Accredited",
    image: "/uploads/colleges/images/1739338514.webp",
    logo: "/uploads/colleges/logo/1739338514.webp",
    desc: "Over 70+ acres campus delivering excellence in engineering, pharmacy, visual arts, and professional diploma studies.",
  },
  {
    name: "Maharishi Markandeshwar University",
    slug: "/maharishi-markandeshwar-university",
    location: "Mullana, Ambala",
    badge: "QS Ranked & NAAC A++",
    image: "/uploads/colleges/images/1739338443.webp",
    logo: "/uploads/colleges/logo/1739338443.webp",
    desc: "Premier university known for its premier medical sciences institute, hotel management, and high-tech research centers.",
  },
  {
    name: "Vivekanand Global University",
    slug: "/vivekanand-global-university",
    location: "Jaipur, Rajasthan",
    badge: "NAAC A+ Accredited",
    image: "/uploads/colleges/images/1739338411.webp",
    logo: "/uploads/colleges/logo/1739338411.webp",
    desc: "Excellence in robotics, AI, design, hospitality, and legal studies with international student exchange partnerships.",
  },
  {
    name: "Jagannath University",
    slug: "/jagannath-university",
    location: "Jaipur, Rajasthan",
    badge: "UGC Approved",
    image: "/uploads/colleges/images/1739338377.webp",
    logo: "/uploads/colleges/logo/1739338377.webp",
    desc: "Prominent institution offering professional programs in law, management, engineering, and computer applications.",
  },
];

export default function CollegesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-muted" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-800 font-semibold">Colleges</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Top Higher Education Institutions
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              Discover Top Partner Universities
            </h1>
            <p className="text-sm text-ink-light mt-2">
              All partner colleges are recognized by UGC, NAAC, AICTE, and eligible under the Bihar Student Credit Card scheme (MNSSBY).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500 text-white">
                        {uni.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 leading-snug">{uni.name}</h3>
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-accent-400" />
                        <span>{uni.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-ink-light line-clamp-3 leading-relaxed">{uni.desc}</p>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">Bihar Credit Card ✓</span>
                    <Link
                      href={uni.slug}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      View Details & Apply
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <QuickEnquiryFixedButton />
      <StickyCallbackBar />
      <WhatsAppButton />
    </div>
  );
}
