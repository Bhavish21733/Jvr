export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Booking" | "Pricing";
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How often should I get my water tank cleaned?",
    answer:
      "For most residential homes and apartments in Hyderabad, we recommend cleaning overhead water tanks and underground sumps at least once every 6 months. Regular semi-annual cleaning prevents heavy silt accumulation, bacterial biofilm, and pipe clogging.",
    category: "General",
  },
  {
    question: "What types of water tanks do you clean?",
    answer:
      "We clean all standard domestic and commercial water storage systems, including rooftop PVC/plastic tanks (such as Sintex and multi-layer brands), concrete (RCC) overhead tanks, and underground masonry/concrete sumps.",
    category: "General",
  },
  {
    question: "How do I book a water tank cleaning service?",
    answer:
      "You can book directly by calling us at 91217 27674, messaging us on WhatsApp, or emailing ramavathdevi531@gmail.com. We will confirm your tank type, location in Chikkadpally or nearby areas, and schedule a convenient time slot.",
    category: "Booking",
  },
  {
    question: "Do you provide water tank cleaning for both homes and apartments?",
    answer:
      "Yes, we provide water tank cleaning for individual residential homes, independent villas, duplexes, apartment buildings, residential communities, and commercial spaces such as shops and offices.",
    category: "General",
  },
  {
    question: "Are you open on weekends and 24 hours?",
    answer:
      "Yes, JVR Water Tank Cleaning Services operates 24 hours, 7 days a week. You can reach out at any time to schedule routine cleaning or emergency tank de-sludging.",
    category: "Booking",
  },
  {
    question: "What areas in Hyderabad do you serve?",
    answer:
      "We are based in Lane Number 3, Chikkadpally, New Nallakunta (Telangana 500020) and serve Chikkadpally and neighboring localities across Hyderabad, including New Nallakunta, Vidyanagar, Barkatpura, Himayatnagar, Narayanaguda, Kachiguda, Musheerabad, RTC X Roads, and surrounding areas.",
    category: "General",
  },
  {
    question: "How long does the water tank cleaning process take?",
    answer:
      "The duration depends on the capacity and condition of the tank. A standard residential overhead tank typically takes around 1 to 2 hours, whereas large underground sumps or multi-tank apartment systems may take 2 to 4 hours.",
    category: "Process",
  },
  {
    question: "Do I need to empty the tank completely before your team arrives?",
    answer:
      "It is helpful if the water level is kept low before our scheduled visit so less usable water is discarded, but our team brings the necessary dewatering and sludge pumping equipment to drain the remaining water and silt efficiently.",
    category: "Process",
  },
];
