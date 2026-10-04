import React from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { QuickEnquiryFixedButton } from "@/components/navigation/QuickEnquiryFixedButton";
import { StickyCallbackBar } from "@/components/navigation/StickyCallbackBar";
import { WhatsAppButton } from "@/components/navigation/WhatsAppButton";
import { LeadForm } from "@/components/forms/LeadForm";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ChevronRight,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Contact Us & Regional Offices | SubhChandra Education",
  description:
    "Get in touch with SubhChandra Education counsellors in Patna, West Champaran, Muzaffarpur, Sasaram, and Noida. Book free in-person career counselling.",
};

const BRANCHES = [
  {
    city: "Patna (Head Office)",
    address: "3rd Floor, Grand Plaza, Fraser Road, Near Dak Bungalow Crossing, Patna, Bihar - 800001",
    phone: "+91 91559 99988",
    email: "patna@subhchandra.com",
  },
  {
    city: "West Champaran",
    address: "SubhChandra Educational Hub, Main Road, Bettiah, West Champaran, Bihar - 845438",
    phone: "+91 91559 99988",
    email: "champaran@subhchandra.com",
  },
  {
    city: "Muzaffarpur",
    address: "2nd Floor, Mithila Complex, Club Road, Muzaffarpur, Bihar - 842002",
    phone: "+91 91559 99988",
    email: "muzaffarpur@subhchandra.com",
  },
  {
    city: "Sasaram (Rohtas)",
    address: "GT Road, Near Post Office Chowk, Sasaram, Rohtas, Bihar - 821115",
    phone: "+91 91559 99988",
    email: "sasaram@subhchandra.com",
  },
  {
    city: "Noida Regional Office I",
    address: "Sector 62, Electronic City, Near Metro Station, Noida, Uttar Pradesh - 201309",
    phone: "+91 91559 99988",
    email: "noida@subhchandra.com",
  },
  {
    city: "Noida Corporate Office II",
    address: "Knowledge Park III, Institutional Area, Greater Noida, UP - 201310",
    phone: "+91 91559 99988",
    email: "greater.noida@subhchandra.com",
  },
];

export default function ContactUsPage() {
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
            <span className="text-gray-800 font-semibold">Contact Us</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-ink mt-2">
              We Are Here to Guide Your Career
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Visit our counseling branches across Bihar and Delhi NCR, or send us a message to schedule your 1-on-1 career consultation.
            </p>
          </div>

          {/* Contact Details & Inquiry Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left Column (5 cols): Quick Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-6">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-emerald-600" />
                  <span>Direct Helpdesk Lines</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Student Toll-Free Helpline</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-sm font-bold text-ink hover:text-emerald-700"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Official Admissions Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm font-bold text-ink hover:text-emerald-700"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Office Working Hours</p>
                      <p className="text-sm font-semibold text-ink">
                        Monday - Saturday: 9:30 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bihar Student Credit Card Notice */}
              <div className="bg-linear-to-br from-primary-900 to-primary-800 text-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-accent-400" />
                  <span className="text-xs font-bold text-accent-400 uppercase tracking-wider">
                    Walk-in Verification Camp
                  </span>
                </div>
                <h4 className="text-sm font-bold">Free Document Pre-Verification</h4>
                <p className="text-xs text-white/80 mt-1 leading-relaxed">
                  Bring your 10th/12th marksheet, Aadhaar card, and residence certificate to any SubhChandra office for instant credit card eligibility check.
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Consultation Request Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="text-xl font-bold text-ink mb-1">Send a Message</h3>
              <p className="text-xs text-ink-light mb-6">
                Fill out the form below and an academic counsellor will call you back within 15 minutes.
              </p>
              <LeadForm source="Contact Us Page" />
            </div>
          </div>

          {/* Regional Branches Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-ink font-heading text-center mb-8">
              Our Centers Across Bihar & Delhi NCR
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANCHES.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <h4 className="text-sm font-bold text-ink">{b.city}</h4>
                    </div>
                    <p className="text-xs text-ink-light leading-relaxed flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <a
                      href={`tel:${b.phone}`}
                      className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>{b.phone}</span>
                    </a>
                    <span className="text-[11px] text-gray-400">Open 6 Days</span>
                  </div>
                </div>
              ))}
            </div>
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
