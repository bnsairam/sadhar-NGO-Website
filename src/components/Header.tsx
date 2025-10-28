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
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img
            src="/img/logo.jpg"
            alt="Sardar Vallabhbhai Patel Academy Logo"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-foreground">
              Sardar Vallabhbhai Patel
            </h1>
            <span className="text-sm font-semibold text-primary">ACADEMY</span>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="font-semibold hover:text-primary transition-colors"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="font-semibold hover:text-primary transition-colors"
            >
              ABOUT US
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("programmes")}
              className="font-semibold hover:text-primary transition-colors"
            >
              PROGRAMMES
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("involved")}
              className="font-semibold hover:text-primary transition-colors"
            >
              GET INVOLVED
            </button>
          </li>
          <li>
            <Button>DONATE</Button>
          </li>
        </ul>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <ul className="container flex flex-col py-4 space-y-4">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left font-semibold py-2 hover:text-primary transition-colors"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left font-semibold py-2 hover:text-primary transition-colors"
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("programmes")}
                className="block w-full text-left font-semibold py-2 hover:text-primary transition-colors"
              >
                PROGRAMMES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("involved")}
                className="block w-full text-left font-semibold py-2 hover:text-primary transition-colors"
              >
                GET INVOLVED
              </button>
            </li>
            <li>
              <Button className="w-full">DONATE</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
