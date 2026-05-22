import { Heart, Shield } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer
      ref={ref}
      className="mt-6 pb-10 px-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        <div className="flex flex-col items-center gap-3 text-center">
          {/* Trust line */}
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Shield className="size-3.5" />
            <span>جميع الاستشارات سرية ومحمية بالكامل</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="size-3.5 text-red-400 fill-red-400" />
            <span>by</span>
            <span className="font-semibold text-slate-600">The General</span>
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Youssef Ramadan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
