/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Star,
  Folder,
  Award,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Enhanced Project Card with modern design
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const getTagIcon = (tagName) => {
    switch (tagName.toLowerCase()) {
      case "react":
      case "nextjs":
        return "⚛️";
      case "mongodb":
      case "supabase":
        return "🗄️";
      case "tailwind":
      case "css":
      case "scss":
        return "🎨";
      case "restapi":
        return "🔗";
      case "javascript":
        return "📜";
      default:
        return "🔧";
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className="group cursor-pointer sm:w-[400px] w-full"
      >
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 min-h-[500px] flex flex-col">
          {/* Project Image */}
          <div className="relative w-full h-[240px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with action buttons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-4 right-4 flex gap-3">
                {/* GitHub Link */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20 flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:shadow-lg"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </motion.div>

                {/* Live Demo Link (if available) */}
                {live_demo_link && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      onClick={() => window.open(live_demo_link, "_blank")}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border border-white/20 flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/90 to-blue-500/90 backdrop-blur-sm border border-white/20">
              <Star className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">Featured</span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Project Title */}
            <div className="flex items-center gap-2 mb-3">
              <Folder className="w-5 h-5 text-purple-400" />
              <h3 className="text-white text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                {name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
              {description}
            </p>

            {/* Tech Stack Tags */}
            <div className="space-y-3">
              <h4 className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, tagIndex) => (
                  <motion.div
                    key={`${name}-${tag.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <span className="text-sm">{getTagIcon(tag.name)}</span>
                    <span className={`text-xs font-medium ${tag.color}`}>
                      {tag.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* View Project Link */}
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group/link"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Hover effect decoration */}
          <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// Statistics Component for Projects Overview
const ProjectStats = () => {
  const stats = [
    {
      number: "3+",
      label: "Projects",
      icon: <Folder className="w-5 h-5 text-purple-400" />,
    },
    {
      number: "100%",
      label: "Success Rate",
      icon: <Award className="w-5 h-5 text-green-400" />,
    },
    {
      number: "50+",
      label: "GitHub Stars",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
    },
    {
      number: "15+",
      label: "Technologies",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
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
        Project Portfolio
        <span className="block text-gray-400 text-sm font-normal mt-2">
          Showcasing real-world applications and technical expertise
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

const Works = () => {
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
          Showcasing Innovation
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Featured{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl mx-auto text-center leading-[30px]"
        >
          A curated collection of projects that demonstrate my technical
          expertise and problem-solving abilities. Each project showcases
          different aspects of modern web development, from AI/ML integration to
          full-stack applications, built with cutting-edge technologies and best
          practices.
        </motion.p>
      </motion.div>

      {/* Project Statistics */}
      <ProjectStats />

      {/* Projects Grid */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to work on innovative projects that push the
            boundaries of technology. Let&apos;s build something amazing
            together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "#contact")}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

const WorksSection = SectionWrapper(Works, "");
export default WorksSection;
