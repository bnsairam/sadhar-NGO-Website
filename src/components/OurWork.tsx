"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const OurWork = () => {
  const [counts, setCounts] = useState({
    programmes: 0,
    athletes: 0,
    academies: 0,
    females: 0,
    paraAthletes: 0,
    states: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = {
      programmes: 8,
      athletes: 150,
      academies: 3,
      females: 85,
      paraAthletes: 45,
      states: 18,
    };

    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        programmes: Math.floor(targets.programmes * progress),
        athletes: Math.floor(targets.athletes * progress),
        academies: Math.floor(targets.academies * progress),
        females: Math.floor(targets.females * progress),
        paraAthletes: Math.floor(targets.paraAthletes * progress),
        states: Math.floor(targets.states * progress),
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  return (
    <section
      id="programmes"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Top tricolor accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

      <div className="container relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
            OUR WORK
          </span>
        </motion.h2>

        <p className="text-xl text-center text-muted-foreground mb-2">
          Our programs are inclusive, wide-ranging and impactful
        </p>
        <p className="text-sm text-center text-muted-foreground mb-12">
          * as of 2024
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Total Programmes", value: counts.programmes },
              { label: "Total Athletes", value: counts.athletes },
              { label: "High Performance Academies", value: counts.academies },
              { label: "Female Athletes", value: counts.females },
              { label: "Para-Athletes", value: counts.paraAthletes },
              { label: "States Covered", value: counts.states },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 ${
                  i % 2 === 0
                    ? "border-[#FF671F] hover:-translate-y-1"
                    : "border-[#046A38] hover:-translate-y-1"
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1, repeat: hasAnimated ? 0 : Infinity }}
                  className={`text-5xl font-extrabold ${
                    i % 2 === 0 ? "text-[#FF671F]" : "text-[#046A38]"
                  } mb-2`}
                >
                  {item.value}
                </motion.div>
                <div className="text-sm font-semibold text-muted-foreground uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* India Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/img/ourwork.webp"
              alt="Map of India showing academy locations"
              className="w-full h-auto rounded-2xl shadow-2xl border border-border transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom tricolor accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default OurWork;
