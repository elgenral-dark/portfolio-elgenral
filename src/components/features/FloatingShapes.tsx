import { useThemeContext } from "@/lib/ThemeContext";

export default function FloatingShapes() {
  const { isDark } = useThemeContext();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Large soft circle */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full animate-float"
        style={{
          background: isDark
          ? "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Medium circle */}
      <div
        className="absolute top-1/3 -left-16 w-64 h-64 rounded-full animate-float"
        style={{
          background: isDark
          ? "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Small circle */}
      <div
        className="absolute bottom-20 right-10 w-44 h-44 rounded-full animate-float"
        style={{
          background: isDark
          ? "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Subtle dots pattern */}
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle, #475569 1px, transparent 1px)"
            : "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
