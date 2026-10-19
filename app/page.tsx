import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import School from "../components/School";
import Boarding from "../components/Boarding";
import Grooming from "../components/Grooming";
import Transport from "../components/Transport";
import Differentials from "../components/Differentials";
import Gallery from "../components/Gallery";
import VisitSection from "../components/VisitSection";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FlowerBackground from "../components/FlowerBackground";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Fundo único: a cor e as flores valem para o site inteiro */}
      <main className="relative pt-16 bg-slate-50 overflow-x-clip">
        <FlowerBackground />

        <Hero />
        <About />
        <HowItWorks />
        <School />
        <Boarding />
        <Grooming />
        <Transport />
        <Differentials />
        <Gallery />
        <VisitSection />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}