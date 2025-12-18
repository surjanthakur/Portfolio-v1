import { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";
import { HeroPage, Footer } from "./components/index";
import About from "./pages/About";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1, // smooth but not floaty
      easing: t => 1 - Math.pow(1 - t, 4), // buttery ease-out
      smoothWheel: true,
      smoothTouch: false, // touch users hate fake inertia
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="main-container">
      <HeroPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
