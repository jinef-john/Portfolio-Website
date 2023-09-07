import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { MusicPic, Nairobi, TwitterCard, Circle } from "./subHero";
// import { Circle } from "./SubHero";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`sm:px-4 px-6 absolute inset-0 top-5 max-w-7xl flex flex-col md:flex-row items-start gap-5 lg:flex-1`}
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
              Hello, I'm <span className="text-[#915eff]">Jibran</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 ml-4 text-white-100`}>
              I create beautiful Web Interfaces and 3D visuals.
            </p>
            <p className="text-white ml-2 hidden sm:block">
              I am an experienced developer skilled in Python, Java, FrontEnd
              Development, Machine learning, Javascript and its frameworks.
              <span className="hidden md:inline-block">
                My activities are much beyond my stream of education. ⚡ I am
                involved in a lot of organizational works in college related to
                clubs, hackathons, fests and workshops.
              </span>
            </p>
          </div>
        </div>

        <div className="hidden lg:block  mt-3 p-4 text-white">
          <div className="flex justify-between">
            <div className="w-2/3 p-2  ">
              <TwitterCard />
            </div>
            <motion.div
              className=" p-2 mr-6"
              animate={{
                y: [0, 50, 25, 70, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Circle />
            </motion.div>
          </div>
          <div className="flex">
            <div className=" p-2">
              <Nairobi />
            </div>
            <div className=" p-2 ">
              <MusicPic />
            </div>
          </div>
          {/* <div className="w-1/3 p-2">Something Here</div>
          <div className="w-1/3 p-2">PlaceHolder</div>
          <div className="w-1/3 p-2">Something</div>
          <div className="w-1/3 p-2">Content</div>
          <div className="w-1/3 p-2">Some</div> */}
        </div>
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
