import React from 'react'
import { CheckIcon, TrophyIcon, UsersIcon, ShieldIcon } from './Icons'
import './SponsorsSection.css'

export default function SponsorsSection({ onSelectSponsorTier }) {
  const tiers = [
    {
      id: 'bronze',
      name: 'Cota Bronze',
      subtitle: 'Apoio Técnico & Peças',
      highlight: false,
      benefits: [
        'Logotipo no site oficial da equipe',
        'Citação de agradecimento no Instagram oficial',
        'Menção nos relatórios de projeto da SAE',
        'Apoio via doação de peças, insumos ou usinagem'
      ]
    },
    {
      id: 'prata',
      name: 'Cota Prata',
      subtitle: 'Visibilidade Intermediária',
      highlight: false,
      benefits: [
        'Logotipo nas laterais da carenagem (Sidepods)',
        'Logotipo no uniforme oficial da equipe',
        'Divulgação bimestral nas redes sociais (@formulaifsae)',
        'Exposição nas feiras acadêmicas e SECITEC',
        'Certificado de Empresa Parceira da Educação'
      ]
    },
    {
      id: 'ouro',
      name: 'Cota Ouro',
      subtitle: 'Forte Exposição em Pista',
      highlight: false,
      benefits: [
        'Posição de destaque no bico dianteiro do monoposto',
        'Logotipo em evidência no peito/manga do uniforme',
        'Divulgação mensal com fotos e vídeos dedicados',
        'Presença de marca no simulador de corrida da equipe',
        'Acesso prioritário a currículos de membros para contratação'
      ]
    },
    {
      id: 'diamante',
      name: 'Cota Diamante',
      subtitle: 'Patrocinador Master',
      highlight: true,
      badge: 'MAIS COMPLETO',
      benefits: [
        'Posição master na Asa Dianteira e Asa Traseira do carro',
        'Destaque no macacão oficial dos pilotos de prova',
        'Exposição no box de corrida, banners e estande oficial',
        'Post fixado e reels exclusivos de parceria no Instagram',
        'Dia de testes exclusivo para diretores da sua empresa',
        'Logo em todas as peças de divulgação regional e nacional'
      ]
    }
  ]

  const reasons = [
    {
      icon: <TrophyIcon size={26} />,
      title: 'Visibilidade Nacional',
      text: 'Sua marca vista por milhares de entusiastas, jurados da indústria automotiva e na competição oficial da SAE Brasil.'
    },
    {
      icon: <UsersIcon size={26} />,
      title: 'Atração de Talentos',
      text: 'Conexão direta com os estudantes mais preparados em mecânica, eletrônica, gestão e programação do IFBA Jequié.'
    },
    {
      icon: <ShieldIcon size={26} />,
      title: 'Incentivo à Ciência e Tecnologia',
      text: 'Associe sua empresa ao desenvolvimento tecnológico baiano e à educação pública gratuita e de alta qualidade.'
    }
  ]

  return (
    <section className="section-wrapper sponsors-section" id="patrocinios" aria-labelledby="sponsors-title">
      <div className="container">
        {/* Header */}
        <div className="section-header-box">
          <span className="section-badge">Parcerias Estratégicas</span>
          <h2 id="sponsors-title" className="section-title">
            Acelere com a <span className="title-red-gradient">Puma Racing</span>
          </h2>
          <p className="section-description">
            O patrocínio ao Fórmula IF viabiliza a compra de matéria-prima, usinagem de precisão, pneus e 
            viagens para competições, enquanto projeta a sua marca na vanguarda da engenharia universitária.
          </p>
        </div>

        {/* Why Sponsor Cards */}
        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <div className="reason-icon">{r.icon}</div>
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-text">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Pricing/Tiers Grid */}
        <div className="tiers-section-heading">
          <h3 className="tiers-title">Cotas de Patrocínio Disponíveis</h3>
          <p className="tiers-subtitle">Escolha o nível de investimento ideal para a sua empresa</p>
        </div>

        <div className="tiers-grid">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`tier-card ${tier.highlight ? 'tier-highlight' : ''}`}
            >
              {tier.badge && <span className="tier-badge-pill">{tier.badge}</span>}

              <div className="tier-header">
                <h4 className="tier-name">{tier.name}</h4>
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

              <button
                type="button"
                className={`tier-cta-btn ${tier.highlight ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => onSelectSponsorTier(tier.name)}
              >
                Apoiar Nesta Cota
              </button>
            </div>
          ))}
        </div>

        {/* Custom Support Banner */}
        <div className="custom-sponsor-banner">
          <div className="custom-banner-content">
            <h4 className="custom-banner-title">Precisa de uma proposta personalizada ou apoio técnico?</h4>
            <p className="custom-banner-text">
              Também aceitamos parcerias em serviços, usinagem CNC, doação de softwares, ferramentas e consultoria.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSelectSponsorTier('Apoio Técnico Personalizado')}
          >
            Falar com a Diretoria de Gestão
          </button>
        </div>
      </div>
    </section>
  )
}

