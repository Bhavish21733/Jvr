export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { label: "Residential Water Tank Cleaning", href: "/services/#residential" },
  { label: "Commercial Water Tank Cleaning", href: "/services/#commercial" },
  { label: "Overhead Tank Cleaning", href: "/services/#overhead" },
  { label: "Underground Tank Cleaning", href: "/services/#underground" },
  { label: "Industrial Tank Cleaning", href: "/services/#industrial" },
  { label: "Sump & Sintex Tank Cleaning", href: "/services/#sump-sintex" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];
