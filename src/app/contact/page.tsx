import { Metadata } from "next";
import { Phone, Clock, MapPin, Star, ArrowUpRight, Mail, Navigation } from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_DATA } from "@/data/business";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.contact.title,
  description: SEO_CONFIGS.contact.description,
  alternates: {
    canonical: SEO_CONFIGS.contact.canonical,
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];
  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Contact Us", item: `${SITE_URL}/contact/` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero */}
      <PageHero
        title="Contact JVR"
        titleHighlight="Water Tank Cleaning"
        badge="Direct Enquiry & Booking"
        description="Book your residential or commercial water tank cleaning today. Available 24 hours across Chikkadpally, New Nallakunta, and surrounding Hyderabad areas."
        bgImage="/images/contact-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        primaryCtaHref={BUSINESS_DATA.phone.href}
        secondaryCtaText="Get Directions"
        secondaryCtaHref={BUSINESS_DATA.directionsUrl}
      />

      {/* Main Contact Section: Form + Contact Info */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Verified Business Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Phone Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Immediate Assistance
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Direct Phone Call
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call our team directly for instant slot availability, pricing guidance for your tank size, and emergency bookings.
                </p>

                <a
                  href={BUSINESS_DATA.phone.href}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-base shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DATA.phone.display}</span>
                </a>
              </div>

              {/* Business Location, Email & Hours */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  Verified Business Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Business Address
                      </span>
                      <p className="font-medium text-white mt-0.5">
                        {BUSINESS_DATA.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${BUSINESS_DATA.email}`}
                        className="font-medium text-sky-300 hover:underline mt-0.5 block break-all"
                      >
                        {BUSINESS_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Working Hours
                      </span>
                      <p className="font-bold text-emerald-400 mt-0.5">
                        {BUSINESS_DATA.hours.display} (Mon – Sun)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Google Reviews
                      </span>
                      <a
                        href={BUSINESS_DATA.reviews.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-300 hover:underline flex items-center gap-1 mt-0.5"
                      >
                        <span>{BUSINESS_DATA.reviews.count} Verified Reviews on Google</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={BUSINESS_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-sky-300 font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Get Directions in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 mb-3">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Google Maps Business Location</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Locate Our Chikkadpally Office
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Easily navigate to our office or confirm our operating presence in Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-slate-100 relative">
            <iframe
              src={BUSINESS_DATA.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="JVR Water Tank Cleaning Services Google Maps Location"
              className="w-full h-[400px] sm:h-[480px]"
            />

            {/* Float Directions Action Overlay */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold">
                  {BUSINESS_DATA.address.full}
                </span>
              </div>

              <a
                href={BUSINESS_DATA.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-sm"
              >
                <span>Open Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <ContactConversionBlock />
    </>
  );
}
