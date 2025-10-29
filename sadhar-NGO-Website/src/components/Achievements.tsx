"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = Array.from({ length: 21 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
    id: i + 1,
  }));

  // Split into two rows - odd and even
  const topRow = achievements.filter((_, i) => i % 2 === 0); // 0, 2, 4, 6...
  const bottomRow = achievements.filter((_, i) => i % 2 !== 0); // 1, 3, 5, 7...

  const openLightbox = (achievement) => {
    const index = achievements.findIndex(a => a.id === achievement.id);
    setCurrentIndex(index);
    setSelectedImage(achievement);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction) => {
    const newIndex = (currentIndex + direction + achievements.length) % achievements.length;
    setCurrentIndex(newIndex);
    setSelectedImage(achievements[newIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const AchievementCard = ({ item }) => (
    <motion.div
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] mx-3 cursor-pointer group"
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => openLightbox(item)}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-200/50">
        {/* Indian Flag Tricolor Border Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] opacity-40 blur-xl" />
        </div>
        
        {/* Indian Flag Animated Border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF9933]" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#138808]" />
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
        </div>
        
        {/* Image container with aspect ratio */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop";
            }}
          />
          
          {/* Tricolor gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933]/20 via-white/10 to-[#138808]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Ashoka Chakra icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-10 h-10 text-[#000080] animate-spin-slow" viewBox="0 0 100 100" fill="none">
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
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
          
          {/* Achievement number badge with tricolor */}
          <div className="absolute top-4 right-4 overflow-hidden rounded-full shadow-lg z-20">
            <div className="bg-gradient-to-b from-[#FF9933] via-white to-[#138808] px-4 py-2">
              <span className="font-bold text-sm text-gray-900 drop-shadow-sm">#{item.id}</span>
            </div>
          </div>
        </div>
        
        {/* Tricolor shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9933]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />
      </div>
    </motion.div>
  );

  const InfiniteScrollRow = ({ items, direction = "left", delay = 0 }) => {
    const duplicatedItems = [...items, ...items, ...items]; // Triple for smooth infinite scroll
    
    return (
      <div className="relative overflow-hidden mask-gradient">
        <motion.div
          className="flex py-4"
          animate={{
            x: direction === "left" ? [0, -items.length * 436] : [-items.length * 436, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: items.length * 8,
              ease: "linear",
              delay: delay
            }
          }}
        >
          {duplicatedItems.map((item, index) => (
            <AchievementCard key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-gradient-to-b from-orange-50/30 via-white to-green-50/30 relative overflow-hidden"
    >
      {/* Decorative background with Indian flag colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#138808]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#000080]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Title with Indian Colors */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-[#FF9933] via-[#000080] to-[#138808] bg-clip-text text-transparent">
              OUR ACHIEVEMENTS
            </span>
            <span className="ml-3 inline-block animate-bounce">🏆</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-light">
            Celebrating dedication, discipline, and excellence in every victory
          </p>
        </motion.div>

        {/* Top Row - Scrolling Left (achievements 1, 3, 5, 7...) */}
        <div className="mb-8 md:mb-12">
          <InfiniteScrollRow items={topRow} direction="left" />
        </div>

        {/* Bottom Row - Scrolling Right (achievements 2, 4, 6, 8...) */}
        <div>
          <InfiniteScrollRow items={bottomRow} direction="right" delay={0} />
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-gradient-to-b hover:from-[#FF9933]/20 hover:via-white/20 hover:to-[#138808]/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 border border-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 sm:left-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 sm:right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-transparent bg-gradient-to-b from-[#FF9933] via-white to-[#138808] p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    className="w-full h-full max-h-[85vh] object-contain"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=900&fit=crop";
                    }}
                  />
                  
                  {/* Image info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-12 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] rounded-full" />
                      <div>
                        <h3 className="text-white text-xl sm:text-2xl font-bold">
                          Achievement #{selectedImage.id}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base mt-1">
                          {currentIndex + 1} of {achievements.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
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