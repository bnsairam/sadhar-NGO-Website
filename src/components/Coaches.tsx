import { Card, CardContent } from "@/components/ui/card";

const Coaches = () => {
  const coaches = [
    {
      name: "Sensei P. Prem kumar B.Sc",
      image: "/img/coach1.png",
      qualification:
        "P.G.Diploma in safety San Dan & National Referee 'A' grade Judo federation of India",
    },
    {
      name: "Mr. Srikanth P M.E",
      image: "/img/coach2.png",
      qualification:
        "Diploma in Sports Coaching Judo-NIS PG Diploma in Sports Performance Analysis NIS",
    },
    {
      name: "M. Sathyavanan B.Sc",
      image: "/img/coach3.png",
      qualification:
        "Diploma in Sports Coaching Judo-NIS Sho Dan Judo Federation of India",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          OUR COACHES
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {coach.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coach.qualification}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
