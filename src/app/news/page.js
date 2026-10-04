import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Newspaper, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Latest Education News | SubhChandra Education",
  description: "Breaking updates on university admissions, exam dates, syllabus updates, and government scholarship notifications.",
};

const NEWS_ARTICLES = [
  {
    title: "Bihar Board 12th Exam 2026: Complete Details, Schedule & Career Guidance",
    href: "/news/url",
    img: "/uploads/news/images/1738562831.webp",
    date: "Feb 03, 2026",
    desc: "Complete insights on Bihar Board intermediate examinations, preparation strategies, and top degree programs available for Science, Commerce, and Arts graduates under MNSSBY.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-muted" suppressHydrationWarning>
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-800 font-semibold">News</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Press & Bulletins
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              Education Bulletins & Notifications
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Timely announcements regarding university admissions, Bihar Student Credit Card policy updates, and exam results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((item, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-ink group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      <Link href={item.href}>{item.title}</Link>
                    </h2>
                    <p className="text-xs text-ink-light line-clamp-3 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">Official Release</span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 hover:underline"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
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
