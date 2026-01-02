
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services/Services";
import Platforms from "./components/Platforms";
import Team from "./components/Team";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import useAOS from "./hooks/useAOS";
import "aos/dist/aos.css";
import "swiper/css";
import "./index.css";

export default function App() {
  useAOS(); // initializes AOS same as your script

  // handle nav scrolled class
  useEffect(() => {
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (window.scrollY > 500) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Platforms />
        <Team />
        <Process />
        <Stats />
        <FAQ />
        <CTA />
        <Testimonials />
        <CaseStudies />
        <Contact /> 
        </main>
       
      <Footer />
    </>
  );
}
