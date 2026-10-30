import React, { useState } from 'react'
import { FlameIcon, GaugeIcon, ShieldIcon, UsersIcon, CheckIcon } from './Icons'
import './AboutSection.css'

export default function AboutSection() {
  const [activeSubsystem, setActiveSubsystem] = useState('powertrain')

  const subsystems = {
    powertrain: {
      title: 'Powertrain & Admissão',
      icon: <FlameIcon size={24} />,
      tagline: 'O coração pulsante do Puma Racing',
      description: 'Nosso trem de força utiliza motor a combustão de alta rotação com coletor de admissão e restritor de ar de 20mm otimizados via simulação computacional de dinâmica de fluidos (CFD).',
      specs: [
        'Restritor de admissão de 20mm regulamentar SAE',
        'Injeção eletrônica com mapa de combustão customizado',
        'Sistema de arrefecimento redimensionado com duto direcionador',
        'Escapamento dimensionado em inox para torque linear'
      ]
    },
    chassis: {
      title: 'Chassi & Estrutura Spaceframe',
      icon: <ShieldIcon size={24} />,
      tagline: 'Segurança e rigidez torcional calculada',
      description: 'Estrutura tubular em treliça espacial feita com tubos de aço liga SAE 4130. Rigidez torcional calculada por elementos finitos (FEA) garantindo máxima precisão para o conjunto de suspensão e célula de sobrevivência do piloto.',
      specs: [
        'Treliça tubular em aço cromo-molibdênio SAE 4130',
        'Crash-box absorvedor de energia de impacto testado',
        'Célula de sobrevivência e santantônio principal normatizados',
        'Distribuição de peso 48% dianteira / 52% traseira'
      ]
    },
    suspensao: {
      title: 'Suspensão & Direção',
      icon: <GaugeIcon size={24} />,
      tagline: 'Aderência mecânica e precisão nas curvas',
      description: 'Geometria Duplo A (Double Wishbone) com acionamento push-rod nos quatro cantos. Amortecedores ajustáveis de 2 vias e barras estabilizadoras ajustáveis para acerto fino em pistas travadas de autocross.',
      specs: [
        'Geometria Double Wishbone independente',
        'Sistema Push-rod com rockers em alumínio usinado',
        'Montantes dianteiros e traseiros aliviados em CNC',
        'Caixa de direção rápida com geometria Ackerman'
      ]
    },
    eletronica: {
      title: 'Telemetria & Elétrica',
      icon: <GaugeIcon size={24} />,
      tagline: 'Dados em tempo real no box da equipe',
      description: 'Chicote elétrico com conectores selados padrão militar/automotivo. Central de aquisição de dados enviando telemetria ao vivo para a equipe de box durante treinos e provas dinâmicas.',
      specs: [
        'Módulo de telemetria sem fio com transmissão ao vivo',
        'Painel digital multifuncional no volante para o piloto',
        'Sensores de rotação nas rodas, temperatura de freios e pressão de óleo',
        'Chicote modular de rápida desconexão e manutenção'
      ]
    },
    gestao: {
      title: 'Gestão, Custos & Marketing',
      icon: <UsersIcon size={24} />,
      tagline: 'A engenharia por trás do negócio da equipe',
      description: 'Uma equipe de corrida universitária também opera como uma empresa de engenharia. Gerenciamos orçamentos, relatórios de custos detalhados (BOM) e apresentações de plano de negócios para jurados da SAE.',
      specs: [
        'Relatório de manufatura e custo (Cost & Manufacturing Event)',
        'Plano de negócios e pitch de investimento para jurados',
        'Comunicação estratégica no Instagram oficial @formulaifsae',
        'Relacionamento direto e transparência com patrocinadores'
      ]
    }
  }

  return (
    <section className="section-wrapper about-section" id="apresentacao" aria-labelledby="about-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-box">
          <span className="section-badge">Apresentação do Projeto</span>
          <h2 id="about-title" className="section-title">
            Quem Somos: <span className="title-red-gradient">Fórmula IF Puma Racing</span>
          </h2>
          <p className="section-description">
            Fundada por alunos e professores do <strong>IFBA (Instituto Federal da Bahia - Campus Jequié)</strong>,
            a equipe representa o talento, a determinação e a força da engenharia baiana na competição de 
            monopostos mais prestigiada do ambiente acadêmico internacional: o <strong>Fórmula SAE Combustion</strong>.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box">
              <ShieldIcon size={28} />
            </div>
            <h3 className="pillar-title">Nossa Missão</h3>
            <p className="pillar-text">
              Transformar a formação acadêmica em competência técnica de ponta, desenvolvendo veículos de alta 
              performance através da metodologia hands-on da engenharia automobilística.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <FlameIcon size={28} />
            </div>
            <h3 className="pillar-title">Espírito Competitivo</h3>
            <p className="pillar-text">
              O Puma simboliza agilidade, potência e visão aguçada. Cada parafuso, tubo de chassi e curva do veículo 
              é pensado para entregar o melhor tempo em pista com total conformidade regulamentar.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <UsersIcon size={28} />
            </div>
            <h3 className="pillar-title">Impacto Regional</h3>
            <p className="pillar-text">
              Fortalecemos o ecossistema de ciência e tecnologia no interior da Bahia (Jequié), participando 
              de feiras científicas (SECITEC, Pint of Science) e formando profissionais disputados pelo mercado.
            </p>
          </div>
        </div>

        {/* Subsystems Interactive Explorer */}
        <div className="subsystems-container">
          <div className="subsystems-header">
            <div>
              <span className="sub-badge">ENGENHARIA APLICADA</span>
              <h3 className="subsystems-heading">Subsistemas do Protótipo</h3>
            </div>
            <p className="subsystems-intro">
              Conheça as áreas de engenharia que compõem o nosso veículo de combustão.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="subsystems-tabs" role="tablist" aria-label="Subsistemas da equipe">
            {Object.keys(subsystems).map((key) => {
              const item = subsystems[key]
              const isSelected = activeSubsystem === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`subsystem-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveSubsystem(key)}
                >
                  {item.title.split('&')[0]}
                </button>
              )
            })}
          </div>

          {/* Active Subsystem Panel */}
          <div className="subsystem-detail-card" role="tabpanel">
            <div className="detail-top">
              <div className="detail-title-group">
                <span className="detail-icon">{subsystems[activeSubsystem].icon}</span>
                <div>
                  <h4 className="detail-name">{subsystems[activeSubsystem].title}</h4>
                  <span className="detail-tagline">{subsystems[activeSubsystem].tagline}</span>
                </div>
              </div>
            </div>

            <p className="detail-desc">{subsystems[activeSubsystem].description}</p>

            <div className="detail-specs-box">
              <h5 className="specs-title">DESTAQUES TÉCNICOS & NORMA SAE:</h5>
              <ul className="specs-list">
                {subsystems[activeSubsystem].specs.map((spec, i) => (
                  <li key={i} className="spec-item">
                    <span className="spec-check"><CheckIcon size={16} /></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

