import { motion } from "framer-motion";
import { Building, Clock, Users, Target } from "lucide-react";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import CustomTimeline from "./CustomTimeline";

// Statistics Component for Experience Overview
const ExperienceStats = () => {
  const stats = [
    {
      number: "4+",
      label: "Positions",
      icon: <Building className="w-5 h-5 text-blue-400" />,
    },
    {
      number: "3+",
      label: "Years",
      icon: <Clock className="w-5 h-5 text-green-400" />,
    },
    {
      number: "50+",
      label: "Projects",
      icon: <Target className="w-5 h-5 text-purple-400" />,
    },
    {
      number: "15+",
      label: "Clients",
      icon: <Users className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <h3 className="text-white text-2xl font-bold text-center mb-8">
        Professional Journey
        <span className="block text-gray-400 text-sm font-normal mt-2">
          Building expertise across diverse tech environments
        </span>
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <div className="mb-3 p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 w-fit mx-auto group-hover:border-purple-500/30 transition-all duration-300">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          A comprehensive overview of my professional journey, showcasing
          diverse experiences across multiple domains including AI/ML, web
          development, and data science. Each role has contributed to building a
          robust foundation in modern technology solutions.
        </motion.p>
      </motion.div>

      {/* Experience Statistics */}
      <ExperienceStats />

      {/* Timeline Section */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-20 flex flex-col"
      >
        <CustomTimeline experiences={experiences} />
      </motion.div>
    </div>
  );
};

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
