import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Video,
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Enhanced Service Card with modern design and icons
const ServiceCard = ({ index, title, icon }) => {
  const getServiceIcon = (title) => {
    switch (title.toLowerCase()) {
      case "ai | ml engineer":
        return <Brain className="w-12 h-12 text-purple-400" />;
      case "web developer":
        return <Code className="w-12 h-12 text-blue-400" />;
      case "data scientist":
        return <Database className="w-12 h-12 text-green-400" />;
      case "content creator":
        return <Video className="w-12 h-12 text-pink-400" />;
      default:
        return <Zap className="w-12 h-12 text-yellow-400" />;
    }
  };

  return (
    <Tilt className="xs:w-[280px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full group cursor-pointer"
      >
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 min-h-[320px] flex flex-col items-center justify-center relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon container */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative mb-6 p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10"
          >
            {getServiceIcon(title)}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Title */}
          <h3 className="text-white text-xl font-bold text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            {title}
          </h3>

          {/* Description based on service */}
          <p className="text-gray-300 text-sm text-center leading-relaxed">
            {title === "AI | ML Engineer" &&
              "Building intelligent systems with cutting-edge AI/ML technologies"}
            {title === "Web Developer" &&
              "Creating responsive, modern web applications with latest frameworks"}
            {title === "Data Scientist" &&
              "Extracting insights from complex data to drive business decisions"}
            {title === "Content Creator" &&
              "Producing engaging content and educational materials"}
          </p>

          {/* Hover effect dots */}
          <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Statistics Component
const StatItem = ({ number, label, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="mb-3 p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

const About = () => {
  const achievements = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Target className="w-6 h-6 text-purple-400" />,
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    },
    {
      number: "15+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6 text-green-400" />,
    },
    {
      number: "99%",
      label: "Success Rate",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
    },
  ];

  const skills = [
    "Machine Learning & AI",
    "Full-Stack Development",
    "Data Analytics",
    "Python & JavaScript",
    "React & Node.js",
    "Flask & Django",
  ];

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Get to know me</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Professional{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Overview
          </span>
        </h2>
      </motion.div>

      {/* Main Content Grid */}
      <div className="mt-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Description and Skills */}
        <div className="space-y-8">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            I&apos;m a skilled software developer with extensive experience in{" "}
            <span className="text-purple-400 font-semibold">
              Data Management
            </span>
            ,<span className="text-blue-400 font-semibold"> Data Science</span>,
            and{" "}
            <span className="text-green-400 font-semibold">
              Machine Learning
            </span>
            . Proficient in Python and JavaScript, with expertise in frameworks
            like React, Node.js, and Flask.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            I&apos;m a quick learner who collaborates closely with clients to
            create
            <span className="text-yellow-400 font-semibold">
              {" "}
              efficient, scalable, and user-friendly solutions
            </span>{" "}
            that solve real-world problems and drive business growth.
          </motion.p>

          {/* Skills Grid */}
          <motion.div variants={fadeIn("", "", 0.3, 1)} className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Statistics */}
        <motion.div
          variants={fadeIn("left", "", 0.2, 1)}
          className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-white text-2xl font-bold text-center mb-8">
            Track Record
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((stat, index) => (
              <StatItem key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div variants={fadeIn("", "", 0.4, 1)} className="mt-20">
        <h3 className="text-white text-3xl font-bold text-center mb-4">
          Professional Services
        </h3>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Delivering comprehensive solutions across multiple domains with a
          focus on innovation and excellence
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
