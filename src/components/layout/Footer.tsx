import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Droplet, Star, ArrowUpRight, Mail } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Brand Logo for Dark Background (Click to Home) */}
            <Link
              href="/"
              className="inline-block group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none ring-0 border-none py-1 cursor-pointer select-none"
              aria-label="JVR Water Tank Cleaning Services Home"
            >
              <div className="relative h-16 sm:h-20 w-60 sm:w-76 md:w-80">
                <Image
                  src="/images/logo-footer.png"
                  alt="JVR Water Tank Cleaning Services"
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 240px, 320px"
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200 drop-shadow-md"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional, hygienic overhead and underground water tank cleaning services for homes, apartments, and commercial properties in Chikkadpally, New Nallakunta, and Hyderabad.
            </p>

            {/* Google Business Trust Card */}
            <div className="pt-2">
              <a
                href={BUSINESS_DATA.reviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-700/60 transition-all group"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm font-bold text-white">Google</span>
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <span className="text-xs font-semibold text-slate-300 group-hover:text-sky-300 transition-colors flex items-center gap-1">
                  <span>{BUSINESS_DATA.reviews.count} Google Reviews</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
                </span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICE_LINKS.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-sky-400 transition-colors duration-150 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-400 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={BUSINESS_DATA.phone.href}
                className="flex items-start gap-3 text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-sky-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">{BUSINESS_DATA.phone.display}</span>
                  <span className="text-xs text-slate-400">Click to Call Directly</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_DATA.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-bold text-white break-all">{BUSINESS_DATA.email}</span>
                  <span className="text-xs text-slate-400">Click to Email Us</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-white">{BUSINESS_DATA.hours.display}</span>
                  <p className="text-xs text-slate-400">24/7 Service Across Hyderabad</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {BUSINESS_DATA.address.full}
                  </p>
                  <a
                    href={BUSINESS_DATA.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline mt-1 inline-flex items-center gap-1 font-medium"
                  >
                    Get Google Maps Directions
                    <ArrowUpRight className="w-3 3-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Footer Description & Copyright */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left" suppressHydrationWarning>
            &copy; {currentYear} JVR Water Tank Cleaning Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy/" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions/" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
