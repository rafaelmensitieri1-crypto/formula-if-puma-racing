import React from 'react'
import './Features.css'

const SUBSYSTEMS = [
  {
    title: 'Aerodinâmica',
    description: 'Design e simulação CFD de asas dianteira e traseira para máximo downforce e estabilidade.',
    icon: '⚡'
  },
  {
    title: 'Chassi & Suspensão',
    description: 'Estrutura tubular de alta rigidez torcional aliada a uma cinemática precisa de suspensão.',
    icon: '🏎️'
  },
  {
    title: 'Powertrain',
    description: 'Otimização de admissão, escape e calibração de motor para entrega linear de potência.',
    icon: '🔥'
  },
  {
    title: 'Telemetria & Eletrônica',
    description: 'Aquisição de dados em tempo real, sensores e chicotes de padrão automotivo esportivo.',
    icon: '📊'
  }
]

export default function Features() {
  return (
    <section className="features-section" id="projeto">
      <div className="section-header">
        <h2 className="section-title">Subsistemas do Protótipo</h2>
        <p className="section-subtitle">A engenharia aplicada em cada detalhe do veículo</p>
      </div>

      <div className="features-grid">
        {SUBSYSTEMS.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

