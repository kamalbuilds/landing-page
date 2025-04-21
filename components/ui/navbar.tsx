"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? "" : "text-white dark:text-white"}`}>
              ChainCrafters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`font-medium hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`font-medium hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="#team"
              className={`font-medium hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              Team
            </Link>
            <Link
              href="#projects"
              className={`font-medium hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`font-medium hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              href="https://github.com/kamalbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-600 transition ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              <Github className="w-5 h-5" />
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isScrolled ? "" : "text-white dark:text-white"
              }`}
            >
              <div className="w-6 flex flex-col gap-1">
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-1.5 bg-current"
                      : "bg-current"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "bg-current"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5 bg-current"
                      : "bg-current"
                  }`}
                ></span>
              </div>
            </button>
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
              className="font-medium hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="font-medium hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#team"
              className="font-medium hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#projects"
              className="font-medium hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-medium hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://github.com/kamalbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600 transition"
            >
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 