"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { MAIN_NAV_LINKS } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white border-b ${
          scrolled
            ? "border-slate-200/90 shadow-md bg-white/95 backdrop-blur-md"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Business Logo Image (Click to Home) */}
            <Link
              href="/"
              className="flex items-center my-auto group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none ring-0 border-none cursor-pointer select-none py-1"
              aria-label="JVR Water Tank Cleaning Services Home"
            >
              <div className="relative h-10 sm:h-12 lg:h-13 w-44 sm:w-52 lg:w-56">
                <Image
                  src="/images/logo-header.png"
                  alt="JVR Water Tank Cleaning Services"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 210px, 230px"
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1.5" aria-label="Main Navigation">
              {MAIN_NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                      active
                        ? "text-sky-700 bg-sky-50 font-bold border border-sky-200/80 shadow-xs"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action Group */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_DATA.phone.href}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors duration-150 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>Call Now</span>
              </a>

              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all duration-150 shadow-md shadow-sky-600/20 hover:scale-[1.02]"
              >
                Book a Tank Cleaning
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors cursor-pointer"
                aria-expanded={isOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Left-Side Sliding Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Panel Sliding from Left */}
        <div
          className={`fixed top-0 left-0 bottom-0 z-50 w-[84vw] max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Top Header with Logo & Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-1 cursor-pointer"
                aria-label="JVR Water Tank Cleaning Services Home"
              >
                <div className="relative h-9 w-40">
                  <Image
                    src="/images/logo-header.png"
                    alt="JVR Water Tank Cleaning Services"
                    fill
                    priority
                    unoptimized
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Standard Nav Links List */}
            <nav className="p-4 space-y-1" aria-label="Mobile Navigation">
              {MAIN_NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-semibold transition-colors rounded-xl ${
                      active
                        ? "text-sky-700 bg-sky-50 font-bold"
                        : "text-slate-800 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Bottom Actions & Direct Booking */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-3">
            {/* Primary Booking CTA */}
            <Link
              href="/contact/"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all text-center"
            >
              <span>Book a Tank Cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Call & WhatsApp Quick Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_DATA.phone.href}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-xs shadow-xs hover:bg-slate-100 transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Call Us</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_DATA.phone.raw}?text=${encodeURIComponent("Hi JVR Water Tank Cleaning, I would like to enquire about water tank cleaning services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Operating Info */}
            <div className="pt-1 text-center">
              <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Open 24 Hours • Lane 3, Chikkadpally</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
