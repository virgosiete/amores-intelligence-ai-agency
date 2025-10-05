import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white leading-tight">Amores Intelligence</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Results
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Results
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-200 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;