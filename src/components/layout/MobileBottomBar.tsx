import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={BUSINESS_DATA.phone.href}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 text-sky-300 font-bold text-sm border border-slate-700 active:scale-95 transition-transform"
          aria-label={`Call JVR Water Tank Cleaning at ${BUSINESS_DATA.phone.display}`}
        >
          <Phone className="w-4 h-4 text-sky-400 animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* Book Service Button */}
        <Link
          href="/contact/"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-md active:scale-95 transition-transform hover:bg-sky-500"
          aria-label="Book Water Tank Cleaning Service"
        >
          <CalendarCheck className="w-4 h-4 text-white" />
          <span>Book Service</span>
        </Link>
      </div>
    </div>
  );
}
