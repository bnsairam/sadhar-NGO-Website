"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Awards = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="awards"
      className="relative py-20 bg-gradient-to-b from-orange-50 via-white to-green-50 overflow-hidden"
    >
      {/* Top Indian Tricolor Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        >
          Awards & Recognition
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src="/img/award.webp"
              alt="National Cadet Judo Championship 2023"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              National Cadet Judo Championship 2023
            </h3>

            <AnimatePresence>
              <motion.p
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-lg text-gray-700 leading-relaxed ${
                  !isExpanded ? "line-clamp-4" : ""
                }`}
              >
                The National Cadet Judo Championship 2023–2024 was successfully
                held at the Inspire Institute of Sports from 5th to 10th July.
                The event witnessed young judokas from across the country
                competing with great spirit and determination. Representing the
                Sardar Vallabhbhai Patel Judo Academy, one of our talented
                students showcased remarkable skill, discipline, and hard work
                to secure a prestigious medal at this national-level
                championship. This proud achievement highlights the academy's
                commitment to nurturing future champions and inspiring excellence
                in the sport of judo.
              </motion.p>
            </AnimatePresence>

            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Indian Tricolor Accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </section>
  );
};

export default Awards;
