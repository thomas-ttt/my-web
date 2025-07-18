import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'ERP Systems',
    'Blockchain',
    'IoT Solutions'
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              Elite Technologies
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#service-${index}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Get Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;