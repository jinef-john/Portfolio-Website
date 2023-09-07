import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { MusicPic, Nairobi, TwitterCard, Circle } from "./subHero";

import { SectionWrapper } from "../hoc";

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
            <p className="text-white hidden sm:block sm:text-[15px] xs:text-[15px] text-[16px] lg:leading-[30px]">
              Data Science | Master Data Management | FrontEnd Dev | FrontEnd
              Dev,
              <br />
              <span className="text-[#915eff]">A-I | Machine learning </span>|
              JavaScript+React | Project Management
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
                // y: [0, 50, 25, 70, 0],
                scale: [1.2, 1.6, 1.3],
              }}
              transition={{
                duration: 20,
                repeat: 20,
                repeatType: "mirror",
                type: "tween",
                damping: 300,
                stiffness: 10,
                repeatDelay: 3,
              }}
            >
              <Circle />
            </motion.div>
          </div>
          <div className="flex">
            <motion.div
              className=" p-2"
              animate={{
                y: [0, 8, 15, 24, 21, 48, 12, 0],
              }}
              transition={{
                duration: 30,
                repeat: 20,
                repeatType: "mirror",
                repeatDelay: 2.5,
              }}
            >
              <Nairobi />
            </motion.div>
            <motion.div
              className=" p-2 "
              animate={{
                y: [0, 8, 4, 0],
                opacity: [1, 0.7, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeatType: "mirror",
                repeat: 10,
                repeatDelay: 3,
              }}
            >
              <MusicPic />
            </motion.div>
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

export default SectionWrapper(Hero, "#");
