"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionH2, MotionDiv, fadeIn, staggerContainer, scaleUp, slideInFromLeft } from "./animations";
import { projects } from "./data";

export default function ProjectsSection() {
  return (
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
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={slideInFromLeft}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient.replace('/80', '/20')}`}></div>
                <span className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`bg-${project.techColor}-600/20 text-${project.techColor}-300 text-xs px-3 py-1 rounded-full border border-${project.techColor}-500/30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
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
  );
}
