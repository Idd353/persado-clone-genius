
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const shapes = heroRef.current.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.05;
        const xOffset = (x - rect.width / 2) * factor;
        const yOffset = (y - rect.height / 2) * factor;
        
        (shape as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative flex items-center min-h-screen pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#f8f9fb] -z-10"></div>
      <div className="blur-dot w-[300px] h-[300px] -top-10 -left-10 opacity-30 -z-10"></div>
      <div className="blur-dot w-[300px] h-[300px] bottom-0 right-10 opacity-30 -z-10"></div>
      
      {/* Floating Shapes */}
      <div className="floating-shape absolute top-[20%] right-[10%] w-16 h-16 bg-primary-100 rounded-full opacity-60 animate-float"></div>
      <div className="floating-shape absolute bottom-[20%] left-[15%] w-24 h-24 bg-accent-100 rounded-full opacity-50 animate-float animation-delay-300"></div>
      <div className="floating-shape absolute top-[40%] left-[5%] w-12 h-12 bg-primary-200 rounded-md rotate-45 opacity-60 animate-float animation-delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
              <span className="text-primary-700 text-sm font-medium">AI-Powered Marketing Solutions</span>
            </div>
            
            <h1 className="heading-xl mb-6 max-w-xl">
              The AI Platform for <span className="gradient-text">Message Performance</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg text-balance">
              Revolutionize your marketing with AI that understands human emotions and crafts messages that truly connect with your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-6">
                Request Demo
              </Button>
              <Button variant="outline" className="rounded-full group px-6 py-6">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Trusted by 800+ brands</div>
                <div className="text-xs text-gray-500">Join leading companies worldwide</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] animate-fade-in-right">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-radial from-primary-50/50 to-transparent rounded-full blur-xl"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="glass-card rounded-2xl shadow-elevated overflow-hidden h-[500px] w-full max-w-lg">
                <div className="bg-primary-600 h-12 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-200"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-200"></div>
                  </div>
                </div>
                <div className="p-6 bg-white h-full">
                  <div className="animate-pulse-subtle">
                    <div className="mb-6">
                      <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-3/4"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 bg-primary-50 rounded-lg"></div>
                      <div className="h-24 bg-primary-50 rounded-lg"></div>
                      <div className="h-24 bg-primary-50 rounded-lg"></div>
                      <div className="h-24 bg-primary-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
