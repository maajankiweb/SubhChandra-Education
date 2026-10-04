import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { ChevronRight, Calendar, ArrowRight, BookOpen } from "lucide-react";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "Career & Education Blogs | SubhChandra Education",
  description:
    "Expert career advice, course eligibility, syllabi, fee structures, and scholarship insights for students and parents.",
};

export default function BlogsPage() {
  const blogList = pagesDatabase["/blogs"]?.blogList || [];

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
            <span className="text-gray-800 font-semibold">Blogs</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              Career & Higher Education Guides
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Stay informed with in-depth articles on engineering, management, medical courses, entrance exams, and Bihar Student Credit Card eligibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogList.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {post.img && (
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        <span>{post.date || "Oct 2026"}</span>
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-ink group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <p className="text-xs text-ink-light line-clamp-3 mt-2 leading-relaxed">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">Detailed Guide</span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 hover:underline"
                    >
                      <span>Read More</span>
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
