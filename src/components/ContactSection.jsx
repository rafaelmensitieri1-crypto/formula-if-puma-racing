import React, { useState } from 'react'
import { InstagramIcon, MailIcon, MapPinIcon, ExternalLinkIcon, CheckIcon } from './Icons'
import './ContactSection.css'

export default function ContactSection({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prefilledSubject || 'Patrocínio ou Parceria',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate sending form
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="section-wrapper contact-section" id="contatos" aria-labelledby="contact-title">
      <div className="container">
        {/* Header */}
        <div className="section-header-box">
          <span className="section-badge">Fale Conosco</span>
          <h2 id="contact-title" className="section-title">
            Contatos do <span className="title-red-gradient">Projeto Puma Racing</span>
          </h2>
          <p className="section-description">
            Entre em contato para propostas de patrocínio, dúvidas institucionais, visitas técnicas 
            ou para convidar nossa equipe para eventos e exposições.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Info Column */}
          <div className="contact-info-column">
            {/* Instagram Highlight Card */}
            <a 
              href="https://instagram.com/formulaifsae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-feature-card"
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

            {/* Linktree Card */}
            <a 
              href="https://linktr.ee/formulaif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-feature-card linktree-card"
            >
              <div className="social-icon-wrapper linktree-icon">
                <span>🔗</span>
              </div>
              <div className="social-card-text">
                <span className="social-card-label">HUB DE LINKS</span>
                <span className="social-card-handle">linktr.ee/formulaif</span>
                <span className="social-card-sub">Processos seletivos, formulários e editais</span>
              </div>
              <div className="social-card-arrow">
                <ExternalLinkIcon size={20} />
              </div>
            </a>

            {/* Contact Details List */}
            <div className="contact-details-box">
              <h3 className="details-header">Informações Institucionais</h3>

              <div className="contact-detail-row">
                <div className="detail-icon-circle">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <span className="detail-label">Localização da Sede / Oficina:</span>
                  <p className="detail-val">
                    IFBA - Instituto Federal da Bahia (Campus Jequié)<br />
                    Rua Vereador Valter Novaes, s/n - Jequié - BA, 45205-490
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-circle">
                  <MailIcon size={20} />
                </div>
                <div>
                  <span className="detail-label">E-mail Direto:</span>
                  <p className="detail-val">
                    <a href="mailto:contato@formulaif.com.br" className="email-link">
                      contato@formulaif.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-column">
            <div className="form-card">
              <h3 className="form-title">Envie uma Mensagem</h3>
              <p className="form-subtitle">Preencha os campos abaixo e entraremos em contato com você.</p>

              {submitted ? (
                <div className="form-success-box" role="status">
                  <div className="success-icon-badge">
                    <CheckIcon size={32} />
                  </div>
                  <h4 className="success-title">Mensagem Enviada com Sucesso!</h4>
                  <p className="success-text">
                    Obrigado pelo contato! Nossa equipe de gestão responderá em breve através do e-mail fornecido.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Patrocínio ou Parceria',
                        message: ''
                      })
                    }}
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate={false}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: Carlos Silva"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Seu E-mail Corporativo ou Pessoal *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="nome@empresa.com.br"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="(73) 99999-9999"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      Assunto *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Patrocínio ou Parceria">Proposta de Patrocínio / Parceria</option>
                      <option value="Cota Diamante">Interesse em Cota Diamante</option>
                      <option value="Cota Ouro">Interesse em Cota Ouro</option>
                      <option value="Cota Prata">Interesse em Cota Prata</option>
                      <option value="Cota Bronze">Interesse em Cota Bronze / Apoio Técnico</option>
                      <option value="Visita Técnica ou Evento">Convite para Evento ou Visita Técnica</option>
                      <option value="Processo Seletivo">Processo Seletivo / Novos Membros</option>
                      <option value="Outros Assuntos">Outro Assunto</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Sua Mensagem *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Descreva sua proposta, dúvida ou mensagem para a equipe..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary submit-btn"
                  >
                    {submitting ? 'Enviando mensagem...' : 'Enviar Mensagem Agora'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

