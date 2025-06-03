import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Navbarr,
  StarsCanvas,
  Works,
} from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary w-full overflow-x-hidden">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat w-full overflow-x-hidden">
        <Navbarr />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
