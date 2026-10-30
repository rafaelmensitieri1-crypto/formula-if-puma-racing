import React, { useState, useEffect } from 'react'
import { CameraIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon, InstagramIcon } from './Icons'
import './GallerySection.css'

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)

  const galleryItems = [
    {
      id: 1,
      category: 'eventos',
      title: 'SECITEC 2026 - Estande Oficial da Equipe',
      description: 'Apresentação pública do projeto Fórmula IF Puma Racing na Semana de Ciência e Tecnologia do IFBA Campus Jequié.',
      src: '/images/puma-instagram.jpg',
      tag: 'SECITEC 2026',
      date: 'Outubro 2026'
    },
    {
      id: 2,
      category: 'equipe',
      title: 'Simulador de Pilotagem & Cockpit',
      description: 'Estrutura completa de simulador montada pelos estudantes para testes ergonômicos e atração de novos entusiastas.',
      src: '/images/puma-feed.jpg',
      tag: 'Simulador Puma',
      date: 'Temporada 2026'
    },
    {
      id: 3,
      category: 'carro',
      title: 'Estrutura Tubular e Célula do Piloto',
      description: 'Inspeção do chassi em aço cromo-molibdênio SAE 4130 com conformidade rigorosa com o regulamento Fórmula SAE.',
      src: '/images/puma-feed.jpg',
      tag: 'Chassi SAE 4130',
      date: 'Engenharia IFBA'
    },
    {
      id: 4,
      category: 'garagem',
      title: 'Oficina Mecânica & Soldagem',
      description: 'Integrantes na oficina do IFBA trabalhando nos ajustes da suspensão, alinhamento e calibração de motor.',
      src: '/images/puma-feed.jpg',
      tag: 'Oficina & Garagem',
      date: 'Oficina Mecânica'
    },
    {
      id: 5,
      category: 'eventos',
      title: 'Pint of Science & Divulgação Científica',
      description: 'A equipe participando de debates científicos sobre tecnologia automobilística e impacto da engenharia na Bahia.',
      src: '/images/puma-feed.jpg',
      tag: 'Pint of Science',
      date: 'Extensão Acadêmica'
    },
    {
      id: 6,
      category: 'equipe',
      title: 'Integração de Novos Membros',
      description: 'Reunião e acolhimento dos estudantes de engenharia e cursos técnicos aprovados no processo seletivo da equipe.',
      src: '/images/puma-feed.jpg',
      tag: 'Equipe Puma Racing',
      date: 'Processo Seletivo'
    }
  ]

  const categories = [
    { id: 'all', label: 'Todas as Fotos' },
    { id: 'carro', label: 'O Carro & Chassi' },
    { id: 'garagem', label: 'Garagem & Oficina' },
    { id: 'eventos', label: 'Eventos & SECITEC' },
    { id: 'equipe', label: 'Equipe & Simulador' }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return
      if (e.key === 'Escape') setActivePhotoIndex(null)
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePhotoIndex])

  const nextPhoto = () => {
    if (activePhotoIndex === null) return
    setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevPhoto = () => {
    if (activePhotoIndex === null) return
    setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const currentPhoto = activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null

  return (
    <section className="section-wrapper gallery-section" id="fotos" aria-labelledby="gallery-title">
      <div className="container">
        {/* Header */}
        <div className="gallery-header-row">
          <div>
            <span className="section-badge">Galeria Oficial</span>
            <h2 id="gallery-title" className="section-title">
              Fotos do <span className="title-red-gradient">Fórmula IF Puma Racing</span>
            </h2>
            <p className="section-description">
              Registros da rotina da equipe no IFBA Campus Jequié: fabricação, eventos acadêmicos,
              simulador de pilotagem e treinamentos.
            </p>
          </div>

          <a 
            href="https://instagram.com/formulaifsae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link-badge"
          >
            <InstagramIcon size={18} />
            <span>Ver feed completo @formulaifsae</span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters" role="tablist" aria-label="Categorias de fotos">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredItems.map((photo, index) => (
            <div 
              key={photo.id}
              className="gallery-card"
              onClick={() => setActivePhotoIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setActivePhotoIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto ampliada: ${photo.title}`}
            >
              <div className="gallery-img-wrapper">
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="gallery-img"
                  loading="lazy" 
                />
                <div className="gallery-overlay">
                  <div className="gallery-card-badge">{photo.tag}</div>
                  <div className="gallery-zoom-icon" aria-hidden="true">
                    <CameraIcon size={20} />
                  </div>
                </div>
              </div>

              <div className="gallery-card-info">
                <span className="gallery-date">{photo.date}</span>
                <h3 className="gallery-card-title">{photo.title}</h3>
                <p className="gallery-card-desc">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div 
          className="lightbox-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-label={currentPhoto.title}
          onClick={() => setActivePhotoIndex(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn" 
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Fechar modal de imagem (ou pressione ESC)"
            >
              <CloseIcon size={24} />
            </button>

            <button 
              type="button" 
              className="lightbox-nav-btn prev" 
              onClick={prevPhoto}
              aria-label="Foto anterior"
            >
              <ChevronLeftIcon size={28} />
            </button>

            <div className="lightbox-image-box">
              <img 
                src={currentPhoto.src} 
                alt={currentPhoto.title} 
                className="lightbox-img" 
              />
              <div className="lightbox-caption">
                <span className="lightbox-tag">{currentPhoto.tag}</span>
                <h4 className="lightbox-title">{currentPhoto.title}</h4>
                <p className="lightbox-desc">{currentPhoto.description}</p>
              </div>
            </div>

            <button 
              type="button" 
              className="lightbox-nav-btn next" 
              onClick={nextPhoto}
              aria-label="Próxima foto"
            >
              <ChevronRightIcon size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
