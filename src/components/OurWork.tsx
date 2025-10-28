import { useEffect, useRef, useState } from "react";

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      className="section-padding bg-background"
    >
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          OUR WORK
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-2">
          Our programs are inclusive, wide-ranging and impactful
        </p>
        <p className="text-sm text-center text-muted-foreground mb-12">
          * as of 2024
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="text-5xl font-bold text-primary mb-2">
                {counts.programmes}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                Total Programmes
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="text-5xl font-bold text-secondary mb-2">
                {counts.athletes}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                Total Athletes
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="text-5xl font-bold text-primary mb-2">
                {counts.academies}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                High Performance Academies
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="text-5xl font-bold text-secondary mb-2">
                {counts.females}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                Female Athletes
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="text-5xl font-bold text-primary mb-2">
                {counts.paraAthletes}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                Para-Athletes
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="text-5xl font-bold text-secondary mb-2">
                {counts.states}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase">
                States Covered
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/ourwork.webp"
              alt="Map of India showing 18 states where our academy operates"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
