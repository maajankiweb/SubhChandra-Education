import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Building2, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "Our Associate Universities - SubhChandra Education",
  description:
    "Top accredited partner universities in India offering engineering, medical, management, and arts programs under Bihar Student Credit Card Scheme.",
};

export default function AssociatesPage() {
  const associates = pagesDatabase["/our-associates"]?.associates || [];

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
            <span className="text-gray-800 font-semibold">Our Associates</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Educational Alliances
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              Our Associate Universities
            </h1>
            <p className="text-sm text-ink-light mt-2">
              We partner with India’s leading UGC, AICTE & NAAC A+ accredited institutions to bring seamless admissions, hostel facilities, and credit card support to students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{item.name}</h3>
                      <span className="text-[11px] text-accent-400 font-semibold">
                        UGC & NAAC Accredited
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-ink-light line-clamp-3 leading-relaxed">{item.desc}</p>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">Admissions 2026-27</span>
                    <Link
                      href={item.href || "/contact-us"}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      Explore & Apply
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
