"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { 
  motion,
  AnimatePresence 
} from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// Adding horizontal slide animation
const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Create animated section component
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionButton = motion.button;
const MotionA = motion.a;

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero Section */}
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
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "10+", label: "Blockchain Networks" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
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
            {["Ethereum", "Solidity", "Polygon", "Web3", "DeFi", "NFT"].map((tech, index) => (
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

      {/* About Section */}
      <MotionSection 
        id="about" 
        className="relative py-20 bg-black text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={scaleUp}
          >
            About ChainCrafters
          </MotionH2>
          <MotionDiv 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-6"
              variants={fadeIn}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            >
              <p className="text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                ChainCrafters is a blockchain development company founded by two experienced developers with a combined 9+ years of blockchain expertise. We specialize in building decentralized applications, smart contracts, and blockchain solutions across multiple chains and protocols.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-6"
              variants={fadeIn}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            >
              <p className="text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                With over 60+ hackathon wins between our founders, we bring a proven track record of innovation, technical excellence, and rapid solution delivery to every project.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              variants={fadeIn}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            >
              <p className="text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our mission is to make blockchain technology accessible and impactful, creating solutions that solve real-world problems and improve users' lives.
              </p>
            </motion.div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Services Section */}
      <MotionSection 
        id="services" 
        className="relative py-20 bg-black text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
        <div className="pointer-events-none absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={scaleUp}
          >
            Our Services
          </MotionH2>
          
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>dApp Development</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Full-stack development of decentralized applications with beautiful UIs and robust smart contracts.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Smart Contract Development</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Secure, auditable, and gas-optimized smart contracts across various blockchains including Ethereum, Solana, Avalanche, and more.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>DeFi Solutions</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Development of decentralized finance protocols, from DEXs and lending platforms to yield aggregators.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Web3 Integration</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Seamless integration of web3 functionality into existing applications and platforms.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Blockchain Consulting</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Expert guidance on blockchain architecture, token economics, and technical strategy.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Custom Blockchain Solutions</h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Tailor-made blockchain solutions for enterprise needs and specific use cases.</p>
            </motion.div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Team Section */}
      <MotionSection 
        id="team" 
        className="relative py-20 bg-black text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
        <div className="pointer-events-none absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={scaleUp}
          >
            Our Team
          </MotionH2>
          
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Kamal's Profile */}
            <motion.div 
              className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500 shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image 
                  src="https://github.com/kamalbuilds.png" 
                  alt="Kamal Nayan Singh" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Kamal Nayan Singh</h3>
              <p className="text-blue-400 mb-4 font-medium">Co-Founder & Full Stack Blockchain Developer</p>
              <p className="text-center mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                6+ years of blockchain experience. Winner of 50+ global hackathons. Expert in MERN Stack and Rust.
              </p>
              <motion.div 
                className="flex space-x-4"
                whileHover={{ scale: 1.1 }}
              >
                <a href="https://github.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Twitter className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
                        
              {/* Aarav's Profile */}
            <motion.div 
              className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500 shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image 
                  src="https://pbs.twimg.com/profile_images/1960740396612431877/UyU7Y-c1_400x400.jpg" 
                  alt="Aarav raj" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Aarav raj</h3>
              <p className="text-blue-400 mb-4 font-medium">Full stack Blockchain Developer</p>
              <p className="text-center mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                3+ years of blockchain experience, Winner of 10+ global hackathons.
              </p>
              <motion.div 
                className="flex space-x-4"
                whileHover={{ scale: 1.1 }}
              >
                <a href="https://github.com/aarav1656/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Github className="w-6 h-6" />
                </a>
                <a href="http://x.com/aarav1656/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Twitter className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection 
        id="projects" 
        className="relative py-20 bg-black text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
        <div className="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={scaleUp}
          >
            Our Projects
          </MotionH2>
          
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* TradeSphere */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>TradeSphere</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>TradeSphere</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>A decentralized trading platform that enables cross-chain asset trading with enhanced liquidity.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">Ethereum</span>
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">React</span>
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">Solidity</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/tradesphere-5vdrw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>
            
            {/* Gas Protocol */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Gas Protocol</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Gas Protocol</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Unlocking gasless on-chain transactions for new Web3 users using Safe AA and GelatoRelaySDK.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">TypeScript</span>
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">Account Abstraction</span>
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">Web3</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/gas-protocol-46m74" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>
            
            {/* XChain Investments */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/80 to-blue-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>XChain Investments</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>XChain Investments</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Cross-chain investment platform enabling seamless asset management across multiple blockchains.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">Cross-chain</span>
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">DeFi</span>
                  <span className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">Next.js</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/xchain-investments-4fu2t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* AVA AI Agent */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-900/80 to-blue-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AVA AI Agent</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AVA AI Agent</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Multi-chain AI agent supporting Base, Mantle, Sui, and Arbitrum networks.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-600/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">Solidity</span>
                  <span className="bg-green-600/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">AI</span>
                  <span className="bg-green-600/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">Multi-chain</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/ava-the-ai-agent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* Sonic Predict */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-pink-900/80 to-indigo-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-indigo-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Sonic Predict</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Sonic Predict</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Prediction market platform built on Sonic protocols enabling decentralized forecasting.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-600/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">TypeScript</span>
                  <span className="bg-pink-600/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">Sonic</span>
                  <span className="bg-pink-600/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">DeFi</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/SonicPredict" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* NEAR Multichain AI Agent */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NEAR Multichain AI</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NEAR Multichain AI Agent</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>AI-powered agent for NEAR Protocol with cross-chain capabilities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">TypeScript</span>
                  <span className="bg-cyan-600/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">NEAR</span>
                  <span className="bg-cyan-600/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">AI</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/near-multichain-ai-agent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* SUI Gas Futures */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-teal-900/80 to-blue-900/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20"></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SUI Gas Futures</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SUI Gas Futures</h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Derivative contracts for SUI blockchain gas prices, enabling hedging against volatility.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-600/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">TypeScript</span>
                  <span className="bg-teal-600/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">SUI</span>
                  <span className="bg-teal-600/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">Derivatives</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/sui-gas-futures" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>
          </MotionDiv>
          
          <MotionDiv 
            className="mt-12 text-center"
            variants={fadeIn}
          >
            <a 
              href="https://github.com/kamalbuilds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
            >
              View more projects on GitHub <span className="ml-2">→</span>
            </a>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection 
        id="contact" 
        className="relative py-20 bg-black text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
        <div className="pointer-events-none absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={scaleUp}
          >
            Get In Touch
          </MotionH2>
          
          <MotionDiv 
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            variants={fadeIn}
          >
            <p className="text-center mb-8 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Interested in working with us? We'd love to hear from you. Reach out to discuss your project needs.
            </p>
            
            <form className="space-y-6">
              <MotionDiv 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div variants={slideIn}>
                  <label htmlFor="name" className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your name"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </motion.div>
                <motion.div variants={slideIn}>
                  <label htmlFor="email" className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your email"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </motion.div>
              </MotionDiv>
              
              <motion.div variants={slideIn}>
                <label htmlFor="subject" className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Subject"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </motion.div>
              
              <motion.div variants={slideIn}>
                <label htmlFor="message" className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Your message"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
              </motion.div>
              
              <MotionButton
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Message
              </MotionButton>
            </form>
          </MotionDiv>
        </div>
      </MotionSection>
      
      {/* Footer */}
      <footer className="relative bg-black text-white py-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 left-1/4 h-32 w-32 rounded-full bg-purple-600/20 blur-2xl"></div>
        <div className="pointer-events-none absolute top-0 right-1/4 h-40 w-40 rounded-full bg-blue-600/20 blur-2xl"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ChainCrafters</h2>
              <p className="mt-2 text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Building blockchain solutions that matter</p>
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
            <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>&copy; {new Date().getFullYear()} ChainCrafters. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition text-gray-400 hover:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition text-gray-400 hover:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
