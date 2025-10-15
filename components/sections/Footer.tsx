"use client";

import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-1/4 h-32 w-32 rounded-full bg-purple-600/20 blur-2xl"></div>
      <div className="pointer-events-none absolute top-0 right-1/4 h-40 w-40 rounded-full bg-blue-600/20 blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ChainCrafters
            </h2>
            <p className="mt-2 text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
              Building blockchain solutions that matter
            </p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/kamalbuilds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition p-3 rounded-xl hover:bg-white/10"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/0xkamal7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition p-3 rounded-xl hover:bg-white/10"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            &copy; {new Date().getFullYear()} ChainCrafters. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition text-gray-400 hover:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition text-gray-400 hover:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
