import Link from "next/link";
import { MapPin, Phone, CheckCircle2, ArrowRight, Navigation } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function AreasWeServe() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-aqua/20 text-brand-aqua border border-brand-aqua/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Coverage Area</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Water Tank Cleaning Services in Chikkadpally &amp; Surrounding Localities
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Headquartered at Lane Number 3, Chikkadpally, New Nallakunta (500020), JVR Water Tank Cleaning Services operates across central, eastern, and greater Hyderabad, providing fast on-site attendance for homes, apartment communities, and commercial properties.
              </p>

              {/* Service Areas Matrix */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-aqua mb-3">
                  Localities We Readily Service:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-200 font-medium">
                  {BUSINESS_DATA.serviceAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_DATA.phone.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DATA.phone.display}</span>
                </a>

                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-aqua hover:underline"
                >
                  <span>View Map &amp; Direct Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Location Verification Card */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-aqua block">
                Physical Office &amp; Hub
              </span>

              <h3 className="text-xl font-bold text-white">
                {BUSINESS_DATA.name}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-4">
                <div>
                  <span className="text-slate-400 block text-xs mb-0.5">Address:</span>
                  <p className="text-white font-medium">{BUSINESS_DATA.address.full}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs mb-0.5">Working Hours:</span>
                  <p className="text-brand-green font-bold">{BUSINESS_DATA.hours.display} (Mon – Sun)</p>
                </div>
              </div>

              <a
                href={BUSINESS_DATA.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-aqua border border-slate-700 font-semibold text-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
