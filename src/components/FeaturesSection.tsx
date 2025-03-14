
import { useEffect, useRef } from "react";
import { Zap, BarChart3, Sparkles, Brain, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Messaging",
    description: "Our AI analyzes millions of data points to create messages that resonate with your audience."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Analytics",
    description: "Comprehensive analytics to help you understand what works and why."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Emotional Intelligence",
    description: "Identify emotional language patterns that drive your audience to action."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Message Generation",
    description: "Generate thousands of potential message variations tailored to your brand."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Brand Safety",
    description: "Advanced filters ensure all content aligns with your brand guidelines."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Implementation",
    description: "Seamlessly integrate with your existing marketing stack in minutes."
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.feature-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100">
            <span className="text-primary-700 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="heading-lg mb-6">
            Advanced Marketing Solutions Powered by <span className="gradient-text">AI Technology</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Our platform combines cutting-edge AI with deep marketing expertise to deliver messaging that truly connects with your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 glass-card p-8 rounded-2xl flex flex-col"
            >
              <div className="mb-5 p-3 rounded-lg bg-primary-50 w-fit">
                <div className="text-primary-700">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
