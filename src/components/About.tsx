import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sardar Vallabhai Patel Sports Academy is a non-profit, independent
              organization established on August 14, 2015, by meritorious sports
              persons, sports activists, and volunteers of our state. Our mission
              is to build healthy, well-balanced citizens and foster a safe,
              prosperous, and peaceful community through sports.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the transformative power of sports to help children
              grow socially, emotionally, and physically.
            </p>
            <p className="text-xl font-bold text-primary">
              Together, let's continue to #changethescript
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("programmes")}
              >
                Our Programmes
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("involved")}
              >
                Get Involved
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("students")}
              >
                Are you an Athlete?
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/coach2.png"
              alt="Founder of Sardar Vallabhbhai Patel Sports Academy"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
