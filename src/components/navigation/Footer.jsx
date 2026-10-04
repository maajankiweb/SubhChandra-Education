import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Building,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-12 sm:pt-16 pb-20 md:pb-12 border-t-4 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid matching pujaeducation.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-primary-700">
          {/* Brand & Mission Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-700 to-primary-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-bold font-heading text-white leading-none">SubhChandra</span>
                <span className="text-sm font-bold font-heading text-accent-500 tracking-wider leading-none mt-1">Education</span>
              </div>
            </div>
            <p className="text-xs text-primary-50/80 leading-relaxed">
              Empowering students in Bihar, Uttar Pradesh, and across India with honest career counselling, UGC-recognized online & regular degree selection, and Bihar Student Credit Card guidance.
            </p>
            <div className="flex items-center gap-2 text-xs text-accent-500 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span>Free, Unbiased Student Guidance</span>
            </div>
          </div>

          {/* Popular Degree Programs */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-500 font-heading">
              Popular Programs
            </h3>
            <ul className="space-y-2 text-xs text-primary-50/90">
              <li>
                <Link href="/programs#bca" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Bachelor of Computer Applications (BCA)</span>
                </Link>
              </li>
              <li>
                <Link href="/ug/master-of-business-administration" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Master of Business Administration (MBA)</span>
                </Link>
              </li>
              <li>
                <Link href="/twelve/bachelor-of-technology" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>B.Tech (Computer Science & AI)</span>
                </Link>
              </li>
              <li>
                <Link href="/twelve/bsc-nursing" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>B.Sc Nursing & GNM</span>
                </Link>
              </li>
              <li>
                <Link href="/twelve/bachelors-of-business-administration" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Bachelor of Business Administration (BBA)</span>
                </Link>
              </li>
              <li>
                <Link href="/twelve/bachelor-of-pharmacy" className="hover:text-accent-500 transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>B.Pharma (Bachelor of Pharmacy)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help & Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-500 font-heading">
              Quick Links & Resources
            </h3>
            <ul className="space-y-2 text-xs text-primary-50/90">
              <li>
                <Link href="/our-associates" className="hover:text-accent-500 transition-colors">
                  Our Associate Universities
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-accent-500 transition-colors">
                  Top Colleges Across India
                </Link>
              </li>
              <li>
                <Link href="/private-naac-and-above-colleges" className="hover:text-accent-500 transition-colors">
                  NAAC A & Above Colleges
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent-500 transition-colors">
                  Photo Gallery & Events
                </Link>
              </li>
              <li>
                <Link href="/press-release" className="hover:text-accent-500 transition-colors">
                  Press Releases & Media
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-accent-500 transition-colors">
                  Career Counseling Blogs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent-500 transition-colors">
                  Education News & Bulletins
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-accent-500 transition-colors">
                  Branch Offices & Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition" className="hover:text-accent-500 transition-colors text-white/60">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & Map */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-500 font-heading">
              Follow Us & Location
            </h3>
            {/* Social Links */}
            <div className="flex items-center gap-2 pb-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-primary-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-primary-800 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-lg bg-primary-800 hover:bg-black flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-primary-800 hover:bg-[#E4405F] flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-primary-800 hover:bg-[#FF0000] flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Embedded Mini Map for Patna Head Office */}
            <div className="rounded-xl overflow-hidden border border-primary-700 h-28 w-full bg-primary-950">
              <iframe
                title="SubhChandra Head Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107234676!2d85.07849965!3d25.608175599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f21!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Our Offices matching pujaeducation.com full branch directory */}
        <div className="py-8 border-b border-primary-700">
          <p className="text-sm font-bold text-accent-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Building className="w-4 h-4" />
            <span>Our Offices & Physical Counseling Centers:</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs text-primary-50/80">
            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">Head Office (Patna)</h4>
              <p className="text-[11px] leading-relaxed">
                E-211, Road No 2, Backside of Ruban Hospital, Patliputra Colony, Patna - 800013
              </p>
            </div>

            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">West Champaran</h4>
              <p className="text-[11px] leading-relaxed">
                Supriya Cinema Rd, In Front of Wholesale Market, Kamalnath Nagar, Bettiah - 845438
              </p>
            </div>

            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">Muzaffarpur</h4>
              <p className="text-[11px] leading-relaxed">
                Puran Chhapra Parisar, 1st Floor Above Dr. Indira Clinic, Chakkar Chowk, Muzaffarpur - 842001
              </p>
            </div>

            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">Sasaram / Rohtas</h4>
              <p className="text-[11px] leading-relaxed">
                Opposite Monte Carlo, Near Rajendra Vidyalaya, Gaulaxmi, Sasaram, Rohtas - 821115
              </p>
            </div>

            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">Noida (Branch - I)</h4>
              <p className="text-[11px] leading-relaxed">
                A 24, Near City Center Metro Station, A Block, Sector 50, Noida, UP - 201303
              </p>
            </div>

            <div className="p-3 bg-primary-800/60 rounded-xl border border-primary-700">
              <h4 className="font-bold text-white mb-1">Noida (Branch - II)</h4>
              <p className="text-[11px] leading-relaxed">
                C-3, 4th Floor, Sector 3, Gautam Buddha Nagar, Noida, Uttar Pradesh – 201301
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Disclaimer Banner (PRD Requirement) */}
        <div className="mt-8 p-4 rounded-xl bg-primary-800/80 border border-primary-700 text-xs text-primary-50/90 leading-relaxed">
          <p className="font-semibold text-white mb-1">
            Important Statutory & University Partner Disclaimer:
          </p>
          <p>
            SubhChandra Education is an independent educational counselling and information guidance portal managed by SubhChandra Welfare Foundation. SubhChandra Education does not award degrees, diplomas, or certificates directly. All academic programs, admissions, and degree certifications are granted strictly by respective UGC, AICTE, AIU, and INC recognized partner universities upon fulfillment of curriculum criteria. We assist students with verified course details, career matching, and financial aid documentation (including the Bihar Student Credit Card Scheme).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-50/60 gap-4">
          <p suppressHydrationWarning>
            Copyright © 2026 SubhChandra Education. All Rights Reserved. MANAGED BY SUBHCHANDRA WELFARE FOUNDATION.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms-and-condition" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/terms-and-condition" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
