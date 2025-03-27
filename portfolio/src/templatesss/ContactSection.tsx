import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter,
  X
} from 'lucide-react'

// Reusable Modal Component
const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}> = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={`
          relative w-[90%] max-w-md 
          rounded-xl p-6 
          ${type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'}
        `}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 hover:bg-white/20 rounded-full p-1"
          title="Close"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            {type === 'success' ? (
              <div className="bg-white/30 rounded-full p-4">
                <Send size={40} className="text-white" />
              </div>
            ) : (
              <div className="bg-white/30 rounded-full p-4">
                <X size={40} className="text-white" />
              </div>
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-white/90 mb-6">{message}</p>
          
          <button 
            onClick={onClose} 
            className="
              w-full py-3 rounded-lg 
              bg-white/20 hover:bg-white/30 
              transition-all duration-300
            "
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const showModal = (type: 'success' | 'error', title: string, message: string) => {
    setModal({
      isOpen: true,
      type,
      title,
      message
    })
  }

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Combine the email address with the message
    const enhancedMessage = `From Email: ${formData.email}\n\nMessage:\n${formData.message}`

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: 'Satyajit',
          from_email: formData.email,
          to_email: 'satyajitpujapanda9@gmail.com',
          message: enhancedMessage,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          showModal(
            'success', 
            'Message Sent!', 
            'Thank you for reaching out. I will get back to you soon.'
          )
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          showModal(
            'error', 
            'Oops! Something went wrong', 
            "We couldn't send your message. Please try again later."
          )
        }
      )
  }

  return (
    <section 
      id="contact" 
      className="relative bg-[#121212] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* SVG Background */}
      <svg 
        className="absolute inset-0 z-0 opacity-20" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 810" 
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#6E41C0', stopOpacity:0.2}} />
            <stop offset="100%" style={{stopColor:'#41C0A0', stopOpacity:0.2}} />
          </linearGradient>
          
          <pattern 
            id="contactPattern" 
            width="60" 
            height="60" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 0 0 L 60 0 L 60 60 L 0 60 Z" 
              fill="none" 
              stroke="rgba(110, 65, 192, 0.1)" 
              strokeWidth="1"
            />
            <circle cx="30" cy="30" r="2" fill="rgba(65, 192, 160, 0.2)" />
          </pattern>
        </defs>
        
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#contactGrad)"
        />
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#contactPattern)"
        />
      </svg>

      {/* Floating Decorative Elements */}
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
        className="absolute top-1/4 left-1/4 bg-[#6E41C0] w-16 h-16 rounded-full blur-xl opacity-30"
      />

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
        className="absolute bottom-1/4 right-1/4 bg-[#41C0A0] w-16 h-16 rounded-full blur-xl opacity-30"
      />

      {/* Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <Modal
            isOpen={modal.isOpen}
            onClose={closeModal}
            type={modal.type}
            title={modal.title}
            message={modal.message}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#6E41C0]">Touch</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
            Have a project in mind or just want to say hello? 
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#2A2A2A] p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E41C0]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E41C0]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E41C0]"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`w-full text-white px-6 py-3 rounded-full shadow-lg transition-all flex items-center justify-center ${
                  loading 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-[#6E41C0] hover:bg-[#5A36A0]'
                }`}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#2A2A2A] p-6 rounded-lg flex items-center">
              <Mail className="mr-4 text-[#6E41C0]" size={40} strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400">satyajitpujapanda9@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg flex items-center">
              <Phone className="mr-4 text-[#6E41C0]" size={40} strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <p className="text-gray-400">+91-82600-51-512</p>
              </div>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg flex items-center">
              <MapPin className="mr-4 text-[#6E41C0]" size={40} strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400">Puri,Odisha,India</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mt-8">
              {[
                { icon: Linkedin, color: '#0A66C2', link: '#' },
                { icon: Github, color: '#FFFFFF', link: '#' },
                { icon: Twitter, color: '#1DA1F2', link: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:opacity-80 transition-all"
                >
                  <social.icon 
                    color={social.color} 
                    size={32} 
                    strokeWidth={1.5} 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact