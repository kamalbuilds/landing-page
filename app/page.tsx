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
        className="relative pt-32 pb-20 bg-gradient-to-r from-black to-gray-900 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <MotionH1 
              className="text-5xl md:text-6xl font-bold mb-6"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              ChainCrafters
            </MotionH1>
            <MotionP 
              className="text-xl md:text-2xl mb-10 max-w-3xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Building innovative blockchain solutions that scale and improve users' lives
            </MotionP>
            <MotionDiv 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={slideIn}>
                <Link 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition inline-block"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div variants={slideIn}>
                <Link 
                  href="#projects" 
                  className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition inline-block"
                >
                  View Our Work
                </Link>
              </motion.div>
            </MotionDiv>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </MotionSection>

      {/* About Section */}
      <MotionSection 
        id="about" 
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <MotionH2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
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
            <motion.p className="text-lg mb-6" variants={fadeIn}>
              ChainCrafters is a blockchain development company founded by two experienced developers with a combined 9+ years of blockchain expertise. We specialize in building decentralized applications, smart contracts, and blockchain solutions across multiple chains and protocols.
            </motion.p>
            <motion.p className="text-lg mb-6" variants={fadeIn}>
              With over 60+ hackathon wins between our founders, we bring a proven track record of innovation, technical excellence, and rapid solution delivery to every project.
            </motion.p>
            <motion.p className="text-lg" variants={fadeIn}>
              Our mission is to make blockchain technology accessible and impactful, creating solutions that solve real-world problems and improve users' lives.
            </motion.p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Services Section */}
      <MotionSection 
        id="services" 
        className="py-20 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <MotionH2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
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
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">dApp Development</h3>
              <p>Full-stack development of decentralized applications with beautiful UIs and robust smart contracts.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Smart Contract Development</h3>
              <p>Secure, auditable, and gas-optimized smart contracts across various blockchains including Ethereum, Solana, Avalanche, and more.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">DeFi Solutions</h3>
              <p>Development of decentralized finance protocols, from DEXs and lending platforms to yield aggregators.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Web3 Integration</h3>
              <p>Seamless integration of web3 functionality into existing applications and platforms.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Blockchain Consulting</h3>
              <p>Expert guidance on blockchain architecture, token economics, and technical strategy.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Custom Blockchain Solutions</h3>
              <p>Tailor-made blockchain solutions for enterprise needs and specific use cases.</p>
            </motion.div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Team Section */}
      <MotionSection 
        id="team" 
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <MotionH2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            variants={scaleUp}
          >
            Our Team
          </MotionH2>
          
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Kamal's Profile */}
            <motion.div 
              className="flex flex-col items-center"
              variants={slideIn}
            >
              <motion.div 
                className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="https://github.com/kamalbuilds.png" 
                  alt="Kamal Nayan Singh" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Kamal Nayan Singh</h3>
              <p className="text-blue-400 mb-4">Co-Founder & Full Stack Blockchain Developer</p>
              <p className="text-center mb-4">
                6+ years of blockchain experience. Winner of 50+ global hackathons. Expert in MERN Stack and Rust.
              </p>
              <motion.div 
                className="flex space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://github.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Abhishek's Profile */}
            <motion.div 
              className="flex flex-col items-center"
              variants={slideIn}
            >
              <motion.div 
                className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="https://github.com/abhishek-01k.png" 
                  alt="Abhishek" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Abhishek</h3>
              <p className="text-blue-400 mb-4">Co-Founder & Blockchain Developer</p>
              <p className="text-center mb-4">
                4+ years of blockchain experience. SDE at Push Protocol. Winner of 10+ global hackathons.
              </p>
              <motion.div 
                className="flex space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://github.com/abhishek-01k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/abhish_3k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
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
        className="py-20 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <MotionH2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
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
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                <span className="text-2xl font-bold">TradeSphere</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TradeSphere</h3>
                <p className="mb-4">A decentralized trading platform that enables cross-chain asset trading with enhanced liquidity.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Ethereum</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Solidity</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/tradesphere-5vdrw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
            
            {/* Gas Protocol */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                <span className="text-2xl font-bold">Gas Protocol</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gas Protocol</h3>
                <p className="mb-4">Unlocking gasless on-chain transactions for new Web3 users using Safe AA and GelatoRelaySDK.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Account Abstraction</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Web3</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/gas-protocol-46m74" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
            
            {/* XChain Investments */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">XChain Investments</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">XChain Investments</h3>
                <p className="mb-4">Cross-chain investment platform enabling seamless asset management across multiple blockchains.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Cross-chain</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">DeFi</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Next.js</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/xchain-investments-4fu2t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>

            {/* AVA AI Agent */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">AVA AI Agent</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AVA AI Agent</h3>
                <p className="mb-4">Multi-chain AI agent supporting Base, Mantle, Sui, and Arbitrum networks.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Solidity</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">AI</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Multi-chain</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/ava-the-ai-agent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>

            {/* Sonic Predict */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-pink-900 to-indigo-900 flex items-center justify-center">
                <span className="text-2xl font-bold">Sonic Predict</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sonic Predict</h3>
                <p className="mb-4">Prediction market platform built on Sonic protocols enabling decentralized forecasting.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Sonic</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">DeFi</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/SonicPredict" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>

            {/* NEAR Multichain AI Agent */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
                <span className="text-2xl font-bold">NEAR Multichain AI</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">NEAR Multichain AI Agent</h3>
                <p className="mb-4">AI-powered agent for NEAR Protocol with cross-chain capabilities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">NEAR</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">AI</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/near-multichain-ai-agent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>

            {/* SUI Gas Futures */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-teal-900 to-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">SUI Gas Futures</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SUI Gas Futures</h3>
                <p className="mb-4">Derivative contracts for SUI blockchain gas prices, enabling hedging against volatility.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">SUI</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">Derivatives</span>
                </div>
                <a 
                  href="https://github.com/kamalbuilds/sui-gas-futures" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
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
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <MotionH2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            variants={scaleUp}
          >
            Get In Touch
          </MotionH2>
          
          <MotionDiv 
            className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-md p-8"
            variants={fadeIn}
          >
            <p className="text-center mb-8">
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
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={slideIn}>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                  />
                </motion.div>
              </MotionDiv>
              
              <motion.div variants={slideIn}>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                />
              </motion.div>
              
              <motion.div variants={slideIn}>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message"
                ></textarea>
              </motion.div>
              
              <MotionButton
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </MotionButton>
            </form>
          </MotionDiv>
        </div>
      </MotionSection>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">ChainCrafters</h2>
              <p className="mt-2">Building blockchain solutions that matter</p>
            </div>
            
            <div className="flex space-x-6">
              <motion.a 
                href="https://github.com/kamalbuilds" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/0xkamal7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ChainCrafters. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
