// ===================================================
// سيكشن الأسئلة الشائعة (FAQ) — تصميم Accordion احترافي
// يحتوي على أسئلة عن خدمات الأمن السيبراني، الأسعار، وطريقة التواصل
// ===================================================

import { useState } from "react";
import { ChevronDown, HelpCircle, Shield, CreditCard, MessageCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useThemeContext } from "@/lib/ThemeContext";

// ===================================================
// بيانات الأسئلة الشائعة — مقسمة حسب التصنيف
// ===================================================

interface FAQItem {
  question: string; // السؤال
  answer: string; // الإجابة
  category: "services" | "pricing" | "contact"; // التصنيف
}

const FAQ_DATA: FAQItem[] = [
  // أسئلة عن الخدمات
  {
    category: "services",
    question: "ما هي خدمات الأمن السيبراني اللي بتقدمها؟",
    answer:
      "بقدم خدمات شاملة تشمل: تأمين الحسابات الشخصية والتجارية، فحص الثغرات الأمنية، حماية البيانات والخصوصية، استرجاع الحسابات المخترقة، بالإضافة لاستشارات أمنية مخصصة حسب احتياجك.",
  },
  {
    category: "services",
    question: "هل بتقدم خدمة استرجاع الحسابات المخترقة؟",
    answer:
      "أيوه، بساعد في استرجاع الحسابات المخترقة على مختلف المنصات زي فيسبوك، انستجرام، جوجل، وغيرهم. بعد الاسترجاع بعمل تأمين كامل للحساب عشان ميتسرقش تاني.",
  },
  {
    category: "services",
    question: "هل الخدمات مناسبة للأفراد ولا الشركات بس؟",
    answer:
      "الخدمات متاحة للأفراد والشركات. عندي باقات مخصصة للأفراد اللي محتاجين يأمنوا حساباتهم الشخصية، وباقات للشركات اللي محتاجة حماية شاملة لبنيتها التحتية.",
  },
  {
    category: "services",
    question: "كام مدة تنفيذ الخدمة؟",
    answer:
      "المدة بتختلف حسب نوع الخدمة — تأمين الحسابات بيتم في نفس اليوم، فحص الثغرات من يوم لـ 3 أيام، واسترجاع الحسابات ممكن ياخد من يوم لأسبوع حسب الحالة.",
  },
  // أسئلة عن الأسعار
  {
    category: "pricing",
    question: "كام أسعار الخدمات؟",
    answer:
      "الأسعار بتبدأ من 150 جنيه للباقة الأساسية (تأمين حساب واحد + استشارة 15 دقيقة)، 350 جنيه للباقة الاحترافية (تأمين 3 حسابات + فحص ثغرات + استشارة 30 دقيقة)، و800 جنيه لباقة المؤسسات الشاملة.",
  },
  {
    category: "pricing",
    question: "إيه طرق الدفع المتاحة؟",
    answer:
      "الدفع عن طريق فودافون كاش أو تحويل بنكي. بعد التحويل تبعتلي صورة الإيصال على واتساب وأبدأ أنفذ الخدمة مباشرة.",
  },
  {
    category: "pricing",
    question: "فيه ضمان استرداد الفلوس؟",
    answer:
      "أيوه، لو مقدرتش أنفذ الخدمة المطلوبة بنرجعلك المبلغ كامل. رضا العميل أهم حاجة عندي وده اللي خلى نسبة الرضا 98%.",
  },
  // أسئلة عن التواصل
  {
    category: "contact",
    question: "إزاي أتواصل معاك لحجز استشارة؟",
    answer:
      "أسهل طريقة هي الواتساب — تقدر تبعتلي رسالة مباشرة أو تستخدم فورم الحجز في الموقع وهيحولك تلقائياً لواتساب. كمان ممكن تتواصل عبر صفحاتي على السوشيال ميديا.",
  },
  {
    category: "contact",
    question: "هل بترد بسرعة على الرسائل؟",
    answer:
      "بحاول أرد في أقل من ساعة خلال أوقات العمل (من 10 صباحاً لـ 12 بالليل). لو بعت رسالة في وقت متأخر هرد عليك أول ما أصحى.",
  },
  {
    category: "contact",
    question: "هل ممكن أحجز استشارة مجانية الأول؟",
    answer:
      "أيوه، بقدم استشارة مجانية مدتها 5 دقائق لتقييم المشكلة ونحدد مع بعض أنسب حل وباقة. بعدها تقدر تقرر لو عايز تكمل ولا لأ بدون أي التزام.",
  },
];

// ===================================================
// أيقونات التصنيفات
// ===================================================

const CATEGORY_ICONS = {
  services: Shield,
  pricing: CreditCard,
  contact: MessageCircle,
};

// ===================================================
// مكون عنصر الأكورديون الواحد
// ===================================================

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
  isDark: boolean;
}

function AccordionItem({ item, isOpen, onToggle, index, isVisible, isDark }: AccordionItemProps) {
  const CategoryIcon = CATEGORY_ICONS[item.category];

  // تأثير الظهور التدريجي عند السكرول
  const revealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.5s ease-out ${150 + index * 80}ms, transform 0.5s ease-out ${150 + index * 80}ms`,
  };

  return (
    <div
      style={revealStyle}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? isDark
            ? "border-blue-500/30 bg-blue-500/5 shadow-lg shadow-blue-500/5"
            : "border-blue-200 bg-blue-50/50 shadow-lg shadow-blue-500/5"
          : isDark
            ? "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
            : "border-slate-200 bg-white/60 hover:border-slate-300 hover:bg-white/80"
      }`}
    >
      {/* رأس السؤال — زر قابل للنقر */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 text-right"
        dir="rtl"
        aria-expanded={isOpen}
      >
        {/* أيقونة التصنيف */}
        <div
          className={`flex-shrink-0 flex items-center justify-center size-10 rounded-xl transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20"
              : isDark
                ? "bg-white/10 text-slate-400"
                : "bg-slate-100 text-slate-500"
          }`}
        >
          <CategoryIcon className="size-4.5" />
        </div>

        {/* نص السؤال */}
        <span
          className={`flex-1 text-sm sm:text-base font-semibold leading-relaxed transition-colors duration-300 ${
            isOpen
              ? isDark
                ? "text-blue-300"
                : "text-blue-700"
              : isDark
                ? "text-slate-200"
                : "text-slate-700"
          }`}
        >
          {item.question}
        </span>

        {/* سهم الفتح/الإغلاق */}
        <ChevronDown
          className={`flex-shrink-0 size-5 transition-all duration-300 ${
            isOpen
              ? `rotate-180 ${isDark ? "text-blue-400" : "text-blue-500"}`
              : isDark
                ? "text-slate-500"
                : "text-slate-400"
          }`}
        />
      </button>

      {/* محتوى الإجابة — ينزلق للأسفل عند الفتح */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-5 sm:px-6 pb-5 sm:pb-6 pr-[4.5rem] sm:pr-[5rem] text-sm sm:text-[15px] leading-[1.8] ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
          dir="rtl"
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

// ===================================================
// المكون الرئيسي — سيكشن الأسئلة الشائعة
// ===================================================

export default function FAQSection() {
  // حالة السؤال المفتوح حالياً (واحد فقط في كل مرة)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const { isDark } = useThemeContext();

  // دالة فتح/إغلاق سؤال
  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // تأثير ظهور العنوان
  const headerShow = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  });

  return (
    <section id="faq" className="px-4 py-10 sm:py-16" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* عنوان السيكشن */}
        <div className="text-center mb-10" style={headerShow(0)}>
          {/* بادج صغير فوق العنوان */}
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4 ${
              isDark
                ? "bg-purple-500/10 border border-purple-500/20 text-purple-300"
                : "bg-purple-50 border border-purple-100 text-purple-600"
            }`}
          >
            <HelpCircle className="size-3.5" />
            أسئلة شائعة
          </span>

          {/* العنوان الرئيسي */}
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold ${
              isDark ? "text-slate-100" : "text-slate-800"
            }`}
          >
            الأسئلة الأكثر شيوعاً
          </h2>

          {/* وصف فرعي */}
          <p
            className={`mt-3 text-sm sm:text-base max-w-lg mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            هنا هتلاقي إجابات لأكثر الأسئلة اللي بتوصلني — لو سؤالك مش موجود تواصل معايا مباشرة
          </p>
        </div>

        {/* قائمة الأسئلة — Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
              isVisible={isVisible}
              isDark={isDark}
            />
          ))}
        </div>

        {/* رسالة أسفل الأسئلة */}
        <div
          className="text-center mt-8"
          style={headerShow(800)}
        >
          <p
            className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}
          >
            مش لاقي إجابة سؤالك؟{" "}
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`font-semibold underline underline-offset-4 transition-colors duration-200 ${
                isDark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              تواصل معايا مباشرة
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
