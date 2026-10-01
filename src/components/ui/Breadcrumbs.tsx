import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-0 text-xs sm:text-sm font-medium text-slate-400 overflow-x-auto"
    >
      <ol className="flex items-center space-x-2 whitespace-nowrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-slate-300 hover:text-white transition-colors duration-150"
            title="Return to Home"
          >
            <Home className="w-4 h-4 mr-1.5 text-sky-400" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-500 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sky-300 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
