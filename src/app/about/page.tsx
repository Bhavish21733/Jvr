import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import WhyJVR from "@/components/sections/WhyJVR";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_DATA } from "@/data/business";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.about.title,
  description: SEO_CONFIGS.about.description,
  alternates: {
    canonical: SEO_CONFIGS.about.canonical,
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];
  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "About Us", item: `${SITE_URL}/about/` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero */}
      <PageHero
        title="About JVR"
        titleHighlight="Water Tank Cleaning"
        badge="About Our Business"
        description="Dedicated to delivering spotless, hygienic, and dependable water tank cleaning solutions for homes and commercial properties in Chikkadpally, New Nallakunta, and Hyderabad."
        bgImage="/images/about-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Book a Tank Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      {/* 01. Business Introduction Section (Left: Narrative & Contact | Right: Business Image) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Business Story & Contact */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>Our Core Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Maintaining Clean, Hygienic Water Storage for Chikkadpally &amp; Hyderabad
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                <p>
                  Water is an indispensable utility used continuously throughout the day for drinking, cooking preparation, bathing, and cleaning. However, because overhead plastic tanks and underground concrete sumps remain closed and out of daily view, the steady accumulation of bottom silt, clay sediment, and invisible biofilms often goes unnoticed until water clarity noticeably deteriorates.
                </p>
                <p>
                  At <strong>JVR Water Tank Cleaning Services</strong>, our mission is straightforward: to provide property owners in Chikkadpally, New Nallakunta, and surrounding Hyderabad neighborhoods with an efficient, thorough, and completely hygienic tank cleaning service.
                </p>
                <p>
                  We believe in practical, defensible service standards—systematic dewatering, deep manual and pressurized scrubbing of interior walls, complete bottom sediment evacuation, and freshwater rinsing that leaves your storage vessel fresh and ready for immediate use.
                </p>
              </div>

              {/* Direct Phone Highlight Card */}
              <div className="pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Direct Local Line:</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {BUSINESS_DATA.phone.display}
                      </span>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_DATA.phone.href}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm text-center transition-colors shadow-sm"
                  >
                    Call Directly
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Business Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <Image
                  src="/images/commercial-tank-cleaning.jpg"
                  alt="JVR Professional Water Tank Cleaning Services in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Trust Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-white mb-2 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Professional Service</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold drop-shadow-sm">
                    JVR Water Tank Cleaning Services
                  </h3>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Lane Number 3, Chikkadpally, New Nallakunta, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Why Choose Us Section (Reused WhyJVR Component) */}
      <WhyJVR />

      {/* 03. Our Process Section (Reused ProcessTimeline Component) */}
      <ProcessTimeline />

      {/* 04. Final Conversion CTA */}
      <ContactConversionBlock />
    </>
  );
}
