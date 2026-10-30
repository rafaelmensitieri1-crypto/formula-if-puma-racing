import React, { useState, useEffect } from 'react'
import { PumaLogoIcon, InstagramIcon, MenuIcon, CloseIcon } from './Icons'
import './Navbar.css'

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'apresentacao', label: 'Apresentação' },
    { id: 'fotos', label: 'Fotos do Projeto' },
    { id: 'patrocinios', label: 'Patrocínios' },
    { id: 'contatos', label: 'Contatos' }
  ]

  const handleNavClick = (id) => {
    setActiveTab(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo" 
          aria-label="Puma Racing - Fórmula IF IFBA"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img 
            src="/images/puma-logo.png" 
            alt="Logo Puma Racing" 
            className="brand-img"
          />
          <div className="brand-text">
            <span className="brand-super">FÓRMULA IF • IFBA</span>
            <span className="brand-main">PUMA RACING</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list" role="tablist">
            {navItems.map((item) => (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === item.id}
                  className={`nav-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href="https://instagram.com/formulaifsae"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
            aria-label="Visitar Instagram oficial @formulaifsae"
          >
            <InstagramIcon size={18} />
            <span className="instagram-handle">@formulaifsae</span>
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu móvel">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`mobile-nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mobile-social-item">
                <a
                  href="https://instagram.com/formulaifsae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-instagram-link"
                >
                  <InstagramIcon size={20} />
                  <span>Siga @formulaifsae no Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

