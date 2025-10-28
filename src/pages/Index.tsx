import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import OurWork from "@/components/OurWork";
import Coaches from "@/components/Coaches";
import Sports from "@/components/Sports";
import Awards from "@/components/Awards";
import Students from "@/components/Students";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Mission />
        <OurWork />
        <Coaches />
        <Sports />
        <Awards />
        <Students />
        <Achievements />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
