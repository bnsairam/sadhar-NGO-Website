"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Students = () => {
  const students = [
    {
      image: "/img/student1.png",
      achievements: [
        "Secured 7th Rank in Junior National Judo Championship 2019-2020, Uttar Pradesh",
        "Selected as Armed Reserve Police in Tamil Nadu Police Department via sports quota in 2021",
        "Gold Medal, Tamil Nadu Senior State Judo Championship 2023",
        "Participated in Senior National Judo Championship 2023, Delhi",
        "Participated in All India Police Judo Championship, Guwahati",
      ],
    },
    {
      image: "/img/student2.png",
      achievements: [
        "Selected in Sports Hostel, Sports Authority of India Judo Training Center, Centre of Excellence Patiala, Punjab",
        "Won Bronze Medal in Junior National Bellary 2023",
        "Gold Medal in Tamil Nadu State SJFI Tournament 2023 organized by School Education Department",
        "Participated in Khelo India Youth Games Chennai 2024",
      ],
    },
    {
      image: "/img/student3.png",
      achievements: [
        "Selected in Sports Hostel, Sports Authority of India Judo Training Center - National Centre of Excellence, Bhopal M.P",
        "Participated in Sub-junior National held at Chennai 2023",
        "Won Gold Medal in Tamil Nadu State Junior Judo Championship 2024",
        "Represented Tamil Nadu in National Championships",
      ],
    },
  ];

  return (
    <section id="students" className="section-padding bg-muted relative overflow-hidden">
      {/* Top Indian flag stripe */}
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
            OUR STAR STUDENTS
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border rounded-xl bg-white relative">
                {/* Tricolor top border inside card */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={student.image}
                    alt={`Star Student ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {student.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1 text-[#FF671F] font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Indian flag stripe */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />
    </section>
  );
};

export default Students;
