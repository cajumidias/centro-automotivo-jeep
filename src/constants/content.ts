import type { ServiceItem, DifferentialItem, TestimonialItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'InovaÇÃO Centro Automotivo',
  tagline: 'Centro Automotivo • Fortaleza',
  phone: '(85) 3247-1655',
  phoneRaw: '558532471655',
  phoneClean: '+55 85 3247-1655',
  phoneTel: '+558532471655',
  address: 'Av. Eng. Santana Jr., 1315 — Papicu, Fortaleza — CE',
  addressShort: 'Av. Eng. Santana Jr., 1315 • Papicu, Fortaleza',
  mapsUrl: 'https://www.google.com/maps/place/Inova%C3%A7%C3%A3o+Centro+Automotivo+-+Oficina+Mec%C3%A2nica+Papicu/@-3.7393099,-38.4867471,827m/data=!3m1!1e3!4m8!3m7!1s0x7c74f3ace4fb86d:0xfac3385daf883887!8m2!3d-3.7393153!4d-38.4841722!9m1!1b1!16s%2Fg%2F11cmr52vtj?entry=ttu',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332306788877!2d-38.48674712425881!3d-3.739309896234796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f3ace4fb86d%3A0xfac3385daf883887!2sInova%C3%A7%C3%A3o%20Centro%20Automotivo%20-%20Oficina%20Mec%C3%A2nica%20Papicu!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  maps360EmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1792955925802!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGw2TGFNRFE.!2m2!1d-3.739315288183794!2d-38.48417221172801!3f319.9507812759574!4f-6.924349664871286!5f0.7820865974627469',
  routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=Inova%C3%A7%C3%A3o+Centro+Automotivo+-+Oficina+Mec%C3%A2nica+Papicu/@-3.7393153,-38.4841722',
  wazeUrl: 'https://waze.com/ul?ll=-3.7393153,-38.4841722&navigate=yes',
  hours: 'Seg a Sex: 7h30 às 18h | Sáb: 7h30 às 12h'
};

export const BASE_WHATSAPP_URL = 'https://wa.me/558532471655';

export function getWhatsAppUrl(message: string): string {
  return `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const MAIN_WHATSAPP_MESSAGE =
  'Olá! Encontrei a InovaÇÃO pelo Google e gostaria de informações sobre manutenção para meu Jeep.';

export const MAIN_WHATSAPP_URL = getWhatsAppUrl(MAIN_WHATSAPP_MESSAGE);

export const ABOUT_WHATSAPP_URL = 'https://www.contate.me/55853247165579';

export const ABOUT_US = {
  tag: 'SOBRE NÓS',
  title: 'Inovação Centro Automotivo',
  subtitle: 'Nascida da paixão automotiva, consolidada pela excelência e dedicação.',
  paragraphs: [
    'A paixão por carros sempre fez parte da minha história. Desde a infância, estava presente em corridas, rally e dentro de oficinas, aprendendo e vivendo o universo automotivo de perto.',
    'Foi dessa paixão que nasceu a ideia de criar a minha própria oficina — um espaço onde a qualidade, a confiança e a inovação se encontrassem. Assim, em novembro de 2015, fundamos a Inovação Centro Automotivo, com o objetivo de oferecer serviços completos e especializados para quem ama e cuida do seu veículo.',
    'Hoje, seguimos firmes no propósito que nos trouxe até aqui: unir experiência, tecnologia e dedicação para garantir sempre o melhor desempenho e segurança para você e seu carro.'
  ],
  experienceYears: '+10',
  experienceLabel: 'Anos de experiência',
  ctaText: 'Faça orçamento via WhatsApp',
  ctaUrl: 'https://www.contate.me/55853247165579'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'revisao',
    name: 'Revisão e manutenção',
    description: 'Cuidados preventivos para manter o seu Jeep sempre em ótimo estado.',
    whatsappMessage: 'Olá! Gostaria de agendar uma revisão e manutenção preventiva para o meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Wrench'
  },
  {
    id: 'diagnostico',
    name: 'Diagnóstico eletrônico',
    description: 'Identificação de falhas eletrônicas com equipamentos de última geração.',
    whatsappMessage: 'Olá! Preciso de um diagnóstico eletrônico para o meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Cpu'
  },
  {
    id: 'freios-suspensao',
    name: 'Freios e suspensão',
    description: 'Mais segurança e estabilidade em todas as situações.',
    whatsappMessage: 'Olá! Gostaria de uma avaliação no sistema de freios e suspensão do meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Disc'
  },
  {
    id: 'cambio',
    name: 'Câmbio',
    description: 'Avaliação e manutenção para o melhor desempenho do seu Jeep.',
    whatsappMessage: 'Olá! Preciso de avaliação/manutenção no câmbio do meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Cog'
  },
  {
    id: 'motor',
    name: 'Motor',
    description: 'Diagnóstico e reparo para um funcionamento eficiente e confiável.',
    whatsappMessage: 'Olá! Gostaria de diagnóstico e reparo no motor do meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Activity'
  },
  {
    id: 'ar-condicionado',
    name: 'Ar-condicionado',
    description: 'Conforto em todas as viagens, em todas as estações.',
    whatsappMessage: 'Olá! Gostaria de higienização e manutenção no sistema de ar-condicionado do meu Jeep na InovaÇÃO Centro Automotivo.',
    iconName: 'Fan'
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'atendimento-jeep',
    title: 'Atendimento especializado em Jeep',
    description: 'Todos os modelos da marca com o cuidado que você merece.',
    iconName: 'Car'
  },
  {
    id: 'equipe-especializada',
    title: 'Equipe especializada',
    description: 'Profissionais preparados para entender a necessidade do seu veículo.',
    iconName: 'Users'
  },
  {
    id: 'avaliacoes-clientes',
    title: 'Avaliações de clientes',
    description: 'Clientes reais que já confiam no nosso trabalho. Confira nossas avaliações no Google.',
    iconName: 'Star'
  },
  {
    id: 'localizacao-fortaleza',
    title: 'Localização em Fortaleza',
    description: 'Estamos na Av. Eng. Santana Jr., 1315, no bairro Papicu, com fácil acesso.',
    iconName: 'MapPin'
  }
];

export const JEEP_MODELS = [
  'Compass',
  'Renegade',
  'Commander',
  'Wrangler',
  'E muito mais.'
];

export const GOOGLE_MAPS_REVIEWS_URL =
  'https://www.google.com/maps/place/Inova%C3%A7%C3%A3o+Centro+Automotivo+-+Oficina+Mec%C3%A2nica+Papicu/@-3.7393099,-38.4867471,827m/data=!3m1!1e3!4m8!3m7!1s0x7c74f3ace4fb86d:0xfac3385daf883887!8m2!3d-3.7393153!4d-38.4841722!9m1!1b1!16s%2Fg%2F11cmr52vtj?entry=ttu';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ivan-tesche',
    name: 'Ivan Tesche',
    rating: 5,
    date: '3 meses atrás',
    clientType: '10 avaliações no Google',
    badge: 'Proprietário Jeep Compass',
    badgeType: 'jeep',
    text: 'Levei meu Jeep Compass com problemas na suspensão e fui atendido rapidamente. A equipe é atenciosa, identificaram o problema e explicaram tudo sem enrolação. O serviço foi rápido e o preço justo. O carro agora está ótimo.',
    imageSrc: '/images/feedbacks/02.png',
    source: 'Google Maps'
  },
  {
    id: 'mariana-ribeiro',
    name: 'Mariana Ribeiro',
    rating: 5,
    date: '5 meses atrás',
    clientType: 'Local Guide • 76 avaliações',
    badge: 'Com Fotos do Serviço Realizado',
    badgeType: 'guide',
    text: 'Excelente experiência com o conserto do meu carro!!! Eles explicam todo o processo e enviam foto de tudo! Achei o preço super justo pelos procedimentos que foram feitos. Gratidão! 🙏',
    imageSrc: '/images/feedbacks/01.png',
    source: 'Google Maps'
  },
  {
    id: 'caren-miranda',
    name: 'Caren Miranda',
    rating: 5,
    date: '6 meses atrás',
    clientType: '6 avaliações no Google',
    badge: 'Atendimento & Confiança',
    badgeType: 'trust',
    text: 'Fernanda foi muito atenciosa desde o primeiro contato, e o mecânico André foi excepcional, me mostrando tudo que eu precisava fazer no carro e me explicando detalhes. Isso me deixou muito segura! Voltarei sempre!',
    imageSrc: '/images/feedbacks/03.png',
    source: 'Google Maps'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'A oficina atende todos os modelos Jeep?',
    answer: 'Sim. A InovaÇÃO Centro Automotivo informa atendimento para todos os modelos Jeep (Compass, Renegade, Commander, Wrangler, Cherokee e outros).'
  },
  {
    id: 'faq-2',
    question: 'Quais serviços são realizados?',
    answer: 'Revisão e manutenção preventiva, diagnóstico eletrônico, freios, suspensão, câmbio, motor e ar-condicionado.'
  },
  {
    id: 'faq-3',
    question: 'Onde fica a oficina?',
    answer: 'Av. Eng. Santana Jr., 1315, bairro Papicu, em Fortaleza, Ceará.'
  },
  {
    id: 'faq-4',
    question: 'Como posso solicitar atendimento?',
    answer: 'Entre em contato pelo WhatsApp para explicar a necessidade do seu Jeep e conversar com nossa equipe técnica.'
  },
  {
    id: 'faq-5',
    question: 'Preciso agendar antes de ir à oficina?',
    answer: 'Entre em contato com a equipe pelo WhatsApp para confirmar a disponibilidade de box e a melhor forma de atendimento.'
  }
];
