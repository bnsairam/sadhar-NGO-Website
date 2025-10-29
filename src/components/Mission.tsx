"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section
      id="mission"
      className="section-padding bg-muted overflow-hidden relative"
    >
      {/* Top subtle tricolor line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
            OUR MISSION
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="absolute -top-6 -left-6 w-20 h-20 text-[#046A38]/20" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic relative z-10">
              “At <span className="text-[#FF671F] font-bold">Sardar Vallabhbhai Patel Judo Academy</span>, 
              we empower India’s youth through judo — nurturing talent, discipline, and confidence.  
              Our mission is to unlock potential, inspire excellence, and create a generation of athletes 
              who excel in sport and in life, representing our nation with pride and resilience.”
            </blockquote>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <a
              href="https://youtu.be/OlBWHhugIzI?si=lR-9yFNLYX7ifG9R"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Image */}
              <img
                src="/img/founder_message.webp"
                alt="Founder's message video thumbnail"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all flex flex-col items-center justify-center gap-4">
                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-r from-[#FF671F] to-[#046A38] rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-1" />
                </motion.div>

                {/* Caption */}
                <p className="text-white text-lg sm:text-xl font-semibold text-center px-3">
                  Watch Our Founder’s Message
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom tricolor accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default Mission;
