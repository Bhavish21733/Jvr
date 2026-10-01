import { PhoneCall, Droplet, Sparkles, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLEANING_STEPS } from "@/data/services";

export default function ProcessSteps() {
  const stepIcons = [PhoneCall, Droplet, Sparkles, CheckCircle];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Background Subtle Wave Accents */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hygienic Workflow"
          title="How Our Tank Cleaning Works"
          subtitle="A clear, organized 4-step process that systematically extracts bottom sludge and restores internal cleanliness."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CLEANING_STEPS.map((step, index) => {
            const IconComponent = stepIcons[index] || Sparkles;
            return (
              <div
                key={index}
                className="relative bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-700/60 transition-all duration-200 group"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-sky-400/40 group-hover:text-sky-400 transition-colors font-heading">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Body */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
                  <span>Step {step.step} in Process</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
