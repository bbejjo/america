import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';

const logo = '/images/logo.png';
const secondaryLogo = '/images/Logo2.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const navLinks = [
    { id: 'main', label: 'Main' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Our Process' },
    { id: 'drive', label: 'Drive With Us' },
    { id: 'ship', label: 'Ship Your Car' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleNavClick('main')}
              className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
              aria-label="Back to top"
            >
              <img
                src={secondaryLogo}
                alt="Maeli LLC badge"
                className="h-24 md:h-28 w-auto drop-shadow-md block object-contain"
              />
              <img
                src={logo}
                alt="Maeli LLC logo"
                className="h-6 md:h-10 w-auto drop-shadow-md block object-contain"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative group font-medium text-gray-700 transition-all duration-200 transform hover:scale-105 hover:text-[#FF9A5A]"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FF9A5A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="relative md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-3 text-sm font-semibold transition-all duration-200 text-[#FF9A5A] hover:text-[#FF9A5A] active:text-[#FF9A5A] transform hover:scale-110"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            {isMenuOpen && (
              <div
                id="mobile-nav"
                className="absolute right-0 mt-2 w-full min-w-[10rem] bg-[#FF9A5A] text-white shadow-xl rounded-lg border border-[#FF9A5A]/70 py-2 flex flex-col animate-dropdown"
              >
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left px-4 py-2 text-sm font-medium text-white hover:bg-[#e57d3f] hover:text-white transition-all duration-200 transform hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
