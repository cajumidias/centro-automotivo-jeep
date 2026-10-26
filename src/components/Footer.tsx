import React from 'react';
import { COMPANY_INFO, MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const handleFooterWpClick = () => {
    trackEvent('whatsapp_click', { origin: 'footer' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        {/* Identificação da Marca */}
        <div className="footer-brand">
          <img
            src="/images/logo-footer.png"
            alt="InovaÇÃO Centro Automotivo"
            className="footer-logo-img"
            loading="lazy"
          />
          <span className="footer-text">
            {COMPANY_INFO.name} • Especialistas em Jeep. Atendimento em Fortaleza.
          </span>
        </div>

        {/* Links e Contatos */}
        <div className="footer-copy">
          <span>{COMPANY_INFO.addressShort} | Tel: {COMPANY_INFO.phone}</span>
          {' • '}
          <a
            href={MAIN_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFooterWpClick}
            style={{ color: '#E50920', fontWeight: 600 }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Linha de Créditos da Agência Caju Mídias */}
      <div className="container footer-credits-row">
        <p className="footer-credits-text">
          Site desenvolvido pela{' '}
          <a
            href="https://www.instagram.com/caju_midias/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-agency-link"
            title="Acessar Instagram da Agência Caju Mídias"
          >
            Agência Caju Mídias
          </a>
        </p>
      </div>
    </footer>
  );
};
