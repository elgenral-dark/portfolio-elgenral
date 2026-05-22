import Navbar from "@/components/layout/Navbar";
import FloatingShapes from "@/components/features/FloatingShapes";
import ConsultHero from "@/components/features/ConsultHero";
import ServicesSection from "@/components/features/ServicesSection";
import WhyChooseSection from "@/components/features/WhyChooseSection";
import PricingSection from "@/components/features/PricingSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import BookingSection from "@/components/features/BookingSection";
import SocialSection from "@/components/features/SocialSection";
import FAQSection from "@/components/features/FAQSection";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/features/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Decorative background shapes */}
      <FloatingShapes />

      {/* Content — add top padding for fixed navbar */}
      <main className="relative pt-16" style={{ zIndex: 1 }}>
        <ConsultHero />
        <ServicesSection />
        <WhyChooseSection />
        <PricingSection />
        <TestimonialsSection />
        <BookingSection />
        <FAQSection />
        <SocialSection />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}
