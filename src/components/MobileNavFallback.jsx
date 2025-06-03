import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  Code2,
  Download,
} from "lucide-react";
import { navLinks } from "../constants";

const MobileNavFallback = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const getNavIcon = (title) => {
    switch (title.toLowerCase()) {
      case "about":
        return <User className="w-4 h-4" />;
      case "work":
        return <Briefcase className="w-4 h-4" />;
      case "contact":
        return <Mail className="w-4 h-4" />;
      default:
        return <Home className="w-4 h-4" />;
    }
  };

  return (
    <div className="mobile-nav-container lg:hidden relative z-50">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-white/10 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Navigation</h3>
                    <p className="text-gray-400 text-sm">Portfolio Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={`#${link.id}`}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                          active === link.title
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => {
                          setActive(link.title);
                          setIsOpen(false);
                        }}
                      >
                        <motion.div
                          animate={active === link.title ? { rotate: [0, 360] } : {}}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0"
                        >
                          {getNavIcon(link.title)}
                        </motion.div>
                        <span className="font-medium text-lg">{link.title}</span>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="ml-auto w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavFallback;
