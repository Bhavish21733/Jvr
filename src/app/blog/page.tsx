import { Metadata } from "next";
import PageHero from "@/components/hero/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS } from "@/data/blog";
import { BUSINESS_DATA } from "@/data/business";
import { SEO_CONFIGS, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: SEO_CONFIGS.blog.title,
  description: SEO_CONFIGS.blog.description,
  alternates: {
    canonical: SEO_CONFIGS.blog.canonical,
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [{ label: "Blog" }];
  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Blog", item: `${SITE_URL}/blog/` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero */}
      <PageHero
        title="Water Tank Care &amp;"
        titleHighlight="Hygiene Guides"
        badge="Educational Articles"
        description="Practical advice, recommended cleaning intervals, and maintenance guides to keep your residential and commercial water storage clean, safe, and hygienic in Hyderabad."
        bgImage="/images/about-hero.jpg"
        breadcrumbs={breadcrumbs}
        primaryCtaText="Book a Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-brand-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Featured Water Hygiene Guides
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Practical guides designed to help homeowners, apartment associations, and property managers protect water quality and plumbing fixtures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <ContactConversionBlock />
    </>
  );
}
