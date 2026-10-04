"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Newspaper, ExternalLink, ChevronRight, Eye } from "lucide-react";

const PRESS_ITEMS = [
  {
    id: 1,
    publication: "Hindustan",
    publicationHindi: "हिन्दुस्तान",
    image: "/puja_assets/uploads/press-release/1738673237.webp",
    headline: "बिहार के विद्यार्थियों के लिए उच्च शिक्षा की राह आसान बना रहा शुभचंद्र एजुकेशन",
    date: "14 February 2025",
    color: "from-red-600 to-red-800",
    snippet:
      "बिहार स्टूडेंट क्रेडिट कार्ड योजना के माध्यम से ग्रामीण और दूरदराज के क्षेत्रों से आने वाले मेधावी छात्रों को देश के शीर्ष नैक ए+ विश्वविद्यालयों में बिना किसी अग्रिम फीस के प्रवेश दिलाने में महत्वपूर्ण भूमिका निभा रहा है।",
  },
  {
    id: 2,
    publication: "Prabhat Khabar",
    publicationHindi: "प्रभात खबर",
    image: "/puja_assets/uploads/press-release/1738671762.webp",
    headline: "स्टूडेंट क्रेडिट कार्ड योजना के तहत मान्यता प्राप्त विश्वविद्यालयों में पारदर्शी दाखिला",
    date: "28 January 2025",
    color: "from-blue-600 to-blue-800",
    snippet:
      "काउंसलिंग के माध्यम से 20 हजार से अधिक युवाओं को इंजीनियरिंग, नर्सिंग और मैनेजमेंट जैसे रोजगारोन्मुखी पाठ्यक्रमों में मार्गदर्शन प्रदान किया गया।",
  },
  {
    id: 3,
    publication: "Dainik Bhaskar",
    publicationHindi: "दैनिक भास्कर",
    image: "/puja_assets/uploads/press-release/1738671745.webp",
    headline: "बिना किसी डोनेशन और बिचौलिए के सही कॉलेज चयन की अनूठी पहल",
    date: "10 December 2024",
    color: "from-amber-600 to-orange-700",
    snippet:
      "उप स्वास्थ्य मंत्री द्वारा शिक्षा क्षेत्र में उत्कृष्ट योगदान के लिए 'बिहार गौरव सम्मान' से सम्मानित किया गया।",
  },
  {
    id: 4,
    publication: "Hindustan Express",
    publicationHindi: "हिन्दुस्तान लाइव",
    image: "/puja_assets/uploads/press-release/1738671331.webp",
    headline: "तकनीकी और मेडिकल डिग्री पाठ्यक्रमों में बिहार के मेधावियों का बढ़ा दबदबा",
    date: "05 November 2024",
    color: "from-emerald-700 to-teal-800",
    snippet:
      "मल्टीनेशनल कंपनियों जैसे एक्सेंचर, हेक्सावेयर और सोप्रा स्टेरिया में 12 लाख तक के पैकेज पर छात्रों का चयन।",
  },
];

export function PressReleaseSection() {
  const [activePressModal, setActivePressModal] = useState(null);
  const [isSeeAllModalOpen, setIsSeeAllModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Media Mentions & News
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-2">
              Press <span className="text-emerald-600">Release</span>
            </h2>
            <p className="text-sm text-ink-light mt-1.5">
              Read what prominent newspapers and media organizations are reporting about SubhChandra Education&apos;s impact.
            </p>
          </div>

          {/* Press Cards Grid matching pujaeducation.com */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePressModal(item)}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-200 p-4 flex flex-col justify-between cursor-pointer group h-full"
              >
                <div>
                  {/* Real Newspaper Clipping Thumbnail */}
                  <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-3 bg-gray-100 border border-gray-200">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                      {item.publicationHindi}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-gray-400 block mb-1">
                    {item.date}
                  </span>

                  <h4 className="font-heading font-bold text-xs sm:text-sm text-ink group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                    {item.headline}
                  </h4>
                </div>

                <div className="pt-3 border-t border-gray-100 mt-3 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span className="inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    Read Article
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setIsSeeAllModalOpen(true)}
              className="px-6 py-2.5 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs inline-flex items-center gap-1.5"
            >
              <span>See More Press Releases</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Single Article Modal */}
      {activePressModal && (
        <Modal
          isOpen={!!activePressModal}
          onClose={() => setActivePressModal(null)}
          title={activePressModal.publication}
          subtitle={`Published on ${activePressModal.date}`}
        >
          <div className="space-y-4 py-2">
            <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200 max-h-95">
              <Image
                src={activePressModal.image}
                alt={activePressModal.headline}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-heading font-bold text-base sm:text-lg text-ink leading-snug">
              {activePressModal.headline}
            </h3>

            <p className="text-xs sm:text-sm text-ink-light leading-relaxed p-4 bg-gray-50 rounded-xl border border-gray-200">
              {activePressModal.snippet}
            </p>

            <p className="text-[11px] text-gray-500 text-center">
              Source: {activePressModal.publication} Daily Bihar Edition. All copyrights belong to the respective publication.
            </p>
          </div>
        </Modal>
      )}

      {/* See All Press Modal */}
      {isSeeAllModalOpen && (
        <Modal
          isOpen={isSeeAllModalOpen}
          onClose={() => setIsSeeAllModalOpen(false)}
          title="Complete Press & Media Archive"
          subtitle="Articles and coverage regarding SubhChandra Education"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 max-h-105 overflow-y-auto pr-1">
            {PRESS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden mb-2 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-emerald-700">{item.publication}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>
                <h5 className="font-semibold text-xs text-ink line-clamp-2">{item.headline}</h5>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}
