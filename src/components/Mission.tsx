import { Quote } from "lucide-react";

const Mission = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/20" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic">
              "At Sardar Vallabhbhai Patel Judo Academy, we empower India's youth
              through judo, nurturing talent, discipline, and confidence. Our
              mission is to unlock potential, inspire excellence, and create a
              generation of athletes who excel in sport and in life, representing
              our nation with pride and resilience"
            </blockquote>
          </div>

          <div className="relative group cursor-pointer">
            <a
              href="https://youtu.be/OlBWHhugIzI?si=lR-9yFNLYX7ifG9R"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src="/img/founder_message.webp"
                alt="Founder's message video thumbnail"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold text-center">
                Watch Our Founder's Message
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
