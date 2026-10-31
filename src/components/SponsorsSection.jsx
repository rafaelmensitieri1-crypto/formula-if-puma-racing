import React from 'react'
import { CheckIcon, TrophyIcon, UsersIcon, ShieldIcon, FlameIcon, GaugeIcon, MailIcon } from './Icons'
import './SponsorsSection.css'

export default function SponsorsSection() {
  const tiers = [
    {
      id: 'tipo-c',
      name: 'Tipo C',
      value: '> R$ 500,00',
      subtitle: 'Entrada & Divulgação Básica',
      highlight: false,
      benefits: [
        'Story no Instagram oficial a cada 15 dias',
        'Adesivo da sua empresa na oficina do IFBA',
        'Logomarca na camisa oficial da equipe (5cm × 5cm)',
        'Logomarca no veículo monoposto (10cm × 10cm)'
      ]
    },
    {
      id: 'tipo-b',
      name: 'Tipo B',
      value: '> R$ 1.000,00',
      subtitle: 'Intermediária & Simulador',
      highlight: false,
      benefits: [
        'Story no Instagram oficial a cada 15 dias',
        'Reels publicado no feed do Instagram oficial',
        'Adesivo da sua empresa na oficina do IFBA',
        'Logomarca na camisa oficial da equipe (8cm × 8cm)',
        'Logomarca estampada no simulador de corrida',
        'Logomarca no veículo monoposto (15cm × 15cm)'
      ]
    },
    {
      id: 'tipo-a',
      name: 'Tipo A',
      value: '> R$ 2.000,00',
      subtitle: 'Cota Master • Máxima Visibilidade',
      highlight: true,
      badge: 'PLANO MASTER',
      benefits: [
        'Story no Instagram oficial a cada 15 dias',
        'Reels publicado no feed do Instagram oficial',
        'Destaque permanente no perfil oficial (@formulaifsae)',
        'Adesivo da sua empresa na oficina do IFBA',
        'Logomarca de destaque na camisa oficial (15cm × 15cm)',
        'Logomarca estampada no simulador de corrida',
        'Logomarca em todos os Banners oficiais da equipe',
        'Logomarca de maior área no veículo (20cm × 20cm)',
        'Evento semestral exclusivo com o simulador de corrida'
      ]
    }
  ]

  const reasons = [
    {
      icon: <ShieldIcon size={26} />,
      title: 'Vínculo Institucional & Social',
      text: 'Associe sua marca a um projeto universitário voluntário de alta relevância social e tecnológica no IFBA Campus Jequié.'
    },
    {
      icon: <TrophyIcon size={26} />,
      title: 'Divulgação em Eventos e Feiras',
      text: 'Exposição em eventos acadêmicos, congressos, feiras científicas (FENTEC, SECITEC) e na competição oficial Fórmula SAE Brasil.'
    },
    {
      icon: <UsersIcon size={26} />,
      title: 'Exposição Multicanal de Marca',
      text: 'Alcance amplo nas redes sociais (+40 mil visualizações no Instagram), uniforme oficial, banners, carenagem do monoposto e simulador.'
    },
    {
      icon: <GaugeIcon size={26} />,
      title: 'Atração de Talentos Qualificados',
      text: 'Proximidade estratégica com estudantes de Engenharia Mecânica preparados na prática para os desafios da indústria.'
    },
    {
      icon: <FlameIcon size={26} />,
      title: 'Comunidade Acadêmica como Clientes',
      text: 'Alunos, professores e servidores do IFBA como clientes em potencial, com grande credibilidade e recomendação de marca.'
    }
  ]

  const currentSponsors = [
    { name: 'MSR', tag: 'Transformando ideias em produtos de qualidade' },
    { name: 'Supermercado Amigão', tag: 'Economia no seu dia a dia!' },
    { name: 'MultiArte', tag: 'Comunicação Visual' },
    { name: 'DS SOLIDWORKS', tag: 'Software Oficial de Projeto e Engenharia 3D' }
  ]

  return (
    <section className="section-wrapper sponsors-section" id="patrocinios" aria-labelledby="sponsors-title">
      <div className="container">
        {/* Header */}
        <div className="section-header-box">
          <span className="section-badge">Plano de Patrocínio Oficial</span>
          <h2 id="sponsors-title" className="section-title">
            Acelere com a <span className="title-red-gradient">Fórmula IF Puma Racing</span>
          </h2>
          <p className="section-description">
            Nosso objetivo é estabelecer parcerias que gerem benefícios mútuos, promovendo sua marca 
            em uniformes, banners, redes sociais, no simulador e na carenagem do nosso monoposto.
          </p>
        </div>

        {/* Why Sponsor Grid */}
        <div className="reasons-heading">
          <h3 className="section-subheading">Por Que se Tornar um Patrocinador?</h3>
          <p className="section-subtext">Benefícios reais e retorno em visibilidade institucional para a sua empresa</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <div className="reason-icon">{r.icon}</div>
              <h4 className="reason-title">{r.title}</h4>
              <p className="reason-text">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Tiers Heading */}
        <div className="tiers-section-heading">
          <span className="tiers-kicker">TABELA OFICIAL DE COTAS</span>
          <h3 className="tiers-title">Proposta de Patrocínio</h3>
          <p className="tiers-subtitle">Valores e contrapartidas definidos no Plano de Patrocínio da equipe</p>
        </div>

        {/* Tiers Grid (Tipo C, Tipo B, Tipo A) */}
        <div className="tiers-grid">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`tier-card ${tier.highlight ? 'tier-highlight' : ''}`}
            >
              {tier.badge && <span className="tier-badge-pill">{tier.badge}</span>}

              <div className="tier-header">
                <div className="tier-title-row">
                  <h4 className="tier-name">{tier.name}</h4>
                  <span className="tier-price-tag">{tier.value}</span>
                </div>
                <span className="tier-subtitle">{tier.subtitle}</span>
              </div>

              <ul className="tier-benefits-list">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="tier-benefit-item">
                    <span className="tier-check-icon"><CheckIcon size={16} /></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Current Sponsors Section */}
        <div className="current-sponsors-box">
          <div className="current-sponsors-header">
            <span className="sponsors-kicker">PARCERIAS FIRMADAS</span>
            <h3 className="sponsors-title">Patrocinadores Atuais</h3>
            <p className="sponsors-subtext">Empresas e marcas que já apoiam o desenvolvimento da equipe</p>
          </div>

          <div className="sponsors-badges-grid">
            {currentSponsors.map((sponsor, idx) => (
              <div key={idx} className="sponsor-badge-card">
                <span className="sponsor-name">{sponsor.name}</span>
                <span className="sponsor-tag">{sponsor.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Contact Bar */}
        <div className="sponsorship-contact-bar">
          <div className="contact-bar-info">
            <h4 className="contact-bar-title">Interessado em apoiar o projeto?</h4>
            <p className="contact-bar-desc">
              Entre em contato direto com a liderança da equipe para formalização de parceria:
            </p>
            <div className="leadership-cards">
              <div className="leader-pill">
                <strong>Everton Frois</strong> (Capitão): 
                <a href="tel:73982515485">(73) 98251-5485</a>
              </div>
              <div className="leader-pill">
                <strong>Felipe Haendel</strong> (Diretor de Marketing): 
                <a href="tel:77998427912">(77) 99842-7912</a>
              </div>
              <div className="leader-pill email-pill">
                <MailIcon size={16} />
                <a href="mailto:formulaifsae@gmail.com">formulaifsae@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
