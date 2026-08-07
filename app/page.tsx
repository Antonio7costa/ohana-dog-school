import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import School from "../components/School";
import Boarding from "../components/Boarding";
import Grooming from "../components/Grooming";
import Transport from "../components/Transport";
import Gallery from "../components/Gallery";
import Differentials from "../components/Differentials";
import VisitSection from "../components/VisitSection";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <HowItWorks /> 
        <School />
        <Boarding />
        <Grooming />
        <Transport />
        <Gallery />
        <Differentials />
        <VisitSection />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}