import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { MusicPic, Nairobi, TwitterCard } from "./subHero";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`sm:px-4 px-6 absolute inset-0 top-10 max-w-7xl flex flex-col md:flex-row items-start gap-5 lg:flex-1 border-2 border-green-700`}
      >
        <div className="flex flex-row ">
          <div className="flex flex-col justify-center items-center mt-5 ">
            <div className="h-5 w-5 rounded-full bg-[#915eff]" />
            <div className="h-40 sm:h-80 w-1 violet-gradient" />
          </div>

          <div className="flex flex-col justify-center items-center mt-5">
            <h1
              className={`${styles.heroHeadText}
             text-white`}
            >
              Hello, I'm <span className="text-[#915eff]">Jinef</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I create beautiful Web Interfaces and 3D visuals
            </p>
          </div>
        </div>

        <div className="flex flex-wrap border-2 mt-3 p-4 flex-1">
          <div className="w-1/3 p-2">
            <MusicPic />
          </div>
          <div className=" p-2 ml-10 ">
            <TwitterCard />
          </div>
          <div className="w-1/3 p-2">SomePalceholder{/* <Slider /> */}</div>
          <div className="w-1/3 p-2">
            <Nairobi />
          </div>
          <div className="w-1/3 p-2">Something Here{/* <Icon /> */}</div>
          <div className="w-1/3 p-2">PlaceHolder{/* <Icon /> */}</div>
          <div className="w-1/3 p-2">{/* <Icon /> */}</div>
          <div className="w-1/3 p-2">{/* <Icon /> */}</div>
          <div className="w-1/3 p-2">{/* <Icon /> */}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
