
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle, Users, BarChart, Zap } from "lucide-react";

const stats = [
  { icon: <Users className="w-5 h-5" />, value: "800+", label: "Global Brands" },
  { icon: <BarChart className="w-5 h-5" />, value: "41%", label: "Average Conversion Lift" },
  { icon: <Zap className="w-5 h-5" />, value: "8B+", label: "Messages Optimized" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted!",
        description: "We'll be in touch with you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-primary-100 border border-primary-200">
              <span className="text-primary-700 text-sm font-medium">Get Started Today</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              Ready to Transform Your <span className="gradient-text">Marketing Strategy</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Schedule a demo to see how our AI-powered platform can elevate your messaging and drive unprecedented results.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                "Personalized platform demonstration",
                "Custom analysis of your current messaging",
                "ROI projection based on your business goals",
                "Implementation roadmap and timeline"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 w-6 h-6 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-700">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass-card p-8 rounded-2xl shadow-elevated">
              <h3 className="text-2xl font-semibold mb-6">Request a Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg h-28 bg-white"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
