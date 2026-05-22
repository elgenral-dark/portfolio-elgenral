import { Download, ExternalLink } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  isFree: boolean;
  ctaLabel: string;
  ctaLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  delay?: number;
  featured?: boolean;
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  isFree,
  ctaLabel,
  ctaLink,
  secondaryLabel,
  secondaryLink,
  delay = 0,
  featured = false,
}: ProductCardProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${featured ? 'ring-2 ring-blue-200/60' : ''}`}>
        {/* Product image */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[4/3]'}`}>
          <img
            src={image}
            alt={title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Price badge */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md bg-amber-500/90 text-white">
                منتج مميز
              </span>
            )}
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md ${
                isFree
                  ? "bg-emerald-500/90 text-white"
                  : "bg-blue-500/90 text-white"
              }`}
            >
              {price}
            </span>
          </div>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 animate-shimmer" />
          </div>
        </div>

        {/* Card content */}
        <div className={`${featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`} dir="rtl">
          <h3 className={`font-heading font-bold text-slate-800 leading-relaxed mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 ${featured ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
            {title}
          </h3>
          <p className={`text-slate-500 leading-relaxed mb-5 ${featured ? 'text-sm sm:text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex gap-2.5 ${featured ? 'flex-col sm:flex-row' : 'flex-col'}`}>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${
                isFree
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:from-emerald-600 hover:to-teal-600"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-blue-500/25 hover:shadow-blue-500/35 hover:from-blue-600 hover:to-indigo-600"
              }`}
            >
              {isFree ? (
                <Download className="size-4" />
              ) : (
                <ExternalLink className="size-4" />
              )}
              {ctaLabel}
            </a>

            {secondaryLabel && secondaryLink && (
              <a
                href={secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
