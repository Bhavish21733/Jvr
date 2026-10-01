"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Clock, MapPin, Building, PhoneCall } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function TrustRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic smooth continuous scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.8; // Smooth reading speed

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // When scrolled past half of the duplicate content, reset back seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const items = (
    <>
      {/* Trust 1: Google Reviews */}
      <a
        href={BUSINESS_DATA.reviews.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 text-xs sm:text-sm transition-all group"
      >
        <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
        <span className="font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
          {BUSINESS_DATA.reviews.count} Google Reviews (5.0 ★)
        </span>
      </a>

      <span className="text-slate-700 flex-shrink-0">•</span>

      {/* Trust 2: Hours */}
      <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm">
        <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="font-semibold text-slate-200">
          Open 24 Hours / 7 Days
        </span>
      </div>

      <span className="text-slate-700 flex-shrink-0">•</span>

      {/* Trust 3: Location */}
      <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm">
        <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
        <span className="font-semibold text-slate-200">
          Lane 3, Chikkadpally, Hyderabad
        </span>
      </div>

      <span className="text-slate-700 flex-shrink-0">•</span>

      {/* Trust 4: Service Scope */}
      <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm">
        <Building className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="font-semibold text-slate-200">
          Residential &amp; Commercial Tanks
        </span>
      </div>

      <span className="text-slate-700 flex-shrink-0">•</span>

      {/* Trust 5: Direct Phone */}
      <a
        href={BUSINESS_DATA.phone.href}
        className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-sky-600/70 hover:bg-sky-900 text-xs sm:text-sm text-sky-300 hover:text-white transition-all shadow-sm"
      >
        <PhoneCall className="w-4 h-4 text-sky-400 animate-pulse shrink-0" />
        <span className="font-bold text-white">
          Call {BUSINESS_DATA.phone.display}
        </span>
      </a>

      <span className="text-slate-700 flex-shrink-0">•</span>
    </>
  );

  return (
    <div
      className="bg-slate-950 text-white border-y border-slate-800/80 py-3 sm:py-3.5 relative z-20 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto relative px-2 sm:px-4">
        {/* Soft Left & Right Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Seamless Continuous Auto-Scrolling Rail */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {items}
          {items}
        </div>
      </div>
    </div>
  );
}
