import React from 'react'
import Navbar from './templatesss/navbar'
import Hero from './templatesss/HeroSection'
import About from './templatesss/AboutSection'
import Skill from './templatesss/SkillsSection'
import Project from './templatesss/ProjectsSection'
import Exp from './templatesss/Experrience'
import Contact from './templatesss/ContactSection'
import Footer from './templatesss/footer'
const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Exp />
      <Contact />
      <Footer />
      {/* Other components will be added here */}
    </div>
  )
}

export default App