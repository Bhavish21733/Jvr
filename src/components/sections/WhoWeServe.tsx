import { Home, Building2, Store, Briefcase, Factory } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhoWeServe() {
  const propertyTypes = [
    {
      icon: Home,
      title: "Individual Homes & Villas",
      desc: "Independent bungalows, duplex residences, and private floors with rooftop Sintex or PVC tanks.",
      badge: "Residential",
    },
    {
      icon: Building2,
      title: "Apartment Complexes",
      desc: "Multi-family residential buildings, gated communities, and shared concrete overhead/sump networks.",
      badge: "Societies & Flats",
    },
    {
      icon: Store,
      title: "Restaurants & Retail Shops",
      desc: "Eateries, bakeries, cafes, and retail facilities requiring hygienic water storage compliance.",
      badge: "Hospitality & Retail",
    },
    {
      icon: Briefcase,
      title: "Offices & Commercial Spaces",
      desc: "Corporate workspaces, tutorials, clinics, and commercial premises with 24/7 scheduling needs.",
      badge: "Commercial",
    },
    {
      icon: Factory,
      title: "Industrial & Storage Units",
      desc: "Workshops, warehouses, fabrication sheds, and small industrial estates requiring periodic de-silting.",
      badge: "Industrial",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who We Serve"
          title="Water Storage Solutions for Every Property Type"
          subtitle="Different building structures possess unique storage layouts. We adapt our equipment and execution to match your property requirements."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {propertyTypes.map((prop, idx) => {
            const IconComp = prop.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                    {prop.badge}
                  </span>

                  <h3 className="text-base font-bold text-brand-navy">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
