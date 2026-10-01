import { Metadata } from "next";
import HomeHero from "@/components/hero/HomeHero";
import TrustRail from "@/components/sections/TrustRail";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import WhyJVR from "@/components/sections/WhyJVR";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import AreasWeServe from "@/components/sections/AreasWeServe";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import EditorialGalleryPreview from "@/components/sections/EditorialGalleryPreview";
import LatestBlogPreview from "@/components/sections/LatestBlogPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { FAQS_DATA } from "@/data/faqs";
import { SEO_CONFIGS } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.home.title,
  description: SEO_CONFIGS.home.description,
  alternates: {
    canonical: SEO_CONFIGS.home.canonical,
  },
};

export default function HomePage() {
  return (
    <>
      <FAQJsonLd faqs={FAQS_DATA} />

      {/* 01. Premium Hero with WhatsApp Lead Gen Form */}
      <HomeHero />

      {/* 02. Editorial Trust Rail */}
      <TrustRail />

      {/* 03. 3-Service Showcase + View All Services Link */}
      <ServicesShowcase />

      {/* 05. Why Choose JVR Proof Pillars */}
      <WhyJVR />

      {/* 06. 4-Step Process Timeline */}
      <ProcessTimeline />

      {/* 07. Areas We Serve: Local Context */}
      <AreasWeServe />

      {/* 08. 3-Card Interactive Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 09. Editorial Gallery Preview */}
      <EditorialGalleryPreview />

      {/* 10. Latest Educational Guides */}
      <LatestBlogPreview />

      {/* 11. FAQ Accordion */}
      <FAQSection />

      {/* 12. Closing Contact Conversion Block */}
      <ContactConversionBlock />
    </>
  );
}
