import { SITE_CONFIG } from "@/constants/config";
import { Shield, Zap, Building2, Check, Star } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const PLANS = [
  {
    id: "basic",
    nameAr: "الباقة الأساسية",
    priceAr: "150",
    currency: "جنيه",
    periodAr: "/ استشارة",
    descAr: "مناسبة للأفراد اللي محتاجين مساعدة سريعة",
    icon: Shield,
    accent: {
      badge: "bg-slate-100 text-slate-600 border-slate-200",
      iconBg: "bg-gradient-to-br from-slate-500 to-slate-600",
      iconShadow: "shadow-slate-500/20",
      button: "bg-slate-700 hover:bg-slate-800 shadow-slate-700/25 hover:shadow-slate-700/35",
    },
    featured: false,
    features: [
      "استشارة واحدة لمدة 30 دقيقة",
      "تأمين حساب واحد",
      "نصائح حماية أساسية",
      "متابعة لمدة يوم واحد",
    ],
  },
  {
    id: "pro",
    nameAr: "الباقة الاحترافية",
    priceAr: "350",
    currency: "جنيه",
    periodAr: "/ استشارة",
    descAr: "الأنسب لمن يحتاج حماية شاملة لحساباته",
    icon: Zap,
    accent: {
      badge: "bg-blue-50 text-blue-600 border-blue-100",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      iconShadow: "shadow-blue-500/25",
      button: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-blue-500/25 hover:shadow-blue-500/35",
    },
    featured: true,
    features: [
      "استشارة مفصلة لمدة ساعة كاملة",
      "تأمين حتى 5 حسابات",
      "فحص ثغرات أولي",
      "تقرير أمني مبسط",
      "متابعة لمدة أسبوع",
    ],
  },
  {
    id: "enterprise",
    nameAr: "باقة الشركات",
    priceAr: "800",
    currency: "جنيه",
    periodAr: "/ شهرياً",
    descAr: "حماية شاملة للشركات والمشاريع الكبيرة",
    icon: Building2,
    accent: {
      badge: "bg-purple-50 text-purple-600 border-purple-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-violet-600",
      iconShadow: "shadow-purple-500/25",
      button: "bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 shadow-purple-500/25 hover:shadow-purple-500/35",
    },
    featured: false,
    features: [
      "استشارات غير محدودة طوال الشهر",
      "تأمين جميع حسابات الشركة",
      "فحص ثغرات شامل ودوري",
      "تقرير أمني تفصيلي",
      "خطة حماية بيانات كاملة",
      "دعم فني أولوية 24/7",
    ],
  },
] as const;

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  const handleBook = (planName: string) => {
    const text = encodeURIComponent(
      `مرحباً يوسف، أنا مهتم بـ ${planName} وعايز أحجز.`
    );
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <section id="pricing" className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14" style={show(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-semibold tracking-wide mb-4">
            <Star className="size-3.5" />
            الأسعار
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            اختار الباقة المناسبة ليك
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            باقات مرنة تناسب الأفراد والشركات بأسعار تنافسية
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {PLANS.map((plan, i) => {
            const IconComp = plan.icon;
            return (
              <div
                key={plan.id}
                className={plan.featured ? "md:-mt-4 md:mb-0" : ""}
                style={show(150 + i * 150)}
              >
                <div
                  className={`relative rounded-2xl p-6 sm:p-7 h-full transition-all duration-300 hover:-translate-y-1.5 group cursor-default ${
                    plan.featured
                      ? "bg-white/90 dark:bg-[#161b2e]/90 backdrop-blur-xl border-2 border-blue-200 dark:border-blue-500/20 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5"
                      : "glass-card"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/30">
                        <Star className="size-3 fill-white" />
                        الأكثر طلباً
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center size-12 rounded-xl ${plan.accent.iconBg} shadow-lg ${plan.accent.iconShadow} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComp className="size-6 text-white" />
                  </div>

                  {/* Plan name */}
                  <h3
                    className="font-heading text-lg font-bold text-slate-800 mb-1"
                    dir="rtl"
                  >
                    {plan.nameAr}
                  </h3>
                  <p
                    className="text-sm text-slate-400 leading-relaxed mb-5"
                    dir="rtl"
                  >
                    {plan.descAr}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6" dir="rtl">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-800">
                      {plan.priceAr}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {plan.currency}
                    </span>
                    <span className="text-xs text-slate-400">
                      {plan.periodAr}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5" />

                  {/* Features */}
                  <ul className="space-y-3 mb-7" dir="rtl">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <span
                          className={`flex-shrink-0 flex items-center justify-center size-5 rounded-full mt-0.5 ${
                            plan.featured
                              ? "bg-blue-100 text-blue-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleBook(plan.nameAr)}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${plan.accent.button}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    احجز الآن
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8 sm:mt-10" style={show(650)}>
          <p className="text-sm text-slate-400 leading-relaxed" dir="rtl">
            مش متأكد أنهي باقة تناسبك؟{" "}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("مرحباً يوسف، محتاج مساعدة في اختيار الباقة المناسبة ليا.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:text-blue-600 underline underline-offset-2 transition-colors"
            >
              كلمني وهساعدك تختار
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
