import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import SponsorsSection from './components/SponsorsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('apresentacao')
  const [selectedSponsorTier, setSelectedSponsorTier] = useState('')

  const handleNavigate = (sectionId) => {
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectSponsorTier = (tierName) => {
    setSelectedSponsorTier(`Interesse na ${tierName}`)
    setActiveTab('contatos')
    const contactElement = document.getElementById('contatos')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-layout">
      {/* Top Accessible Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Areas */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 1. Apresentação do Projeto */}
        <AboutSection />

        {/* 2. Fotos do Projeto (Galeria Interativa) */}
        <GallerySection />

        {/* 3. Patrocínios e Parcerias */}
        <SponsorsSection onSelectSponsorTier={handleSelectSponsorTier} />

        {/* 4. Contatos do Projeto */}
        <ContactSection />
      </main>

      {/* Project Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
