export interface ServiceItem {
  id: string;
  anchor: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  idealFor: string[];
  keyHighlights: string[];
  processSummary: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    anchor: "residential",
    title: "Residential Water Tank Cleaning",
    shortDesc:
      "Complete hygiene washing and sediment extraction for independent houses, duplexes, and residential villas in Chikkadpally & Hyderabad.",
    fullDesc:
      "Household water storage requires routine maintenance to eliminate settled soil, sand, and organic film from incoming municipal and groundwater lines. We provide comprehensive de-silting, surface scouring, and clean freshwater rinsing so your domestic water remains fresh for daily family use.",
    image: "/images/residential-tank-cleaning.jpg",
    badge: "Most Popular for Homes",
    idealFor: [
      "Independent houses & villas",
      "Duplexes & individual floors",
      "Domestic rooftop water storage",
      "Private residential compounds",
    ],
    keyHighlights: [
      "Thorough extraction of settled bottom silt & mud",
      "Wall scrubbing to remove biofilm and scale",
      "Dewatering & clean freshwater flushing",
      "Fast turnaround with minimal water downtime",
    ],
    processSummary:
      "Draining settled water, manual and pressurized wall scrubbing, vacuum/sludge extraction, and final hygienic rinse.",
  },
  {
    id: "commercial",
    anchor: "commercial",
    title: "Commercial Water Tank Cleaning",
    shortDesc:
      "Flexible, 24/7 scheduled water storage maintenance for offices, shops, restaurants, and commercial complexes.",
    fullDesc:
      "Businesses require clean, safe water storage with zero interruption to daily working hours. We organize flexible round-the-clock tank cleaning tailored to your operating schedule, ensuring full sanitization of overhead reservoirs and basement sumps.",
    image: "/images/commercial-tank-cleaning.jpg",
    badge: "24/7 Flexible Scheduling",
    idealFor: [
      "Office buildings & corporate spaces",
      "Retail shops, restaurants & cafes",
      "Schools, colleges & training centers",
      "Diagnostic clinics & commercial centers",
    ],
    keyHighlights: [
      "Round-the-clock service scheduling (day or night)",
      "High-capacity multi-tank cleaning capability",
      "Systematic dewatering with rapid restoration",
      "Direct coordination with property managers",
    ],
    processSummary:
      "Off-peak execution, comprehensive interior sanitization, heavy dirt evacuation, and verified spotless refill readiness.",
  },
  {
    id: "overhead",
    anchor: "overhead",
    title: "Overhead Tank Cleaning",
    shortDesc:
      "Elevated rooftop water tank cleaning for PVC, Sintex, multi-layer plastic, and concrete (RCC) roof tanks.",
    fullDesc:
      "Rooftop tanks are constantly exposed to direct sunlight and ambient temperatures, accelerating algae growth and biofilm accumulation along inner wall ribs. Our elevated tank cleaning clears internal grime and flushed sediment without damaging tank structure.",
    image: "/images/overhead-tank-cleaning.jpg",
    badge: "Rooftop & RCC Tanks",
    idealFor: [
      "Rooftop PVC & Sintex plastic tanks",
      "Multi-layer polyethylene water tanks",
      "Concrete (RCC) rooftop overhead reservoirs",
      "Apartment community distribution tanks",
    ],
    keyHighlights: [
      "Removal of algae coating from plastic ribs & corners",
      "High-pressure jet washing of interior surfaces",
      "Sediment evacuation from tank base",
      "Inspection of lid sealing & overflow vents",
    ],
    processSummary:
      "Dewatering, high-pressure jet washing, algae scouring, vacuum sludge extraction, and freshwater rinse.",
  },
  {
    id: "underground",
    anchor: "underground",
    title: "Underground Tank Cleaning",
    shortDesc:
      "Deep silt evacuation, wall scouring, and sanitization for concrete and masonry underground water storage sumps.",
    fullDesc:
      "Underground sumps act as the primary collection point for municipal and tanker water, accumulating heavy layers of soil, rust particles, and street runoff dust over time. We extract thick bottom sludge and scour masonry surfaces to restore tank hygiene.",
    image: "/images/underground-sump-cleaning.jpg",
    badge: "Deep Silt Evacuation",
    idealFor: [
      "Residential underground concrete sumps",
      "Apartment central collection sumps",
      "Commercial masonry storage reservoirs",
      "Rainwater harvesting holding tanks",
    ],
    keyHighlights: [
      "High-capacity sludge pumping and heavy silt evacuation",
      "Deep brushing of porous masonry walls",
      "Corner-to-corner sediment clearing",
      "Freshwater final flush before refilling",
    ],
    processSummary:
      "Specialized sump dewatering, heavy sediment extraction, floor and wall brushing, followed by final evacuation and fresh water rinse.",
  },
  {
    id: "industrial",
    anchor: "industrial",
    title: "Industrial Tank Cleaning",
    shortDesc:
      "Heavy-duty water storage cleaning for small-to-medium industrial units, workshops, and warehouse facilities.",
    fullDesc:
      "Industrial operations depend on consistent water clarity for utility, cooling, and staff facilities. We provide planned maintenance for large-volume industrial water reservoirs, removing mineral scaling and heavy debris efficiently.",
    image: "/images/industrial-tank-cleaning.jpg",
    badge: "Heavy-Duty Capacity",
    idealFor: [
      "Manufacturing units & fabrication workshops",
      "Warehouses & logistics storage facilities",
      "Automobile service stations",
      "Industrial estates around Hyderabad",
    ],
    keyHighlights: [
      "High-volume water reservoir de-sludging",
      "Intensive surface descaling & dirt removal",
      "Planned downtime scheduling to protect operations",
      "Clear documentation and direct telephone support",
    ],
    processSummary:
      "Staged dewatering, mechanical surface agitation, heavy sludge pumping, and multi-pass clean water rinsing.",
  },
  {
    id: "sump-sintex",
    anchor: "sump-sintex",
    title: "Sump & Sintex Tank Cleaning",
    shortDesc:
      "Specialized care for plastic Sintex tanks and combined sump networks to prevent sediment migration into household taps.",
    fullDesc:
      "Sintex and polyethylene tanks have specialized molded contours and ribs where silt and biofilm easily get trapped. We utilize non-abrasive, hygienic cleaning techniques that thoroughly sanitize plastic surfaces without scratching or compromising tank integrity.",
    image: "/images/sump-sintex-cleaning.jpg",
    badge: "Plastic & Polyethylene Care",
    idealFor: [
      "Sintex 500L, 1000L, 2000L & 5000L tanks",
      "Triple-layer & foam-insulated plastic tanks",
      "Combined underground sump + Sintex setups",
      "Residential & commercial property setups",
    ],
    keyHighlights: [
      "Non-abrasive scrubbing safe for plastic walls",
      "Deep extraction of stubborn corner silt",
      "Odor neutralization and organic film breakdown",
      "Clean freshwater flushing to restore purity",
    ],
    processSummary:
      "Safe dewatering, gentle yet thorough wall brushing, complete bottom vacuuming, and freshwater sanitization rinse.",
  },
];

export const CLEANING_STEPS = [
  {
    step: "01",
    title: "Enquire",
    desc: "Call 91217 27674 or request a cleaning online. We confirm your tank type, capacity, and location in Chikkadpally, New Nallakunta, or nearby Hyderabad areas.",
  },
  {
    step: "02",
    title: "Assess",
    desc: "Our cleaning team arrives at your scheduled time slot, inspects water storage levels, and sets up dewatering and pumping equipment.",
  },
  {
    step: "03",
    title: "Clean",
    desc: "We extract bottom mud and sludge, scrub interior walls to eliminate biofilm, and use high-pressure washing on all corners and surfaces.",
  },
  {
    step: "04",
    title: "Complete",
    desc: "The tank is rinsed with clean water, thoroughly evacuated of all loosened particles, and left spotless and ready for fresh water refilling.",
  },
];
