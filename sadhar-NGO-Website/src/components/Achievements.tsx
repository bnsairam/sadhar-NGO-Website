"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Achievements = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2500 }),
  ]);

  // Add all your images here
  const achievements = Array.from({ length: 21 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
  }));

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-[#fffef0] via-[#f3f3f3] to-[#fff]"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]"
        >
          OUR ACHIEVEMENTS 🏆
        </motion.h2>

        <p className="text-lg text-muted-foreground mb-10">
          Celebrating dedication, discipline, and excellence in every victory.
        </p>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] px-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-64 md:h-72 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/img/placeholder.webp";
                    }}
                  />
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
