import React from 'react'
import { InstagramIcon, LinkedInIcon, MailIcon, MapPinIcon, ExternalLinkIcon } from './Icons'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section className="section-wrapper contact-section" id="contatos" aria-labelledby="contact-title">
      <div className="container">
        {/* Header */}
        <div className="section-header-box">
          <span className="section-badge">Fale Conosco</span>
          <h2 id="contact-title" className="section-title">
            Canais Oficiais do <span className="title-red-gradient">Puma Racing</span>
          </h2>
          <p className="section-description">
            Entre em contato para propostas de patrocínio, dúvidas institucionais, parcerias técnicas 
            ou para convidar nossa equipe para eventos acadêmicos e do setor automobilístico.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* Instagram Card */}
          <a 
            href="https://instagram.com/formulaifsae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card social-feature-card"
            aria-label="Instagram oficial @formulaifsae"
          >
            <div className="social-icon-wrapper instagram-gradient">
              <InstagramIcon size={28} />
            </div>
            <div className="social-card-text">
              <span className="social-card-label">INSTAGRAM OFICIAL</span>
              <span className="social-card-handle">@formulaifsae</span>
              <span className="social-card-sub">Acompanhe fotos, reels e novidades diárias</span>
            </div>
            <div className="social-card-arrow">
              <ExternalLinkIcon size={20} />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/company/f%C3%B3rmula-if-sae/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card social-feature-card linkedin-card"
            aria-label="LinkedIn oficial da equipe Fórmula IF SAE"
          >
            <div className="social-icon-wrapper linkedin-icon">
              <LinkedInIcon size={26} />
            </div>
            <div className="social-card-text">
              <span className="social-card-label">LINKEDIN OFICIAL</span>
              <span className="social-card-handle">Fórmula IF SAE</span>
              <span className="social-card-sub">Conexões corporativas, equipe e parcerias</span>
            </div>
            <div className="social-card-arrow">
              <ExternalLinkIcon size={20} />
            </div>
          </a>

          {/* E-mail Card */}
          <a 
            href="mailto:formulaifsae@gmail.com" 
            className="contact-card social-feature-card email-feature-card"
            aria-label="Enviar e-mail para formulaifsae@gmail.com"
          >
            <div className="social-icon-wrapper email-icon-wrapper">
              <MailIcon size={26} />
            </div>
            <div className="social-card-text">
              <span className="social-card-label">E-MAIL INSTITUCIONAL</span>
              <span className="social-card-handle">formulaifsae@gmail.com</span>
              <span className="social-card-sub">Envio de propostas e ofícios</span>
            </div>
            <div className="social-card-arrow">
              <ExternalLinkIcon size={20} />
            </div>
          </a>

          {/* Location Card */}
          <div className="contact-card social-feature-card location-feature-card">
            <div className="social-icon-wrapper location-icon-wrapper">
              <MapPinIcon size={26} />
            </div>
            <div className="social-card-text">
              <span className="social-card-label">SEDE E OFICINA</span>
              <span className="social-card-handle">IFBA Campus Jequié</span>
              <span className="social-card-sub">Rua Vereador Valter Novaes, s/n - Jequié - BA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
