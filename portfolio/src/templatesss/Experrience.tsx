import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Code, 
  Server, 
} from 'lucide-react'

const Experience: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState(0)

  const experiences = [
    {
      company: 'TechInnovate Solutions',
      title: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      highlights: [
        'Led the development of scalable web applications using React and TypeScript',
        'Implemented advanced state management solutions with Redux and Context API',
        'Mentored junior developers and conducted comprehensive code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Tailwind CSS']
    },
    {
      company: 'Digital Frontier Labs',
      title: 'Full Stack Developer',
      duration: 'Jun 2019 - Dec 2021',
      location: 'New York, NY',
      highlights: [
        'Developed complex enterprise-level applications with microservices architecture',
        'Optimized backend performance using Node.js and distributed computing techniques',
        'Collaborated with cross-functional teams to deliver innovative tech solutions'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes']
    },
    {
      company: 'Startup Innovators Inc.',
      title: 'Web Developer',
      duration: 'Aug 2017 - May 2019',
      location: 'Austin, TX',
      highlights: [
        'Built responsive and interactive web interfaces for early-stage startups',
        'Implemented continuous integration and deployment pipelines',
        'Developed robust REST APIs and integrated third-party services'
      ],
      technologies: ['JavaScript', 'Angular', 'Express', 'PostgreSQL', 'AWS']
    }
  ]

  return (
    <section 
      id="experience" 
      className="relative bg-[#121212] text-white py-16 md:py-24 overflow-hidden"
    >
      <svg 
        className="absolute inset-0 z-0 opacity-10" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810"
      >
        <defs>
          <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#6E41C0', stopOpacity:0.2}} />
            <stop offset="100%" style={{stopColor:'#41C0A0', stopOpacity:0.2}} />
          </linearGradient>
          
          <pattern 
            id="expPattern" 
            width="60" 
            height="60" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 0 0 L 60 0 L 60 60 L 0 60 Z" 
              fill="none" 
              stroke="rgba(110, 65, 192, 0.05)" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#expGrad)"
        />
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#expPattern)"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="text-[#6E41C0]">Experience</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
          A journey of innovation, growth, and transformative technological solutions
        </p>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex md:flex-row flex-col gap-8">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 space-y-4"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveCompany(index)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                  ${activeCompany === index 
                    ? 'bg-[#6E41C0] text-white' 
                    : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'}
                `}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="md:w-2/3 bg-[#2A2A2A] rounded-lg p-6 space-y-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experiences[activeCompany].title}
                  </h3>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Briefcase size={16} />
                    <span>{experiences[activeCompany].company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-[#6E41C0]">
                    <Calendar size={16} />
                    <span>{experiences[activeCompany].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mt-1">
                    <MapPin size={16} />
                    <span>{experiences[activeCompany].location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {experiences[activeCompany].highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start"
                  >
                    <ArrowRight className="mr-3 mt-1 text-[#6E41C0]" size={16} />
                    <span className="text-gray-300">{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeCompany].technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#6E41C0]/20 text-[#6E41C0] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: [0, 20, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity 
        }}
        className="absolute top-1/4 left-1/4"
      >
        <Code className="text-[#6E41C0] opacity-30" size={40} />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: [0, -20, 0], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4"
      >
        <Server className="text-[#41C0A0] opacity-30" size={40} />
      </motion.div>
    </section>
  )
}

export default Experience