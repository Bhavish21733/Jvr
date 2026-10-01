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
  { label: "Residential Overhead Tank Cleaning", href: "/services/#overhead-tank-cleaning" },
  { label: "Underground Sump Cleaning", href: "/services/#underground-sump-cleaning" },
  { label: "Apartment & Community Tank Cleaning", href: "/services/#apartment-community-tank-cleaning" },
  { label: "Commercial Tank Cleaning", href: "/services/#commercial-tank-cleaning" },
  { label: "Sludge & Biofilm Removal", href: "/services/#sludge-biofilm-removal" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "About Us", href: "/about/" },
  { label: "Services Overview", href: "/services/" },
  { label: "Service Gallery", href: "/gallery/" },
  { label: "Tank Care Blog", href: "/blog/" },
  { label: "Contact & Location", href: "/contact/" },
];
