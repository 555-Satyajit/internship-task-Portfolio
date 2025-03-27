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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden bg-[#121212]"
    >
      {/* Enhanced Background SVG with More Dynamic Gradient */}
      <svg 
        className="absolute inset-0 z-0 opacity-30 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810" 
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#6E41C0', stopOpacity:0.4}} />
            <stop offset="100%" style={{stopColor:'#41C0A0', stopOpacity:0.4}} />
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
              stroke="rgba(110, 65, 192, 0.15)" 
              strokeWidth="1.5"
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
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          d="M0 400 Q720 600 1440 400" 
          fill="none" 
          stroke="rgba(65, 192, 160, 0.3)" 
          strokeWidth="4"
        />
      </svg>

      {/* More Refined Floating Decorative Elements */}
      <motion.div
        initial={{ x: -50, opacity: 0, scale: 0.8 }}
        animate={{ 
          x: [0, 20, 0], 
          opacity: [0.3, 0.5, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 bg-[#6E41C0] w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full blur-xl opacity-40"
      />

      <motion.div
        initial={{ x: 50, opacity: 0, scale: 0.8 }}
        animate={{ 
          x: [0, -20, 0], 
          opacity: [0.3, 0.5, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 bg-[#41C0A0] w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full blur-xl opacity-40"
      />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-5xl mx-auto text-center px-4"
      >
        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white tracking-tight leading-tight"
          >
            Hi, I'm <span className="text-[#6E41C0] drop-shadow-lg">Satyajit Pujapanda</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-3xl mb-8 sm:mb-10 text-gray-300 px-4 font-medium tracking-wide"
          >
            A Creative Developer & Designer Crafting Digital Experiences
          </motion.p>
          
          {/* Enhanced Buttons with More Interactive Design */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10 sm:mb-14 w-full px-4"
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(110, 65, 192, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center bg-[#6E41C0] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#5A36A0] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Download className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Download CV
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(65, 192, 160, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center border-2 border-[#6E41C0] text-[#6E41C0] px-6 py-3 rounded-full hover:bg-[#6E41C0] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 mt-4 sm:mt-0"
            >
              <Send className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Contact Me
            </motion.a>
          </motion.div>

          {/* More Elegant Skills Showcase */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 sm:space-x-12 w-full px-4"
          >
            {[
              { 
                icon: <Code className="text-[#6E41C0] mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.5} />, 
                label: "Web Development" 
              },
              { 
                icon: <PenTool className="text-[#41C0A0] mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.5} />, 
                label: "UI/UX Design" 
              },
              { 
                icon: <Layers className="text-[#6E41C0] mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.5} />, 
                label: "Full Stack Solutions" 
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.7 + (index * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
                className="flex flex-col items-center group"
              >
                {skill.icon}
                <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* More Dynamic Bottom Wave */}
      <svg 
        className="absolute bottom-0 left-0 w-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
          d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
          fill="rgba(65, 192, 160, 0.15)" 
          stroke="rgba(110, 65, 192, 0.3)"
        />
      </svg>
    </section>
  )
}

export default Hero