// src/components/Skills.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Layout, 
  Layers, 
  ServerCog, 
  Palette, 
  Shield,
  GitBranch
} from 'lucide-react'

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Technologies',
      icon: Layout,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Next.js', level: 75 }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      icon: ServerCog,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Mongodb', level: 70 }
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      icon: GitBranch,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 70 },
        { name: 'AWS', level: 65 }
      ]
    }
  }

  return (
    <section 
      id="skills" 
      className="relative bg-[#121212] text-white py-12 md:py-24 overflow-hidden"
    >
      {/* Background SVG Pattern */}
      <svg 
        className="absolute inset-0 z-0 opacity-10" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810" 
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <pattern 
            id="skillPattern" 
            width="80" 
            height="80" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M0 0 L80 0 L80 80 L0 80 Z" 
              fill="none" 
              stroke="rgba(110, 65, 192, 0.05)" 
              strokeWidth="1"
            />
            <circle 
              cx="40" 
              cy="40" 
              r="2" 
              fill="rgba(110, 65, 192, 0.1)" 
            />
          </pattern>
        </defs>
        
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#skillPattern)"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-[#6E41C0]">Skills</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-lg px-2">
            A comprehensive toolkit for crafting innovative digital solutions, 
            blending technical expertise with creative problem-solving.
          </p>
        </motion.div>

        {/* Skill Category Selector */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12 px-2">
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center justify-center transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#6E41C0] text-white' 
                  : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'}
                w-full sm:w-auto text-sm sm:text-base
              `}
            >
              {React.createElement(skillCategories[category].icon, {
                className: "mr-2 hidden sm:block",
                size: 20,
                strokeWidth: 1.5
              })}
              {skillCategories[category].title}
            </motion.button>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-4 md:space-y-6 px-2"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div key={skill.name} className="mb-3 md:mb-4">
              <div className="flex justify-between items-center mb-1 md:mb-2">
                <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                <span className="text-xs sm:text-sm text-[#6E41C0] font-semibold">{skill.level}%</span>
              </div>
              <div className="bg-[#2A2A2A] rounded-full h-2 md:h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  className="bg-[#6E41C0] h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skill Icons */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 md:mt-16 flex flex-wrap justify-center gap-6 md:space-x-8"
        >
          {[
            { icon: Code, color: '#6E41C0', label: 'Programming' },
            { icon: Database, color: '#41C0A0', label: 'Database' },
            { icon: Layers, color: '#6E41C0', label: 'Architecture' },
            { icon: Palette, color: '#41C0A0', label: 'Design' },
            { icon: Shield, color: '#6E41C0', label: 'Security' }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.5
                  }
                }
              }}
              className="text-center w-1/3 sm:w-auto"
            >
              <item.icon 
                color={item.color} 
                size={48} 
                strokeWidth={1.5} 
                className="mx-auto mb-2"
              />
              <span className="text-xs sm:text-base text-gray-300">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills