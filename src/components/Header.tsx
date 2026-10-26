import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="capa-header">
      <div className="capa-header-inner container">
        {/* Lado Esquerdo: Logo Circular Oficial + CENTRO AUTOMOTIVO • FORTALEZA */}
        <div className="capa-brand-area">
          <img
            src="/images/logo-inovacao-hd.png"
            alt="InovaÇÃO Centro Automotivo"
            className="capa-logo-img"
          />
          <div className="capa-brand-divider" />
          <span className="capa-brand-tagline">
            CENTRO AUTOMOTIVO &nbsp;•&nbsp; FORTALEZA
          </span>
        </div>

        {/* Lado Direito: Menu Hamburguer Minimalista */}
        <button
          className="capa-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X size={26} color="#FFFFFF" strokeWidth={2.2} />
          ) : (
            <div className="capa-hamburger-bars">
              <span />
              <span />
              <span />
            </div>
          )}
        </button>
      </div>

      {/* Linha decorativa horizontal: detalhe vermelho na esquerda e cinza suave */}
      <div className="capa-header-line-bar">
        <div className="capa-header-red-segment" />
      </div>

      {/* Drawer / Menu deslizante */}
      {isMobileMenuOpen && (
        <div className="capa-nav-drawer">
          <div className="container capa-drawer-content">
            <a
              href="#servicos"
              className="capa-drawer-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }}
            >
              <span>Nossos Serviços</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#diferenciais"
              className="capa-drawer-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('diferenciais'); }}
            >
              <span>Por que a InovaÇÃO</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#sobre"
              className="capa-drawer-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }}
            >
              <span>Sobre Nós & Tour 360°</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#avaliacoes"
              className="capa-drawer-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('avaliacoes'); }}
            >
              <span>Avaliações Google</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#faq"
              className="capa-drawer-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}
            >
              <span>Perguntas Frequentes & Contato</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={MAIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red-cta"
              style={{ width: '100%', marginTop: '10px' }}
              onClick={() => trackEvent('whatsapp_click', { origin: 'header_drawer' })}
            >
              Solicitar Atendimento pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
