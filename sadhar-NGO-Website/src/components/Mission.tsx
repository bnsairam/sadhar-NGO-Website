"use client";

import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// Define TypeScript interface for props (if needed for extensibility)
interface MissionProps {
  quoteText?: string;
  videoUrl?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

const Mission: React.FC<MissionProps> = ({
  quoteText = "At Sardar Vallabhbhai Patel Judo Academy, we empower India’s youth through judo — nurturing talent, discipline, and confidence. Our mission is to unlock potential, inspire excellence, and create a generation of athletes who excel in sport and in life, representing our nation with pride and resilience.",
  videoUrl = "https://youtu.be/OlBWHhugIzI?si=lR-9yFNLYX7ifG9R",
  thumbnailSrc = "/img/founder_message.webp",
  thumbnailAlt = "Founder's message video thumbnail",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLAnchorElement>(null);

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="mission"
      className="relative bg-muted py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Top tricolor line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
            OUR MISSION
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Quote Section */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }
              }
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Quote className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 text-[#046A38]/20" />
            </motion.div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic relative z-10">
              “
              <span className="text-[#FF671F] font-bold">
                Sardar Vallabhbhai Patel Judo Academy
              </span>
              {quoteText}
            </blockquote>
          </motion.div>

          {/* Video Section */}
          <motion.div variants={itemVariants} className="relative group">
            <a
              ref={videoRef}
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF671F] focus:ring-offset-2"
              aria-label="Watch our founder's message video"
            >
              <picture>
                <source srcSet={thumbnailSrc.replace(".webp", ".avif")} type="image/avif" />
                <source srcSet={thumbnailSrc} type="image/webp" />
                <img
                  src={thumbnailSrc.replace(".webp", ".jpg")}
                  alt={thumbnailAlt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                  loading="lazy"
                />
              </picture>

              {/* Dark overlay with enhanced hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 group-hover:from-black/50 group-hover:to-black/70 transition-all flex flex-col items-center justify-center gap-4">
                {/* Play button */}
                <motion.div
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FF671F] to-[#046A38] rounded-full flex items-center justify-center shadow-lg"
                  aria-hidden="true"
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                </motion.div>

                {/* Caption */}
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center px-4">
                  Watch Our Founder’s Message
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom tricolor line */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default Mission;