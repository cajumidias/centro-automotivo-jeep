import React from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY_INFO, MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const Hero: React.FC = () => {
  const handleCtaClick = () => {
    trackEvent('whatsapp_click', { origin: 'capa_solicitar_atendimento' });
  };

  return (
    <section className="capa-hero-section" id="inicio">
      <div className="container capa-hero-container">
        <div className="capa-hero-content">
          {/* 1. Etiqueta / Tag em vermelho (2 linhas) */}
          <div className="capa-tag-red">
            OFICINA ESPECIALIZADA EM JEEP<br />
            EM FORTALEZA
          </div>

          {/* 2. Título H1 com a palavra Jeep em destaque vermelho (3 linhas exatas) */}
          <h1 className="capa-title">
            Seu <span className="capa-title-red">Jeep</span> merece<br />
            uma oficina que<br />
            entende do seu veículo.
          </h1>

          {/* Destaque Visual do Jeep Compass da Foto da Capa para Mobile (Maior Identificação) */}
          <div className="capa-mobile-jeep-showcase">
            <div className="capa-mobile-jeep-inner">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-capa-original.png`} 
                alt="Jeep Compass na oficina especializada InovaÇÃO Centro Automotivo" 
                className="capa-mobile-jeep-img"
                loading="eager"
              />
              <div className="capa-mobile-jeep-overlay" />
              <div className="capa-mobile-jeep-badge">
                <span className="jeep-badge-dot" />
                <span>JEEP COMPASS • OFICINA ESPECIALIZADA</span>
              </div>
            </div>
          </div>

          {/* 3. Subtítulo / Descrição com a quebra de linha idêntica */}
          <p className="capa-subtitle">
            Revisão, diagnóstico eletrônico e manutenção<br className="capa-desktop-br" />
            para todos os modelos Jeep, com equipe especializada.
          </p>

          {/* 4. Botão CTA com cantos arredondados, WhatsApp e seta */}
          <div className="capa-actions-area">
            <a
              href={MAIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="capa-btn-cta"
              onClick={handleCtaClick}
              id="btn-capa-solicitar"
            >
              <svg 
                className="capa-wp-icon" 
                viewBox="0 0 24 24" 
                width="19" 
                height="19" 
                fill="currentColor"
              >
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.568 3.805 1.554 5.36L2.344 21.656l4.437-1.164A9.98 9.98 0 0 0 12.03 22c5.536 0 10.031-4.495 10.031-10.031 0-5.536-4.495-10-10.031-10zm0 18.281c-1.61 0-3.11-.448-4.406-1.226l-.316-.188-2.628.69.7-2.56-.206-.33c-.85-1.353-1.3-2.924-1.3-4.636 0-4.57 3.718-8.281 8.281-8.281 4.57 0 8.281 3.718 8.281 8.281 0 4.57-3.718 8.25-8.281 8.25zm4.536-6.195c-.25-.125-1.472-.727-1.7-.81-.228-.083-.395-.125-.562.125-.167.25-.646.81-.792.977-.146.167-.292.188-.542.063-.25-.125-1.054-.388-2.008-1.24-.742-.662-1.243-1.48-1.39-1.73-.145-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.563-1.354-.772-1.854-.203-.488-.41-.422-.563-.43-.146-.008-.313-.01-.48-.01-.166 0-.437.063-.666.313-.23.25-.875.855-.875 2.084 0 1.23.896 2.417 1.02 2.584.126.166 1.764 2.695 4.274 3.78.597.258 1.064.412 1.428.528.6.19 1.146.163 1.578.1.48-.071 1.472-.602 1.68-1.184.208-.583.208-1.083.146-1.187-.063-.105-.23-.167-.48-.292z"/>
              </svg>
              <span>SOLICITAR ATENDIMENTO</span>
              <span className="capa-btn-arrow">→</span>
            </a>

            {/* 5. Texto de apoio abaixo do botão */}
            <span className="capa-subtext-wp">
              Fale com nossa equipe pelo WhatsApp
            </span>
          </div>

          {/* 6. Localização */}
          <div className="capa-location">
            <MapPin size={15} color="#FFFFFF" strokeWidth={2.4} className="capa-pin-icon" />
            <span>{COMPANY_INFO.addressShort}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
