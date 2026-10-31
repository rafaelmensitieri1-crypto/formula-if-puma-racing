import React from 'react'
import { PumaLogoIcon, InstagramIcon, MailIcon, MapPinIcon } from './Icons'
import './Footer.css'

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <img 
              src="/images/puma-logo.png" 
              alt="Logo Puma Racing" 
              className="footer-brand-img"
            />
            <div>
              <span className="footer-brand-super">FÓRMULA IF • IFBA</span>
              <span className="footer-brand-main">PUMA RACING</span>
            </div>
          </div>
          <p className="footer-bio">
            Equipe de Fórmula Student a Combustão do Instituto Federal da Bahia (Campus Jequié).
            Desenvolvendo tecnologia, inovação automobilística e formando os futuros líderes da engenharia.
          </p>
          <div className="footer-social-links">
            <a 
              href="https://instagram.com/formulaifsae" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram oficial @formulaifsae"
              className="footer-social-icon"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href="https://linktr.ee/formulaif" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Linktree da equipe Fórmula IF"
              className="footer-social-icon"
            >
              🔗
            </a>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navegação Rápida</h4>
          <ul className="footer-link-list">
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('apresentacao')}>
                Apresentação do Projeto
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('fotos')}>
                Galeria de Fotos
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('patrocinios')}>
                Cotas de Patrocínio
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('contatos')}>
                Fale Conosco
              </button>
            </li>
          </ul>
        </div>

        {/* Institution Info */}
        <div className="footer-info-col">
          <h4 className="footer-col-title">Sede e Apoio</h4>
          <div className="footer-contact-item">
            <MapPinIcon size={18} className="footer-item-icon" />
            <span>IFBA Campus Jequié, Bahia - Brasil</span>
          </div>
          <div className="footer-contact-item">
            <MailIcon size={18} className="footer-item-icon" />
            <a href="mailto:formulaifsae@gmail.com" className="footer-email-link">formulaifsae@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <InstagramIcon size={18} className="footer-item-icon" />
            <span>@formulaifsae</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} Fórmula IF Puma Racing. Todos os direitos reservados.
          </p>
          <p className="academic-disclaimer">
            Projeto de Extensão Acadêmica • Fórmula SAE Brasil Combustion
          </p>
        </div>
      </div>
    </footer>
  )
}
