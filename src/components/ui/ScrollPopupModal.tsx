"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  Sparkles,
  Droplet,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

const SERVICE_OPTIONS = [
  "Residential Overhead Tank Cleaning",
  "Underground Sump Cleaning",
  "Overhead Tank + Sump Combo",
  "Sintex / Plastic Tank Cleaning",
  "Commercial Water Tank Cleaning",
  "Apartment / Community Storage",
];

export default function ScrollPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const triggeredRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
  });

  useEffect(() => {
    // Reset trigger when on new page
    triggeredRef.current = false;

    const checkScroll = () => {
      if (triggeredRef.current || isDismissed) return;

      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 100) return;

      const scrollPercent = (scrollTop / scrollHeight) * 100;

      // STRICT CONDITION: Trigger popup ONLY when user has actively scrolled down at least 30%
      if (scrollPercent >= 30) {
        triggeredRef.current = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Direct dispatch to WhatsApp
    const message = `Hi JVR Water Tank Cleaning,\n\nI would like to request an instant quote.\n*Name:* ${formData.name.trim()}\n*Phone:* ${formData.phone.trim()}\n*Service:* ${formData.service}\n*Location:* Chikkadpally, Hyderabad`;
    const waUrl = `https://wa.me/91${BUSINESS_DATA.phone.raw}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-200"
      onClick={handleClose}
    >
      {/* V-Shaped Form Funnel Container */}
      <div
        className="relative w-full max-w-md bg-slate-900 text-white rounded-3xl overflow-hidden border border-sky-500/40 shadow-2xl shadow-black/80 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative V-Cut Header */}
        <div className="relative bg-gradient-to-b from-sky-600 via-sky-700 to-slate-900 pt-6 pb-4 px-6 text-center overflow-hidden">
          {/* Subtle Water Shimmer Effect */}
          <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 z-10 cursor-pointer"
            aria-label="Close quote popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* V-Header Badge & Icon */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-950/70 text-sky-200 border border-sky-400/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>24/7 Instant Quote</span>
          </div>

          <h2 id="popup-title" className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
            Book Your Tank Cleaning
          </h2>
          <p className="text-xs text-sky-100 mt-1">
            Chikkadpally &amp; Hyderabad • Deep sludge extraction &amp; sanitization
          </p>

          {/* V-Shape Decorative Downward Pointer */}
          <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[14px] border-t-sky-700 mx-auto mt-3 drop-shadow-md" />
        </div>

        {/* Form Body */}
        <div className="p-6 pt-2 space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Quote Request Received!</h3>
              <p className="text-xs text-slate-300">
                Opening WhatsApp to connect with our Chikkadpally team. We will respond within 5 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Field 1: Name */}
              <div className="space-y-1">
                <label htmlFor="popup-name" className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  <span>Full Name</span>
                </label>
                <input
                  id="popup-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar / Sai Towers"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
              </div>

              {/* Field 2: Mobile Number */}
              <div className="space-y-1">
                <label htmlFor="popup-phone" className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Mobile Number</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    id="popup-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="91217 27674"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Field 3: Services Dropdown */}
              <div className="space-y-1">
                <label htmlFor="popup-service" className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-sky-400" />
                  <span>Select Service</span>
                </label>
                <div className="relative">
                  <select
                    id="popup-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full appearance-none px-3.5 py-2.5 pr-9 rounded-xl bg-slate-950/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* V-Shape Pointing CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-sky-600/40 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Get Free Quote Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Call / Close Option */}
              <div className="pt-1 text-center">
                <a
                  href={BUSINESS_DATA.phone.href}
                  className="text-[11px] text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Or call directly:</span>
                  <span className="font-bold text-white underline decoration-sky-400">
                    {BUSINESS_DATA.phone.display}
                  </span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
