import { useCallback, useEffect, useState } from "react";
import { Shield, Menu, X, Package, Moon, Sun } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "@/lib/ThemeContext";

const NAV_LINKS = [
  { id: "services", label: "الخدمات" },
  { id: "pricing", label: "الأسعار" },
  { id: "testimonials", label: "آراء العملاء" },
  { id: "book", label: "احجز استشارة" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggle } = useThemeContext();

  // Track scroll position for glass backdrop intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "py-2.5 bg-[#0f1219]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "py-2.5 bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className={`flex items-center justify-center size-9 rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md shadow-blue-500/20"
                : isDark
                  ? "bg-white/10 backdrop-blur-md border border-white/10"
                  : "bg-white/50 backdrop-blur-md border border-white/60"
            }`}
          >
            <Shield
              className={`size-4.5 transition-colors duration-300 ${
                scrolled ? "text-white" : "text-blue-600"
              }`}
            />
          </div>
          <span
            className={`font-heading font-bold text-sm sm:text-base transition-colors duration-300 ${
              isDark ? "text-slate-200" : scrolled ? "text-slate-800" : "text-slate-700"
            }`}
          >
            {SITE_CONFIG.aliasAr}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {/* Active indicator pill */}
                {isActive && (
                  <span className={`absolute inset-0 rounded-full animate-fade-in ${isDark ? "bg-blue-500/10 border border-blue-500/20" : "bg-blue-50 border border-blue-100"}`} />
                )}
                <span className="relative">{link.label}</span>
              </button>
            );
          })}

          {/* Products link */}
          <button
            onClick={() => navigate("/products")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isDark
                ? "text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <Package className="size-3.5" />
            المنتجات
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className={`flex items-center justify-center size-9 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? "bg-white/10 border border-white/10 text-amber-400 hover:bg-white/15 hover:text-amber-300"
                : "bg-slate-100 border border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
            }`}
            aria-label="تبديل الوضع"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* CTA */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-md shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            واتساب
          </a>
        </div>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          <button
            onClick={toggle}
            className={`flex items-center justify-center size-10 rounded-xl transition-all duration-300 ${
              isDark
                ? "bg-white/10 border border-white/10 text-amber-400"
                : "bg-white/50 backdrop-blur-md border border-white/60 text-slate-500"
            }`}
            aria-label="تبديل الوضع"
          >
            {isDark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex items-center justify-center size-10 rounded-xl transition-all duration-200 ${
              isDark
                ? "bg-white/10 border border-white/10 text-slate-300 hover:bg-white/15"
                : "bg-white/50 backdrop-blur-md border border-white/60 text-slate-600 hover:bg-white/70"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`mx-4 mt-2 p-4 rounded-2xl shadow-lg ${
          isDark
            ? "bg-[#161b2e]/95 backdrop-blur-xl border border-white/10 shadow-black/20"
            : "bg-white/80 backdrop-blur-xl border border-white/60 shadow-slate-900/5"
        }`}>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-blue-50 text-blue-600 border border-blue-100"
                      : isDark
                        ? "text-slate-300 hover:bg-white/5"
                        : "text-slate-600 hover:bg-slate-50"
                  }`}
                  dir="rtl"
                >
                  {link.label}
                </button>
              );
            })}

            {/* Mobile Products link */}
            <button
              onClick={() => { navigate("/products"); setMobileOpen(false); }}
              className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-end gap-2 transition-all duration-200 ${
                isDark
                  ? "text-slate-300 hover:bg-blue-500/10 hover:text-blue-400"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
              dir="rtl"
            >
              <Package className="size-4" />
              المنتجات
            </button>

            {/* Mobile CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow-md shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل على واتساب
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
