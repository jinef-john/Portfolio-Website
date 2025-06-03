import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldneplj");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create FormData with proper field names for Formspree
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    await handleSubmit(formData);

    // Clear form if successful
    if (state.succeeded) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-10`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl"
        >
          <div className="mb-8">
            <p className={`${styles.sectionSubText} text-slate-400`}>
              Get in touch
            </p>
            <h3
              className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}
            >
              Contact.
            </h3>
            <p className="text-slate-400 text-lg mt-4 max-w-md">
              Ready to bring your ideas to life? Let&apos;s collaborate and
              create something amazing together.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 rounded-xl p-4 text-center">
              <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-slate-400 text-xs">jinefjohn@gmail.com</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-lg border border-blue-500/20 rounded-xl p-4 text-center">
              <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Phone</p>
              <p className="text-slate-400 text-xs">+254 706545870</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 backdrop-blur-lg border border-green-500/20 rounded-xl p-4 text-center">
              <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Location</p>
              <p className="text-slate-400 text-xs">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Status Messages */}
          {state.succeeded && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-green-400 font-medium">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {state.errors && state.errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400 font-medium">
                Something went wrong. Please try again or email me directly.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-xl py-3 px-4 placeholder:text-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-xl py-3 px-4 placeholder:text-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-xl py-3 px-4 placeholder:text-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              {state.submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
