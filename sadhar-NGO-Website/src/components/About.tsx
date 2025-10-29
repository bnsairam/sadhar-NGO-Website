"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// TypeScript interface for props
interface AboutProps {
  title?: string;
  description1?: string;
  description2?: string;
  coachInfo?: {
    name: string;
    education: string;
    coachingQualification: string;
    experience: string;
    achievements: string;
  };
  imageSrc?: string;
  imageAlt?: string;
  buttons?: Array<{
    label: string;
    sectionId?: string;
    href?: string;
    download?: boolean;
    variant: string;
    borderColor: string;
    textColor: string;
    hoverBgColor: string;
  }>;
}

const About: React.FC<AboutProps> = ({
  title = "About Us",
  description1 = "Sardar Vallabhai Patel Sports Academy is a non-profit, independent organization established on August 14, 2015, by meritorious sports persons, sports activists, and volunteers of our state. Our mission is to build healthy, well-balanced citizens and foster a safe, prosperous, and peaceful community through sports.",
  description2 = "We believe in the transformative power of sports to help children grow socially, emotionally, and physically — inspiring confidence, teamwork, and discipline.",
  coachInfo = {
    name: "Srikanth Palaniswamy",
    education: "Master's in Engineering (Printing and Packaging Technology) from College of Engineering Guindy, Anna University (2012)",
    coachingQualification: "Diploma in Sports Coaching (Judo) and Diploma in Sports Performance Analysis from Netaji Subash National Institute of Sports, Patiala (2023-2024)",
    experience: "Judo Coach at Sardar Vallabhai Patel Sports Academy since 2012",
    achievements: "Coached numerous athletes including M. Sathyavanan, who participated in multiple National and All India University Judo Championships from 2009 to 2022.",
  },
  imageSrc = "/img/founder_message.webp",
  imageAlt = "Founder of Sardar Vallabhbhai Patel Sports Academy",
  buttons = [
    { label: "Our Programmes", sectionId: "programmes", variant: "outline", borderColor: "border-orange-500", textColor: "text-orange-600", hoverBgColor: "hover:bg-orange-500" },
    { label: "Get Involved", sectionId: "involved", variant: "outline", borderColor: "border-green-600", textColor: "text-green-700", hoverBgColor: "hover:bg-green-600" },
    { label: "Are you an Athlete?", sectionId: "students", variant: "outline", borderColor: "border-blue-600", textColor: "text-blue-700", hoverBgColor: "hover:bg-blue-600" },
    { label: "Download Coach Profile", href: "/img/CORPORATION.pdf", download: true, variant: "outline", borderColor: "border-purple-600", textColor: "text-purple-700", hoverBgColor: "hover:bg-purple-600" },
  ],
}) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Extracted CoachInfo component
  const CoachInfo = () => (
    <motion.section variants={itemVariants} className="mt-8">
      <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">Our Coach</h3>
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <strong>Name:</strong> {coachInfo.name}
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <strong>Education:</strong> {coachInfo.education}
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <strong>Coaching Qualification:</strong> {coachInfo.coachingQualification}
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <strong>Experience:</strong> {coachInfo.experience}
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <strong>Achievements:</strong> {coachInfo.achievements}
        </p>
      </div>
    </motion.section>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-green-50"
      style={{
        backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Top tricolor accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-16 text-gray-800 tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-600">Sardar Vallabhai Patel Sports Academy</span>{" "}
              {description1}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description2}</p>

            <CoachInfo />

            <p className="text-lg sm:text-xl font-bold text-green-700">
              Together, let's continue to <span className="text-orange-600">#ChangeTheScript</span>
            </p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {buttons.map((button, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={button.variant as any}
                    onClick={button.sectionId ? () => scrollToSection(button.sectionId) : undefined}
                    href={button.href}
                    download={button.download}
                    className={`${button.borderColor} ${button.textColor} ${button.hoverBgColor} hover:text-white transition-all font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-${button.borderColor.split('-')[1]}`}
                    aria-label={button.label}
                  >
                    {button.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={itemVariants} className="relative group">
            <picture>
              <source srcSet={imageSrc.replace(".webp", ".avif")} type="image/avif" />
              <source srcSet={imageSrc} type="image/webp" />
              <img
                src={imageSrc.replace(".webp", ".jpg")}
                alt={imageAlt}
                className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl transition-opacity group-hover:opacity-80" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom tricolor accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
    </section>
  );
};

export default About;