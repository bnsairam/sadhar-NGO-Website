"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/img/home1.webp", "/img/home2.webp", "/img/home3.webp"];

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentSlide]}
            alt={`Hero background ${currentSlide + 1}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="container relative z-10 text-left px-6 sm:px-12">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-xl">
            BUILDING CHAMPIONS,  
            <br />
            <span className="bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
              SHAPING INDIA’S FUTURE
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            Empowering youth through discipline, respect, and excellence in martial arts and sports — 
            fostering strength, unity, and pride in every student.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF671F] to-[#046A38] text-white text-lg font-semibold hover:opacity-90 shadow-lg"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Mission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg font-semibold"
              onClick={() =>
                document.getElementById("involved")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Involved
            </Button>
          </div>

          {/* Thumbnail Slider Controls */}
          <div className="flex gap-3 pt-8">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative h-16 w-24 sm:h-20 sm:w-32 rounded-lg overflow-hidden border-4 transition-all duration-500 ${
                  currentSlide === index
                    ? "border-[#FF671F] scale-105 shadow-lg"
                    : "border-white/40 hover:border-white/80"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Tricolor Strip 🇮🇳 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default Hero;
