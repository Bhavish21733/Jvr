import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ContactConversionBlock() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-sky-950 text-white border-t border-b border-sky-800 shadow-inner">
      {/* Real Crystal Water Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/cta-water-wave.png"
          alt="Clean, pure hygienic water"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        {/* Soft Radial & Gradient Shading for Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-950/40 to-sky-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/40 text-cyan-200 border border-cyan-400/30 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Chikkadpally, Hyderabad • 24/7 Direct Service</span>
        </div>

        {/* Improved Large Prominent Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] max-w-3xl mx-auto drop-shadow-md">
          Need Your Water Tank Cleaned?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
          Restore clean, hygienic water storage for your residence, apartment building, or commercial property across Hyderabad.
        </p>

        {/* High-Contrast Conversion CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/contact/"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-sky-950 bg-white hover:bg-sky-50 shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-150 group whitespace-nowrap"
          >
            <span>Book a Cleaning</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={BUSINESS_DATA.phone.href}
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-sky-950/80 border border-white/40 hover:bg-sky-900 hover:border-white/60 backdrop-blur-md shadow-xl transition-all duration-150 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-cyan-300 animate-pulse shrink-0" />
            <span>Call {BUSINESS_DATA.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
