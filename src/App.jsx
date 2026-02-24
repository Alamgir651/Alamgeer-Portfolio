import React, { useEffect, lazy, Suspense } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Lazy load all page components for better performance
const Hero = lazy(() => import("./pages/home/Hero"));
const About = lazy(() => import("./pages/about/About"));
const Resume = lazy(() => import("./pages/resume/Resume"));
const Services = lazy(() => import("./pages/services/Services"));
const Skills = lazy(() => import("./pages/skills/Skills"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const HireMe = lazy(() => import("./pages/blogs/Hireme"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Wait for lazy-loaded sections to render
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('main > section');

      sections.forEach((section) => {
        if (section.id === 'home') return;

        gsap.fromTo(section,
          { opacity: 0.3, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 20%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // Parallax on background watermark text
      const bgTexts = document.querySelectorAll(
        '.background-text, .background-text-services, .background-text-projects, .background-text-skills, .background-text-resume, .background-text-contact'
      );

      bgTexts.forEach((text) => {
        const parentSection = text.closest('section');
        if (parentSection) {
          gsap.to(text, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: parentSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <ScrollToHashElement />

      <Suspense fallback={<Loader />}>
        <main>
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Projects />
          <HireMe />
          <Contact />
        </main>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
