"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import {
  ChevronRight,
  Share2,
  Calendar,
  GraduationCap,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Building2,
  Award,
} from "lucide-react";
import toast from "react-hot-toast";

const DEFAULT_UNIVERSITIES = [
  {
    name: "Marwadi University",
    href: "/marwadi-university",
    logo: "/uploads/colleges/logo/1739338660.webp",
    rating: "NAAC A+ Accredited",
  },
  {
    name: "Suresh Gyan Vihar University",
    href: "/suresh-gyan-vihar-university",
    logo: "/uploads/colleges/logo/1739338597.webp",
    rating: "NAAC A+ Graded",
  },
  {
    name: "Swami Vivekanand Subharti University",
    href: "/swami-vivekanand-subharti-university",
    logo: "/uploads/colleges/logo/1739338629.webp",
    rating: "UGC & DEB Approved",
  },
  {
    name: "Teerthanker Mahaveer University",
    href: "/teerthanker-mahaveer-university",
    logo: "/uploads/colleges/logo/1739338550.webp",
    rating: "NAAC A Accredited",
  },
  {
    name: "Mangalyatan University",
    href: "/mangalyatan-university",
    logo: "/uploads/colleges/logo/1739338514.webp",
    rating: "UGC Recognised",
  },
];

export function CoursePageTemplate({ pageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
            <p className="text-gray-500 mt-2">The requested course or page could not be located.</p>
            <Link
              href="/"
              className="mt-4 inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm"
            >
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      toast.success("Page link copied to clipboard!");
    }
  };

  const universities =
    pageData.sidebarUniversities && pageData.sidebarUniversities.length > 0
      ? pageData.sidebarUniversities
      : DEFAULT_UNIVERSITIES;

  return (
    <div className="min-h-screen flex flex-col bg-surface-muted" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-4 overflow-x-auto whitespace-nowrap py-1">
            <Link href="/" className="hover:text-emerald-700 transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {pageData.breadcrumbs && pageData.breadcrumbs.length > 1 ? (
              pageData.breadcrumbs.slice(1).map((b, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                  {b.href ? (
                    <Link href={b.href} className="hover:text-emerald-700 transition-colors">
                      {b.text}
                    </Link>
                  ) : (
                    <span className="text-gray-800 font-semibold truncate max-w-xs">{b.text}</span>
                  )}
                </React.Fragment>
              ))
            ) : (
              <span className="text-gray-800 font-semibold truncate max-w-xs">{pageData.h1}</span>
            )}
          </nav>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (8 cols): Article Card */}
            <article className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
              {/* Featured Image */}
              {pageData.featuredImage && (
                <div className="relative w-full aspect-16/8 sm:aspect-video bg-gray-100 overflow-hidden border-b border-gray-100">
                  <Image
                    src={pageData.featuredImage}
                    alt={pageData.h1 || "Course Banner"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                  />
                </div>
              )}

              <div className="p-5 sm:p-8">
                {/* Meta Badge Bar */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-2">
                    {pageData.dateBadge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{pageData.dateBadge}</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span className="capitalize">{pageData.category || "Course"} Guide</span>
                    </span>
                  </div>

                  {/* Share Button */}
                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label="Share this guide"
                    className="p-2 rounded-xl text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 border border-gray-200 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>

                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink leading-tight mb-6">
                  {pageData.h1}
                </h1>

                {/* Rich Content Area */}
                <div
                  className="prose prose-emerald max-w-none text-ink-light text-sm sm:text-base leading-relaxed space-y-4
                    [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-heading [&>h2]:text-ink [&>h2]:mt-8 [&>h2]:mb-3
                    [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-ink [&>h3]:mt-6 [&>h3]:mb-2
                    [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:rounded-xl [&>table]:block [&>table]:overflow-x-auto [&>table]:max-w-full [&>table]:border [&>table]:border-gray-200
                    [&_th]:bg-emerald-50 [&_th]:text-emerald-900 [&_th]:font-bold [&_th]:p-3 [&_th]:text-left [&_th]:border-b [&_th]:border-gray-200 [&_th]:text-xs sm:[&_th]:text-sm [&_th]:whitespace-nowrap
                    [&_td]:p-3 [&_td]:border-b [&_td]:border-gray-100 [&_td]:text-xs sm:[&_td]:text-sm
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5
                    [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5
                    [&>p]:text-justify
                  "
                  dangerouslySetInnerHTML={{ __html: pageData.contentHtml || "" }}
                />

                {/* Bottom Callout Banner */}
                <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-700 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Want expert admission guidance for this program?</h3>
                    <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                      Get full support on eligibility, campus selection, and Bihar Student Credit Card (MNSSBY).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-md shrink-0 cursor-pointer"
                  >
                    Apply for Free Counselling
                  </button>
                </div>
              </div>
            </article>

            {/* Right Column (4 cols): Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Widget 1: Free Counselling CTA Box */}
              <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-ink">Get Free Career Guidance</h3>
                <p className="text-xs text-ink-light mt-1.5 leading-relaxed">
                  Connect directly with our senior educational advisors to secure direct college allotment.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Join Us & Apply Now
                </button>
              </div>

              {/* Widget 2: Top Partner Universities */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100 mb-4">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-sm font-bold text-ink">Top Partner Universities</h3>
                </div>

                <div className="space-y-3.5">
                  {universities.map((uni, idx) => (
                    <Link
                      key={idx}
                      href={uni.href}
                      className="group flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                    >
                      {uni.logo && (
                        <div className="relative w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center p-1">
                          <Image
                            src={uni.logo}
                            alt={uni.name}
                            width={48}
                            height={48}
                            className="object-contain max-h-10"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-ink group-hover:text-emerald-700 truncate transition-colors">
                          {uni.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 truncate mt-0.5">
                          {uni.rating || "UGC & NAAC Approved"}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 3: Bihar Student Credit Card Notice */}
              <div className="bg-linear-to-br from-primary-900 to-primary-800 text-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-accent-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-accent-400">
                    MNSSBY Scheme
                  </h3>
                </div>
                <h4 className="text-sm font-bold text-white">Bihar Student Credit Card (₹4 Lakhs)</h4>
                <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                  100% free guidance and paper verification for all accredited engineering, management, medical & polytechnic courses.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 w-full py-2.5 rounded-xl bg-accent-500 text-ink font-bold text-xs hover:bg-accent-600 transition-colors shadow-xs cursor-pointer"
                >
                  Check Credit Card Eligibility
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating Action Components */}
      <QuickEnquiryFixedButton />
      <StickyCallbackBar />
      <WhatsAppButton />

      {/* Quick Admission Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram={pageData.h1 || "Course Counselling"}
      />
    </div>
  );
}
