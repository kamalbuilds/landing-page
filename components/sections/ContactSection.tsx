"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionH2, MotionDiv, MotionButton, fadeIn, staggerContainer, scaleUp, slideIn } from "./animations";

export default function ContactSection() {
  return (
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
  );
}
