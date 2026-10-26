import React from 'react';
import { Car, Users, Star, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { DIFFERENTIALS, JEEP_MODELS, MAIN_WHATSAPP_URL } from '../constants/content';
import { trackEvent } from '../utils/analytics';

const diffIconMap: Record<string, React.ReactNode> = {
  Car: <Car size={16} />,
  Users: <Users size={16} />,
  Star: <Star size={16} />,
  MapPin: <MapPin size={16} />
};

export const WhyUs: React.FC = () => {
  const handleChatClick = () => {
    trackEvent('whatsapp_click', { origin: 'why_us_conversar_com_a_equipe' });
  };

  return (
    <section className="why-section" id="diferenciais">
      <div className="container why-layout">
        {/* Esquerda: Título, 4 Diferenciais e Botão */}
        <div>
          <span className="tag-subtitle-red">POR QUE ESCOLHER A INOVAÇÃO?</span>
          <h2 className="why-title">
            Especialistas em Jeep. Atendimento em Fortaleza.
          </h2>

          <div className="differentials-grid">
            {DIFFERENTIALS.map((item) => (
              <div key={item.id} className="diff-item">
                <div className="diff-icon-header">
                  <div className="diff-icon-circle">
                    {diffIconMap[item.iconName] || <Car size={16} />}
                  </div>
                  <h3 className="diff-title">{item.title}</h3>
                </div>
                <p className="diff-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <a
            href={MAIN_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red-cta"
            onClick={handleChatClick}
            id="btn-why-whatsapp"
          >
            <MessageCircle size={18} />
            <span>CONVERSAR COM A EQUIPE</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Direita: Imagem da Oficina Jeep com Mecânicos em Ação e Bloco "TODOS OS MODELOS JEEP" */}
        <div className="why-right-block">
          <img
            src="/images/oficina-jeep-secao.png"
            alt="Oficina especializada com modelos Jeep nos elevadores e mecânicos em ação"
            className="why-mechanic-img"
            loading="lazy"
            width="600"
            height="400"
          />
          <div className="jeep-models-badge-card">
            <span className="jeep-wordmark">Jeep</span>
            <span className="jeep-models-sub">TODOS OS MODELOS</span>
            {JEEP_MODELS.map((model, idx) => (
              <span key={idx} className="jeep-model-name">
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
