export interface GalleryItem {
  id: string;
  title: string;
  category: "Overhead Tanks" | "Underground Sumps" | "Apartment Cleaning" | "Process";
  image: string;
  alt: string;
  description: string;
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Residential Water Tank Cleaning",
    category: "Overhead Tanks",
    image: "/images/residential-tank-cleaning.jpg",
    alt: "Professional cleaning of residential rooftop PVC water tank in Chikkadpally",
    description: "High-pressure jet wash and sediment removal for independent house rooftop water tank.",
    location: "Chikkadpally, Hyderabad",
  },
  {
    id: "g2",
    title: "Commercial Multi-Tank Facility Cleaning",
    category: "Apartment Cleaning",
    image: "/images/commercial-tank-cleaning.jpg",
    alt: "Commercial building rooftop multi-tank cleaning in New Nallakunta",
    description: "Systematic sanitization and de-sludging of high-capacity commercial rooftop reservoirs.",
    location: "New Nallakunta, Hyderabad",
  },
  {
    id: "g3",
    title: "Elevated Overhead Tank High-Pressure Wash",
    category: "Overhead Tanks",
    image: "/images/overhead-tank-cleaning.jpg",
    alt: "Technician on ladder power washing elevated rooftop water tank in Vidyanagar",
    description: "Deep algae scouring and high-pressure jet washing of elevated overhead water storage.",
    location: "Vidyanagar, Hyderabad",
  },
  {
    id: "g4",
    title: "Underground Concrete Sump Sludge Extraction",
    category: "Underground Sumps",
    image: "/images/underground-sump-cleaning.jpg",
    alt: "Underground masonry water sump cleaning with heavy-duty dewatering pump in Barkatpura",
    description: "Deep silt pumping, corner de-sludging, and wall wash for underground residential sump.",
    location: "Barkatpura, Hyderabad",
  },
  {
    id: "g5",
    title: "Industrial Water Reservoir Sanitization",
    category: "Process",
    image: "/images/industrial-tank-cleaning.jpg",
    alt: "Industrial stainless steel water tank power washing in Himayatnagar",
    description: "Heavy-duty cleaning and mineral descaling for industrial water holding vessels.",
    location: "Himayatnagar, Hyderabad",
  },
  {
    id: "g6",
    title: "Sintex Rooftop Tank Hygienic Power Wash",
    category: "Overhead Tanks",
    image: "/images/sump-sintex-cleaning.jpg",
    alt: "Sintex branded water tank thorough wash and sanitization in Narayanaguda",
    description: "High-pressure jet wash and non-abrasive wall scrubbing for Sintex rooftop tank.",
    location: "Narayanaguda, Hyderabad",
  },
];
