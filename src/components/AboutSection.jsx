import React, { useState } from 'react'
import { FlameIcon, GaugeIcon, ShieldIcon, UsersIcon, CheckIcon, WindIcon, FileTextIcon, CameraIcon } from './Icons'
import './AboutSection.css'

export default function AboutSection() {
  const [activeSector, setActiveSector] = useState('powertrain')

  const sectors = {
    powertrain: {
      tabLabel: 'Powertrain',
      title: 'Setor de Powertrain',
      icon: <FlameIcon size={24} />,
      tagline: 'Motor Honda CB 250F Twister & Trem de Força',
      description: 'Responsável pelo coração propulsor do protótipo: o motor Honda CB 250F Twister (monocilíndrico 4 tempos OHC de 4 válvulas, 249,5 cm³). A equipe projeta o sistema de admissão com restritor de ar normatizado, sistema de escape aliviado em inox, linha de combustível, arrefecimento a ar/óleo e transmissão sequencial de 6 velocidades por corrente.',
      specs: [
        'Motorização: Honda CB 250F Twister (249,5 cm³)',
        'Câmbio sequencial integrado de 6 velocidades',
        'Coletor de admissão e restritor calculados para o regulamento SAE',
        'Sistema de arrefecimento e escapamento sob medida para o chassi'
      ]
    },
    chassi: {
      tabLabel: 'Chassi',
      title: 'Setor de Chassi & Estrutura',
      icon: <ShieldIcon size={24} />,
      tagline: 'Treliça Tubular Spaceframe em Aço Liga SAE 4130',
      description: 'Projeta e constrói a espinha dorsal do monoposto. Dimensiona a treliça espacial tubular garantindo máxima rigidez torcional para apoio da suspensão e total segurança para o piloto, incluindo célula de sobrevivência, santantônios frontal e principal, e atenuador de impacto (Crash-box) testado e certificado.',
      specs: [
        'Tubulação em aço cromo-molibdênio SAE 4130 com soldagem especializada',
        'Simulação estrutural via Elementos Finitos (FEA) para otimização de peso',
        'Célula de sobrevivência, santantônios e proteções regulamentares',
        'Atenuador de impacto frontal (Crash-box) absorvedor de energia'
      ]
    },
    eletronica: {
      tabLabel: 'Eletrônica',
      title: 'Setor de Eletrônica & Telemetria',
      icon: <GaugeIcon size={24} />,
      tagline: 'Sistemas Elétricos, Sensores e Aquisição de Dados',
      description: 'Concebe toda a arquitetura elétrica do veículo: chicote elétrico de alta durabilidade com conectores automotivos selados, sensores de monitoramento de motor (temperatura, rotação, pressão), circuitos de corte de segurança obrigatórios (Kill Switch, Brake Over-Travel Switch) e sistema de telemetria.',
      specs: [
        'Chicote elétrico modular com proteção contra calor e vibração',
        'Sensores para monitoramento de rotação, temperatura de óleo e marcha',
        'Circuitos de segurança de emergência e luz de freio conforme norma SAE',
        'Desenvolvimento de telemetria e display informativo para o piloto'
      ]
    },
    design_aero: {
      tabLabel: 'Design e Aerodinâmica',
      title: 'Setor de Design & Aerodinâmica',
      icon: <WindIcon size={24} />,
      tagline: 'Carenagem, Otimização de Fluxo e Identidade Visual',
      description: 'Responsável pelo estudo aerodinâmico e desenho das superfícies externas do protótipo. Realiza simulações computacionais de dinâmica dos fluidos (CFD) para minimizar o arrasto aerodinâmico, direcionar o fluxo de ar para os radiadores e criar uma carenagem esportiva, agressiva e que estampa a identidade visual do Puma Racing.',
      specs: [
        'Estudos de dinâmica de fluidos computacional (CFD)',
        'Modelagem de carenagem frontal, bico e laterais (Sidepods)',
        'Dutos direcionadores de ar para refrigeração do motor e óleo',
        'Identidade visual esportiva e aplicação das cores oficiais da equipe'
      ]
    },
    freio_suspensao: {
      tabLabel: 'Freio e Suspensão',
      title: 'Setor de Freio & Suspensão',
      icon: <GaugeIcon size={24} />,
      tagline: 'Geometria Duplo A, Direção e Dinâmica de Pista',
      description: 'Desenvolve a dinâmica de contato do veículo com o asfalto. Modela a geometria de suspensão independente Duplo A (Double Wishbone) com acionamento push-rod nos quatro cantos, sistema de direção rápida com geometria Ackerman, e o dimensionamento do sistema duplo e independente de freios a disco hidráulicos.',
      specs: [
        'Geometria Double Wishbone independente dianteira e traseira',
        'Amortecedores ajustáveis de alta sensibilidade com rockers usinados',
        'Circuito duplo e independente de freios a disco nas 4 rodas',
        'Caixa de direção rápida projetada para provas de autocross'
      ]
    },
    comunicacoes: {
      tabLabel: 'Comunicações',
      title: 'Setor de Comunicações & Mídia',
      icon: <CameraIcon size={24} />,
      tagline: 'Voz da Equipe, Redes Sociais e Cobertura de Eventos',
      description: 'Gerencia a presença e a comunicação da Puma Racing. Cuida do perfil oficial do Instagram (@formulaifsae), registro audiovisual das etapas de fabricação na oficina, divulgação científica em eventos como a SECITEC e Pint of Science, relacionamento com a imprensa e criação de materiais promocionais e de estande.',
      specs: [
        'Gestão de conteúdo e engajamento no Instagram @formulaifsae',
        'Produção de fotos, reels e bastidores de fabricação da oficina',
        'Divulgação científica e institucional do IFBA Campus Jequié',
        'Assessoria de comunicação e cobertura de feiras e exposições'
      ]
    },
    secretaria: {
      tabLabel: 'Secretaria',
      title: 'Setor de Secretaria & Administração',
      icon: <FileTextIcon size={24} />,
      tagline: 'Gestão de Membros, Documentação e Organização Interna',
      description: 'Garante o suporte administrativo e institucional da equipe. É encarregada da gestão de membros, processos seletivos, atas de reuniões, controle de presença, cronograma de entregas, comunicação com a reitoria e coordenação do IFBA Campus Jequié, além de documentações e formulários da Fórmula SAE Brasil.',
      specs: [
        'Coordenação e acompanhamento de processos seletivos',
        'Controle documental, relatórios e atas oficiais da equipe',
        'Gestão de prazos e alinhamento institucional junto ao IFBA',
        'Apoio à diretoria geral na organização interna e cronogramas'
      ]
    }
  }

  const current = sectors[activeSector]

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
            a equipe está atualmente na <strong>fase de construção e manufatura de seu primeiro monoposto</strong>,
            impulsionado pelo motor <strong>Honda CB 250 Twister</strong>, preparando-se para representar o talento e 
            a inovação da engenharia baiana na competição <strong>Fórmula SAE Brasil Combustion</strong>.
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
              O Puma simboliza agilidade, potência e visão aguçada. Cada tubo do chassi, suporte e peça do veículo 
              é pensado para entregar confiabilidade e tempo em pista com conformidade regulamentar.
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

        {/* Setores do Projeto Interactive Explorer */}
        <div className="subsystems-container">
          <div className="subsystems-header">
            <div>
              <span className="sub-badge">ESTRUTURA ORGANIZACIONAL</span>
              <h3 className="subsystems-heading">Setores do Projeto</h3>
            </div>
            <p className="subsystems-intro">
              Conheça as áreas de engenharia, comunicação e gestão que compõem a equipe Fórmula IF Puma Racing.
            </p>
          </div>

          {/* Navigation Pills for all 7 sectors */}
          <div className="subsystems-tabs" role="tablist" aria-label="Setores do projeto">
            {Object.keys(sectors).map((key) => {
              const item = sectors[key]
              const isSelected = activeSector === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`subsystem-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveSector(key)}
                >
                  {item.tabLabel}
                </button>
              )
            })}
          </div>

          {/* Active Sector Panel */}
          <div className="subsystem-detail-card" role="tabpanel">
            <div className="detail-top">
              <div className="detail-title-group">
                <span className="detail-icon">{current.icon}</span>
                <div>
                  <h4 className="detail-name">{current.title}</h4>
                  <span className="detail-tagline">{current.tagline}</span>
                </div>
              </div>
            </div>

            <p className="detail-desc">{current.description}</p>

            <div className="detail-specs-box">
              <h5 className="specs-title">RESPONSABILIDADES & DESTAQUES TÉCNICOS:</h5>
              <ul className="specs-list">
                {current.specs.map((spec, i) => (
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
