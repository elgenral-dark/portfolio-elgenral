import useScrollReveal from "@/hooks/useScrollReveal";

const STEPS = [
  {
    number: "01",
    titleAr: "اختار المنتج",
    descAr: "تصفح المنتجات واختار اللي يناسبك واضغط على زر الشراء",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    shadowColor: "shadow-blue-500/15",
  },
  {
    number: "02",
    titleAr: "حوّل على الكاش",
    descAr: "حوّل المبلغ على رقم الكاش 01287288506 وخد سكرين شوت بالتحويل",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600",
    shadowColor: "shadow-emerald-500/15",
  },
  {
    number: "03",
    titleAr: "ابعت على واتساب",
    descAr: "ابعتلنا سكرين التحويل على واتساب 01068524301 مع اسم المنتج",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-600",
    shadowColor: "shadow-green-500/15",
  },
  {
    number: "04",
    titleAr: "استلم المنتج",
    descAr: "هنبعتلك المنتج فوراً على واتساب أو الإيميل بعد التأكيد",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600",
    shadowColor: "shadow-amber-500/15",
  },
];

export default function PaymentSteps() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section ref={ref} className="px-4 pb-10 sm:pb-14" dir="rtl">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10" style={show(0)}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <span className="text-xs font-semibold text-blue-600">
              طريقة الشراء
            </span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            إزاي تشتري في 4 خطوات؟
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            عملية الشراء سهلة وسريعة — اتبع الخطوات دي وهتستلم منتجك في دقايق
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden sm:block absolute top-[52px] right-[52px] left-[52px] h-0.5 bg-gradient-to-l from-blue-200 via-emerald-200 via-green-200 to-amber-200 rounded-full"
            style={show(200)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STEPS.map((step, i) => (
              <div key={step.number} style={show(200 + i * 150)}>
                <div className="group glass-card rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] relative">
                  {/* Step number badge */}
                  <div className="absolute -top-3 right-4">
                    <span
                      className={`inline-flex items-center justify-center size-7 rounded-lg bg-gradient-to-br ${step.color} text-white text-xs font-bold shadow-md ${step.shadowColor}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-4 flex items-center justify-center size-14 rounded-2xl ${step.bgLight} border ${step.borderColor} ${step.textColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${step.shadowColor}`}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-slate-800 text-base mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {step.titleAr}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.descAr}
                  </p>

                  {/* Mobile connector arrow */}
                  {i < STEPS.length - 1 && (
                    <div className="sm:hidden flex justify-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5 text-slate-300"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cash number highlight */}
        <div
          className="mt-6 sm:mt-8 glass-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={show(900)}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-xl bg-emerald-50 border border-emerald-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-emerald-600"
              >
                <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" />
                <path d="M2 9.1c1.2-.8 5.3-2.2 8-.5" />
              </svg>
            </div>
            <div className="text-right sm:text-right">
              <p className="text-sm font-semibold text-slate-700">
                رقم الكاش للتحويل
              </p>
              <p className="text-lg font-bold text-emerald-600 tracking-wider font-mono">
                01287288506
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/201068524301?text=عايز%20أشتري%20منتج"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow-md shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
