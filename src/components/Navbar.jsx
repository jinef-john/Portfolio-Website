import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code2,
  Download,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "../constants";

const Navbarr = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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

  const renderLink = (link, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }} // Reduced scale for better mobile performance
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <Link
        href={`#${link.id}`}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 relative overflow-hidden ${
          active === link.title
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
        onClick={() => {
          setActive(link.title);
        }}
      >
        <motion.div
          animate={active === link.title ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.3 }} // Faster animation
        >
          {getNavIcon(link.title)}
        </motion.div>
        <span className="font-medium relative z-10">{link.title}</span>

        {/* Simplified hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        />
      </Link>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50"
    >
      <Navbar
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        maxWidth="full"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Brand */}
          <NavbarBrand>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                color="foreground"
                href="#"
                className="flex items-center gap-3 text-white"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" }, // Slower rotation
                  }}
                  className="relative p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                >
                  <Code2 className="w-6 h-6 text-white" />
                  {/* Simplified glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-md opacity-40 -z-10" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Jinef</span>
                  <span className="text-xs text-emerald-400 hidden sm:block">
                    AI-ML Engineer | Web Developer
                  </span>
                </div>
              </Link>
            </motion.div>
          </NavbarBrand>

          {/* Desktop Navigation */}
          <NavbarContent className="hidden lg:flex gap-2" justify="center">
            {navLinks.map((link, index) => (
              <NavbarItem key={index}>{renderLink(link, index)}</NavbarItem>
            ))}
          </NavbarContent>

          {/* CTA Button - Desktop */}
          <NavbarContent justify="end" className="hidden lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                startContent={<Download className="w-4 h-4" />}
              >
                Resume
              </Button>
            </motion.div>
          </NavbarContent>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/80 backdrop-blur-sm text-white hover:bg-slate-700/80 transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-72 bg-slate-900/98 backdrop-blur-md border-l border-white/10 z-50 lg:hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Menu</h3>
                      <p className="text-gray-400 text-sm">Navigation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="bg-gradient-to-r from-black/90 to-purple-500/90 p-6 space-y-2 ">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                        active === link.title
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setActive(link.title);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {getNavIcon(link.title)}
                      <span className="font-medium">{link.title}</span>
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t border-white/10 mt-auto">
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium py-3 rounded-xl"
                    startContent={<Download className="w-4 h-4" />}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Navbar>
    </motion.div>
  );
};

export default Navbarr;
