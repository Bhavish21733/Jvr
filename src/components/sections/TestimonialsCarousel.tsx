"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "K. Srinivas Rao",
    role: "Homeowner",
    location: "Chikkadpally",
    rating: 5,
    date: "Verified Review",
    service: "Underground Sump & Overhead",
    quote:
      "Exceptional service for our underground sump and 2 overhead tanks in Chikkadpally. They cleared years of bottom silt and scrubbed the walls spotless without dirtying our premises. Highly recommend!",
  },
  {
    id: 2,
    name: "Venkatesh Murthy",
    role: "Apartment Secretary",
    location: "New Nallakunta",
    rating: 5,
    date: "Verified Review",
    service: "Multi-Tank Apartment Cleaning",
    quote:
      "We manage a 16-flat residential apartment in New Nallakunta. JVR Water Tank Cleaning completed the entire multi-tank cleaning on schedule with complete de-sludging and zero water wastage.",
  },
  {
    id: 3,
    name: "P. Lakshmi",
    role: "Villa Owner",
    location: "Vidyanagar",
    rating: 5,
    date: "Verified Review",
    service: "Rooftop Sintex Tank",
    quote:
      "Called them for urgent cleaning of our rooftop Sintex tanks. They arrived promptly, extracted heavy silt from our borewell line, and the water was crystal clear. 24/7 service is very helpful.",
  },
  {
    id: 4,
    name: "Mohammed Imran",
    role: "Facility Manager",
    location: "Himayatnagar",
    rating: 5,
    date: "Verified Review",
    service: "Commercial Water Storage",
    quote:
      "Our commercial facility sump was overdue for maintenance. The JVR team handled high-pressure wall wash and sludge evacuation during off-hours with zero interruption. Top quality work.",
  },
  {
    id: 5,
    name: "Anand Reddy",
    role: "Independent House",
    location: "Barkatpura",
    rating: 5,
    date: "Verified Review",
    service: "Residential Sump & Tank",
    quote:
      "Very honest and hard-working staff. They showed us the tank condition before and after cleaning. The difference was night and day. Fair communication and quick response on phone.",
  },
  {
    id: 6,
    name: "Suresh Kumar",
    role: "Property Manager",
    location: "Narayanaguda",
    rating: 5,
    date: "Verified Review",
    service: "Overhead PVC & Sump",
    quote:
      "Punctual and equipped with heavy-duty sludge pumps. They thoroughly cleaned both underground sump and rooftop tanks in just under 3 hours. Great local team in Chikkadpally.",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic scrolling on its own every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3800);

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
    TESTIMONIALS[currentIndex % total],
    TESTIMONIALS[(currentIndex + 1) % total],
    TESTIMONIALS[(currentIndex + 2) % total],
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Trust Pill & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>5.0 Rating • 23 Google Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Customers in Hyderabad Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Real feedback from homeowners, apartments, and commercial facilities across Chikkadpally and Hyderabad.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_DATA.reviews.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm transition-colors"
            >
              <span>View 23 Google Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous review"
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-sky-600 hover:text-sky-600 text-slate-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next review"
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-sky-600 hover:text-sky-600 text-slate-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Exactly 1 card at a time with smooth horizontal transition */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between min-h-[260px]">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{item.service}</span>
                        </div>
                      </div>

                      <blockquote className="text-sm text-slate-700 font-normal leading-relaxed italic">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.role} • <span className="text-sky-700 font-semibold">{item.location}</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-Card Interactive Rotating Showcase */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDesktopCards.map((item, index) => (
            <div
              key={`${item.id}-${currentIndex}-${index}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.service}</span>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed italic line-clamp-4">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.role} • <span className="text-sky-700 font-semibold">{item.location}</span>
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
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
      </div>
    </section>
  );
}
