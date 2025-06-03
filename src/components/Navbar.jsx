import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
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
import { motion } from "framer-motion";

import { navLinks } from "../constants";

const Navbarr = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Link
        href={`#${link.id}`}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
          active === link.title
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
        onClick={() => {
          setActive(link.title);
          window.scrollTo(0, 0);
        }}
      >
        <motion.div
          animate={active === link.title ? { rotate: [0, 360] } : {}}
          transition={{ duration: 0.5 }}
        >
          {getNavIcon(link.title)}
        </motion.div>
        <span className="font-medium relative z-10">{link.title}</span>

        {/* Hover effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
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
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
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
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                >
                  <Code2 className="w-6 h-6 text-white" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-md opacity-60 -z-10 animate-pulse" />
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
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-white"
            icon={
              isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )
            }
          />
        </div>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 pt-6 relative overflow-hidden">
          {/* Background particles for mobile menu */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 px-4 relative z-10">
            {navLinks.map((link, index) => (
              <NavbarMenuItem key={`${link.id}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Link
                    href={`#${link.id}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden w-full ${
                      active === link.title
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => {
                      setActive(link.title);
                      setIsMenuOpen(false);
                    }}
                  >
                    <motion.div
                      animate={
                        active === link.title ? { rotate: [0, 360] } : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {getNavIcon(link.title)}
                    </motion.div>
                    <span className="font-medium text-lg">{link.title}</span>

                    {/* Mobile hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              </NavbarMenuItem>
            ))}

            {/* Mobile CTA */}
            <NavbarMenuItem>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  startContent={<Download className="w-5 h-5" />}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume
                </Button>
              </motion.div>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
};

export default Navbarr;
