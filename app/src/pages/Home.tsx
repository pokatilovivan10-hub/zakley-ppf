import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import Pains from '../sections/Pains';
import DamageCarousel from '../sections/DamageCarousel';
import Packages from '../sections/Packages';
import Elements from '../sections/Elements';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import TrustMaterials from '../sections/TrustMaterials';
import Detailing from '../sections/Detailing';
import FAQ from '../sections/FAQ';
import ContactForm from '../sections/ContactForm';
import MarqueeBlock from '../sections/MarqueeBlock';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Trust />
      <Pains />
      <DamageCarousel />
      <Packages />
      <Elements />
      <Portfolio />
      <Process />
      <TrustMaterials />
      <Detailing />
      <FAQ />
      <ContactForm />
      <MarqueeBlock />
      <Footer />
    </div>
  );
}
