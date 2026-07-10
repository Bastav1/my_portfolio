import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./components/Preloader.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Journey from "./components/Journey.jsx";
import Quotes from "./components/Quotes.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { initSmoothScroll, stopScroll, startScroll } from "./lib/smoothScroll.js";

const grainUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cleanup = initSmoothScroll();
    stopScroll();
    return cleanup;
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    startScroll();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[998] opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: grainUrl }}
      />

      <CustomCursor />

      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <Navbar />

      <main>
        <Hero ready={!loading} />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Journey />
        <Quotes />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
