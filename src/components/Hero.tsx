import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LoaderOverlay } from './ImageWithLoader';

const heroImage = '/images/Hero.png';
const mobileHeroImage = '/images/mob-hero.png';

const Hero = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="main"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <LoaderOverlay isVisible={!isHeroLoaded} />
          <picture className="block w-full h-full">
            <source media="(max-width: 767px)" srcSet={mobileHeroImage} />
            <img
              src={heroImage}
              alt="Car transport trailer at sunset"
              className={`w-full h-full object-cover transition-opacity duration-500 hero-image ${
                isHeroLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsHeroLoaded(true)}
            />
          </picture>
        </div>
      </div>

      <div className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <button
          onClick={() => scrollToSection('about')}
          className="md:hidden inline-flex items-center px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          More about us
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="hidden md:inline-flex bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
