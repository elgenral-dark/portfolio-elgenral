import { SERVICES } from "@/constants/config";
import { Shield, Search, Database, RefreshCw } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  shield: Shield,
  scan: Search,
  database: Database,
  refresh: RefreshCw,
};

const CARD_ACCENTS = [
  { bg: "bg-blue-50", border: "border-blue-100", iconColor: "text-blue-500" },
  { bg: "bg-indigo-50", border: "border-indigo-100", iconColor: "text-indigo-500" },
  { bg: "bg-purple-50", border: "border-purple-100", iconColor: "text-purple-500" },
  { bg: "bg-emerald-50", border: "border-emerald-100", iconColor: "text-emerald-500" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section id="services" className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14" style={show(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide mb-4">
            <Shield className="size-3.5" />
            الخدمات
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            إيه اللي أقدر أساعدك فيه؟
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            خدمات متخصصة في الأمن السيبراني لحماية بياناتك وحساباتك
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((service, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            const IconComp = ICON_MAP[service.icon] || Shield;
            return (
              <div key={service.id} style={show(150 + i * 120)}>
                <div className="glass-card rounded-2xl p-6 sm:p-7 h-full transition-all duration-300 hover:-translate-y-1 group cursor-default">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center size-12 rounded-xl ${accent.bg} ${accent.border} border mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className={`size-6 ${accent.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2" dir="rtl">
                    {service.titleAr}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-slate-500 leading-relaxed" dir="rtl">
                    {service.descAr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
