import React from 'react'
import { motion } from 'framer-motion'
import { Download, Send, Code, PenTool, Layers } from 'lucide-react'

const Hero: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Satyajit Pujapanda (1).pdf'
    link.setAttribute('download', 'Satyjit-Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden bg-[#121212]"
    >
      {/* Background SVG with Gradient and Grid Pattern */}
      <svg 
        className="absolute inset-0 z-0 opacity-20 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810" 
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#6E41C0', stopOpacity:0.3}} />
            <stop offset="100%" style={{stopColor:'#41C0A0', stopOpacity:0.3}} />
          </linearGradient>
          
          <pattern 
            id="gridPattern" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 0 0 L 40 0 L 40 40 L 0 40 Z" 
              fill="none" 
              stroke="rgba(110, 65, 192, 0.1)" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#grad1)"
        />
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#gridPattern)"
        />
        
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          d="M0 400 Q720 600 1440 400" 
          fill="none" 
          stroke="rgba(65, 192, 160, 0.2)" 
          strokeWidth="3"
        />
      </svg>

      {/* Floating Decorative Elements - Improved for Mobile */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ 
          x: [0, 20, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity 
        }}
        className="absolute top-1/4 left-1/4 bg-[#6E41C0] w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full blur-xl opacity-30"
      />

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ 
          x: [0, -20, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 bg-[#41C0A0] w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full blur-xl opacity-30"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white w-full">
            Hi, I'm <span className="text-[#6E41C0]">Satyajit Pujapanda</span>
          </h1>
          
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 text-gray-300 px-4"
          >
            A Creative Developer & Designer Crafting Digital Experiences
          </motion.p>
          
          {/* Buttons with Improved Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 w-full px-4">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center bg-[#6E41C0] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#5A36A0] transition-all"
            >
              <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download CV
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center border border-[#6E41C0] text-[#6E41C0] px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#6E41C0] hover:text-white transition-all mt-4 sm:mt-0"
            >
              <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Contact Me
            </motion.a>
          </div>

          {/* Skills Showcase - Improved Responsiveness */}
          <div className="flex justify-center space-x-4 sm:space-x-8 w-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <Code 
                className="text-[#6E41C0] mb-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
                strokeWidth={1.5} 
              />
              <span className="text-xs sm:text-sm md:text-base text-gray-300">Web Development</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <PenTool 
                className="text-[#41C0A0] mb-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
                strokeWidth={1.5} 
              />
              <span className="text-xs sm:text-sm md:text-base text-gray-300">UI/UX Design</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center"
            >
              <Layers 
                className="text-[#6E41C0] mb-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
                strokeWidth={1.5} 
              />
              <span className="text-xs sm:text-sm md:text-base text-gray-300">Full Stack Solutions</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Wave */}
      <svg 
        className="absolute bottom-0 left-0 w-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
          fill="rgba(65, 192, 160, 0.1)" 
          stroke="rgba(110, 65, 192, 0.2)"
        />
      </svg>
    </section>
  )
}

export default Hero