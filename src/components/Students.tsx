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
    <section id="students" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          OUR STAR STUDENTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={student.image}
                  alt={`Star Student ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {student.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
