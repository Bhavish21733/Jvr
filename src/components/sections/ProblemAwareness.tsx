import { Layers, Droplets, Wind, Wrench, ShieldAlert, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProblemAwareness() {
  const problems = [
    {
      icon: Layers,
      title: "Heavy Bottom Silt & Sludge Accumulation",
      desc: "Municipal and borewell supply carries fine suspended sand, silt, and soil that steadily settle into a dense mud layer at the bottom of overhead tanks and sumps over months of usage.",
      badge: "Sediment Build-up",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
    },
    {
      icon: Droplets,
      title: "Biofilm & Algae Coating on Tank Walls",
      desc: "Warm climatic conditions encourage slippery algae and bacterial biofilm along plastic ribs and masonry surfaces, degrading daily domestic water purity and freshness.",
      badge: "Wall Biofilm",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      icon: Wind,
      title: "Stagnant Odor & Brownish Tap Water",
      desc: "When tanks remain unserviced, decomposing organic residue imparts a stale or swampy odor to bathroom and shower water, causing visible yellow/brown tap discoloration.",
      badge: "Water Discoloration",
      color: "text-sky-600",
      bg: "bg-sky-50 border-sky-200",
    },
    {
      icon: Wrench,
      title: "Frequent Plumbing & RO Filter Choking",
      desc: "Dislodged mud flakes pass directly into internal pipelines, choking faucet aerators, bathroom showers, geyser elements, and shortening the lifespan of costly RO purifier filters.",
      badge: "Plumbing Wear",
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Water Hygiene Awareness"
          title="Why Regular Water Tank Cleaning Matters"
          subtitle="Out of sight should never mean out of mind. Over months of continuous storage, uncleaned tanks collect thick sediment and biofilms that degrade your everyday water quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${problem.bg} flex items-center justify-center ${problem.color} border`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {problem.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {problem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {problem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cleanliness Callout Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-7 h-7 text-sky-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                When was the last time your water tank was professionally cleaned?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Recommended cleaning standard for residential and commercial tanks in Hyderabad is once every 6 months.
              </p>
            </div>
          </div>
          <a
            href="/contact/"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-colors"
          >
            Check Available Booking Slots
          </a>
        </div>
      </div>
    </section>
  );
}
