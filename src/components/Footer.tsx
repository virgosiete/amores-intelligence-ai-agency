import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Amores Intelligence</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Filipino-owned AI Automation Agency helping businesses scale with intelligent assistants, 
              automated workflows, and conversion-optimized websites.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:kits@amoresintelligence.com" className="text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1">
                  kits@amoresintelligence.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a href="tel:+639157390325" className="text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1">
                  +63 915 739 0325
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                Client Results
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-300 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <div className="text-gray-300">AI Assistants</div>
              <div className="text-gray-300">AI Websites</div>
              <div className="text-gray-300">Lead Generation</div>
              <div className="text-gray-300">AI Automation</div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://calendly.com/aichatworx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Amores Intelligence. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors focus:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded">
                <Facebook className="w-5 h-5" />
              </a>
              <div className="text-gray-400 text-sm">
                Made with ❤️ in the Philippines
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;