import FloatingShapes from "@/components/features/FloatingShapes";
import StoreHero from "@/components/features/StoreHero";
import ProductsGrid from "@/components/features/ProductsGrid";
import PaymentSteps from "@/components/features/PaymentSteps";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/features/ScrollToTop";
import ThemeToggleFloat from "@/components/features/ThemeToggleFloat";

export default function Products() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative background shapes */}
      <FloatingShapes />

      {/* Content */}
      <main className="relative" style={{ zIndex: 1 }}>
        {/* Back to main site link */}
        <div className="px-4 pt-5 sm:pt-6">
          <div className="max-w-3xl mx-auto">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-slate-500 text-sm font-medium hover:text-blue-600 hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              الرجوع للرئيسية
            </a>
          </div>
        </div>

        <StoreHero />
        <ProductsGrid />
        <PaymentSteps />

        {/* CTA Section */}
        <section className="px-4 pb-10 sm:pb-14">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-blue-500"
                >
                  <path d="M12 6v12" />
                  <path d="M17.196 9 6.804 15" />
                  <path d="m6.804 9 10.392 6" />
                </svg>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800">
                  عايز تحمي نفسك أونلاين؟
                </h3>
              </div>
              <p
                className="text-sm sm:text-base text-slate-500 leading-relaxed mb-5 max-w-md mx-auto"
                dir="rtl"
              >
                احجز استشارة شخصية في الأمن السيبراني وخلينا نأمّن حساباتك
                وبياناتك
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                اعرف أكتر عن خدماتي
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <ThemeToggleFloat />
      <ScrollToTop />
    </div>
  );
}
