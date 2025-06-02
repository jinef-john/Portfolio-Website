import { motion } from "framer-motion";

import { styles } from "../styles";
import { MusicPic, Nairobi, TwitterCard, Circle, Notif } from "./subHero";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Main Hero Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side - Main Content */}
        <div className="relative z-10 pt-20 lg:pt-32 hero-mobile-padding">
          <div className="max-w-4xl lg:max-w-3xl">
            {/* Hero Badge */}
            <motion.div
              variants={fadeIn("down", "spring", 0.2, 1)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 mb-8"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className="space-y-4 mb-6"
            >
              <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                Hello, I&rsquo;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Jinef
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} text-white-100 max-w-2xl lg:max-w-xl`}
              >
                I create beautiful Web Interfaces, 3D visuals, and AI-powered
                solutions that drive business growth.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Data Science
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  Full Stack
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  React/JS
                </span>
              </div>
            </motion.div>

            {/* Achievement Metrics */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 1)}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-8 lg:mb-0"
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  50+
                </motion.div>
                <div className="text-white/60 text-xs md:text-sm">Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  3+
                </motion.div>
                <div className="text-white/60 text-xs md:text-sm">
                  Years Exp
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  15+
                </motion.div>
                <div className="text-white/60 text-xs md:text-sm">Clients</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  99%
                </motion.div>
                <div className="text-white/60 text-xs md:text-sm">Success</div>
              </div>
            </motion.div>

            {/* Mobile Only - Quick Action Icons */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              initial="hidden"
              animate="show"
              className="lg:hidden flex justify-center space-x-6 mt-6 mb-8"
            >
              {/* Portfolio Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-4 rounded-full glow-animation"
              >
                <svg
                  className="w-6 h-6 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </motion.div>

              {/* Contact Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-4 rounded-full"
              >
                <svg
                  className="w-6 h-6 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              {/* Download CV Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-4 rounded-full"
              >
                <svg
                  className="w-6 h-6 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Cards Grid - Mobile Responsive */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          {/* Mobile Layout - Optimized positioning to avoid content overlap */}
          <div className="lg:hidden">
            {/* TwitterCard - Bottom Left */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              initial="hidden"
              animate="show"
              className="absolute bottom-40 left-4 pointer-events-auto transform scale-65"
            >
              <TwitterCard />
            </motion.div>

            {/* Notif Chips - Bottom Center */}
            <motion.div
              variants={slideIn("up", "spring", 0.8, 1)}
              initial="hidden"
              animate="show"
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-auto scale-65"
            >
              <Notif />
            </motion.div>

            {/* Music Card - Bottom Right */}
            <motion.div
              variants={fadeIn("up", "spring", 1.0, 1)}
              initial="hidden"
              animate={{
                show: { opacity: 1, y: 0 },
                float: { y: [0, -8, 0] },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-40 right-4 pointer-events-auto transform scale-65"
            >
              <MusicPic />
            </motion.div>

            {/* Circle - Top Right Corner */}
            <motion.div
              variants={fadeIn("down", "spring", 0.4, 1)}
              initial="hidden"
              animate={{
                show: { opacity: 1, y: 0 },
                float: { rotate: [0, 180, 360] },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="absolute top-20 right-4 pointer-events-auto transform scale-50"
            >
              <Circle />
            </motion.div>

            {/* Nairobi - Top Left Corner */}
            <motion.div
              variants={fadeIn("down", "spring", 0.5, 1)}
              initial="hidden"
              animate={{
                show: { opacity: 1, y: 0 },
                float: { y: [0, -5, 0] },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute top-32 left-4 pointer-events-auto transform scale-60"
            >
              <Nairobi />
            </motion.div>
          </div>

          {/* Desktop Layout - Original positioning */}
          <div className="hidden lg:block">
            {/* TwitterCard - Top Right */}
            <motion.div
              variants={fadeIn("left", "spring", 0.6, 1)}
              initial="hidden"
              animate="show"
              className="absolute top-20 right-8 pointer-events-auto"
            >
              <TwitterCard />
            </motion.div>

            {/* Circle Progress - Top Center */}
            <motion.div
              variants={fadeIn("down", "spring", 0.8, 1)}
              initial="hidden"
              animate={{
                show: {
                  opacity: 1,
                  y: 0,
                },
                float: {
                  scale: [1.2, 1.6, 1.3],
                  rotate: [0, 360],
                },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute top-32 right-1/3 transform translate-x-1/2 pointer-events-auto"
            >
              <Circle />
            </motion.div>

            {/* Notif Chips - Middle */}
            <motion.div
              variants={slideIn("right", "spring", 1.0, 1)}
              initial="hidden"
              animate="show"
              className="absolute top-1/2 right-16 transform -translate-y-1/2 pointer-events-auto"
            >
              <Notif />
            </motion.div>

            {/* Nairobi Card - Bottom Left */}
            <motion.div
              variants={fadeIn("up", "spring", 1.2, 1)}
              initial="hidden"
              animate={{
                show: { opacity: 1, y: 0 },
                float: { y: [0, -20, 0] },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-32 right-2/3 pointer-events-auto"
            >
              <Nairobi />
            </motion.div>

            {/* Music Card - Bottom Right */}
            <motion.div
              variants={fadeIn("left", "spring", 1.4, 1)}
              initial="hidden"
              animate={{
                show: { opacity: 1, x: 0 },
                float: {
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                },
              }}
              transition={{
                show: { duration: 1 },
                float: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-20 right-8 pointer-events-auto"
            >
              <MusicPic />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements & Design Principles */}
        <div className="absolute top-1/4 left-8 w-2 h-32 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-24 bg-gradient-to-t from-blue-500 to-transparent rounded-full opacity-40" />

        {/* Custom Design Icons - Mobile */}
        <div className="lg:hidden">
          {/* Left Design Element */}
          <motion.div
            className="absolute top-1/3 left-2 flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Design Element */}
          <motion.div
            className="absolute bottom-1/3 right-2 flex flex-col space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-green-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-pink-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM2 15V4a2 2 0 012-2h6a2 2 0 012 2v11a3 3 0 11-6 0z"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional Mobile Enhancements */}
        <div className="lg:hidden">
          {/* Connecting Lines */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2, duration: 1 }}
          />

          {/* Pulse Elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 opacity-50" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-pattern animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
