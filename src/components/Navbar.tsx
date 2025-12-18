import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const logo = '/images/logo.png';
const secondaryLogo = '/images/Logo2.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { id: 'drive', label: 'Drive With Us' },
    { id: 'ship', label: 'Ship Your Car' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
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
              className="flex items-center space-x-2"
              aria-label="Back to top"
            >
              <img
                src={secondaryLogo}
                alt="Prime Auto Transport badge"
                className="h-24 w-30 drop-shadow-md block object-contain"
              />
              <img
                src={logo}
                alt="Prime Auto Transport logo"
                className="h-10 w-auto drop-shadow-md block object-contain"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="transition-colors duration-200 font-medium text-gray-700 hover:text-[#FF9A5A]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="relative md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-3 text-sm font-semibold transition-colors text-[#FF9A5A] hover:text-[#FF9A5A] active:text-[#FF9A5A]"
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
                    className="text-left px-4 py-2 text-sm font-medium text-white hover:bg-[#e57d3f] hover:text-white"
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
