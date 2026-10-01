import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 group justify-between">
      <div>
        {/* Article Image */}
        <Link
          href={`/blog/${post.slug}/`}
          className="relative aspect-[16/10] w-full block bg-slate-900 overflow-hidden"
          title={post.title}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-bold bg-slate-950/80 text-sky-300 backdrop-blur-sm border border-slate-800">
            {post.category}
          </div>
        </Link>

        {/* Article Body */}
        <div className="p-6 space-y-3">
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
            <Link href={`/blog/${post.slug}/`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/blog/${post.slug}/`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 group/link"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] font-medium text-slate-400">By JVR Team</span>
      </div>
    </article>
  );
}
