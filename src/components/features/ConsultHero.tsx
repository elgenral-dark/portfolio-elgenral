import { SITE_CONFIG } from "@/constants/config";
import VerifiedBadge from "./VerifiedBadge";
import useScrollReveal from "@/hooks/useScrollReveal";
import useCountUp from "@/hooks/useCountUp";
import useTypewriter from "@/hooks/useTypewriter";

function AnimatedStat({
  end,
  suffix,
  prefix,
  label,
  isText,
  textValue,
  textColor,
  visible,
  delay,
}: {
  end?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isText?: boolean;
  textValue?: string;
  textColor?: string;
  visible: boolean;
  delay: number;
}) {
  const count = useCountUp({ end: end ?? 0, duration: 2000, delay }, visible);

  return (
    <div className="text-center">
      {isText ? (
        <p
          className={`font-heading text-2xl sm:text-3xl font-bold ${textColor}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.5s ease-out ${delay}ms`,
          }}
        >
          {textValue}
        </p>
      ) : (
        <p className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
          {prefix}
          {count}
          {suffix}
        </p>
      )}
      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
        {label}
      </p>
    </div>
  );
}

export default function ConsultHero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  const { displayed: typedTitle, showCursor } = useTypewriter(
    { text: "استشارات الأمن السيبراني", speed: 70, delay: 500 },
    isVisible
  );

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section ref={ref} className="relative pt-12 pb-10 px-4 sm:pt-20 sm:pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div style={show(0)}>
            <div className="relative group">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 animate-avatar-ring opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[1.5px] rounded-full bg-white" />
              <div className="relative size-28 sm:size-36 rounded-full overflow-hidden shadow-lg">
                <img
                  src={SITE_CONFIG.avatarUrl}
                  alt={SITE_CONFIG.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              </div>
              {/* Online dot */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-10">
                <span className="relative flex size-4">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full size-4 bg-emerald-500 border-2 border-white shadow-sm" />
                </span>
              </div>
            </div>
          </div>

          {/* Name + Badge */}
          <div className="mt-6" style={show(150)}>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 flex items-center justify-center">
              {SITE_CONFIG.name}
              <VerifiedBadge />
            </h1>
            <p className="text-slate-400 text-sm font-medium mt-1 tracking-wide">
              {SITE_CONFIG.title}
            </p>
          </div>

          {/* Tagline with Typewriter */}
          <div className="mt-6 sm:mt-8 max-w-2xl" style={show(300)}>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-relaxed min-h-[2.25rem] sm:min-h-[2.5rem] lg:min-h-[3rem]">
              {typedTitle}
              {showCursor && (
                <span className="inline-block w-[3px] h-[0.85em] bg-blue-500 rounded-full ml-1 align-middle animate-typewriter-blink" />
              )}
            </h2>
            <p className="mt-3 text-slate-500 text-base sm:text-lg leading-relaxed font-body" dir="rtl">
              بساعدك تحمي نفسك وشركتك من أي تهديد إلكتروني — من تأمين الحسابات لفحص الثغرات واسترجاع الحسابات المخترقة
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4" style={show(450)}>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              احجز استشارة الآن
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card text-slate-600 font-semibold text-base hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              اعرف أكتر
            </a>
          </div>

          {/* Trust indicators with count-up animation */}
          <div className="mt-10 flex items-center gap-6 sm:gap-10" style={show(600)}>
            <AnimatedStat
              end={500}
              prefix="+"
              label="عميل تم مساعدته"
              visible={isVisible}
              delay={700}
            />
            <div className="w-px h-10 bg-slate-200" />
            <AnimatedStat
              end={98}
              suffix="%"
              label="نسبة رضا العملاء"
              visible={isVisible}
              delay={900}
            />
            <div className="w-px h-10 bg-slate-200" />
            <AnimatedStat
              isText
              textValue="متاح"
              textColor="text-emerald-500"
              label="للاستشارات الآن"
              visible={isVisible}
              delay={1100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
