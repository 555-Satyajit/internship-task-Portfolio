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
      {/* SVG Background Stays the Same */}
      <svg 
        className="absolute inset-0 z-0 opacity-20" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810" 
        preserveAspectRatio="xMinYMin slice"
      >
        {/* Previous SVG content remains unchanged */}
      </svg>

      {/* Floating Elements Refined */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ 
          x: [0, 10, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity 
        }}
        className="absolute top-1/4 left-1/4 bg-[#6E41C0] w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full blur-xl opacity-30"
      />

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ 
          x: [0, -10, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 bg-[#41C0A0] w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full blur-xl opacity-30"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-[#6E41C0]">Satyajit Pujapanda</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 text-gray-300"
          >
            A Creative Developer & Designer Crafting Digital Experiences
          </motion.p>
          
          {/* Button Container Now Responsive */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-[#6E41C0] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#5A36A0] transition-all"
            >
              <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download CV
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center border border-[#6E41C0] text-[#6E41C0] px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#6E41C0] hover:text-white transition-all"
            >
              <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Contact Me
            </motion.a>
          </div>

          {/* Skills Showcase Now More Mobile-Friendly */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: Code, color: 'text-[#6E41C0]', label: 'Web Development' },
              { icon: PenTool, color: 'text-[#41C0A0]', label: 'UI/UX Design' },
              { icon: Layers, color: 'text-[#6E41C0]', label: 'Full Stack Solutions' }
            ].map(({ icon: Icon, color, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center w-1/3 sm:w-auto"
              >
                <Icon 
                  className={`${color} mb-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10`} 
                  strokeWidth={1.5} 
                />
                <span className="text-xs sm:text-sm md:text-base text-gray-300">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Wave Stays the Same */}
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