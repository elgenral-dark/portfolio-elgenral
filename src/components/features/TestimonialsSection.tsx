import { Star, Quote, MessageSquareHeart } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "صاحب شركة ناشئة",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&q=80",
    rating: 5,
    text: "يوسف ساعدني أأمن كل حسابات الشركة بتاعتي وعمل فحص ثغرات شامل. شغل احترافي جداً ونتائج ممتازة. أنصح أي حد يتعامل معاه.",
  },
  {
    id: 2,
    name: "سارة علي",
    role: "مصممة جرافيك",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&q=80",
    rating: 5,
    text: "حسابي على إنستجرام اتسرق ويوسف رجعهولي في أقل من 24 ساعة وأمّنه بالكامل. تعامل محترم وسريع. شكراً يا جنرال!",
  },
  {
    id: 3,
    name: "محمد حسن",
    role: "مدير IT في شركة تقنية",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&q=80",
    rating: 5,
    text: "اتعاملنا مع يوسف في باقة الشركات وكان التقرير الأمني اللي قدمه مفصل ودقيق جداً. فريقنا اتعلم كتير من النصايح اللي اداها.",
  },
  {
    id: 4,
    name: "نورهان خالد",
    role: "يوتيوبر ومنشئة محتوى",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&q=80",
    rating: 4,
    text: "كنت خايفة على قناتي على يوتيوب من الاختراق. يوسف أمّنلي كل حاجة وشرحلي إزاي أحمي نفسي. تجربة ممتازة ومريحة.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-slate-200 fill-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section id="testimonials" className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14" style={show(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-500 text-xs font-semibold tracking-wide mb-4">
            <MessageSquareHeart className="size-3.5" />
            آراء العملاء
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            عملاؤنا بيقولوا إيه؟
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            آراء حقيقية من عملاء استفادوا من خدماتنا في الأمن السيبراني
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} style={show(150 + i * 120)}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 h-full transition-all duration-300 hover:-translate-y-1.5 group cursor-default relative overflow-hidden">
                {/* Decorative quote */}
                <div className="absolute top-4 left-4 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500">
                  <Quote className="size-16 sm:size-20 text-slate-800" />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Stars */}
                  <div className="mb-4">
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Quote text */}
                  <p
                    className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-body"
                    dir="rtl"
                  >
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute -inset-[1px] rounded-full bg-white" />
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="relative size-11 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-slate-800">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust stat */}
        <div className="text-center mt-8 sm:mt-10" style={show(700)}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <img
                  key={t.id}
                  src={t.avatar}
                  alt={t.name}
                  className="size-8 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium" dir="rtl">
              <span className="font-bold text-slate-800">+500</span>
              <span>عميل راضي عن خدماتنا</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
