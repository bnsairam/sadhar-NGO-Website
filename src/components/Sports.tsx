"use client";

import { motion } from "framer-motion";

const Sports = () => {
  const sports = [
    {
      name: "Karate",
      image: "/img/karate.png",
    },
    {
      name: "Judo",
      image: "/img/judo.png",
    },
    {
      name: "Taekwondo",
      image: "/img/Taekwondo.png",
    },
  ];

  return (
    <section
      id="sports"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Tricolor accent top */}
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
            3 SPORTS SUPPORTED
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} athlete in action`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay gradient with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
                    {sport.name}
                  </h3>

                  {/* Decorative underline (tricolor) */}
                  <div className="mt-2 h-1.5 w-20 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] rounded-full" />
                </div>
              </div>

              {/* Animated glow border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF671F]/70 rounded-xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tricolor accent bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default Sports;
