import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/lib/ThemeContext";

export default function ThemeToggleFloat() {
  const { isDark, toggle } = useThemeContext();

  return (
    <button
      onClick={toggle}
      aria-label="تبديل الوضع"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center size-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 ${
        isDark
          ? "bg-[#1e293b] border border-white/10 text-amber-400 shadow-amber-500/10 hover:shadow-amber-500/20"
          : "bg-white border border-slate-200 text-slate-600 shadow-slate-900/10 hover:shadow-slate-900/15"
      }`}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
