"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ All 21 achievements
  const achievements = Array.from({ length: 21 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
    id: i + 1,
  }));

  const openLightbox = (achievement: any) => {
    const index = achievements.findIndex((a) => a.id === achievement.id);
    setCurrentIndex(index);
    setSelectedImage(achievement);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction: number) => {
    const newIndex = (currentIndex + direction + achievements.length) % achievements.length;
    setCurrentIndex(newIndex);
    setSelectedImage(achievements[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  const AchievementCard = ({ item }: any) => (
    <motion.div
      className="relative group cursor-pointer bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 hover:shadow-[0_0_30px_rgba(255,153,51,0.3)] transition-all"
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => openLightbox(item)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop";
          }}
        />
        {/* Tricolor Gradient Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933]/30 via-transparent to-[#138808]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Ashoka Chakra Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl">
            <svg
              className="w-10 h-10 text-[#000080] animate-spin-slow"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              {[...Array(24)].map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 12 * Math.cos(rad);
                const y1 = 50 + 12 * Math.sin(rad);
                const x2 = 50 + 45 * Math.cos(rad);
                const y2 = 50 + 45 * Math.sin(rad);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] rounded-full px-3 py-1 shadow-lg">
          <span className="font-semibold text-gray-900 text-sm">#{item.id}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-gradient-to-b from-orange-50/40 via-white to-green-50/40 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9933]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#138808]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#FF9933] via-[#000080] to-[#138808] bg-clip-text text-transparent">
            OUR ACHIEVEMENTS
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Celebrating discipline, dedication, and excellence 🇮🇳
          </p>
        </motion.div>

        {/* ✅ Two-row Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {achievements.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            onClick={closeLightbox}
          >
            {/* Close & Nav Buttons */}
            <button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/30 transition"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/30 transition"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/30 transition"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Modal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-gradient-to-b from-[#FF9933] via-white to-[#138808] p-1 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-xl overflow-hidden relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-full max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">
                    Achievement #{selectedImage.id}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {currentIndex + 1} of {achievements.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
