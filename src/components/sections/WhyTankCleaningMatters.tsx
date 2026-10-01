import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Filter, Droplet, ArrowRight } from "lucide-react";

export default function WhyTankCleaningMatters() {
  const benefits = [
    {
      icon: Droplet,
      title: "Preserving Everyday Household Water Hygiene",
      desc: "Even when drinking water is filtered at point-of-use, tank water is used directly for bathing, tooth brushing, cooking prep, and washing. Clean tanks ensure comfortable, safe contact water.",
    },
    {
      icon: ShieldCheck,
      title: "Protecting Concealed Plumbing & Expensive Fixtures",
      desc: "Gritty sand and rust sediment act like liquid sandpaper against precision mixer ceramic cartridges, shower nozzles, and geysers, preventing costly leaks and early fixture failure.",
    },
    {
      icon: Filter,
      title: "Extending the Lifespan of RO Water Purifiers",
      desc: "Low-silt feed water prevents domestic water purifier pre-filter candles and RO membranes from premature choking, significantly lowering recurring filter replacement costs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Benefit Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-brand-navy shadow-2xl">
              <Image
                src="/images/services-hero.jpg"
                alt="Professional water tank maintenance and sanitization in Hyderabad"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />

              {/* Floating Bottom Card Over Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 text-brand-text">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Semi-Annual Standard
                    </span>
                    <span className="text-sm font-extrabold text-brand-navy block">
                      Clean Every 6 Months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Benefit Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-light text-brand-blue border border-brand-blue/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Why Regular Tank Maintenance Matters</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Cleaner Water Storage Protects Your Entire Home Infrastructure
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              A water tank is not just a passive container—it is the central reservoir feeding every faucet in your residence or commercial facility. Regular maintenance delivers immediate practical benefits:
            </p>

            {/* Benefit List */}
            <div className="space-y-4 pt-2">
              {benefits.map((benefit, idx) => {
                const IconComp = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-brand-navy">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Schedule Your Cleaning Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
