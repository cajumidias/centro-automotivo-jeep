import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { ContactFaq } from './components/ContactFaq';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="landing-wrapper">
      {/* 1. Cabeçalho */}
      <Header />

      {/* 2. Hero / Primeira Dobra */}
      <Hero />

      {/* 3. Seção de Serviços */}
      <Services />

      {/* 4. Seção de Diferenciais */}
      <WhyUs />

      {/* 5. Seção Sobre Nós & Tour 360° */}
      <AboutUs />

      {/* 6. Seção de Avaliações Reais */}
      <Reviews />

      {/* 7. Seção de Contato, Localização e FAQ */}
      <ContactFaq />

      {/* 8. Rodapé */}
      <Footer />

      {/* 9. Botão Flutuante de WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
};

export default App;
