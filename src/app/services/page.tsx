import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_DATA } from "@/data/business";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.services.title,
  description: SEO_CONFIGS.services.description,
  alternates: {
    canonical: SEO_CONFIGS.services.canonical,
  },
};

export default function ServicesPage() {
  const breadcrumbs = [{ label: "Services" }];
  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Services", item: `${SITE_URL}/services/` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero */}
      <PageHero
        title="Professional Water Tank Cleaning"
        titleHighlight="Services in Hyderabad"
        badge="Approved Service Portfolio"
        description="Comprehensive, professional water tank cleaning solutions designed around cleaner, better-maintained water storage for residential homes, apartments, commercial facilities, and industrial properties in Hyderabad."
        bgImage="/images/services-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Book a Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      {/* Quick Anchor Navigation Bar */}
      <div className="bg-brand-navy border-b border-slate-800 py-3 sticky top-16 z-30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-2 whitespace-nowrap text-xs">
          {SERVICES_DATA.map((srv) => (
            <a
              key={srv.id}
              href={`#${srv.anchor}`}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 font-semibold transition-colors"
            >
              {srv.title.replace(" Water Tank Cleaning", "").replace(" Tank Cleaning", "")}
            </a>
          ))}
        </div>
      </div>

      {/* Main Services List */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.anchor}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-brand-bg border border-slate-200 shadow-sm scroll-mt-32 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-bold bg-brand-navy/90 text-brand-aqua backdrop-blur-sm">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-brand-blue bg-brand-light">
                        <span>Service #{index + 1}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Ideal For List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Recommended For:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                        {service.idealFor.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Key Work Steps:
                      </h4>
                      <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                        {service.keyHighlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
                      >
                        <span>Book {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={BUSINESS_DATA.phone.href}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-300 text-brand-navy font-bold text-sm hover:bg-slate-50 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-brand-blue" />
                        <span>Call {BUSINESS_DATA.phone.display}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <ContactConversionBlock />
    </>
  );
}
