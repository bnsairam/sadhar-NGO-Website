"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate 21 images dynamically
  const achievements = Array.from({ length: 21 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [achievements.length]);

  return (
    <section
      id="achievements"
      className="relative py-20 bg-gradient-to-b from-orange-50 via-white to-green-50 overflow-hidden"
    >
      {/* Tricolor Border Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800"
        >
          Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center text-gray-600 mb-12"
        >
          Celebrating Excellence in Every Victory
        </motion.p>

        {/* Carousel / Scroller */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [`0%`, `-50%`] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 h-96 rounded-2xl overflow-hidden shadow-lg relative group"
              >
                <img
                  src={achievement.image}
                  alt={achievement.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                  <p className="text-white font-semibold text-lg text-center">
                    {achievement.alt}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Tricolor Accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </section>
  );
};

export default Achievements;