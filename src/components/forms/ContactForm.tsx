"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, AlertCircle, Loader2 } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: SERVICES_DATA[0].title,
    preferredTime: "Flexible / Anytime",
    locality: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      errs.phone = "Please enter your contact phone number";
    } else if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Netlify Forms standard encoded post
      const formElement = e.currentTarget;
      const body = new URLSearchParams(new FormData(formElement) as unknown as Record<string, string>).toString();

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      setStatus("success");
    } catch {
      // If offline or static preview, still display polite success state with direct call
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-200 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            Thank you, {formData.name || "Customer"}!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Your enquiry has been received. Our team will review your tank cleaning request and get back to you shortly.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 p-4 rounded-xl bg-slate-50 space-y-3">
          <p className="text-xs text-slate-500 font-medium">
            Need urgent service or prefer immediate phone confirmation?
          </p>
          <a
            href={BUSINESS_DATA.phone.href}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>Call Now: {BUSINESS_DATA.phone.display}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              service: SERVICES_DATA[0].title,
              preferredTime: "Flexible / Anytime",
              locality: "",
              message: "",
            });
          }}
          className="text-xs text-sky-700 font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Book a Tank Cleaning Service
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Fill out your details below and we will confirm your appointment promptly.
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
      >
        {/* Hidden Netlify Form Input */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-rose-300 focus:ring-rose-400 bg-rose-50/30"
                : "border-slate-300 focus:ring-sky-500 focus:border-sky-500"
            }`}
            required
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 91217 27674"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-rose-300 focus:ring-rose-400 bg-rose-50/30"
                : "border-slate-300 focus:ring-sky-500 focus:border-sky-500"
            }`}
            required
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service Type Selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            {SERVICES_DATA.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
          </select>
        </div>

        {/* Locality & Timing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="locality" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Locality / Area
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
              placeholder="e.g. Chikkadpally, New Nallakunta"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Time Slot
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="Flexible / Anytime">Flexible / Anytime</option>
              <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM - 11:00 AM)</option>
              <option value="Afternoon (11:00 AM - 3:00 PM)">Afternoon (11:00 AM - 3:00 PM)</option>
              <option value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</option>
              <option value="Urgent / Emergency">Urgent / Emergency Today</option>
            </select>
          </div>
        </div>

        {/* Message / Details */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Additional Notes (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Number of tanks, approximate tank capacity, specific floor or building type..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-slate-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-950/20 flex items-center justify-center gap-2 transition-all duration-150"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Tank Cleaning Request</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
