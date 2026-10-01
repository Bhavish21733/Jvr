"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn, Eye } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";

type CategoryFilter = "All" | "Overhead Tanks" | "Underground Sumps" | "Apartment Cleaning" | "Process";

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Overhead Tanks",
    "Underground Sumps",
    "Apartment Cleaning",
    "Process",
  ];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredItems.length : null
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation: Escape to close, Left/Right arrows to browse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLightboxIndex]);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              setActiveLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
              selectedCategory === cat
                ? "bg-sky-600 text-white shadow-md shadow-sky-950/20"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Thumbnail */}
            <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200 shadow-lg">
                  <Eye className="w-5 h-5 text-sky-700" />
                </div>
              </div>

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-bold bg-slate-950/80 text-sky-300 backdrop-blur-sm border border-slate-800">
                {item.category}
              </div>
            </div>

            {/* Caption */}
            <div className="p-5 space-y-2">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  {item.location}
                </span>
                <span className="font-semibold text-sky-600 flex items-center gap-1 group-hover:underline">
                  <ZoomIn className="w-3 h-3" />
                  Enlarge
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={currentItem.image}
                alt={currentItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption Bar */}
            <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  {currentItem.category} • {currentItem.location}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {currentItem.description}
                </p>
              </div>

              <div className="shrink-0 text-xs text-slate-400 flex items-center gap-2">
                <span>
                  {activeLightboxIndex !== null ? activeLightboxIndex + 1 : 0} of {filteredItems.length}
                </span>
                <span className="hidden sm:inline">• (Use Esc or Arrow Keys)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
