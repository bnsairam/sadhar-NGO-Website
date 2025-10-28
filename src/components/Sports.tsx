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
    <section className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          3 SPORTS SUPPORTED
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} athlete in action`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
                <h3 className="text-3xl font-bold text-white p-6 w-full">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;
