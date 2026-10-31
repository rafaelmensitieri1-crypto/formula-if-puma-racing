import React from 'react'
import { ChevronRightIcon, InstagramIcon } from './Icons'
import './Hero.css'

export default function Hero({ onNavigate }) {
  return (
    <section className="dribbble-hero-section" id="home" aria-labelledby="hero-title">
      {/* Red Angular Wing Shape in the Background (Inspired by Reference) */}
      <div className="hero-red-polygon" aria-hidden="true"></div>
      <div className="hero-speed-lines" aria-hidden="true"></div>

      <div className="container hero-main-container">
        {/* Upper Hero Stage: Headline + Visual Stage */}
        <div className="hero-stage">
          {/* Left: Headline & Call to Action */}
          <div className="hero-copy">
            <span className="hero-kicker">
              <span className="kicker-dot" aria-hidden="true"></span>
              IFBA CAMPUS JEQUIÉ • FÓRMULA STUDENT
            </span>

            <h1 id="hero-title" className="hero-giant-title">
              <span className="hero-prefix-title">FÓRMULA IF</span>
              <span className="puma-text-accent">PUMA RACING</span>
            </h1>

            <p className="hero-tagline">
              Engenharia automobilística, inovação e aprendizado prático no interior da Bahia.
              Nossa equipe está atualmente em plena fase de <strong>construção do primeiro protótipo monoposto</strong> do IFBA, 
              projetado em torno do motor <strong>Honda CB 250 Twister</strong>.
            </p>

            <div className="hero-cta-row">
              <button
                type="button"
                className="btn-dribbble-primary"
                onClick={() => onNavigate('apresentacao')}
              >
                Conhecer o Projeto
                <ChevronRightIcon size={18} />
              </button>

              <button
                type="button"
                className="btn-dribbble-ghost"
                onClick={() => onNavigate('patrocinios')}
              >
                Seja um Patrocinador
              </button>
            </div>
          </div>

          {/* Right: Team / Prototype Visual Box (Real Formula IF Imagery) */}
          <div className="hero-visual-frame">
            <div className="visual-top-bar">
              <span className="visual-dot red"></span>
              <span className="visual-dot yellow"></span>
              <span className="visual-dot green"></span>
              <span className="visual-caption">IFBA JEQUIÉ • PROTÓTIPO EM CONSTRUÇÃO</span>
            </div>

            <div className="visual-image-wrapper">
              <img
                src="/images/puma-instagram.jpg"
                alt="Equipe Fórmula IF Puma Racing no IFBA Campus Jequié"
                className="visual-img"
              />
              <div className="visual-gradient-scrim"></div>
            </div>
          </div>
        </div>

        {/* Lower Hero: Team Presentation & Technical Stats */}
        <div className="hero-team-card">
          <span className="team-kicker-red">SOBRE A EQUIPE</span>
          <h3 className="team-headline">FÓRMULA IF PUMA RACING</h3>
          <p className="team-bio">
            Formada no Instituto Federal da Bahia (Campus Jequié), a equipe está atualmente em plena fase de 
            <strong> construção do primeiro protótipo</strong> da instituição. O monoposto é projetado com 
            chassi tubular spaceframe e utilizará a motorização <strong>Honda CB 250 Twister</strong>, 
            priorizando confiabilidade mecânica, baixo peso e excelência formativa.
          </p>

          <div className="team-stats-strip">
            <div className="mini-stat">
              <span className="mini-val">CB 250</span>
              <span className="mini-lbl">Twister 4T OHC</span>
            </div>
            <div className="mini-stat">
              <span className="mini-val">Spaceframe</span>
              <span className="mini-lbl">Tubos 4020</span>
            </div>
            <div className="mini-stat">
              <span className="mini-val">Em Obras</span>
              <span className="mini-lbl">Fase de Construção</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip Bar with Contacts (As seen on Dribbble footer bar) */}
        <div className="dribbble-sub-strip">
          <div className="strip-item">
            <span className="strip-label">SEDE:</span>
            <span className="strip-value">IFBA Campus Jequié - Bahia, Brasil</span>
          </div>
          <div className="strip-item">
            <span className="strip-label">CONTATO:</span>
            <a href="mailto:formulaifsae@gmail.com" className="strip-value strip-link">formulaifsae@gmail.com</a>
          </div>
          <div className="strip-social">
            <span className="strip-label">SIGA:</span>
            <a
              href="https://instagram.com/formulaifsae"
              target="_blank"
              rel="noopener noreferrer"
              className="strip-instagram-link"
              aria-label="Instagram oficial @formulaifsae"
            >
              <InstagramIcon size={16} />
              <span>@formulaifsae</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
