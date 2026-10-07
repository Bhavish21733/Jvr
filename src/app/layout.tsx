import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";
import ScrollPopupModal from "@/components/ui/ScrollPopupModal";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";
import { BUSINESS_DATA } from "@/data/business";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#082f49",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIGS.home.title,
    template: "%s",
  },
  description: SEO_CONFIGS.home.description,
  keywords: SEO_CONFIGS.home.keywords,
  authors: [{ name: BUSINESS_DATA.name }],
  creator: BUSINESS_DATA.name,
  publisher: BUSINESS_DATA.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "p5wu1m9kcGEaFA1qgrUnBpgku4mSO1IxIUhlXa_HbHY",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS_DATA.name,
    title: SEO_CONFIGS.home.title,
    description: SEO_CONFIGS.home.description,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DATA.name} Chikkadpally Hyderabad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIGS.home.title,
    description: SEO_CONFIGS.home.description,
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="p5wu1m9kcGEaFA1qgrUnBpgku4mSO1IxIUhlXa_HbHY"
        />
        <LocalBusinessJsonLd />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 lg:pb-0"
        suppressHydrationWarning
      >
        <ScrollRevealProvider />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
        <ScrollPopupModal />
      </body>
    </html>
  );
}
