import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SectionScroller from "@/components/SectionScroller";

export default function LandingPage() {
  return (
    <main className="bg-white text-[#111827] overflow-x-hidden">
      <SectionScroller />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <GlobalReach />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
