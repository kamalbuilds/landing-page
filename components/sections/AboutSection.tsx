"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionH2, MotionDiv, fadeIn, staggerContainer, scaleUp } from "./animations";

export default function AboutSection() {
  return (
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
  );
}
