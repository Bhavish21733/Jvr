import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/data/blog";

export default function LatestBlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Water Care &amp; Hygiene Guides"
          title="Educational Water Storage Advice"
          subtitle="Helpful articles on tank cleaning frequency, underground sump protection, and plastic tank maintenance."
        />

        {/* 3 Balanced Uniform Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Header */}
              <Link
                href={`/blog/${post.slug}/`}
                className="relative aspect-[16/10] w-full block bg-slate-900 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-sky-300 border border-slate-700/80 backdrop-blur-sm">
                  {post.category}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    <Link href={`/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 group-hover:text-sky-800 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-slate-400 font-medium">By JVR Team</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <span>Browse All Water Care Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
