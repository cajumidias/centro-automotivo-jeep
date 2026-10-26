import React, { useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Compass, 
  Maximize2, 
  X, 
  Award, 
  Wrench,
  Navigation
} from 'lucide-react';
import { ABOUT_US, COMPANY_INFO } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const AboutUs: React.FC = () => {
  const [is360ModalOpen, setIs360ModalOpen] = useState(false);

  const handleCtaClick = () => {
    trackEvent('whatsapp_click', { origin: 'about_us_faca_orcamento' });
  };

  return (
    <section className="about-section" id="sobre">
      <div className="container about-layout">
        {/* Coluna Esquerda: A História e Propósito */}
        <div className="about-text-column">
          <span className="tag-subtitle-red">{ABOUT_US.tag}</span>
          <h2 className="about-main-title">{ABOUT_US.title}</h2>
          <p className="about-lead-subtitle">{ABOUT_US.subtitle}</p>

          <div className="about-paragraphs-flow">
            {ABOUT_US.paragraphs.map((p, idx) => (
              <p key={idx} className="about-paragraph-text">
                {p}
              </p>
            ))}
          </div>

          {/* Destaques de Credibilidade / Estatísticas */}
          <div className="about-stats-row">
            <div className="about-stat-card">
              <div className="stat-number-accent">{ABOUT_US.experienceYears}</div>
              <div className="stat-label-wrap">
                <span className="stat-label-bold">{ABOUT_US.experienceLabel}</span>
                <span className="stat-label-sub">Fundada em nov. de 2015</span>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="stat-number-accent">
                <Wrench size={26} className="stat-icon-wrench" />
              </div>
              <div className="stat-label-wrap">
                <span className="stat-label-bold">Especialização Jeep</span>
                <span className="stat-label-sub">Diagnósticos & mecânica de ponta</span>
              </div>
            </div>
          </div>

          {/* Botão de Conversão WhatsApp */}
          <div className="about-cta-area">
            <a
              href={ABOUT_US.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red-cta about-btn-cta"
              onClick={handleCtaClick}
              id="btn-about-whatsapp"
            >
              <MessageCircle size={18} />
              <span>{ABOUT_US.ctaText}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Coluna Direita: Tour 360° da Oficina em Destaque */}
        <div className="about-360-column">
          <div className="about-360-card">
            {/* Cabeçalho do Card 360 */}
            <div className="about-360-card-header">
              <div className="about-360-badge">
                <Award size={14} className="badge-icon-custom" />
                <span>ESTRUTURA REAL DA OFICINA</span>
              </div>
              <h3 className="about-360-card-title">
                Explore a oficina em 360°
              </h3>
            </div>

            {/* Visualizador 360 Interativo */}
            <div className="about-360-viewer-wrap">
              <iframe
                src={COMPANY_INFO.maps360EmbedUrl}
                title="Tour Virtual 360° InovaÇÃO Centro Automotivo"
                className="about-360-iframe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Indicador animado */}
              <div className="tour-360-hint-pill">
                <Compass size={13} className="tour-spin-icon" />
                <span>Arraste para girar a oficina em 360°</span>
              </div>

              {/* Botão de Tela Cheia */}
              <button
                type="button"
                className="btn-tour-expand"
                onClick={() => setIs360ModalOpen(true)}
                title="Expandir tour 360° em tela cheia"
              >
                <Maximize2 size={13} />
                <span>Tela Cheia</span>
              </button>
            </div>

            {/* Rodapé do Card 360 */}
            <div className="about-360-card-footer">
              <p>
                Visite virtualmente nossos elevadores automotivos, boxes técnicos e estrutura completa no bairro Papicu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox 360 em Tela Cheia */}
      {is360ModalOpen && (
        <div
          className="modal-360-overlay"
          onClick={() => setIs360ModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-360-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-360-header">
              <div className="modal-360-title">
                <Compass size={18} className="tour-spin-icon" />
                <strong>Tour Virtual 360° — Estrutura InovaÇÃO Centro Automotivo</strong>
              </div>
              <button
                type="button"
                className="btn-lightbox-close"
                onClick={() => setIs360ModalOpen(false)}
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-360-iframe-wrap">
              <iframe
                src={COMPANY_INFO.maps360EmbedUrl}
                title="Tour Virtual 360° Tela Cheia - InovaÇÃO Centro Automotivo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="modal-360-footer">
              <span>Arraste com o mouse ou toque para olhar em todas as direções da oficina.</span>
              <a
                href={COMPANY_INFO.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-route"
              >
                <Navigation size={13} />
                <span>Traçar Rota no GPS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
