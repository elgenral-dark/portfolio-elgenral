import { WHY_CHOOSE } from "@/constants/config";
import { Award, Users, CheckCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  award: Award,
  users: Users,
  "check-circle": CheckCircle,
};

export default function WhyChooseSection() {
  const { ref, isVisible } = useScrollReveal();

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14" style={show(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold tracking-wide mb-4">
            <Award className="size-3.5" />
            المميزات
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            ليه تختارني؟
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            أسباب تخليك تثق وتبدأ معايا دلوقتي
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const IconComp = ICON_MAP[item.icon] || Award;
            return (
              <div key={item.id} style={show(150 + i * 120)}>
                <div className="glass-card rounded-2xl p-6 sm:p-7 h-full text-center transition-all duration-300 hover:-translate-y-1 group cursor-default">
                  {/* Icon circle */}
                  <div className="mx-auto flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="size-7 text-white" />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2" dir="rtl">
                    {item.titleAr}
                  </h3>
                  <p className="font-body text-sm text-slate-500 leading-relaxed" dir="rtl">
                    {item.descAr}
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
