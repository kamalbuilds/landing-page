"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

// Create motion components
const MotionNav = motion.nav;
const MotionSpan = motion.span;
const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionA = motion.a;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MotionNav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <MotionSpan 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ChainCrafters
            </MotionSpan>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <MotionDiv whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="#about"
                className="font-medium text-white hover:text-blue-400 transition"
              >
                About
              </Link>
            </MotionDiv>
            <MotionDiv whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="#services"
                className="font-medium text-white hover:text-blue-400 transition"
              >
                Services
              </Link>
            </MotionDiv>
            <MotionDiv whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="#team"
                className="font-medium text-white hover:text-blue-400 transition"
              >
                Team
              </Link>
            </MotionDiv>
            <MotionDiv whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="#projects"
                className="font-medium text-white hover:text-blue-400 transition"
              >
                Projects
              </Link>
            </MotionDiv>
            <MotionDiv whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="#contact"
                className="font-medium text-white hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </MotionDiv>
            <MotionDiv 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href="https://github.com/kamalbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <Github className="w-5 h-5" />
              </Link>
            </MotionDiv>
            <MotionButton
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 text-white"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </MotionButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <MotionButton
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-800 text-white"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </MotionButton>
            <MotionButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none text-white"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 flex flex-col gap-1">
                <span
                  className={`block h-0.5 w-full transition-all duration-300 bg-current ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 bg-current ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 bg-current ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : ""
                  }`}
                ></span>
              </div>
            </MotionButton>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-2 flex flex-col space-y-4">
            <Link
              href="#about"
              className="font-medium text-white hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="font-medium text-white hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#team"
              className="font-medium text-white hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#projects"
              className="font-medium text-white hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-medium text-white hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://github.com/kamalbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-blue-400 transition"
            >
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </MotionNav>
  );
} 