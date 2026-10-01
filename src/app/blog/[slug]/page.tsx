import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle2,
  Bookmark,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/hero/PageHero";
import ContactConversionBlock from "@/components/sections/ContactConversionBlock";
import { BlogPostJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS } from "@/data/blog";
import { BUSINESS_DATA } from "@/data/business";
import { SITE_URL } from "@/data/seo";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | JVR Water Tank Cleaning Services",
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}/`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: `${SITE_URL}${post.image}`,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  const breadcrumbs = [
    { label: "Blog", href: "/blog/" },
    { label: post.title },
  ];

  const schemaBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Blog", item: `${SITE_URL}/blog/` },
    { name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
  ];

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BreadcrumbsJsonLd items={schemaBreadcrumbs} />

      {/* Internal Page Hero matching About Us aesthetic */}
      <PageHero
        title={post.title}
        badge={post.category}
        description={post.excerpt}
        bgImage="/images/about-hero.jpg"
        breadcrumbs={breadcrumbs}
        meta={{
          author: post.author,
          date: post.date,
          readTime: post.readTime,
        }}
        primaryCtaText="Book a Cleaning"
        primaryCtaHref="/contact/"
        secondaryCtaText={`Call ${BUSINESS_DATA.phone.display}`}
        secondaryCtaHref={BUSINESS_DATA.phone.href}
      />

      {/* 2-Column Editorial Layout: Left Blog Content | Right Sticky Sidebar & CTAs */}
      <article className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Main Blog Article Content (col-span-8) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Article Image */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Lead Summary Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-bg border border-slate-200 text-slate-800 text-base sm:text-lg leading-relaxed font-medium shadow-sm">
                {post.content.lead}
              </div>

              {/* Table of Contents Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                  Table of Contents:
                </h3>
                <ul className="space-y-2 text-sm text-brand-blue">
                  {post.content.sections.map((section, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono text-xs mt-0.5">{idx + 1}.</span>
                      <a
                        href={`#section-${idx}`}
                        className="hover:underline hover:text-brand-navy font-semibold"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Main Body Sections */}
              <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-lg">
                {post.content.sections.map((sec, sIdx) => (
                  <section key={sIdx} id={`section-${sIdx}`} className="space-y-4 scroll-mt-24">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight pt-2 border-b border-slate-100 pb-2">
                      {sec.heading}
                    </h2>

                    {sec.body.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {/* Callout Box if present */}
                    {sec.callout && (
                      <div className="my-6 p-6 rounded-2xl bg-brand-navy text-white border border-slate-800 shadow-md space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-aqua">
                          {sec.callout.title}
                        </span>
                        <p className="text-sm sm:text-base text-slate-200 font-normal">
                          {sec.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Bullet list if present */}
                    {sec.listItems && (
                      <ul className="space-y-3 pt-2">
                        {sec.listItems.map((li, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-brand-navy text-white border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <span>Key Takeaways for Property Owners</span>
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
                  {post.content.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brand-green font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with CTAs & Recent Posts (col-span-4) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Quick Booking & High-Conversion Contact Card */}
              <div className="bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>24/7 Fast Response</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    Need Tank Cleaning Today?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Same-day high-pressure washing, sludge removal, and sanitization across Chikkadpally &amp; Hyderabad.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <Link
                    href="/contact/"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-950/60 transition-all text-center group"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={BUSINESS_DATA.phone.href}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all text-center"
                  >
                    <Phone className="w-4 h-4 text-sky-600 animate-pulse shrink-0" />
                    <span>Call {BUSINESS_DATA.phone.display}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${BUSINESS_DATA.phone.raw}?text=${encodeURIComponent("Hi JVR Water Tank Cleaning, I would like to enquire about water tank cleaning services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                {/* Trust Highlights */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>5.0 ★ Google Rating ({BUSINESS_DATA.reviews.count} Reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Non-toxic, safe sanitization flushes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sintex, PVC, RCC &amp; Sump experts</span>
                  </div>
                </div>
              </div>

              {/* Recent Blog Posts Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-sky-600" />
                  <span>Recent Articles</span>
                </h3>

                <div className="space-y-4 divide-y divide-slate-100">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.slug}
                      href={`/blog/${rPost.slug}/`}
                      className="pt-4 first:pt-0 group flex items-start gap-3.5 hover:opacity-90 transition-opacity"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <span className="inline-block text-[10px] font-bold text-sky-600 uppercase tracking-wider">
                          {rPost.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                          {rPost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {rPost.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {rPost.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>

      {/* Final Conversion CTA */}
      <ContactConversionBlock />
    </>
  );
}
