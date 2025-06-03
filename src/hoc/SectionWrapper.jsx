import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Detect mobile device
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Mobile-optimized viewport settings
    const viewportSettings = isMobile
      ? { once: true, amount: 0.1, margin: "0px 0px -100px 0px" }
      : { once: true, amount: 0.25 };

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={viewportSettings}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
