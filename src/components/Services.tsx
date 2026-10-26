import React from 'react';
import { 
  Wrench, 
  Cpu, 
  Disc, 
  Cog, 
  Gauge, 
  Snowflake, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../constants/content';
import { trackEvent } from '../utils/analytics';

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={19} />,
  Cpu: <Cpu size={19} />,
  Disc: <Disc size={19} />,
  Cog: <Cog size={19} />,
  Activity: <Gauge size={19} />,
  Fan: <Snowflake size={19} />
};

export const Services: React.FC = () => {
  const handleServiceClick = (serviceName: string) => {
    trackEvent('service_contact_click', { service: serviceName });
    trackEvent('whatsapp_click', { origin: `service_${serviceName}` });
  };

  return (
    <section className="services-section" id="servicos">
      <div className="container services-layout">
        {/* Bloco de Introdução à Esquerda */}
        <div className="services-intro-sticky">
          <span className="tag-subtitle-red">NOSSOS SERVIÇOS</span>
          <h2 className="services-title">Seu Jeep em boas mãos.</h2>
          <p className="services-description">
            Contamos com uma equipe preparada para realizar os serviços ideais para o seu veículo, com o cuidado e a precisão que ele precisa.
          </p>
        </div>

        {/* Grade de 6 Serviços à Direita */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const whatsappLink = getWhatsAppUrl(service.whatsappMessage);
            return (
              <a
                key={service.id}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card"
                onClick={() => handleServiceClick(service.name)}
                title={`Solicitar ${service.name} pelo WhatsApp`}
              >
                <div className="service-card-header">
                  <div className="service-icon-box">
                    {iconMap[service.iconName] || <Wrench size={19} />}
                  </div>
                  <ArrowRight size={15} className="service-arrow-indicator" />
                </div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-card-desc">{service.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
