"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  Droplet,
  Clock,
  Home,
  ShieldCheck,
  Sparkles,
  Images,
  BookOpen,
  PhoneCall,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { MAIN_NAV_LINKS } from "@/data/navigation";

const MOBILE_NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    desc: "Overview & quick services",
    icon: Home,
  },
  {
    label: "About",
    href: "/about/",
    desc: "Our experience & 5.0★ rating",
    icon: ShieldCheck,
  },
  {
    label: "Services",
    href: "/services/",
    desc: "Overhead, Sump & Sintex cleaning",
    icon: Sparkles,
  },
  {
    label: "Gallery",
    href: "/gallery/",
    desc: "Real job & equipment photos",
    icon: Images,
  },
  {
    label: "Blog",
    href: "/blog/",
    desc: "Water hygiene guides & tips",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "/contact/",
    desc: "Quotes & 24/7 service booking",
    icon: PhoneCall,
  },
];

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

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="w-6 h-6 text-sky-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Navigation Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Items List with Rich Icons & Subtitles */}
            <div className="p-3.5 space-y-1">
              {MOBILE_NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center justify-between p-3 rounded-2xl transition-all duration-150 ${
                      active
                        ? "bg-sky-50 border border-sky-200/90 shadow-xs"
                        : "hover:bg-slate-50 border border-transparent active:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          active
                            ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                            : "bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-700"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`text-sm font-bold tracking-tight leading-tight ${
                            active ? "text-sky-950 font-extrabold" : "text-slate-800 group-hover:text-sky-700"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal truncate">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {active ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-600 text-white shadow-xs">
                          Active
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTAs & Direct Actions */}
            <div className="p-4 pt-3 border-t border-slate-100 bg-slate-50/70 space-y-2.5">
              {/* Primary Button */}
              <Link
                href="/contact/"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/25 transition-all text-center"
              >
                <span>Book Free Tank Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Row: Call & WhatsApp */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_DATA.phone.href}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-extrabold text-xs shadow-xs hover:bg-slate-100 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600 animate-pulse shrink-0" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/91${BUSINESS_DATA.phone.raw}?text=${encodeURIComponent("Hi JVR Water Tank Cleaning, I would like to enquire about water tank cleaning services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Bottom Operating Hours Notice */}
              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Open 24 Hours • Lane 3, Chikkadpally</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
