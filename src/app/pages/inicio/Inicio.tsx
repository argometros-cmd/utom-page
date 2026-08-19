import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { ScrollToTop } from '../../components/layout/ScrollToTop';
import { AccessibilityMenu } from '../../components/widgets/AccessibilityMenu';
import { TomBotButton } from '../../components/widgets/TomBotButton';
import { AspirantesSection } from '../estudiantes/components/AspirantesSection';
import { CarrerasSection } from '../oferta-educativa/components/CarrerasSection';
import { ContactoSection } from '../contactanos/components/ContactoSection';
import { CallToAction } from './components/CallToAction';
import { HeroHighlightsSection, HeroSection } from './components/HeroSection';
import { NoticiasSection } from './components/NoticiasSection';

export default function InicioPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NoticiasSection />
        <HeroHighlightsSection />
        <CarrerasSection />
        <AspirantesSection />
        <CallToAction />
        <ContactoSection />
      </main>
      <Footer />
      <TomBotButton />
      <AccessibilityMenu />
      <ScrollToTop />
    </>
  );
}
