
import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content: "Persado has revolutionized our marketing approach. We've seen a 41% increase in conversion rates since implementing their AI-powered messaging solutions.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Global Retail Inc.",
    rating: 5
  },
  {
    content: "The insights we've gained from the platform have been invaluable. Our campaigns now connect with customers on a deeper level, driving both engagement and revenue.",
    author: "Michael Chen",
    position: "CMO",
    company: "Tech Innovations Ltd.",
    rating: 5
  },
  {
    content: "Implementation was seamless, and the results were almost immediate. Our team is now focused on strategy rather than endlessly testing message variations.",
    author: "Emily Rodriguez",
    position: "Digital Marketing Lead",
    company: "Financial Services Group",
    rating: 5
  },
  {
    content: "The emotional intelligence of the platform is remarkable. Our messaging feels more human and authentic, despite being AI-generated.",
    author: "David Wilson",
    position: "Brand Director",
    company: "Consumer Goods Co.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={testimonialsRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100">
            <span className="text-primary-700 text-sm font-medium">Customer Success</span>
          </div>
          <h2 className="heading-lg mb-6">
            What Our <span className="gradient-text">Clients Say</span> About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            See how companies are achieving breakthrough results with our AI-powered messaging platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-10 rounded-2xl shadow-elevated">
            {/* Testimonial Content */}
            <div className="min-h-[250px] flex flex-col justify-between">
              <div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-xl italic font-medium mb-8 text-balance">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>
              <div>
                <div className="font-semibold">{testimonials[activeIndex].author}</div>
                <div className="text-gray-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <div className="flex items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                      index === activeIndex ? "bg-primary-600 scale-110" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  onClick={handlePrev}
                  disabled={isAnimating}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  onClick={handleNext}
                  disabled={isAnimating}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-100 rounded-full opacity-70 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-100 rounded-full opacity-70 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
