/// <reference types="react" />
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { JSX } from 'react'

import { 
  Github, 
  ExternalLink, 
  Play, 
  Code, 
  Layers, 
  Compass,
  Zap,
  Monitor ,
  X
} from 'lucide-react'

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
  
  const projects = [
    {
      title: 'FarmSmart - Smart Farm Management System',
      description: 'Farm Smart is an innovative Software-as-a-Service platform that revolutionizes agricultural practices. With advanced AI-powered features like real-time data analysis and predictive analytics, it helps farmers make informed decisions to optimize crop yield, reduce costs, and improve sustainability.',
      technologies: ['React', 'Python', 'TypeScript', 'Machine Learning'],
      githubLink: '#',
      liveLink: 'https://agromitra.vercel.app',
      images: [
        '/scs/Screenshot 2025-02-09 174218.png',
        '/scs/Screenshot 2025-02-09 174101.png',
        '/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: '/video/Screen Recording 2025-01-20 125917.mp4', // Replace with actual video link
      icon: <Code className="text-[#6E41C0]" size={40} strokeWidth={1.5} />,
      color: '#6E41C0'
    },
    {
      title: 'Real-Time Collaborative Design Tool',
      description: 'An innovative web application enabling designers and developers to collaborate seamlessly with live editing, version control, and instant feedback.',
      technologies: ['WebSockets', 'React', 'Node.js', 'Firebase'],
      githubLink: '#',
      liveLink: '#',
      images: [
        '/scs/Screenshot 2025-02-09 174218.png',
        '/scs/Screenshot 2025-02-09 174101.png',
        '/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: '/video/Screen Recording 2025-01-20 125917.mp4', // Replace with actual video link
      icon: <Layers className="text-[#41C0A0]" size={40} strokeWidth={1.5} />,
      color: '#41C0A0'
    },
    {
      title: 'Smart Urban Navigation App',
      description: 'A comprehensive mobility solution integrating real-time traffic data, public transit information, and eco-friendly routing algorithms.',
      technologies: ['React Native', 'MapBox', 'GraphQL', 'Machine Learning'],
      githubLink: '#',
      liveLink: '#',
      images: [
        '/scs/Screenshot 2025-02-09 174218.png',
        '/scs/Screenshot 2025-02-09 174101.png',
        '/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: '/video/Screen Recording 2025-01-20 125917.mp', // Replace with actual video link
      icon: <Compass className="text-[#6E41C0]" size={40} strokeWidth={1.5} />,
      color: '#6E41C0'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with advanced product recommendation system, seamless payment integration, and responsive design.',
      technologies: ['Next.js', 'Stripe', 'GraphQL', 'TailwindCSS'],
      githubLink: '#',
      liveLink: '#',
      images: [
        '/scs/Screenshot 2025-02-09 174218.png',
        '/scs/Screenshot 2025-02-09 174101.png',
        '/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: 'public/video/Screen Recording 2025-01-20 125917.mp', // Replace with actual video link
      icon: <Monitor className="text-[#41C0A0]" size={40} strokeWidth={1.5} />,
      color: '#41C0A0'
    },
    {
      title: 'Real-Time Collaborative Editor',
      description: 'A powerful collaborative text and code editor with real-time sync, version history, and multi-user support.',
      technologies: ['React', 'Firebase', 'WebRTC', 'Operational Transforms'],
      githubLink: '#',
      liveLink: '#',
      images: [
        '/scs/Screenshot 2025-02-09 174218.png',
        '/scs/Screenshot 2025-02-09 174101.png',
        '/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: '/video/Screen Recording 2025-01-20 125917.mp', // Replace with actual video link
      icon: <Zap className="text-[#6E41C0]" size={40} strokeWidth={1.5} />,
      color: '#6E41C0'
    }
  ]

  interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    images: string[];
    videoDemo?: string;
    icon: JSX.Element;
    color: string;
  }

  const ProjectModal: React.FC<{ project: Project }> = ({ project }) => {
    const handleCloseModal = () => {
      // Stop video when modal is closed
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setSelectedProject(null);
    }

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-y-auto"
      >
        <motion.div 
          className="bg-[#2A2A2A] rounded-xl w-full max-w-4xl relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Close Button */}
          <button 
            onClick={handleCloseModal}
            title="Close Modal"
            className="absolute top-4 right-4 z-50 bg-[#3A3A3A] rounded-full p-2 hover:bg-[#4A4A4A] transition-colors"
          >
            <X className="text-white" size={24} />
          </button>

          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              {project.icon}
              <h3 className="text-xl md:text-2xl font-bold ml-4 text-white">
                {project.title}
              </h3>
            </div>

            {/* Responsive Image Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {project.images.map((image, index) => (
                <motion.img 
                  key={index}
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>

            {/* Video Demo */}
            {project.videoDemo && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-[#41C0A0] flex items-center">
                  <Play className="mr-2" /> Project Demo
                </h4>
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                  <video 
                    ref={videoRef}
                    controls 
                    className="w-full h-full rounded-lg"
                  >
                    <source src={project.videoDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {/* Project Details */}
            <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-[#3A3A3A] text-[#41C0A0] px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <motion.a
                href={project.githubLink}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center bg-[#6E41C0] text-white px-4 py-2 rounded-full"
              >
                <Github className="mr-2" /> GitHub
              </motion.a>
              
              <motion.a
                href={project.liveLink}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center border border-[#41C0A0] text-[#41C0A0] px-4 py-2 rounded-full"
              >
                <ExternalLink className="mr-2" /> Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section 
      id="projects" 
      className="relative bg-[#121212] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background SVG */}
      <svg 
        className="absolute inset-0 z-0 opacity-20" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810"
      >
        {/* SVG content remains the same */}
      </svg>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-[#6E41C0]">Projects</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-lg px-4">
          Innovative solutions that blend creativity, technology, and problem-solving
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#2A2A2A] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-lg md:text-xl font-bold ml-4">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mb-4">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-[#3A3A3A] text-[#41C0A0] px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal project={projects[selectedProject]} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects