
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "API", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Community", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };
  
  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter */}
        <div className="max-w-7xl mx-auto mb-16 p-8 glass-card rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-0">
                Get the latest news and updates on AI marketing innovations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
              <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex justify-center items-center">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-primary-600">Persado</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-xs">
              The AI platform that delivers the right message at the right time to drive better business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Persado. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-600 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
