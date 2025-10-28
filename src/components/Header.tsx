"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/100"
      }`}
    >
      {/* Top Gradient Line 🇮🇳 */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

      <nav className="container flex items-center justify-between py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src="/img/logo.jpg"
            alt="Sardar Vallabhbhai Patel Academy Logo"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-[#046A38]"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
              Sardar Vallabhbhai Patel
            </h1>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#FF671F] to-[#046A38] bg-clip-text text-transparent">
              ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {["hero", "about", "programmes", "involved"].map((id, idx) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="relative font-semibold text-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FF671F] after:to-[#046A38] hover:after:w-full after:transition-all after:duration-300"
              >
                {["HOME", "ABOUT US", "PROGRAMMES", "GALLERY"][idx]}
              </button>
            </li>
          ))}
          <li>
            <Button className="bg-gradient-to-r from-[#FF671F] to-[#046A38] text-white font-semibold hover:opacity-90">
              DONATE
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40">
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-semibold text-gray-800">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-[#FF671F] transition-colors"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#FF671F] transition-colors"
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("programmes")}
                className="hover:text-[#FF671F] transition-colors"
              >
                PROGRAMMES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("involved")}
                className="hover:text-[#FF671F] transition-colors"
              >
                GALLERY
              </button>
            </li>
            <li>
              <Button className="bg-gradient-to-r from-[#FF671F] to-[#046A38] text-white w-40 font-semibold hover:opacity-90">
                DONATE
              </Button>
            </li>
          </ul>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-[#046A38] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
