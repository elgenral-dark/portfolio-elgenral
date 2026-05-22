import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import useScrollReveal from "@/hooks/useScrollReveal";
import cyberCourseImg from "@/assets/product-cybersecurity-course.jpg";
import qureoImg from "@/assets/product-qureo.jpg";

type FilterType = "all" | "free" | "paid";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  isFree: boolean;
  ctaLabel: string;
  ctaLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  featured?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "turning-point-book",
    image: "https://image2url.com/r2/default/images/1775159037001-8ae0f367-db3f-4320-b5c8-4be1890e0d68.png",
    title: 'كتاب "نقطة تحول"',
    description:
      "كتاب عملي هيغير طريقة تفكيرك ويخليك تبدأ تطور نفسك خطوة بخطوة — هيساعدك تبني عقلية قوية وتبعد عن التسويف وتبدأ تحقق أهدافك فعلاً",
    price: "30 جنيه",
    isFree: false,
    ctaLabel: "اشتري الآن",
    ctaLink: "https://wa.me/201068524301?text=عايز%20أشتري%20كتاب%20نقطة%20تحول%20-%20رقم%20الكاش%2001287288506",
    secondaryLabel: "تواصل واتساب",
    secondaryLink: "https://wa.me/201068524301",
    featured: true,
  },
  {
    id: "qureo-platform",
    image: qureoImg,
    title: "حل منصة Qureo كاملة",
    description:
      "حل جميع فصول منصة Qureo (42 فصل) وإنجاز كل المهام الدراسية — نضمن لك تقدير \"جيد جداً\" على الأقل مع إمكانية تحقيق \"ممتاز\" حسب طلبك. نبدأ الشغل فوراً بعد تأكيد التحويل.",
    price: "150 جنيه",
    isFree: false,
    ctaLabel: "اطلب الخدمة",
    ctaLink: "https://wa.me/201068524301?text=عايز%20خدمة%20حل%20منصة%20Qureo%20-%20رقم%20الكاش%2001287288506",
    secondaryLabel: "تواصل واتساب",
    secondaryLink: "https://wa.me/201068524301",
    featured: false,
  },
  {
    id: "cybersecurity-course",
    image: cyberCourseImg,
    title: "كورس تعليم الأمن السيبراني من الصفر للاحتراف",
    description:
      "كورس مجاني شامل على يوتيوب هيأخذك من الصفر لحد ما تفهم أساسيات الأمن السيبراني — هتتعلم إزاي تحمي نفسك، تكتشف الثغرات، وتفهم عالم الهاكينج الأخلاقي خطوة بخطوة",
    price: "مجاني",
    isFree: true,
    ctaLabel: "شاهد الكورس",
    ctaLink: "https://youtube.com/playlist?list=PLM3oLluNOQ4yqEwm14Arjbrk5HuHAtsQo&si=M9sAGMEUqsFG-wWo",
    featured: false,
  },
];

const FILTERS: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  {
    id: "all",
    label: "الكل",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    id: "paid",
    label: "مدفوع",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
  {
    id: "free",
    label: "مجاني",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
  },
];

export default function ProductsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return PRODUCTS;
    if (activeFilter === "free") return PRODUCTS.filter((p) => p.isFree);
    return PRODUCTS.filter((p) => !p.isFree);
  }, [activeFilter]);

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section ref={ref} className="px-4 pb-12 sm:pb-16">
      <div className="max-w-3xl mx-auto">
        {/* Filter bar */}
        <div className="flex justify-center mb-6 sm:mb-8" style={show(0)} dir="rtl">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl glass-card">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-500 hover:text-slate-700 hover:bg-white/60"
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                  {/* Count badge */}
                  <span
                    className={`inline-flex items-center justify-center size-5 rounded-full text-[10px] font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {
                      filter.id === "all"
                        ? PRODUCTS.length
                        : filter.id === "free"
                        ? PRODUCTS.filter((p) => p.isFree).length
                        : PRODUCTS.filter((p) => !p.isFree).length
                    }
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 transition-all duration-500"
          style={{ minHeight: filteredProducts.length === 0 ? "200px" : "auto" }}
        >
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ease-out ${
                product.featured ? "sm:col-span-2" : ""
              }`}
              style={{
                animation: "filter-in 0.45s ease-out forwards",
                animationDelay: `${i * 80}ms`,
                opacity: 0,
              }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                isFree={product.isFree}
                ctaLabel={product.ctaLabel}
                ctaLink={product.ctaLink}
                secondaryLabel={product.secondaryLabel}
                secondaryLink={product.secondaryLink}
                delay={0}
                featured={product.featured}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center" dir="rtl">
            <div className="flex items-center justify-center size-16 rounded-2xl bg-slate-100 border border-slate-200 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-7 text-slate-400">
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-slate-700 text-base mb-1">
              مفيش منتجات في التصنيف ده
            </h3>
            <p className="text-sm text-slate-400">
              جرّب اختار تصنيف تاني أو استنى منتجات جديدة قريبًا
            </p>
          </div>
        )}

        {/* More coming soon */}
        <div className="mt-10 text-center" style={show(300)}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-slate-500 text-sm font-medium">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full size-2 bg-blue-500" />
            </span>
            منتجات جديدة قريباً
          </div>
        </div>
      </div>
    </section>
  );
}
