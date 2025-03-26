import React from 'react'
import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Send 
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company/Personal Info Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#6E41C0]">Satyajit Pujapanda</h3>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with code and creativity. 
              Transforming ideas into innovative web solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  icon: Linkedin, 
                  color: '#0A66C2', 
                  link: 'https://linkedin.com/in/yourprofile' 
                },
                { 
                  icon: Github, 
                  color: '#FFFFFF', 
                  link: 'https://github.com/555-Satyajit' 
                },
                { 
                  icon: Twitter, 
                  color: '#1DA1F2', 
                  link: 'https://twitter.com/yourusername' 
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <social.icon 
                    color={social.color} 
                    size={24} 
                    strokeWidth={1.5} 
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#6E41C0]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#41C0A0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#6E41C0]">Contact Me</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Send className="mr-3 text-[#6E41C0]" size={20} />
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                 satyajitpujapanda9@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Send className="mr-3 text-[#6E41C0]" size={20} />
                <p className="text-gray-400">+91-82600-51-512</p>
              </div>
              <div className="flex items-center">
                <Send className="mr-3 text-[#6E41C0]" size={20} />
                <p className="text-gray-400">Puri,Odisha,India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Satyajit Pujapanda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer