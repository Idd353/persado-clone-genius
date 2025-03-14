
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "We gather data about your audience, industry, and previous messaging performance."
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI analyzes millions of data points to understand what resonates with your audience."
  },
  {
    number: "03",
    title: "Message Generation",
    description: "Generate thousands of message variations tailored to your brand and objectives."
  },
  {
    number: "04",
    title: "Performance Testing",
    description: "Test messages across channels to identify the highest performing options."
  },
  {
    number: "05",
    title: "Continuous Learning",
    description: "Our AI continuously learns from results to improve future message performance."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (lineRef.current) {
              lineRef.current.classList.add('animate-line');
            }
            
            const steps = sectionRef.current?.querySelectorAll('.process-step');
            steps?.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-fade-in-left');
                step.classList.remove('opacity-0');
              }, index * 200);
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
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100">
            <span className="text-primary-700 text-sm font-medium">The Process</span>
          </div>
          <h2 className="heading-lg mb-6">
            How Our <span className="gradient-text">AI-Powered Platform</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Our streamlined process helps you create, test, and deliver high-performing messages with minimal effort.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting steps */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200" ref={lineRef}></div>
          
          {/* Process steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="process-step opacity-0 flex gap-8 items-start relative">
                <div className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center bg-primary-600 text-white text-2xl font-bold shadow-lg z-10">
                  {step.number}
                </div>
                <div className="glass-card p-6 rounded-2xl shadow-sm flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute left-12 top-28 -translate-x-1/2 text-primary-400 animate-pulse-subtle" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
