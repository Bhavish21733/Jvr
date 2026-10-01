import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import { BUSINESS_DATA } from "@/data/business";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_DATA.name}`,
  description: `Privacy policy and information handling practices for ${BUSINESS_DATA.name} in Hyderabad.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy" }];

  return (
    <>
      <PageHero
        title="Privacy Policy &amp;"
        titleHighlight="Standards"
        badge="Legal & Transparency"
        description="How JVR Water Tank Cleaning Services collects, uses, and safeguards customer communication and service enquiry details."
        bgImage="/images/about-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Contact Us"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              1. Overview &amp; Commitment
            </h2>
            <p>
              At <strong>{BUSINESS_DATA.name}</strong>, we respect your privacy. This policy outlines our standards regarding information collected when you contact us via telephone, WhatsApp, or our website enquiry forms to request water tank cleaning services across Hyderabad, Telangana.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              When requesting a quote, site inspection, or service appointment, you may provide us with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Contact Information:</strong> Your name, phone number, and email address.</li>
              <li><strong>Service Location:</strong> Physical address, landmark, or apartment name in Hyderabad for on-site navigation.</li>
              <li><strong>Tank Specifications:</strong> Approximate tank capacity (litres), tank type (Overhead PVC/Sintex, Underground Sump, Concrete reservoir), and preferred service schedule.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              3. How We Use Your Information
            </h2>
            <p>
              The information you provide is strictly used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Respond directly to your service enquiry and confirm scheduled cleaning appointments.</li>
              <li>Dispatch technicians equipped with appropriate de-watering and high-pressure cleaning machinery to your location.</li>
              <li>Provide transparent pricing and customer support via phone or WhatsApp.</li>
            </ul>
            <p className="font-medium text-slate-900">
              We do not sell, rent, lease, or distribute your personal contact information to any third-party marketing agencies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              4. Data Retention &amp; Security
            </h2>
            <p>
              We implement reasonable physical and operational security measures to safeguard your personal details from unauthorized access, alteration, or disclosure. Contact records are retained solely for maintenance logging and warranty verification.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              5. Contacting Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions or wish to update or delete your contact records from our logs, please contact us directly:
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
