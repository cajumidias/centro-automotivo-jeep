import React, { useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock, 
  Navigation, 
  Plus 
} from 'lucide-react';
import { COMPANY_INFO, FAQS, MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const ContactFaq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleAgendarClick = () => {
    trackEvent('whatsapp_click', { origin: 'contact_agendar_pelo_whatsapp' });
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'contact_section' });
  };

  const handleDirectionsClick = () => {
    trackEvent('directions_click', { destination: 'InovaÇÃO Centro Automotivo' });
  };

  return (
    <section className="contact-faq-section" id="faq">
      <div className="container contact-faq-grid">
        {/* Coluna 1: Conversão e Contato */}
        <div className="contact-column">
          <span className="tag-subtitle-red">VAMOS CONVERSAR?</span>
          <h2 className="contact-title">Seu Jeep precisa de atenção?</h2>
          <p className="contact-desc">
            Explique o que está acontecendo com seu veículo e fale com nossa equipe para receber orientações sobre o atendimento.
          </p>

          <div className="contact-cta-wrapper">
            <a
              href={MAIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red-cta"
              onClick={handleAgendarClick}
              id="btn-contact-agendar"
            >
              <MessageCircle size={18} />
              <span>AGENDAR PELO WHATSAPP</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="contact-info-list">
            <a 
              href={`tel:${COMPANY_INFO.phoneTel}`} 
              className="contact-info-item"
              onClick={handlePhoneClick}
            >
              <Phone size={16} className="contact-info-icon" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <div className="contact-info-item">
              <MapPin size={16} className="contact-info-icon" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* Coluna 2: Mapa Real e Solicitação de Rota GPS */}
        <div className="map-column">
          <div className="map-embed-wrapper">
            <iframe
              src={COMPANY_INFO.mapsEmbedUrl}
              title="Mapa Real InovaÇÃO Centro Automotivo - Papicu"
              className="map-iframe-real"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-route-overlay-bar">
              <a
                href={COMPANY_INFO.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn-route-primary"
                onClick={handleDirectionsClick}
                id="btn-directions-maps"
                title="Abrir rota no Google Maps"
              >
                <Navigation size={13} />
                <span>TRAÇAR ROTA NO GPS</span>
              </a>
              <a
                href={COMPANY_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn-route-waze"
                title="Abrir rota no Waze"
              >
                <span>WAZE</span>
              </a>
            </div>
          </div>

          <div className="map-hours-footer">
            <Clock size={16} className="contact-info-icon" />
            <div>
              <strong>Horário de funcionamento:</strong>
              <div>{COMPANY_INFO.hours}</div>
            </div>
          </div>
        </div>

        {/* Coluna 3: Perguntas Frequentes (Accordion) */}
        <div className="faq-column">
          <span className="faq-header-label">PERGUNTAS FREQUENTES</span>

          <div className="faq-list">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <Plus size={16} className="faq-icon-toggle" />
                  </button>

                  {isOpen && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
