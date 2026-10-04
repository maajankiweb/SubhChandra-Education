import React from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { EducationStageCards } from "@/components/sections/EducationStageCards";
import { TopUniversitiesSection } from "@/components/sections/TopUniversitiesSection";
import { BiharCreditCardSection } from "@/components/sections/BiharCreditCardSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PlacementSection } from "@/components/sections/PlacementSection";
import { WhyBestInBiharSection } from "@/components/sections/WhyBestInBiharSection";
import { PressReleaseSection } from "@/components/sections/PressReleaseSection";
import { VideoCallSection } from "@/components/sections/VideoCallSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { FAQS } from "@/lib/constants";

export const metadata = {
  title: "SubhChandra Education - Right Course. Right Career. | Top Colleges & Bihar Student Credit Card",
  description:
    "Apply online to top UGC & NAAC accredited universities across India. Complete guidance for BCA, MBA, B.Tech, Nursing, Pharmacy and Bihar Student Credit Card Scheme (MNSSBY).",
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface" suppressHydrationWarning>
      {/* FAQ Schema for Search Engines (SSR Server Component) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Top Bar & Navigation with AI-Powered College Finder */}
      <Header />

      {/* Main Page Sections in exact sequence of pujaeducation.com */}
      <main className="flex-1">
        {/* 2. Hero Carousel Banner & Floating Live Search Bar */}
        <HeroSlider />

        {/* 3. Class Area / Education Stage Cards (10th, 12th, UG, PG) with Action Modals */}
        <EducationStageCards />

        {/* 4. Unlock Excellence with Top Universities (Marwadi, Subharti, Gyan Vihar, TMU, Mangalyatan) */}
        <TopUniversitiesSection />

        {/* 5. About Bihar Student Credit Card (MNSSBY) with Read More/Less & 3D Card Graphic */}
        <BiharCreditCardSection />

        {/* 6. From The Gallery (Events, Seminars, Counseling Workshops) */}
        <GallerySection />

        {/* 7. Top Placement Given By Us (Student Success Testimonials & Video Interviews) */}
        <PlacementSection />

        {/* 8. Why We Are Best in Bihar (Bihar Gaurav Samman Award & Milestones) */}
        <WhyBestInBiharSection />

        {/* 9. Press Release (Hindustan, Prabhat Khabar, Dainik Bhaskar) */}
        <PressReleaseSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Video Guidance & Pulsing Radar Wave Counsellor Call Action */}
        <VideoCallSection />
      </main>

      {/* 12. Rich Multi-Column Footer with 6 Branch Offices & Map */}
      <Footer />

      {/* Floating Action Elements */}
      <QuickEnquiryFixedButton />
      <StickyCallbackBar />
      <WhatsAppButton />
    </div>
  );
}
