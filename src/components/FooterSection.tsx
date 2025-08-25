import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">wawa.pk</h3>
                <p className="text-white/80 leading-relaxed">
                  Pakistan's leading business technology platform, empowering companies 
                  with innovative marketplace, logistics, and management solutions.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Our Services</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alahdeen Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E Khata System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E Logistics Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inventory Management
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Contact Us</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@wawa.pk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Stay Updated</h4>
              <p className="text-white/80 text-sm">
                Subscribe to get the latest updates on our services and offers.
              </p>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button size="icon" variant="secondary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-white/60">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2024 wawa.pk. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;