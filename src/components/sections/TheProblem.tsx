import { AlertTriangle, Layers, Droplets, Wind, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TheProblem() {
  const problems = [
    {
      icon: Layers,
      title: "Bottom Silt & Mud Accumulation",
      desc: "Suspended clay, sand, and pipe rust settle steadily into a dense sludge layer at the bottom of overhead tanks and sumps.",
      tag: "Sedimentation",
    },
    {
      icon: Droplets,
      title: "Wall Biofilm & Algae Coating",
      desc: "Warm ambient weather promotes microbial slime and green algae growth along plastic ribs and masonry surfaces.",
      tag: "Biological Film",
    },
    {
      icon: Wind,
      title: "Stagnant Odor & Brownish Tap Water",
      desc: "Unserviced tanks churn settled debris into household lines, causing foul odors and discolored water in showers and washbasins.",
      tag: "Water Clarity",
    },
    {
      icon: Wrench,
      title: "Choking of Taps, Showers & Purifiers",
      desc: "Fine mud particles migrate into concealed valves, tap aerators, and cause premature choking of expensive RO filter cartridges.",
      tag: "Plumbing Wear",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Asymmetrical Editorial Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Water Storage Awareness</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Your Tap Water May Look Clear, But Is Your Storage Tank Really Clean?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Water storage tanks operate out of sight on rooftops or beneath driveways. Over months of regular inflow from municipal lines, borewells, or water tankers, heavy sediment and invisible biofilms steadily deposit inside.
            </p>

            {/* Editorial Quote / Callout Block */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-l-brand-blue border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Maintenance Principle
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                Preventive semi-annual cleaning prevents heavy sludge churn into your home plumbing, protecting bathroom valves, showers, and water filtration systems.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy group"
              >
                <span>Explore Our Cleaning Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Diagnostic Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((prob, idx) => {
              const IconComp = prob.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {prob.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-brand-navy">
                      {prob.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prob.desc}
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
