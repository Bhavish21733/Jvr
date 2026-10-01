import { PhoneCall, Search, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLEANING_STEPS } from "@/data/services";

export default function ProcessTimeline() {
  const stepIcons = [PhoneCall, Search, Sparkles, CheckCircle];

  return (
    <section className="py-16 sm:py-24 bg-brand-navy text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Hygienic Workflow"
          title="Our 4-Step Cleaning Process"
          subtitle="A clear, structured timeline designed to systematically remove bottom sludge and restore internal tank cleanliness."
          light
        />

        {/* Timeline Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CLEANING_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-aqua/60 transition-all duration-200 group"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-brand-aqua font-heading">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-aqua group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-aqua transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-brand-green font-semibold">
                  <span>Phase {step.step} Complete</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
