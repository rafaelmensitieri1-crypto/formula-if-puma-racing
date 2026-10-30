import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-accent">FÓRMULA</span> IF
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Início</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#projeto" className="nav-link">O Carro</a>
          <a href="#equipe" className="nav-link">Equipe</a>
          <a href="#contato" className="nav-btn">Contato</a>
        </nav>
      </div>
    </header>
  )
}

