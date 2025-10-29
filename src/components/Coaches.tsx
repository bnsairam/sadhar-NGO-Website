import { Card, CardContent } from "@/components/ui/card";

const Coaches = () => {
  const coaches = [
    {
      name: "Sensei P. Prem Kumar, B.Sc",
      image: "/img/coach1.png",
      qualification:
        "P.G. Diploma in Safety | San Dan & National Referee 'A' Grade, Judo Federation of India",
    },
    {
      name: "Mr. Srikanth P, M.E",
      image: "/img/coach2.png",
      qualification:
        "Diploma in Sports Coaching (Judo) - NIS | PG Diploma in Sports Performance Analysis - NIS",
    },
    {
      name: "Mr. M. Sathyavanan, B.Sc",
      image: "/img/coach3.png",
      qualification:
        "Diploma in Sports Coaching (Judo) - NIS | Sho Dan, Judo Federation of India",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#FF9933]/10 via-white to-[#138808]/10">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-[#FF9933]">OUR</span>{" "}
          <span className="text-[#000080]">COACHES</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-transparent hover:border-[#138808]/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-[#000080]">
                  {coach.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coach.qualification}
                </p>
                <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
