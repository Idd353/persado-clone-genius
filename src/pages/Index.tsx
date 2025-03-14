
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { observeAnimations, lazyLoadImages } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    // Initialize animation observers
    const cleanupAnimations = observeAnimations();
    const cleanupImages = lazyLoadImages();
    
    return () => {
      cleanupAnimations();
      cleanupImages();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
