"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CollegeFinderModal } from "@/components/forms/CollegeFinderModal";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { SITE_CONFIG } from "@/lib/constants";
import {
  PhoneCall,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Calculator,
  Compass,
  FileText,
  HelpCircle,
  ShieldCheck,
  Building2,
  BookOpen,
  Camera,
  Newspaper,
  Award,
} from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollegeFinderOpen, setIsCollegeFinderOpen] = useState(false);
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. TOP ADVISORY STRIP: Strictly 1 Single Clean Line       */}
      {/* ========================================================= */}
      <div className="bg-primary-900 text-white text-[11px] sm:text-xs h-7 sm:h-8 px-3 sm:px-6 flex items-center border-b border-primary-800/80 select-none">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-2 overflow-hidden">
          {/* Left: Admissions Announcement */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="bg-accent-500 text-ink text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.2 rounded-full uppercase tracking-wider whitespace-nowrap">
              Admissions 2026-27 Open
            </span>
            <span className="hidden md:inline text-white/80 font-medium truncate">
              • Direct UGC & NAAC A+ Admissions & Bihar Student Credit Card (MNSSBY)
            </span>
          </div>

          {/* Right: Single-Line Helpline & Centers */}
          <div className="flex items-center gap-3 font-semibold text-primary-100 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 hover:text-accent-400 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3 h-3 text-accent-400" />
              <span>Helpline: {SITE_CONFIG.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <Link
              href="/contact-us"
              className="hidden lg:inline hover:text-accent-400 transition-colors text-white/80"
            >
              Patna, Siwan, Rohtas & Noida Centers
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN STICKY NAVBAR: Single Line, Mobile-First Design   */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-18 flex items-center justify-between gap-2 sm:gap-4">
          {/* BRAND LOGO: 2 Stacked Lines matching user requirement */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 group select-none"
            aria-label="SubhChandra Education Home"
          >
            {/* Emblem Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
              <div className="relative flex items-center justify-center">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-400" />
              </div>
            </div>

            {/* Brand Title: 2 Stacked Lines */}
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[15px] sm:text-lg lg:text-xl font-black font-heading tracking-tight text-emerald-700 leading-none">
                SubhChandra
              </span>
              <span className="text-[11px] sm:text-xs lg:text-sm font-black font-heading tracking-wider text-red-600 leading-none mt-0.5 sm:mt-1">
                Education
              </span>
            </div>
          </Link>

          {/* ======================================================= */}
          {/* DESKTOP NAVIGATION LINKS                                */}
          {/* ======================================================= */}
          <nav className="hidden xl:flex items-center gap-5 whitespace-nowrap">
            <Link
              href="/"
              className="text-xs font-bold text-ink hover:text-emerald-700 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-xs font-bold text-ink hover:text-emerald-700 transition-colors"
            >
              About
            </Link>

            {/* Dropdown: Courses by Stream */}
            <div className="relative group">
              <button
                type="button"
                className="text-xs font-bold text-ink group-hover:text-emerald-700 transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 hidden group-hover:block transition-all duration-150 animate-fadeIn z-50">
                <Link
                  href="/tenth/about-tenth"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>After 10th (Matriculation)</span>
                </Link>
                <Link
                  href="/twelve/about-tevelve"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>After 12th (Intermediate)</span>
                </Link>
                <Link
                  href="/ug/about-ug"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Undergraduate (UG Degrees)</span>
                </Link>
                <Link
                  href="/pg/about-postgraduate-courses"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Postgraduate (PG Masters)</span>
                </Link>
              </div>
            </div>

            {/* Dropdown: Colleges & Partners */}
            <div className="relative group">
              <button
                type="button"
                className="text-xs font-bold text-ink group-hover:text-emerald-700 transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>Colleges</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-gray-100 p-2 hidden group-hover:block transition-all duration-150 animate-fadeIn z-50">
                <Link
                  href="/our-associates"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Our Associate Universities</span>
                </Link>
                <Link
                  href="/private-naac-and-above-colleges"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NAAC A & Above Colleges</span>
                </Link>
                <Link
                  href="/colleges"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Colleges Directory</span>
                </Link>
              </div>
            </div>

            {/* Dropdown: Media & Updates */}
            <div className="relative group">
              <button
                type="button"
                className="text-xs font-bold text-ink group-hover:text-emerald-700 transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>Media</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 p-2 hidden group-hover:block transition-all duration-150 animate-fadeIn z-50">
                <Link
                  href="/blogs"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Career Blogs</span>
                </Link>
                <Link
                  href="/news"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Education News</span>
                </Link>
                <Link
                  href="/gallery"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Photo Gallery</span>
                </Link>
                <Link
                  href="/press-release"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-ink hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                >
                  <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Press Releases</span>
                </Link>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="text-xs font-bold text-ink hover:text-emerald-700 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* ======================================================= */}
          {/* RIGHT ACTION BUTTONS                                    */}
          {/* ======================================================= */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* AI-Powered College Finder Button */}
            <button
              type="button"
              onClick={() => setIsCollegeFinderOpen(true)}
              className="px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-emerald-500 bg-linear-to-r from-emerald-50 to-teal-50 hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center gap-1 cursor-pointer text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold whitespace-nowrap shadow-2xs"
            >
              <span>⚡</span>
              <span className="hidden sm:inline bg-linear-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent font-black">
                AI-Powered
              </span>
              <span>🤖</span>
              <span className="hidden min-[380px]:inline bg-linear-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent font-black">
                College&nbsp;
              </span>
              <span className="bg-linear-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent font-black">
                Finder
              </span>
            </button>

            {/* Quick Call Icon (Visible on 400px+ up to sm) */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              aria-label="Call helpline"
              className="hidden min-[420px]:flex sm:hidden p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors items-center justify-center shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle (Mobile & Tablet XL) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. MOBILE MENU SLIDE-DOWN DRAWER                          */}
        {/* ========================================================= */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
            {/* Mobile AI College Finder Button */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCollegeFinderOpen(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-center font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>⚡</span>
              <span className="text-amber-600 font-black">AI-Powered</span>
              <span>🤖</span>
              <span className="text-emerald-800 font-black">College Finder</span>
            </button>

            {/* Mobile Nav Links List */}
            <div className="flex flex-col space-y-0.5 divide-y divide-gray-100">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              {/* Mobile Courses Accordion */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown("courses")}
                  className="w-full py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Courses by Stream</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openMobileDropdown === "courses" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "courses" && (
                  <div className="pl-3 py-1 space-y-1 bg-gray-50/80 rounded-xl my-1 text-xs">
                    <Link
                      href="/tenth/about-tenth"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      After 10th (Matriculation)
                    </Link>
                    <Link
                      href="/twelve/about-tevelve"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      After 12th (Intermediate / +2)
                    </Link>
                    <Link
                      href="/ug/about-ug"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Undergraduate (UG Degrees)
                    </Link>
                    <Link
                      href="/pg/about-postgraduate-courses"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Postgraduate (PG Masters)
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Colleges Accordion */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown("colleges")}
                  className="w-full py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Colleges & Universities</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openMobileDropdown === "colleges" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "colleges" && (
                  <div className="pl-3 py-1 space-y-1 bg-gray-50/80 rounded-xl my-1 text-xs">
                    <Link
                      href="/our-associates"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Our Associate Universities
                    </Link>
                    <Link
                      href="/private-naac-and-above-colleges"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      NAAC A & Above Colleges
                    </Link>
                    <Link
                      href="/colleges"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Colleges Directory
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Media Accordion */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown("media")}
                  className="w-full py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Media & Updates</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openMobileDropdown === "media" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "media" && (
                  <div className="pl-3 py-1 space-y-1 bg-gray-50/80 rounded-xl my-1 text-xs">
                    <Link
                      href="/blogs"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Career Blogs
                    </Link>
                    <Link
                      href="/news"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Education News
                    </Link>
                    <Link
                      href="/gallery"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Photo Gallery
                    </Link>
                    <Link
                      href="/press-release"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-ink-light hover:text-emerald-700 font-medium"
                    >
                      Press Releases
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-xs font-bold text-ink hover:text-emerald-700 flex items-center justify-between"
              >
                <span>Contact & Regional Centers</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            {/* Mobile Call CTA Button */}
            {/* <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuickEnquiryOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                Book Free Counselling Call
              </button>
            </div> */}
          </div>
        )}
      </header>

      {/* AI College Finder Multi-Step Modal */}
      <CollegeFinderModal
        isOpen={isCollegeFinderOpen}
        onClose={() => setIsCollegeFinderOpen(false)}
      />

      {/* Quick Admission Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isQuickEnquiryOpen}
        onClose={() => setIsQuickEnquiryOpen(false)}
      />
    </>
  );
}
