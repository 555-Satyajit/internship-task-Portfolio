import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { JSX } from 'react'

import { 
  Award, 
  Smile, 
  Target, 
  Zap, 
  BookOpen, 
  Globe,
  Briefcase,
  Code,
  Heart,
  Rocket,
  School,
  Calendar
} from 'lucide-react'

const About: React.FC = () => {
    const [activeSection, setActiveSection] = useState<keyof typeof sections>('journey')
  
    const sections: Record<'journey' | 'values' | 'stats', { title: string; content: JSX.Element }> = {
      journey: {
        title: 'Professional Journey',
        content: (
          <motion.div 
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="text-gray-300 text-base sm:text-lg text-center px-4 max-w-3xl mx-auto"
            >
              With a passion for transforming complex challenges into elegant 
              digital solutions, I've dedicated my career to pushing the 
              boundaries of web development and design.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: Briefcase,
                  title: 'Current Role',
                  description: 'Fresher'
                },
                {
                  icon: School,
                  title: 'Education',
                  description: 'B. Tech (Computer Science and Engineering(Ai/Ml)) Giet University,Gunupur'
                },
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'Creating impactful digital experiences'
                }
              ].map((detail, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5 }
                    }
                  }}
                  className="bg-[#2A2A2A] p-6 rounded-lg flex items-center"
                >
                  <detail.icon 
                    className="mr-4 text-[#6E41C0] flex-shrink-0" 
                    size={32} 
                    strokeWidth={1.5} 
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                      {detail.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {detail.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )
      },   
      values: {
        title: 'Core Values',
        content: (
          <div className="space-y-6 px-4 max-w-4xl mx-auto">
            {[
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'Constantly exploring cutting-edge technologies and innovative solutions'
              },
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Committed to writing maintainable, efficient, and scalable code'
              },
              {
                icon: Globe,
                title: 'Collaboration',
                description: 'Believing in the power of teamwork and cross-functional partnerships'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-[#2A2A2A] p-6 rounded-lg flex items-center"
              >
                <value.icon 
                  className="mr-4 text-[#6E41C0] flex-shrink-0" 
                  size={32} 
                  strokeWidth={1.5} 
                />
                <div>
                  <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )
      },
      stats: {
        title: 'Professional Stats',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
            {[
              { 
                icon: Award, 
                color: '#6E41C0', 
                title: 'Years of Experience', 
                value: '0' 
              },
              { 
                icon: Smile, 
                color: '#6E41C0', 
                title: 'Satisfied Clients', 
                value: '0+' 
              },
              { 
                icon: Target, 
                color: '#6E41C0', 
                title: 'Completed Projects', 
                value: '0' 
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#2A2A2A] p-8 rounded-lg text-center"
              >
                <stat.icon 
                  size={48} 
                  className="mx-auto mb-4" 
                  color={stat.color} 
                  strokeWidth={1.5} 
                />
                <h4 className="text-3xl font-bold text-[#6E41C0] mb-3">
                  {stat.value}
                </h4>
                <p className="text-sm sm:text-base text-gray-300">{stat.title}</p>
              </div>
            ))}
          </div>
        )
      }
    }

    return (
      <section 
        id="about" 
        className="relative bg-[#121212] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#6E41C0]">Me</span>
            </h2>
            <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-xl px-4">
              A passionate developer and designer with a knack for creating 
              innovative digital solutions. I blend technical expertise with 
              creative design to bring ideas to life.
            </p>
          </motion.div>

          {/* Interactive Section Selector */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
              {(Object.keys(sections) as Array<keyof typeof sections>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`
                    px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto text-base
                    ${activeSection === key 
                      ? 'bg-[#6E41C0] text-white' 
                      : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'}
                  `}
                >
                  {sections[key].title}
                </button>
              ))}
            </div>

            {/* Animated Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {sections[activeSection].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Personal Traits */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-center text-[#6E41C0]">
              Personal Traits
            </h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-12">
              {[
                {
                  icon: Zap,
                  color: '#6E41C0',
                  trait: 'Problem Solver'
                },
                {
                  icon: BookOpen,
                  color: '#6E41C0',
                  trait: 'Continuous Learner'
                },
                {
                  icon: Calendar,
                  color: '#6E41C0',
                  trait: 'Detail-Oriented'
                }
              ].map((trait, index) => (
                <div 
                  key={index} 
                  className="text-center flex flex-col items-center"
                >
                  <trait.icon 
                    className="mb-4" 
                    color={trait.color} 
                    size={48} 
                    strokeWidth={1.5} 
                  />
                  <span className="text-gray-300 text-base">{trait.trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default About