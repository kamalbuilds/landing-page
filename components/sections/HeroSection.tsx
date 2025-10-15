"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MotionSection, MotionH1, MotionP, MotionDiv, fadeIn, staggerContainer, slideIn } from "./animations";
import { stats, technologies } from "./data";

export default function HeroSection() {
  return (
    <MotionSection 
      className="relative min-h-screen flex items-center text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Overlays for better contrast and vibes */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Trust Badge */}
          <motion.div
            className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-medium">🚀 Trusted by 50+ Companies Worldwide</p>
          </motion.div>

          <MotionH1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            animate={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            ChainCrafters
          </MotionH1>
          
          <MotionP 
            className="text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Building innovative blockchain solutions that scale and improve users lives
          </MotionP>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-service blockchain development agency specializing in smart contracts, dApps, DeFi, and Web3 consulting
          </motion.p>

          <MotionDiv 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={slideIn}>
              <Link 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold transition inline-block shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div variants={slideIn}>
              <Link 
                href="#projects" 
                className="bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur px-10 py-4 rounded-xl font-semibold transition inline-block transform hover:scale-105"
              >
                View Our Work
              </Link>
            </motion.div>
          </MotionDiv>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm"
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
    </MotionSection>
  );
}
