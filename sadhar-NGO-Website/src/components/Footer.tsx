"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#000080] via-[#00214d] to-[#000] text-white pt-16 pb-8 overflow-hidden">
      {/* Tricolor top border accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="container relative z-10 px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo and Description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.jpg"
                alt="SVP Academy Logo"
                className="h-12 w-12 rounded-full border-2 border-white/40"
              />
              <div>
                <h3 className="font-extrabold text-lg tracking-wide text-white">
                  SVP Academy
                </h3>
                <p className="text-sm text-white/70">Shaping Champions</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Building India's future through martial arts excellence and
              inclusive sports development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#FF9933] uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FF9933] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programmes"
                  className="hover:text-[#FF9933] transition-colors duration-300"
                >
                  Programmes
                </a>
              </li>
              <li>
                <a
                  href="#students"
                  className="hover:text-[#FF9933] transition-colors duration-300"
                >
                  Our Students
                </a>
              </li>
              <li>
                <a
                  href="#involved"
                  className="hover:text-[#FF9933] transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-bold mb-4 text-[#138808] uppercase tracking-wide">
              Sports
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#138808] transition-colors cursor-pointer">
                Judo
              </li>
              <li className="hover:text-[#138808] transition-colors cursor-pointer">
                Karate
              </li>
              <li className="hover:text-[#138808] transition-colors cursor-pointer">
                Taekwondo
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[#00b0ff] uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#FF9933]" />
                <span>info@svpacademy.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#138808]" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00b0ff] mt-1" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-5 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#FF9933] transition-transform transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-red-500 transition-transform transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Sardar Vallabhbhai Patel Academy.
            All rights reserved.
          </p>
          <p className="mt-2 text-white/60">
            Winner of{" "}
            <span className="text-[#FF9933] font-semibold">
              Rashtriya Khel Protsahan Puruskar 2023
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Indian flag glow line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
    </footer>
  );
};

export default Footer;
