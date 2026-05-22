import { useState } from "react";
import { SITE_CONFIG } from "@/constants/config";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function BookingSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const show = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `مرحباً يوسف، أنا ${name || "عميل جديد"}.\n${message || "عايز أحجز استشارة في الأمن السيبراني."}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("من فضلك اكتب اسمك");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      handleWhatsApp();
      toast.success("تم تحويلك لواتساب لإكمال الحجز");
    }, 600);
  };

  return (
    <section id="book" className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10" style={show(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold tracking-wide mb-4">
            <MessageCircle className="size-3.5" />
            تواصل
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            احجز استشارتك الآن
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            املأ البيانات وهتوصلك رسالة على الواتساب مباشرة
          </p>
        </div>

        {/* Form card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8" style={show(200)}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="booking-name" className="block text-sm font-semibold text-slate-700 mb-2" dir="rtl">
                الاسم
              </label>
              <input
                id="booking-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسمك هنا..."
                dir="rtl"
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-slate-700 placeholder:text-slate-400 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="booking-msg" className="block text-sm font-semibold text-slate-700 mb-2" dir="rtl">
                رسالتك
              </label>
              <textarea
                id="booking-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اوصف مشكلتك أو الخدمة اللي محتاجها..."
                dir="rtl"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-slate-700 placeholder:text-slate-400 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400 transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              {sending ? (
                <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="size-5" />
              )}
              إرسال عبر واتساب
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <span className="text-xs text-slate-400 font-medium">أو</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>

          {/* Direct WhatsApp */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل مباشرة على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
