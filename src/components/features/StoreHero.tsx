import { SITE_CONFIG } from "@/constants/config";
import VerifiedBadge from "./VerifiedBadge";
import useScrollReveal from "@/hooks/useScrollReveal";

const SOCIAL_LINKS = [
  {
    name: "TikTok",
    href: SITE_CONFIG.socials.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.93a8.2 8.2 0 0 0 4.77 1.52V7.01a4.84 4.84 0 0 1-1.01-.32z" />
      </svg>
    ),
    color: "hover:bg-black hover:text-white hover:shadow-black/20",
  },
  {
    name: "YouTube",
    href: SITE_CONFIG.socials.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
    color: "hover:bg-red-500 hover:text-white hover:shadow-red-500/20",
  },
  {
    name: "Instagram",
    href: SITE_CONFIG.socials.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51a4.07 4.07 0 0 1 1.51-.98c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.87 5.87 0 0 0 1.38 2.13 5.87 5.87 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
      </svg>
    ),
    color:
      "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:shadow-pink-500/20",
  },
];

export default function StoreHero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section ref={ref} className="relative pt-12 pb-6 px-4 sm:pt-20 sm:pb-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Avatar */}
        <div style={show(0)}>
          <div className="relative group">
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 animate-avatar-ring opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-[1.5px] rounded-full bg-white" />
            <div className="relative size-24 sm:size-28 rounded-full overflow-hidden shadow-lg">
              <img
                src={SITE_CONFIG.avatarUrl}
                alt={SITE_CONFIG.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
              />
            </div>
            {/* Online dot */}
            <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 z-10">
              <span className="relative flex size-3.5">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full size-3.5 bg-emerald-500 border-2 border-white shadow-sm" />
              </span>
            </div>
          </div>
        </div>

        {/* Name + Badge */}
        <div className="mt-4" style={show(100)}>
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 flex items-center justify-center gap-1">
            {SITE_CONFIG.name}
            <VerifiedBadge />
          </h1>
          <p className="text-slate-400 text-sm font-medium mt-0.5 tracking-wide">
            {SITE_CONFIG.title}
          </p>
        </div>

        {/* Bio */}
        <p
          className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-md"
          dir="rtl"
          style={show(200)}
        >
          بساعدك تحمي نفسك وبياناتك على الإنترنت، وبقدم أدوات ومنتجات رقمية
          تساعدك في صناعة المحتوى والحماية
        </p>

        {/* Social buttons */}
        <div className="mt-5 flex items-center gap-3" style={show(300)}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className={`flex items-center justify-center size-10 rounded-xl glass-card text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${s.color}`}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mt-8 w-full flex items-center gap-3"
          style={show(400)}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5 text-blue-500"
            >
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <span className="text-xs font-semibold text-blue-600">
              المنتجات الرقمية
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
