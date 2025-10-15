"use client";

import Image from "next/image";
import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { MotionSection, MotionH2, MotionDiv, fadeIn, staggerContainer, scaleUp, slideIn } from "./animations";
import { teamMembers } from "./data";

export default function TeamSection() {
  return (
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
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500 shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {member.name}
              </h3>
              <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
              <p className="text-center mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {member.description}
              </p>
              <motion.div 
                className="flex space-x-4"
                whileHover={{ scale: 1.1 }}
              >
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Github className="w-6 h-6" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2 rounded-lg hover:bg-white/10">
                  <Twitter className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
