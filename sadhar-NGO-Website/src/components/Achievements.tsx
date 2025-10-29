"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Achievements = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  // Achievements from 1 to 6
  const achievements = Array.from({ length: 6 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
  }));

  // Pause carousel on hover
  const handleMouseEnter = () => emblaApi?.plugins()?.autoplay?.stop();
  const handleMouseLeave = () => emblaApi?.plugins()?.autoplay?.play();

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-[#fefce8] via-[#f3f4f6] to-[#e5e7eb] relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[url('/img/noise.png')] opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 text-center">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1a1a1a] relative"
        >
          <span className="relative z-10">OUR ACHIEVEMENTS 🏆</span>
          <motion.span
            className="absolute inset-0 text-[#ffd700] opacity-20 blur-sm"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            OUR ACHIEVEMENTS 🏆
          </motion.span>
        </motion.h2>

        {/* Subtitle with subtle animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Celebrating dedication, discipline, and excellence in every victory.
        </motion.p>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-wrap justify-center">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_45%] lg:flex-[0_0_40%] px-4 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group">
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/20 to-[#ff6b6b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover relative z-10"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/img/placeholder.webp";
                    }}
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;