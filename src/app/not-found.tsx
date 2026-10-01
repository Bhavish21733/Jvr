import Link from "next/link";
import { Droplet, Home, Phone, ArrowLeft } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-950 text-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mx-auto text-sky-400">
          <Droplet className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-white">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm">
            The page you are looking for might have been moved, renamed, or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <a
            href={BUSINESS_DATA.phone.href}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-sky-300 font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
