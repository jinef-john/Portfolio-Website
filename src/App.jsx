import { lazy, Suspense, useState, useEffect } from "react";
import { Hero, Navbarr, Contact } from "./components";

// Lazy load heavy components for better mobile performance
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Loading component for lazy-loaded sections
const LoadingSection = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
  </div>
);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative z-0 bg-primary w-full overflow-x-hidden">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat w-full overflow-x-hidden">
        <Navbarr />
        <Hero />
      </div>

      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Works />
      </Suspense>

      <div className="relative z-0">
        <Contact />
        {/* Only load StarsCanvas after other components on mobile */}
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
