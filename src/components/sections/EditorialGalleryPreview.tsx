"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS } from "@/data/gallery";

export default function EditorialGalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = GALLERY_ITEMS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic scrolling on its own every 4.0 seconds
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // 3 visible cards on desktop (cycling circularly)
  const visibleDesktopCards = [
    GALLERY_ITEMS[currentIndex % total],
    GALLERY_ITEMS[(currentIndex + 1) % total],
    GALLERY_ITEMS[(currentIndex + 2) % total],
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Work Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Tank Cleaning Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Real before-and-after work on rooftop overhead tanks, underground concrete sumps, and commercial water storage in Chikkadpally, New Nallakunta, and Hyderabad.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous gallery image"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-300 hover:border-sky-600 hover:text-sky-600 text-slate-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next gallery image"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-300 hover:border-sky-600 hover:text-sky-600 text-slate-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MOBILE VIEW: Exactly 1 image at a time with smooth horizontal transition */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {GALLERY_ITEMS.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-0.5">
                  <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-sky-300 border border-slate-700 backdrop-blur-sm">
                      {item.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-base font-bold drop-shadow-sm">{item.title}</h3>
                      <p className="text-xs text-slate-300 mt-0.5">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-Card Responsive Grid with Automatic Smooth Rotation */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {visibleDesktopCards.map((item, idx) => (
            <div
              key={`${item.id}-${currentIndex}-${idx}`}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-sky-300 border border-slate-700 backdrop-blur-sm">
                {item.category}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base font-bold drop-shadow-sm">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicator Dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-6 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* View Full Gallery CTA Button */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
