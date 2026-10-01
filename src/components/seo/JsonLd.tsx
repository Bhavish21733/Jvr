import { BUSINESS_DATA } from "@/data/business";
import { SITE_URL } from "@/data/seo";
import { BlogPost } from "@/data/blog";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BUSINESS_DATA.name,
    "image": `${SITE_URL}/images/hero-tank-cleaning.jpg`,
    "@id": `${SITE_URL}/#business`,
    "url": SITE_URL,
    "telephone": BUSINESS_DATA.phone.international,
    "email": BUSINESS_DATA.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DATA.address.street,
      "addressLocality": BUSINESS_DATA.address.area,
      "addressRegion": BUSINESS_DATA.address.state,
      "postalCode": BUSINESS_DATA.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DATA.geo.latitude,
      "longitude": BUSINESS_DATA.geo.longitude,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Chikkadpally",
      },
      {
        "@type": "Place",
        "name": "New Nallakunta",
      },
      {
        "@type": "City",
        "name": "Hyderabad",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_URL}${post.image}`,
    "author": {
      "@type": "Organization",
      "name": BUSINESS_DATA.name,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_DATA.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/hero-tank-cleaning.jpg`,
      },
    },
    "datePublished": "2024-05-14T08:00:00+05:30",
    "dateModified": "2024-07-20T08:00:00+05:30",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
