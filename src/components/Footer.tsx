import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/aic-raise-logo.png" 
                alt="AIC RAISE Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>contact@aicraise.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <a href="#hero" className="hover:text-secondary-glow transition-colors">
                  Home
                </a>
              </div>
              <div>
                <a href="#about" className="hover:text-secondary-glow transition-colors">
                  About Program
                </a>
              </div>
              <div>
                <a href="#quiz" className="hover:text-secondary-glow transition-colors">
                  Innovation Quiz
                </a>
              </div>
              <div>
                <a href="#register" className="hover:text-secondary-glow transition-colors">
                  Register Now
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <Button
                variant="glass"
                size="icon"
                className="hover:bg-white/20"
                onClick={() => window.open('https://linkedin.com/company/aic-raise', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="hover:bg-white/20"
                onClick={() => window.open('https://instagram.com/aic_raise', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="hover:bg-white/20"
                onClick={() => window.open('https://chat.whatsapp.com/productxcelerator', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-white/80">
              Join our community and stay updated with the latest innovations!
            </p>
          </div>
        </div>

        {/* Important Dates */}
        <Card className="glass border-white/20 mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-secondary-glow font-semibold mb-2">Registration Deadline</div>
                <div className="text-2xl font-bold">September 30, 2025</div>
              </div>
              <div>
                <div className="text-secondary-glow font-semibold mb-2">Event Date</div>
                <div className="text-2xl font-bold">October 19, 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/80">
              © 2025 AIC RAISE. All rights reserved. | Powered by AIC RAISE Innovation Center
            </div>
            <div className="text-sm text-white/80">
              Made with ❤️ for innovators and entrepreneurs
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;