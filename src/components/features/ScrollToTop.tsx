import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { useThemeContext } from "@/lib/ThemeContext";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { isDark } = useThemeContext();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={goTop}
      aria-label="رجوع لأعلى"
      className={`fixed bottom-6 left-6 z-50 flex items-center justify-center size-12 rounded-full text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-600/30 hover:shadow-blue-600/40"
          : "bg-gradient-to-br from-blue-500 to-indigo-500 shadow-blue-500/30 hover:shadow-blue-500/40"
      } ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
