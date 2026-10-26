import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

export const WhatsAppFloating: React.FC = () => {
  const handleClick = () => {
    trackEvent('whatsapp_click', { origin: 'floating_button' });
  };

  return (
    <a
      href={MAIN_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      onClick={handleClick}
      aria-label="Falar pelo WhatsApp com a InovaÇÃO Centro Automotivo"
      id="btn-whatsapp-floating"
    >
      <MessageCircle size={20} />
      <span>Falar pelo WhatsApp</span>
    </a>
  );
};
