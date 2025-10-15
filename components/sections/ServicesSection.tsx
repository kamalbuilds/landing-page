"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionH2, MotionDiv, fadeIn, staggerContainer, scaleUp } from "./animations";
import { services } from "./data";

export default function ServicesSection() {
  return (
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
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
