import { Metadata } from "next";
import PageHero from "@/components/hero/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_DATA } from "@/data/business";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.gallery.title,
  description: SEO_CONFIGS.gallery.description,
  alternates: {
    canonical: SEO_CONFIGS.gallery.canonical,
  },
};

export default function GalleryPage() {
  const breadcrumbs = [{ label: "Gallery" }];
  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Gallery", item: `${SITE_URL}/gallery/` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero */}
      <PageHero
        title="Water Tank Cleaning"
        titleHighlight="Project Gallery"
        badge="Service Portfolio"
        description="Explore authentic visual documentation of our water tank cleaning, underground sump de-silting, and high-pressure washing projects across Chikkadpally, New Nallakunta, and Hyderabad."
        bgImage="/images/gallery-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Book a Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      {/* Main Interactive Gallery Section */}
      <section className="py-16 sm:py-24 bg-brand-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Real On-Site Service Highlights
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Filter by storage category or tap any photograph to inspect high-resolution details in full-screen view.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Final CTA */}
      <ContactConversionBlock />
    </>
  );
}
