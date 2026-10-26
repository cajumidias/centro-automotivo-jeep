import React, { useState } from 'react';
import { Star, ExternalLink, ZoomIn, X, CheckCircle2, ShieldCheck, Camera } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_MAPS_REVIEWS_URL } from '../constants/content';
import type { TestimonialItem } from '../types';

export const Reviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<TestimonialItem | null>(null);

  const getBadgeIcon = (type?: string) => {
    switch (type) {
      case 'jeep':
        return <ShieldCheck size={14} className="badge-icon-custom" />;
      case 'guide':
        return <Camera size={14} className="badge-icon-custom" />;
      default:
        return <CheckCircle2 size={14} className="badge-icon-custom" />;
    }
  };

  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container">
        {/* Cabeçalho Centralizado e Elegante */}
        <div className="reviews-header-block">
          <span className="tag-subtitle-red">AVALIAÇÕES REAIS NO GOOGLE MAPS</span>
          <h2 className="reviews-main-title">
            Comprovado por quem confia seu Jeep à InovaÇÃO
          </h2>
          <p className="reviews-sub-desc">
            Transparência total, comunicação ágil e atendimento de excelência. Confira prints reais de clientes que avaliaram espontaneamente nosso serviço no Google.
          </p>

          {/* Barra de Selo Oficial Google Maps */}
          <div className="reviews-google-bar">
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="google-rating-box"
              title="Abrir perfil oficial no Google Maps"
            >
              <svg className="google-brand-svg" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="google-score-bold">4,8</span>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
              <span className="google-total-evals">Avaliações no Google</span>
              <ExternalLink size={13} color="#888" style={{ marginLeft: '4px' }} />
            </a>

            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-maps-view"
            >
              <span>Ver todas as avaliações no Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Grid de Cards com os Prints Reais de Feedback */}
        <div className="feedback-cards-grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="feedback-card">
              {/* Topo do Card com Badge e Classificação */}
              <div className="feedback-card-header">
                <div className={`feedback-badge-pill feedback-badge-${item.badgeType || 'trust'}`}>
                  {getBadgeIcon(item.badgeType)}
                  <span>{item.badge}</span>
                </div>
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
              </div>

              {/* Moldura do Print Real do Google */}
              <div
                className="feedback-image-frame"
                onClick={() => setSelectedReview(item)}
                title="Clique para ampliar o print original"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedReview(item);
                  }
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={`Avaliação real no Google de ${item.name}`}
                  className="feedback-screenshot-img"
                  loading="lazy"
                />
                <div className="feedback-zoom-hint">
                  <ZoomIn size={14} />
                  <span>Clique para ampliar print</span>
                </div>
              </div>

              {/* Destaque do Depoimento */}
              <div className="feedback-quote-box">
                <p className="feedback-quote-text">
                  “{item.text}”
                </p>
              </div>

              {/* Rodapé do Card com Nome e Link para o Google */}
              <div className="feedback-card-footer">
                <div>
                  <h3 className="feedback-author-name">{item.name}</h3>
                  <span className="feedback-client-type">
                    {item.clientType || 'Avaliação Verificada'} {item.date ? `• ${item.date}` : ''}
                  </span>
                </div>

                <a
                  href={GOOGLE_MAPS_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feedback-source-link"
                  title="Conferir avaliação no Google Maps"
                >
                  <span>Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Lightbox para Ampliar o Print Real */}
      {selectedReview && (
        <div
          className="feedback-lightbox-overlay"
          onClick={() => setSelectedReview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="feedback-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="feedback-lightbox-bar">
              <div className="feedback-lightbox-title">
                <strong>Avaliação Real de {selectedReview.name}</strong>
                <span>{selectedReview.badge}</span>
              </div>
              <button
                type="button"
                className="btn-lightbox-close"
                onClick={() => setSelectedReview(null)}
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="feedback-lightbox-img-wrap">
              <img
                src={selectedReview.imageSrc}
                alt={`Print completo de ${selectedReview.name}`}
                className="feedback-lightbox-img"
              />
            </div>

            <div className="feedback-lightbox-footer">
              <p className="lightbox-quote-text">“{selectedReview.text}”</p>
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lightbox-google"
              >
                <span>Conferir no Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
