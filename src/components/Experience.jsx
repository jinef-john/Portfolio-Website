import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Award,
  Building,
  Clock,
  Star,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import PropTypes from "prop-types";

// Enhanced Experience Card with modern design
const ExperienceCard = ({ experience, index }) => {
  const getCompanyIcon = (companyName) => {
    switch (companyName.toLowerCase()) {
      case "fivver/upwork":
        return <Users className="w-6 h-6 text-blue-400" />;
      case "tsc commision":
        return <TrendingUp className="w-6 h-6 text-green-400" />;
      case "shopify":
        return <Building className="w-6 h-6 text-purple-400" />;
      case "workforce":
        return <Target className="w-6 h-6 text-orange-400" />;
      default:
        return <Building className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (date) => {
    return date.includes("Present") ? "text-green-400" : "text-blue-400";
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)",
        color: "#fff",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(30, 41, 59, 0.8)",
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
      }}
      date={
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className={`flex items-center gap-2 font-semibold ${getStatusColor(experience.date)}`}
        >
          <Calendar className="w-4 h-4" />
          <span>{experience.date}</span>
        </motion.div>
      }
      iconStyle={{ 
        background: `linear-gradient(135deg, ${experience.iconBg}, rgba(255, 255, 255, 0.1))`,
        border: "2px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      }}
      icon={
        <motion.div 
          className="flex justify-center items-center w-full h-full"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain rounded-lg"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="relative"
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-300 mb-3">
              {getCompanyIcon(experience.company_name)}
              <span className="text-lg font-semibold">{experience.company_name}</span>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
            experience.date.includes("Present") 
              ? "bg-green-500/20 text-green-400 border border-green-500/30" 
              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              experience.date.includes("Present") ? "bg-green-400" : "bg-blue-400"
            } animate-pulse`}></div>
            {experience.date.includes("Present") ? "Current" : "Completed"}
          </div>
        </div>

        {/* Experience Points */}
        <div className="space-y-3">
          <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + pointIndex * 0.1 + 0.4 }}
                className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed group/item"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mt-0.5 group-hover/item:from-purple-500/40 group-hover/item:to-blue-500/40 transition-all duration-300">
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                </div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 flex gap-1 opacity-30">
          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// Statistics Component for Experience Overview
const ExperienceStats = () => {
  const stats = [
    { number: "4+", label: "Positions", icon: <Building className="w-5 h-5 text-blue-400" /> },
    { number: "3+", label: "Years", icon: <Clock className="w-5 h-5 text-green-400" /> },
    { number: "50+", label: "Projects", icon: <Target className="w-5 h-5 text-purple-400" /> },
    { number: "15+", label: "Clients", icon: <Users className="w-5 h-5 text-orange-400" /> },
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
            <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
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
          A comprehensive overview of my professional journey, showcasing diverse experiences 
          across multiple domains including AI/ML, web development, and data science. Each role 
          has contributed to building a robust foundation in modern technology solutions.
        </motion.p>
      </motion.div>

      {/* Experience Statistics */}
      <ExperienceStats />

      {/* Timeline Section */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
          
          {/* Timeline End Element */}
          <VerticalTimelineElement
            iconStyle={{
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
            icon={
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-center items-center w-full h-full"
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
            }
          />
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
