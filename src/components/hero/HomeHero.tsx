import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Clock, MapPin, Star, Sparkles, CheckCircle2 } from "lucide-react";
import HeroWhatsAppForm from "./HeroWhatsAppForm";
import { BUSINESS_DATA } from "@/data/business";

export default function HomeHero() {
  return (
    <div className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-slate-800">
      {/* Full-width Photographic Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-tank-cleaning.jpg"
          alt="Professional Water Tank Cleaning Services in Chikkadpally Hyderabad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-center"
        />
        {/* Cinematic Multi-layer Gradient Overlay for Mobile & Desktop Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 sm:from-slate-950/90 sm:via-slate-950/65 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition & Conversion Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Local Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Chikkadpally, Hyderabad • 24/7 Service</span>
            </div>

            {/* Primary H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Professional Water Tank Cleaning in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">
                Chikkadpally
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Deep sludge extraction, wall brushing, and hygienic freshwater washing for rooftop Sintex/PVC tanks and underground concrete sumps across Chikkadpally, New Nallakunta, and Hyderabad.
            </p>

            {/* Key Service Highlights List (2x2 Grid on Mobile & Desktop) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-[11px] sm:text-xs md:text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="leading-tight">Overhead &amp; Sumps</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="leading-tight">Sludge &amp; Silt Extraction</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="leading-tight">Homes &amp; Apartments</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="leading-tight">24/7 Round-the-Clock</span>
              </div>
            </div>

            {/* Conversion CTA Group: Always Single Row on Mobile & Desktop */}
            <div className="pt-2 flex flex-row items-center gap-2 sm:gap-3.5 w-full">
              <Link
                href="/contact/"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm md:text-base font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-xl shadow-sky-950/50 transition-all duration-150 group whitespace-nowrap text-center"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href={BUSINESS_DATA.phone.href}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm md:text-base font-extrabold text-slate-900 bg-white hover:bg-slate-100 border border-white shadow-lg shadow-black/30 transition-all duration-150 whitespace-nowrap text-center"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 animate-pulse shrink-0" />
                <span>Call {BUSINESS_DATA.phone.display}</span>
              </a>
            </div>

            {/* Trust Badges (Hidden on mobile to keep hero compact and uncluttered) */}
            <div className="hidden sm:flex pt-4 border-t border-slate-800/80 flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold text-white">Lane 3, Chikkadpally</span>
              </div>
              <a
                href={BUSINESS_DATA.reviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:underline font-semibold"
              >
                <Star className="w-4 h-4 fill-amber-400 shrink-0" />
                <span className="text-white">23 Google Reviews</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Lead Form */}
          <div className="lg:col-span-5">
            <HeroWhatsAppForm />
          </div>
        </div>
      </div>
    </div>
  );
}
