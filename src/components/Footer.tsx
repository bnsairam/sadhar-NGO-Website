import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-12 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">SVP Academy</h3>
                <p className="text-sm text-white/70">Shaping Champions</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Building India's future through martial arts excellence and inclusive sports development.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programmes" className="hover:text-primary transition-colors">Programmes</a></li>
              <li><a href="#students" className="hover:text-primary transition-colors">Our Students</a></li>
              <li><a href="#involved" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Sports</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Judo</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Karate</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Taekwondo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@svpacademy.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Sardar Vallabhbhai Patel Academy. All rights reserved.</p>
          <p className="mt-2">Winner of Rashtriya Khel Protsahan Puruskar 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
