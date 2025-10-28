import { useState } from "react";
import { Button } from "@/components/ui/button";

const Awards = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          AWARDS & RECOGNITION
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="/img/award.webp"
              alt="National Cadet Judo Championship 2023"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              National Cadet Judo Championship 2023
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className={!isExpanded ? "line-clamp-4" : ""}>
                The National Cadet Judo Championship 2023-2024 was successfully
                held at the Inspire Institute of Sports from 5th to 10th July.
                The event witnessed young judokas from across the country
                competing with great spirit and determination. Representing the
                Sardar Vallabhbhai Patel Judo Academy, one of our talented
                students showcased remarkable skill, discipline, and hard work to
                secure a prestigious medal at this national-level championship.
                This proud achievement highlights the academy's commitment to
                nurturing future champions and inspiring excellence in the sport
                of judo.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
