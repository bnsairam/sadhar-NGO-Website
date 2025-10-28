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
                loading="lazy"
                className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Achievement Images */}
            <img
              src="/img/achievement1.jpg"
              alt="Achievement certificate 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement2.jpg"
              alt="Achievement certificate 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement3.jpg"
              alt="Achievement certificate 3"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement4.jpg"
              alt="Achievement certificate 4"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement5.jpg"
              alt="Achievement certificate 5"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement6.jpg"
              alt="Achievement certificate 6"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement7.jpg"
              alt="Achievement certificate 7"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement8.jpg"
              alt="Achievement certificate 8"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement9.jpg"
              alt="Achievement certificate 9"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement10.jpg"
              alt="Achievement certificate 10"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement11.jpg"
              alt="Achievement certificate 11"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement12.jpg"
              alt="Achievement certificate 12"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement13.jpg"
              alt="Achievement certificate 13"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement14.jpg"
              alt="Achievement certificate 14"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement15.jpg"
              alt="Achievement certificate 15"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement16.jpg"
              alt="Achievement certificate 16"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement17.jpg"
              alt="Achievement certificate 17"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement18.jpg"
              alt="Achievement certificate 18"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement19.jpg"
              alt="Achievement certificate 19"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement20.jpg"
              alt="Achievement certificate 20"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/achievement21.jpg"
              alt="Achievement certificate 21"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/award.jpg"
              alt="Award"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Coach Images */}
            <img
              src="/img/coach1.jpg"
              alt="Coach 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/coach2.jpg"
              alt="Coach 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/coach3.jpg"
              alt="Coach 3"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Gallery Images */}
            <img
              src="/img/gallery1.jpg"
              alt="Gallery 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery2.jpg"
              alt="Gallery 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery3.jpg"
              alt="Gallery 3"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery4.jpg"
              alt="Gallery 4"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery5.jpg"
              alt="Gallery 5"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery6.jpg"
              alt="Gallery 6"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery7.jpg"
              alt="Gallery 7"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery8.jpg"
              alt="Gallery 8"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery9.jpg"
              alt="Gallery 9"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery10.jpg"
              alt="Gallery 10"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery11.jpg"
              alt="Gallery 11"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery12.jpg"
              alt="Gallery 12"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery13.jpg"
              alt="Gallery 13"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery14.jpg"
              alt="Gallery 14"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery15.jpg"
              alt="Gallery 15"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery16.jpg"
              alt="Gallery 16"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery17.jpg"
              alt="Gallery 17"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery18.jpg"
              alt="Gallery 18"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/gallery19.jpg"
              alt="Gallery 19"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Home Images */}
            <img
              src="/img/home1.jpg"
              alt="Home 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/home2.jpg"
              alt="Home 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/home3.jpg"
              alt="Home 3"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Judo, Karate, Taekwondo Images */}
            <img
              src="/img/judo.jpg"
              alt="Judo"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/judo_1.jpg"
              alt="Judo 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/karate.jpg"
              alt="Karate"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/Taekwondo.jpg"
              alt="Taekwondo"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Logo Images */}
            <img
              src="/img/logo.jpg"
              alt="Logo"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/logo_1.jpg"
              alt="Logo 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/logo_2.jpg"
              alt="Logo 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Our Work and Student Images */}
            <img
              src="/img/ourwork.jpg"
              alt="Our Work"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/student1.jpg"
              alt="Student 1"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/student2.jpg"
              alt="Student 2"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/img/student3.jpg"
              alt="Student 3"
              loading="lazy"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Bottom Tricolor Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </section>
  );
};

export default About;