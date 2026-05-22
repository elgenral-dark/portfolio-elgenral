// ===================================================
// شاشة التحميل (Splash Screen) — لوجو EA متحرك
// تظهر عند أول فتح للموقع ثم تختفي بسلاسة
// ===================================================

import { useState, useEffect } from "react";

interface SplashScreenProps {
  onFinish: () => void; // دالة بتتنفذ لما الشاشة تخلص
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  // حالة الاختفاء — لما تبقى true الشاشة بتختفي بسلاسة
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // بعد 2.5 ثانية — ابدأ الاختفاء
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    // بعد 3.3 ثانية — شيل الشاشة نهائياً
    const removeTimer = setTimeout(() => onFinish(), 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0d1b2a 50%, #0a0e1a 100%)",
      }}
    >
      {/* خلفية جزيئات متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        {/* خطوط كود متحركة في الخلفية */}
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 font-mono text-xs whitespace-nowrap"
              style={{
                top: `${8 + i * 8}%`,
                left: `${-20 + (i % 3) * 10}%`,
                animation: `splash-code-scroll ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {"01001010 11010010 10101001 00110110 01110101 10010011 "}
            </div>
          ))}
        </div>

        {/* نقاط مضيئة عشوائية */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute size-1 rounded-full bg-cyan-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `splash-dot-pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* المحتوى الرئيسي — اللوجو */}
      <div className="relative flex flex-col items-center gap-8">
        {/* حلقة دوّارة خارجية */}
        <div className="relative">
          {/* الحلقة الخارجية */}
          <div
            className="absolute inset-[-20px] rounded-full border border-cyan-500/20"
            style={{ animation: "splash-ring-rotate 6s linear infinite" }}
          >
            {/* نقاط على الحلقة */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          </div>

          {/* الحلقة الداخلية */}
          <div
            className="absolute inset-[-10px] rounded-full border border-cyan-500/10"
            style={{ animation: "splash-ring-rotate 4s linear infinite reverse" }}
          >
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
          </div>

          {/* الدرع (Shield) مع حروف EA */}
          <div
            className="relative flex items-center justify-center size-32 sm:size-40"
            style={{ animation: "splash-logo-appear 1s ease-out forwards" }}
          >
            {/* شكل الدرع SVG */}
            <svg
              viewBox="0 0 120 140"
              className="absolute inset-0 w-full h-full drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
              style={{ animation: "splash-shield-glow 3s ease-in-out infinite" }}
            >
              {/* الدرع الخارجي */}
              <path
                d="M60 8 L108 30 L108 75 C108 100 85 120 60 132 C35 120 12 100 12 75 L12 30 Z"
                fill="none"
                stroke="url(#shield-gradient)"
                strokeWidth="2"
                className="splash-shield-path"
              />
              {/* الدرع الداخلي */}
              <path
                d="M60 18 L98 36 L98 72 C98 93 79 110 60 120 C41 110 22 93 22 72 L22 36 Z"
                fill="rgba(0, 210, 255, 0.03)"
                stroke="url(#shield-gradient-inner)"
                strokeWidth="1"
                opacity="0.6"
              />
              {/* تعريف التدرجات */}
              <defs>
                <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="50%" stopColor="#0099cc" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
                <linearGradient id="shield-gradient-inner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0066aa" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* حروف EA */}
            <span
              className="relative text-4xl sm:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,210,255,0.5)]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                animation: "splash-text-glow 2.5s ease-in-out infinite",
              }}
            >
              EA
            </span>
          </div>
        </div>

        {/* اسم الموقع تحت اللوجو */}
        <div
          className="text-center"
          style={{ animation: "splash-name-appear 0.8s ease-out 0.6s forwards", opacity: 0 }}
        >
          <p className="text-cyan-300/80 text-sm sm:text-base font-medium tracking-[0.3em] uppercase">
            Youssef elgenral
          </p>
          <p className="text-slate-500 text-xs mt-2 tracking-wider">
            Cybersecurity Expert
          </p>
        </div>

        {/* شريط التحميل */}
        <div
          className="w-48 sm:w-56 h-[3px] rounded-full bg-slate-800 overflow-hidden"
          style={{ animation: "splash-bar-appear 0.5s ease-out 1s forwards", opacity: 0 }}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-500"
            style={{ animation: "splash-loading 2s ease-in-out forwards", animationDelay: "1.2s", width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}
