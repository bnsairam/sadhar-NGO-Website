import { useEffect, useState } from "react";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Generate array of achievement images (21 total)
  const achievements = Array.from({ length: 21 }, (_, i) => ({
    image: `/img/achievement${i + 1}.webp`,
    alt: `Achievement ${i + 1}`,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary-foreground">
          ACHIEVEMENTS
        </h2>
        <p className="text-xl text-center text-primary-foreground/90 mb-12">
          Celebrating Excellence in Every Victory
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={achievement.image}
                  alt={achievement.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
