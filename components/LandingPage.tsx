import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach";
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
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <GlobalReach />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
