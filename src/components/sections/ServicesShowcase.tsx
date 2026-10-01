import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_DATA } from "@/data/business";

export default function ServicesShowcase() {
  // Top 3 featured services on Homepage
  const topServices = SERVICES_DATA.slice(0, 3);
  // Remaining services displayed in bottom preview banner
  const otherServices = SERVICES_DATA.slice(3, 6);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Water Tank Cleaning"
          title="Our Primary Services"
          subtitle="Specialized dewatering, sludge extraction, wall brushing, and freshwater sanitization for residential and commercial properties."
        />

        {/* 3 Compact Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topServices.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Badge */}
              <div className="relative aspect-[16/10] w-full bg-slate-200 overflow-hidden">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-600 text-white shadow-md">
                  {srv.badge}
                </div>
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Service 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body - Clean & Compact without heavy bullet list */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/#${srv.anchor}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 group/link"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/91${BUSINESS_DATA.phone.raw}?text=${encodeURIComponent(`Hello ${BUSINESS_DATA.name}, I am interested in ${srv.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-colors"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Callout Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complete 6-Service Portfolio</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Underground Sump, Industrial &amp; Sintex Tank Cleaning
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                We also provide specialized deep cleaning for {otherServices.map((s) => s.title).join(", ")}.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/services/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-all group"
              >
                <span>View All 6 Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
