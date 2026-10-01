import Link from "next/link";
import { MapPin, Clock, PhoneCall, ShieldCheck, Sparkles, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function WhyJVR() {
  const features = [
    {
      icon: MapPin,
      iconBg: "bg-sky-100 text-sky-700",
      title: "Locally Grounded in Chikkadpally",
      desc: "Operating directly from Lane Number 3, Chikkadpally, New Nallakunta (500020). Rapid on-site attendance across Hyderabad without long transit delays.",
    },
    {
      icon: Clock,
      iconBg: "bg-emerald-100 text-emerald-700",
      title: "Open 24 Hours / 7 Days",
      desc: "Available around the clock to suit household schedules, apartment association requirements, or off-peak commercial hours.",
    },
    {
      icon: PhoneCall,
      iconBg: "bg-blue-100 text-blue-700",
      title: "Direct Phone Enquiry & Honest Pricing",
      desc: `Speak directly with our service personnel at ${BUSINESS_DATA.phone.display}. Transparent process, clear communication, and no third-party aggregator commissions.`,
    },
    {
      icon: ShieldCheck,
      iconBg: "bg-indigo-100 text-indigo-700",
      title: "Multi-Tank Specialization",
      desc: "Equipped to handle rooftop Sintex/PVC plastic tanks, underground masonry sumps, multi-tenant apartment reservoirs, and industrial storage.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Value Proposition & Trust Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Property Owners in Hyderabad Rely on JVR
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Clean water is fundamental to your family and facility hygiene. We eliminate heavy bottom sludge, sand sediment, and biofilms using practical, professional cleaning methods and heavy-duty extraction pumps.
            </p>

            {/* Trust Metrics Pill Strip */}
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-sky-600">24/7</span>
                <span className="text-[11px] font-semibold text-slate-500">Service Hours</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600">5.0 ★</span>
                <span className="text-[11px] font-semibold text-slate-500">23 Google Reviews</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-indigo-600">100%</span>
                <span className="text-[11px] font-semibold text-slate-500">Direct Contact</span>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_DATA.phone.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all duration-150"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {BUSINESS_DATA.phone.display}</span>
              </a>

              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-sky-600 hover:text-sky-700 text-slate-700 font-bold text-sm shadow-xs transition-colors"
              >
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Connected Integrated Feature Stack */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex items-start gap-4 sm:gap-5 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${item.iconBg} shadow-xs group-hover:scale-105 transition-transform duration-200`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
