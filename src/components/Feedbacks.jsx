import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Quote, Star, Award, Users, ThumbsUp } from "lucide-react";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.02, y: -5 }}
    className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
  >
    {/* Background Gradient Orb */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Quote Icon */}
    <div className="relative z-10">
      <div className="mb-6">
        <Quote className="w-8 h-8 text-purple-400 opacity-60" />
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
        &ldquo;{testimonial}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={image}
              alt={`${name}'s avatar`}
              className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{name}</h4>
            <p className="text-purple-400 text-sm font-medium">{designation}</p>
            <p className="text-slate-400 text-sm">{company}</p>
          </div>
        </div>

        {/* Verified Badge */}
        <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
          <Award className="w-3 h-3" />
          Verified
        </div>
      </div>
    </div>
  </motion.div>
);

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Statistics Component for Testimonials Overview
const TestimonialStats = () => {
  const stats = [
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <ThumbsUp className="w-5 h-5 text-green-400" />,
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: <Users className="w-5 h-5 text-blue-400" />,
    },
    {
      number: "5.0",
      label: "Average Rating",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
    },
    {
      number: "100%",
      label: "Project Success",
      icon: <Award className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/30 p-6 rounded-xl text-center group hover:border-purple-500/30 transition-all duration-300"
        >
          <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {stat.number}
          </div>
          <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div variants={textVariant()} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 text-lg font-semibold mb-4 tracking-wide"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            What{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Don&apos;t just take my word for it. Here&apos;s what clients and
            colleagues have to say about working with me.
          </motion.p>
        </motion.div>

        {/* Statistics Overview */}
        <TestimonialStats />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied clients who have transformed their
              ideas into successful digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Let&apos;s Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
