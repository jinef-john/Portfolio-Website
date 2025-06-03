import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Calendar,
  ChevronRight,
  Building,
  Star,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const CustomTimelineElement = ({ experience, index, isLast }) => {
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
    <div className="relative flex items-start mb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50"></div>
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-4 border-slate-900 flex items-center justify-center mr-6"
        style={{ background: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-8 h-8 object-contain rounded-lg"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
        className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-2">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              {getCompanyIcon(experience.company_name)}
              <span className="text-lg font-semibold">
                {experience.company_name}
              </span>
            </div>
            <div
              className={`flex items-center gap-2 font-medium ${getStatusColor(
                experience.date
              )}`}
            >
              <Calendar className="w-4 h-4" />
              <span>{experience.date}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium mt-3 lg:mt-0 w-fit ${
              experience.date.includes("Present")
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                experience.date.includes("Present")
                  ? "bg-green-400"
                  : "bg-blue-400"
              } animate-pulse`}
            ></div>
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
      </motion.div>
    </div>
  );
};

CustomTimelineElement.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
};

const CustomTimeline = ({ experiences }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <CustomTimelineElement
          key={`experience-${index}`}
          experience={experience}
          index={index}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

CustomTimeline.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company_name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      iconBg: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CustomTimeline;
