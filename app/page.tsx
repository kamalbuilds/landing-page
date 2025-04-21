import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">ChainCrafters</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">
              Building innovative blockchain solutions that scale and improve users' lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
              >
                Get in Touch
              </Link>
              <Link 
                href="#projects" 
                className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About ChainCrafters</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              ChainCrafters is a blockchain development company founded by two experienced developers with a combined 9+ years of blockchain expertise. We specialize in building decentralized applications, smart contracts, and blockchain solutions across multiple chains and protocols.
            </p>
            <p className="text-lg mb-6">
              With over 60+ hackathon wins between our founders, we bring a proven track record of innovation, technical excellence, and rapid solution delivery to every project.
            </p>
            <p className="text-lg">
              Our mission is to make blockchain technology accessible and impactful, creating solutions that solve real-world problems and improve users' lives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">dApp Development</h3>
              <p>Full-stack development of decentralized applications with beautiful UIs and robust smart contracts.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Smart Contract Development</h3>
              <p>Secure, auditable, and gas-optimized smart contracts across various blockchains including Ethereum, Solana, Avalanche, and more.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">DeFi Solutions</h3>
              <p>Development of decentralized finance protocols, from DEXs and lending platforms to yield aggregators.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Web3 Integration</h3>
              <p>Seamless integration of web3 functionality into existing applications and platforms.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Blockchain Consulting</h3>
              <p>Expert guidance on blockchain architecture, token economics, and technical strategy.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Custom Blockchain Solutions</h3>
              <p>Tailor-made blockchain solutions for enterprise needs and specific use cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Kamal's Profile */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://github.com/kamalbuilds.png" 
                  alt="Kamal Nayan Singh" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Kamal Nayan Singh</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">Co-Founder & Full Stack Blockchain Developer</p>
              <p className="text-center mb-4">
                6+ years of blockchain experience. Winner of 50+ global hackathons. Expert in MERN Stack and Rust.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/0xkamal7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Abhishek's Profile */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://github.com/abhishek-01k.png" 
                  alt="Abhishek" 
                  width={160} 
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Abhishek</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">Co-Founder & Blockchain Developer</p>
              <p className="text-center mb-4">
                3+ years of blockchain experience. SDE at Push Protocol. Winner of 10+ global hackathons.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/abhishek-01k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/abhish_3k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TradeSphere */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-2xl font-bold">TradeSphere</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TradeSphere</h3>
                <p className="mb-4">A decentralized trading platform that enables cross-chain asset trading with enhanced liquidity.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Ethereum</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Solidity</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/tradesphere-5vdrw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            {/* Gas Protocol */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-2xl font-bold">Gas Protocol</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gas Protocol</h3>
                <p className="mb-4">Unlocking gasless on-chain transactions for new Web3 users using Safe AA and GelatoRelaySDK.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Account Abstraction</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Web3</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/gas-protocol-46m74" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            {/* XChain Investments */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-2xl font-bold">XChain Investments</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">XChain Investments</h3>
                <p className="mb-4">Cross-chain investment platform enabling seamless asset management across multiple blockchains.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Cross-chain</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">DeFi</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
                </div>
                <a 
                  href="https://ethglobal.com/showcase/xchain-investments-4fu2t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/kamalbuilds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              View more projects on GitHub <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-center mb-8">
              Interested in working with us? We'd love to hear from you. Reach out to discuss your project needs.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">ChainCrafters</h2>
              <p className="mt-2">Building blockchain solutions that matter</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/kamalbuilds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/0xkamal7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ChainCrafters. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
