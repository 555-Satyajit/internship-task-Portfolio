import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Play, 
  Image as ImageIcon, 
  Code, 
  Layers, 
  Compass,
  Zap,
  Monitor 
} from 'lucide-react'

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'FarmSmart - Smart Farm Management System',
      description: 'Farm Smart is an innovative Software-as-a-Service platform that revolutionizes agricultural practices. With advanced AI-powered features like real-time data analysis and predictive analytics, it helps farmers make informed decisions to optimize crop yield, reduce costs, and improve sustainability.',
      technologies: ['React', 'Python', 'TypeScript', 'Machine Learning'],
      githubLink: '#',
      liveLink: 'https://agromitra.vercel.app',
      images: [
        'public/scs/Screenshot 2025-02-09 174218.png',
        'public/scs/Screenshot 2025-02-09 174101.png',
        'public/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: 'public/video/Screen Recording 2025-01-20 125917.mp4', // Replace with actual video link
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
        'public/scs/Screenshot 2025-02-09 174218.png',
        'public/scs/Screenshot 2025-02-09 174101.png',
        'public/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: 'public/video/Screen Recording 2025-01-20 125917.mp4', // Replace with actual video link
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
        'public/scs/Screenshot 2025-02-09 174218.png',
        'public/scs/Screenshot 2025-02-09 174101.png',
        'public/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: 'public/video/Screen Recording 2025-01-20 125917.mp', // Replace with actual video link
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
        'public/scs/Screenshot 2025-02-09 174218.png',
        'public/scs/Screenshot 2025-02-09 174101.png',
        'public/scs/Screenshot 2025-02-09 173909.png'
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
        'public/scs/Screenshot 2025-02-09 174218.png',
        'public/scs/Screenshot 2025-02-09 174101.png',
        'public/scs/Screenshot 2025-02-09 173909.png'
      ],
      videoDemo: 'public/video/Screen Recording 2025-01-20 125917.mp', // Replace with actual video link
      icon: <Zap className="text-[#6E41C0]" size={40} strokeWidth={1.5} />,
      color: '#6E41C0'
    }
  ]

  const ProjectModal = ({ project }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div 
        className="bg-[#2A2A2A] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="p-6">
          <div className="flex items-center mb-6">
            {project.icon}
            <h3 className="text-2xl font-bold ml-4 text-white">
              {project.title}
            </h3>
          </div>

          {/* Image Carousel */}
          <div className="grid grid-cols-3 gap-4 mb-6">
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
                <motion.a
                  href={project.videoDemo}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#6E41C0] text-white px-4 py-2 rounded-full flex items-center"
                >
                  <Play className="mr-2" /> Watch Video
                </motion.a>
              </div>
            </div>
          )}

          {/* Project Details */}
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex space-x-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-[#3A3A3A] text-[#41C0A0] px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href={project.githubLink}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center bg-[#6E41C0] text-white px-4 py-2 rounded-full"
            >
              <Github className="mr-2" /> GitHub
            </motion.a>
            
            <motion.a
              href={project.liveLink}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center border border-[#41C0A0] text-[#41C0A0] px-4 py-2 rounded-full"
            >
              <ExternalLink className="mr-2" /> Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section 
      id="projects" 
      className="relative bg-[#121212] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background SVG (same as previous version) */}
      <svg 
        className="absolute inset-0 z-0 opacity-20" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810"
      >
        {/* SVG content remains the same as previous version */}
      </svg>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-[#6E41C0]">Projects</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
          Innovative solutions that blend creativity, technology, and problem-solving
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
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
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-4">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="flex space-x-2">
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

      {/* Floating Animated Elements */}
      {/* (Same as previous version) */}
    </section>
  )
}

export default Projects