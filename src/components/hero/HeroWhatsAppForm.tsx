"use client";

import { useState } from "react";
import { Send, Phone, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

const SERVICE_OPTIONS = [
  "Residential Water Tank Cleaning",
  "Commercial Water Tank Cleaning",
  "Overhead Tank Cleaning",
  "Underground Tank Cleaning",
  "Industrial Tank Cleaning",
  "Sump & Sintex Tank Cleaning",
];

export default function HeroWhatsAppForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const textMessage = [
      `*New Cleaning Enquiry — JVR Water Tank Cleaning*`,
      `---------------------------------------`,
      `*Name:* ${name.trim() || "Not specified"}`,
      `*Mobile:* ${mobile.trim() || "Not specified"}`,
      `*Service Required:* ${service}`,
      message.trim() ? `*Location / Requirements:* ${message.trim()}` : `*Location:* Chikkadpally / Hyderabad`,
      `---------------------------------------`,
      `_Sent from website enquiry form_`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919121727674?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 150);
  };

  return (
    <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-7 border border-slate-700/90 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Quote on WhatsApp</span>
          </div>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Book Tank Cleaning
          </h3>
        </div>
        <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
          <MessageSquare className="w-5 h-5" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-emerald-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-emerald-400">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
              +91
            </span>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="91217 27674"
              className="w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Select Service <span className="text-emerald-400">*</span>
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message / Location */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Message / Location &amp; Tank Size
          </label>
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Chikkadpally, 1000L Sintex & 5000L Sump"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* WhatsApp Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/50 transition-all duration-150 group cursor-pointer"
        >
          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          <span>{isSubmitting ? "Opening WhatsApp..." : "Send Enquiry via WhatsApp"}</span>
        </button>
      </form>

      {/* Footer / Direct Call Backup */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Direct Local Team</span>
        </div>
        <a
          href={BUSINESS_DATA.phone.href}
          className="text-sky-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call {BUSINESS_DATA.phone.display}</span>
        </a>
      </div>
    </div>
  );
}
