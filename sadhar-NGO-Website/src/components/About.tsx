"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-green-50"
    >
      {/* Tricolor Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        >
          About Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-600">
                Sardar Vallabhai Patel Sports Academy
              </span>{" "}
              is a non-profit, independent organization established on{" "}
              <span className="font-semibold">August 14, 2015</span>, by
              meritorious sports persons, sports activists, and volunteers of
              our state. Our mission is to build healthy, well-balanced citizens
              and foster a safe, prosperous, and peaceful community through
              sports.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in the transformative power of sports to help children
              grow socially, emotionally, and physically — inspiring confidence,
              teamwork, and discipline.
            </p>

            {/* Coach Information */}
            <section className="mt-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Our Coach</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Name:</strong> Srikanth Palaniswamy
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Education:</strong> Master's in Engineering (Printing and Packaging Technology) from College of Engineering Guindy, Anna University (2012)
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Coaching Qualification:</strong> Diploma in Sports Coaching (Judo) and Diploma in Sports Performance Analysis from Netaji Subash National Institute of Sports, Patiala (2023-2024)
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Experience:</strong> Judo Coach at Sardar Vallabhai Patel Sports Academy since 2012
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Achievements:</strong> Coached numerous athletes including M. Sathyavanan, who participated in multiple National and All India University Judo Championships from 2009 to 2022.
              </p>
            </section>

            <p className="text-xl font-bold text-green-700">
              Together, let's continue to <span className="text-orange-600">#ChangeTheScript</span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("programmes")}
                className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition"
              >
                Our Programmes
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("involved")}
                className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition"
              >
                Get Involved
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("students")}
                className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition"
              >
                Are you an Athlete?
              </Button>
              <Button
                variant="outline"
                href="/img/CORPORATION.pdf" // Ensure this path is correct relative to public folder
                download
                className="border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white transition"
              >
                Download Coach Profile
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="/img/founder_message.webp"
                alt="Founder of Sardar Vallabhbhai Patel Sports Academy"
                className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tricolor Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </section>
  );
};

export default About;