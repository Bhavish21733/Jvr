import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import { BUSINESS_DATA } from "@/data/business";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BUSINESS_DATA.name}`,
  description: `Service terms, booking policies, and conditions of engagement for ${BUSINESS_DATA.name} in Hyderabad.`,
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions/`,
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [{ label: "Terms & Conditions" }];

  return (
    <>
      <PageHero
        title="Terms &amp;"
        titleHighlight="Service Conditions"
        badge="Service Policy"
        description="Standard operating terms, service guidelines, and booking conditions for residential and commercial water tank cleaning in Hyderabad."
        bgImage="/images/about-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Book a Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By scheduling a service, requesting a site quotation, or engaging the personnel of <strong>{BUSINESS_DATA.name}</strong>, customers agree to adhere to these standard service terms and conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              2. Scope of Services
            </h2>
            <p>
              {BUSINESS_DATA.name} provides professional water storage cleaning services including dewatering, high-pressure washing, sludge removal, wall scrubbing, and freshwater sanitization for overhead PVC/Sintex tanks, underground masonry sumps, and commercial reservoirs across Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              3. Customer Responsibilities &amp; Site Access
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Physical Access:</strong> Property owners or facility administrators must provide safe and unobstructed access to the rooftop, terrace, or underground sump area at the agreed service time.</li>
              <li><strong>Electricity &amp; Power Supply:</strong> A standard electric outlet must be accessible for connecting submersible sludge extraction pumps and high-pressure jet washing equipment.</li>
              <li><strong>Water Supply:</strong> A small volume of water should be available for the final high-pressure rinse cycle unless prior alternate arrangements are agreed upon.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              4. Pricing, Payments &amp; Quotations
            </h2>
            <p>
              Service quotes are based on tank capacity (litres), storage type, contamination level, and accessibility. Payment is due upon completion and inspection of the cleaning job unless otherwise agreed in writing for commercial contracts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              5. Service Inspection &amp; Satisfaction
            </h2>
            <p>
              Our technicians show the tank condition before and after completion of the cleaning procedure. Customers are encouraged to inspect the clean vessel with our team on-site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              6. Contact Information
            </h2>
            <p>
              For inquiries regarding service terms or commercial maintenance agreements:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="font-bold text-slate-900">{BUSINESS_DATA.name}</p>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{BUSINESS_DATA.address.full}</span>
              </p>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={BUSINESS_DATA.phone.href} className="text-sky-700 font-semibold hover:underline">
                  {BUSINESS_DATA.phone.display}
                </a>
              </p>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${BUSINESS_DATA.email}`} className="text-sky-700 font-semibold hover:underline">
                  {BUSINESS_DATA.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
