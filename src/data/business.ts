export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    locality: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  phone: {
    display: string;
    href: string;
    international: string;
    raw: string;
  };
  email: string;
  hours: {
    display: string;
    is24x7: boolean;
    schemaSpec: string;
  };
  reviews: {
    count: number;
    platform: string;
    badgeText: string;
    googleMapsUrl: string;
    reviewUrl: string;
  };
  mapEmbedUrl: string;
  directionsUrl: string;
  serviceAreas: string[];
  websiteUrl: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "JVR Water Tank Cleaning Services",
  category: "Water Tank Cleaning Service",
  tagline: "Professional & Hygienic Water Tank Cleaning in Chikkadpally, Hyderabad",
  description:
    "JVR Water Tank Cleaning Services provides reliable, thorough, and hygienic overhead and underground water tank cleaning for residential homes, apartments, and commercial buildings in Chikkadpally, New Nallakunta, Hyderabad.",
  address: {
    street: "Lane Number 3, Chikkadpally",
    locality: "Chikkadpally",
    area: "New Nallakunta",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500020",
    full: "Lane Number 3, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020",
  },
  geo: {
    latitude: 17.4027462,
    longitude: 78.4979017,
  },
  phone: {
    display: "91217 27674",
    href: "tel:+919121727674",
    international: "+91 91217 27674",
    raw: "9121727674",
  },
  email: "ramavathdevi531@gmail.com",
  hours: {
    display: "Open 24 Hours",
    is24x7: true,
    schemaSpec: "Mo-Su 00:00-24:00",
  },
  reviews: {
    count: 23,
    platform: "Google Reviews",
    badgeText: "Verified Google Reviews",
    googleMapsUrl:
      "https://www.google.com/maps/place/JVR+Water+Tank+Cleaning+Services/@17.4027462,78.4979017,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9972b056d669:0x15cf32fc9527731b!8m2!3d17.4027462!4d78.4979017",
    reviewUrl:
      "https://www.google.com/maps/place/JVR+Water+Tank+Cleaning+Services/@17.4027462,78.4979017,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9972b056d669:0x15cf32fc9527731b!8m2!3d17.4027462!4d78.4979017",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1883539081955!2d78.4979017!3d17.402746200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9972b056d669%3A0x15cf32fc9527731b!2sJVR%20Water%20Tank%20Cleaning%20Services!5e0!3m2!1sen!2sin!4v1790827173346!5m2!1sen!2sin",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=JVR+Water+Tank+Cleaning+Services+Chikkadpally+New+Nallakunta+Hyderabad",
  serviceAreas: [
    "Chikkadpally",
    "New Nallakunta",
    "Nallakunta",
    "Vidyanagar",
    "Himayatnagar",
    "Barkatpura",
    "Kachiguda",
    "Narayanaguda",
    "Musheerabad",
    "RTC X Roads",
    "Hyderabad",
  ],
  websiteUrl: "https://jvrwatertankcleaning.com",
};
