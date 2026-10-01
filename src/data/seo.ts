import { BUSINESS_DATA } from "./business";

export const SITE_URL = "https://jvrwatertankcleaning.com";

export interface PageSeoConfig {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
}

export const SEO_CONFIGS: Record<string, PageSeoConfig> = {
  home: {
    title: "Water Tank Cleaning Services in Chikkadpally | JVR Water Tank Cleaning",
    description:
      "Professional water tank cleaning services in Chikkadpally, New Nallakunta, Hyderabad. Thorough cleaning for overhead tanks and underground sumps. Open 24 hours. Call 91217 27674.",
    canonical: `${SITE_URL}/`,
    keywords: [
      "water tank cleaning services in Chikkadpally",
      "water tank cleaning New Nallakunta",
      "water tank cleaners Hyderabad",
      "overhead tank cleaning Chikkadpally",
      "underground sump cleaning Nallakunta",
      "tank cleaning services Telangana",
      "JVR Water Tank Cleaning Services",
    ],
  },
  about: {
    title: "About Us | JVR Water Tank Cleaning Services Chikkadpally",
    description:
      "Learn about JVR Water Tank Cleaning Services in Chikkadpally, New Nallakunta, Hyderabad. Dedicated to hygienic, thorough overhead and underground tank cleaning for homes and buildings.",
    canonical: `${SITE_URL}/about/`,
    keywords: [
      "about JVR water tank cleaning",
      "water tank cleaners Chikkadpally",
      "tank cleaning company Hyderabad",
      "local tank cleaning service New Nallakunta",
    ],
  },
  services: {
    title: "Water Tank Cleaning Services in Chikkadpally | JVR",
    description:
      "Comprehensive water tank cleaning services in Chikkadpally, New Nallakunta: residential overhead tanks, underground sumps, apartment complexes, and commercial tanks. Call 91217 27674.",
    canonical: `${SITE_URL}/services/`,
    keywords: [
      "water tank cleaning services Chikkadpally",
      "overhead tank cleaning Hyderabad",
      "underground sump cleaning New Nallakunta",
      "apartment tank cleaning Hyderabad",
      "commercial tank cleaning Chikkadpally",
    ],
  },
  gallery: {
    title: "Water Tank Cleaning Gallery | JVR Water Tank Cleaning Services",
    description:
      "View actual project photos of overhead tank cleaning, underground sump de-silting, and high-pressure washing by JVR Water Tank Cleaning Services in Chikkadpally.",
    canonical: `${SITE_URL}/gallery/`,
    keywords: [
      "water tank cleaning photos",
      "tank cleaning gallery Chikkadpally",
      "sump cleaning pictures Hyderabad",
      "water tank maintenance work New Nallakunta",
    ],
  },
  blog: {
    title: "Water Tank Cleaning Tips & Guides | JVR Water Tank Cleaning",
    description:
      "Expert tips, hygiene advice, and maintenance guides on water tank cleaning frequency, sediment prevention, and domestic water care in Hyderabad.",
    canonical: `${SITE_URL}/blog/`,
    keywords: [
      "water tank cleaning tips",
      "water hygiene advice Hyderabad",
      "tank cleaning guide Chikkadpally",
      "water tank maintenance articles",
    ],
  },
  contact: {
    title: "Contact JVR Water Tank Cleaning Services | Chikkadpally, Hyderabad",
    description:
      "Contact JVR Water Tank Cleaning Services in Chikkadpally, New Nallakunta, Hyderabad. Available 24 hours for residential and commercial water tank cleaning. Call 91217 27674.",
    canonical: `${SITE_URL}/contact/`,
    keywords: [
      "contact JVR water tank cleaning",
      "water tank cleaning phone number Chikkadpally",
      "book water tank cleaning New Nallakunta",
      "Chikkadpally tank cleaner contact",
    ],
  },
};
