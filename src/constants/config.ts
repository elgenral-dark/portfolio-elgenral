
export const SITE_CONFIG = {
  name: "Youssef Ramadan",
  alias: "The General",
  aliasAr: "الجنرال",
  title: "Cybersecurity Expert & Ethical Hacker",
  avatarUrl: "https://i.postimg.cc/k2tCf3vr/Youssef.jpg",
  bio: `أنا يوسف رمضان، المعروف باسم "الجنرال". بشتغل في مجال الأمن السيبراني وبساعد الناس تحمي نفسها من الاختراقات والتهديدات على الإنترنت.`,
  whatsappNumber: "201068524301", // Added a comma here
  socials: {
    tiktok: "https://www.tiktok.com/@gen.coder",
    youtube: "https://www.youtube.com/@elgeneral.official",
    instagram: "https://www.instagram.com/devonic.io",
  },
} as const;

export const SERVICES = [
  {
    id: "secure-accounts",
    titleAr: "تأمين الحسابات",
    descAr: "حماية حساباتك على السوشيال ميديا والبريد الإلكتروني بأحدث طرق التأمين والمصادقة الثنائية",
    icon: "shield",
  },
  {
    id: "vuln-scan",
    titleAr: "فحص الثغرات",
    descAr: "فحص شامل لمواقعك وتطبيقاتك لاكتشاف الثغرات الأمنية وتقديم تقرير مفصل بالحلول",
    icon: "scan",
  },
  {
    id: "data-protection",
    titleAr: "استشارات حماية البيانات",
    descAr: "نصائح وخطط عملية لحماية بياناتك الشخصية وبيانات شركتك من التسريب والاختراق",
    icon: "database",
  },
  {
    id: "account-recovery",
    titleAr: "استرجاع الحسابات",
    descAr: "مساعدتك في استرجاع حساباتك المخترقة بشكل قانوني وآمن مع تأمينها بالكامل بعد الاسترجاع",
    icon: "refresh",
  },
] as const;

export const WHY_CHOOSE = [
  {
    id: "experience",
    titleAr: "خبرة في المجال",
    descAr: "سنوات من الخبرة العملية في مجال الأمن السيبراني والحماية من الاختراقات",
    icon: "award",
  },
  {
    id: "clients",
    titleAr: "عدد كبير من العملاء",
    descAr: "تعاملت مع مئات العملاء من أفراد وشركات وساعدتهم في تأمين بياناتهم",
    icon: "users",
  },
  {
    id: "results",
    titleAr: "نتائج موثوقة",
    descAr: "نسبة نجاح عالية في حل مشاكل الأمان واسترجاع الحسابات والحماية من التهديدات",
    icon: "check-circle",
  },
] as const;
