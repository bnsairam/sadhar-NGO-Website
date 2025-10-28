import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/img/home1.webp", "/img/home2.webp", "/img/home3.webp"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Martial arts training ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
        </div>
      ))}
      
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            SHAPING AN <br />
            INCLUSIVE FUTURE
          </h1>
          
          <div className="flex gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-20 w-32 overflow-hidden rounded-lg border-4 transition-all ${
                  currentSlide === index
                    ? "border-primary scale-110"
                    : "border-white/50"
                }`}
                aria-label={`View slide ${index + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
