import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles, User, Calendar, Clock } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { BreadcrumbItem } from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  badge?: string;
  description: string;
  bgImage: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  meta?: {
    author?: string;
    date?: string;
    readTime?: string;
  };
}

export default function PageHero({
  title,
  titleHighlight,
  badge,
  description,
  bgImage,
  primaryCtaText = "Book a Tank Cleaning",
  primaryCtaHref = "/contact/",
  secondaryCtaText = `Call ${BUSINESS_DATA.phone.display}`,
  secondaryCtaHref = BUSINESS_DATA.phone.href,
  meta,
}: PageHeroProps) {
  const isSecondaryPhone = secondaryCtaHref.startsWith("tel:");

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800 min-h-[390px] sm:min-h-[440px] flex items-center">
      {/* Real Full-Quality Photographic Background (Mobile Responsive Focal Alignment) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt={`${title} ${titleHighlight || ""}`.trim()}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-center"
        />
        {/* Responsive Natural Shading: Preserves clean text contrast while keeping the image vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/25 sm:from-slate-950/80 sm:via-slate-950/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-22 w-full">
        <div className="max-w-2xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-black/40 text-sky-300 border border-white/20 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{badge}</span>
            </div>
          )}

          {/* Large Bold Dual-Color Hero Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
            <span>{title}</span>
            {titleHighlight && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">
                  {titleHighlight}
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl drop-shadow">
            {description}
          </p>

          {/* Optional Article / Page Metadata */}
          {meta && (
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium pt-1">
              {meta.author && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  <span>{meta.author}</span>
                </div>
              )}
              {meta.author && (meta.date || meta.readTime) && <span className="text-slate-500">•</span>}
              {meta.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-300" />
                  <span>{meta.date}</span>
                </div>
              )}
              {meta.date && meta.readTime && <span className="text-slate-500">•</span>}
              {meta.readTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{meta.readTime}</span>
                </div>
              )}
            </div>
          )}

          {/* Dual Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-black/40 transition-all duration-200 group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {isSecondaryPhone ? (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 bg-white hover:bg-slate-100 border border-white shadow-lg shadow-black/30 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-sky-600 animate-pulse" />
                <span>{secondaryCtaText}</span>
              </a>
            ) : (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 bg-white hover:bg-slate-100 border border-white shadow-lg shadow-black/30 transition-all duration-200"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
